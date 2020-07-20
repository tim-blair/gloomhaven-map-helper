let selected = null;
let selectTime = 0;
let history = [];
let nextId = 100;

function setScenario() {
    const scenarioContainer = document.querySelector('.scenario-container');
    const scenarioItemsContainer = document.querySelector('.scenario-items');
    setStyle(scenarioContainer, scenario.style);
    scenarioContainer.appendChild(createTrashCan());
    Object.keys(scenario.map).forEach(mapName =>
        scenarioContainer.appendChild(createMapTile(mapName, scenario.map[mapName])));
    scenario.start.forEach(start => scenarioContainer.appendChild(createScenarioItem('start', {style: start})));
    scenario.doors.forEach(door => scenarioContainer.appendChild(createScenarioItem(scenario.doorType, {style: door, extraClasses: ['door']})));
    scenario.items.forEach(item => scenarioItemsContainer.appendChild(createScenarioItem(item, {click: () => createWithAlignment(item)})));
    Object.keys(scenario.markers || {}).forEach(name => scenarioContainer.appendChild(createMarker(name, scenario.markers[name])));
    seedMonsterTypes(scenario.monsters);
}

function clearSelection() {
    selected && selected.classList.remove('selected');
    selected = null;
}

function clearIdleSelection() {
    if(Date.now() - selectTime > 5000) {
        clearSelection();
    }
}

function handleClick(e) {
    if (e.button !== 0) {
        return true;
    }
    e = e || window.event;
    const target = e.target || e.srcElement;
    if (selected) {
        const x = e.pageX - selected.parentElement.offsetLeft;
        const y = e.pageY - selected.parentElement.offsetTop;
        if (shouldBeRemoved(x, y)) {
            remove(selected.id);
        } else {
            move(selected.id, x, y);
        }
        clearSelection();
        return false;
    }
    if (!target.classList.contains('item') || !target.id) {
        return true;
    }
    selected = target;
    selectTime = Date.now();
    selected.classList.add('selected');
}

function move(id, x, y) {
    const selected = document.querySelector(`[id='${id}']`);
    selected.style.top = `${y - selected.clientHeight / 2}`;
    selected.style.left = `${x - selected.clientWidth / 2}`;
    selected.classList.remove('waiting-area');
    sendEvent({id, type: 'move', meta: {x, y}});
}

function remove(id) {
    const item = document.querySelector(`[id='${id}']`);
    document.querySelector('.scenario-container').removeChild(item);
    sendEvent({id, type: 'remove'});
}

function shouldBeRemoved(x, y) {
    return withinTrashCan(x, y);
}

function withinTrashCan(x, y) {
    const trashCan = document.querySelector('.trash-can');
    return x >= trashCan.offsetLeft && x <= trashCan.offsetLeft + trashCan.offsetWidth
        && y >= trashCan.offsetTop && y <= trashCan.offsetTop + trashCan.offsetHeight;
}

function setStyle(element, style = {}) {
    Object.keys(style).forEach(key => element.style.setProperty(key, style[key]));
}

function addClasses(element, classes) {
    classes.forEach(cls => element.classList.add(cls));
}

function classWithAlignment(name) {
    return `${name}${scenario.alignment === 'horz' ? 'Horz' : ''}`;
}

function seedMonsterTypes(monsterTypes) {
    const monsterSelector = document.querySelector('#monster_type');
    monsterTypes.forEach(monsterType => {
        const opt = document.createElement('option');
        opt.value = monsterType;
        opt.innerHTML = monsterType.replace(/\b\w/g, l => l.toUpperCase());
        monsterSelector.appendChild(opt);
    });
}

function createTrashCan() {
    const div = document.createElement('div');
    addClasses(div, ['trash-can', 'waiting-area']);
    return div;
}

function createMapTile(mapName, {classes = [], style}) {
    const div = document.createElement('div');
    addClasses(div, ['map']);
    setStyle(div, style);

    const img = document.createElement('img');
    img.src = `./scenBook/scenTiles/${mapName}.png`;
    addClasses(img, classes);
    div.appendChild(img);

    return div;
}

function createMarker(name, style) {
    const item = document.createElement('div');
    addClasses(item, ['marker']);
    setStyle(item, style);
    item.textContent = name;
    return item;
}

function createIndicator() {
    create('', 'indicator', 'item', 'waiting-area');
}

function createScenarioItem(name, {style, click, extraClasses = []}) {
    const item = document.createElement('div');
    addClasses(item, [classWithAlignment(name), 'item', ...extraClasses.map(classWithAlignment)]);
    setStyle(item, style);
    click && (item.onclick = click);
    return item;
}

function createWithAlignment(name) {
    create('', classWithAlignment(name));
}

function create(text, ...classes) {
    if (!socketId) {
        console.log(`Cannot create ${text}: waiting for socket connection`);
        return;
    }
    createWithId(`${socketId}-gh${nextId++}`, text, ...classes);
}

function createWithId(id, text, ...classes) {
    const item = document.createElement('div');
    item.id = id;
    addClasses(item, [...classes, 'item', 'waiting-area']);
    item.textContent = text;
    initDragDrop(item);
    document.querySelector('.scenario-container').appendChild(item);
    sendEvent({
        id: item.id,
        type: 'create',
        meta: {text, classes: toArray(item.classList)}
    });
}

function toArray(classList) {
    const iter = classList.entries();
    const array = [];
    while (true) {
        const {value, done} = iter.next();
        if (done) {
            break;
        }
        array.push(value[1]);
    }
    return array;
}

function coin() {
    create('', `coin`);
}

function start() {
    createWithAlignment(`start`);
}

function trap() {
    createWithAlignment(`trap`);
}

function pressure() {
    createWithAlignment(`pressure`);
}

function treasure() {
    createWithAlignment(`treasure`);
}

function terrain() {
    createWithAlignment(`terrain`);
}

function altar() {
    createWithAlignment(`altar`);
}

function door() {
    createWithAlignment(`door`);
}

function hazard() {
    createWithAlignment(`hazard`);
}

function obstacle(size) {
    createWithAlignment(`obstacle${size}`);
}

function monster() {
    const isElite = document.querySelector("#elite").checked;
    const standee = parseInt(document.querySelector("#standee").value) || 0;
    const type = document.querySelector("#monster_type").value.toLowerCase();
    const classes = monsterClasses(scenario, type, isElite);
    create(standee, ...classes);
    document.querySelector("#standee").value = standee + 1;
}

function character() {
    const type = document.querySelector("#character").value;
    create('', 'character', type);
}

function summon() {
    const type = document.querySelector("#summon").value;
    create(type, 'summon');
}

function removeAll(selector) {
    const container = document.querySelector(selector);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function loadRaw(events) {
    const parsed = JSON.parse(events);
    load(parsed);
}

let loading = false;

function load(events) {
    loading = true;
    const createEvents = events.filter(event => event.type === 'create');
    const moveEvents = events.filter(event => event.type === 'move' || 'remove');
    for (let event of createEvents) {
        createWithId(event.id, event.meta.text, ...event.meta.classes);
    }
    // Wait for the DOM updates
    setTimeout(() => {
        for (let event of moveEvents) {
            if (event.type === 'move') {
                move(event.id, event.meta.x, event.meta.y);
            }
            if (event.type === 'remove') {
                remove(event.id);
            }
        }
        loading = false;
    }, 100);
}

let dragOffsetX = 0;
let dragOffsetY = 0;
let draggedItem;

function finishDrag(evt) {
    const rect = draggedItem.getBoundingClientRect();
    const x = evt.pageX - draggedItem.parentElement.offsetLeft + (rect.width / 2) + dragOffsetX - 1;
    const y = evt.pageY - draggedItem.parentElement.offsetTop + (rect.height / 2) + dragOffsetY - 1;
    if (shouldBeRemoved(x, y)) {
        remove(draggedItem.id);
    } else {
        move(draggedItem.id, x, y);
    }
    clearSelection();
}

function initDragDrop(item) {
    item.draggable = true;
    item.ondragstart = evt => {
        const rect = evt.target.getBoundingClientRect();
        dragOffsetX = rect.x - evt.clientX;
        dragOffsetY = rect.y - evt.clientY;
        draggedItem = evt.target;
    };

    item.ondragend = evt => {
        // should be true in all browsers, except firefox
        if (evt.pageX !== 0 && evt.pageY !== 0) {
            finishDrag(evt);
        }
    };
}

window.onload = function () {
    setScenario();
    const history = localStorage.getItem(`history[${scenario.id}]`);
    if (history) {
        loadRaw(history);
    }
    document.body.ondragleave = evt => {
        // should be true only in firefox when drag ends
        if (evt.buttons === 0) {
            finishDrag(evt);
        }
    };
};

let socketId;

const socket = io();
socket.on('connect', () => {
    console.log('connected');
    socketId = socket.id;
});

socket.on('disconnect', () => {
    alert('Socket disconnected! Please reload');
});

socket.on('data', (data) => {
    load(data.history);
});

function sendEvent(event) {
    if(loading) return;

    socket.emit('data', {history: [event]});
}

window.addEventListener('mousedown', e => {
    if (e.button === 0 && e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
