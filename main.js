let selected = null;
const history = [];
let nextId = 100;

const monsters = new Map();
if(ALIGNMENT === 'horz') {
    monsters.set('ancient artillery',  'horzAncientArtillery');
    monsters.set('bandit archer',  'horzBanditArcher');
    monsters.set('bandit guard',  'horzBanditGuard');
    monsters.set('black imp',  'horzBlackImp');
    monsters.set('cave bear',  'horzCaveBear');
    monsters.set('city archer',  'horzCityArcher');
    monsters.set('city guard',  'horzCityGuard');
    monsters.set('cultist',  'horzCultist');
    monsters.set('deep terror',  'horzDeepTerror');
    monsters.set('earth demon',  'horzEarthDemon');
    monsters.set('flame demon',  'horzFlameDemon');
    monsters.set('forest imp',  'horzForestImp');
    monsters.set('frost demon',  'horzFrostDemon');
    monsters.set('giant viper',  'horzGiantViper');
    monsters.set('harrower infester',  'horzHarrowerInfester');
    monsters.set('hound',  'horzHound');
    monsters.set('inox archer',  'horzInoxArcher');
    monsters.set('inox bodyguard',  'horzInoxBodyguard');
    monsters.set('inox guard',  'horzInoxGuard');
    monsters.set('inox shaman',  'horzInoxShaman');
    monsters.set('living bones',  'horzLivingBones');
    monsters.set('living dead',  'horzLivingDead');
    monsters.set('living spirit',  'horzLivingSpirit');
    monsters.set('lurker',  'horzLurker');
    monsters.set('night demon',  'horzNightDemon');
    monsters.set('ooze',  'horzOoze');
    monsters.set('rending drake',  'horzRendingDrake');
    monsters.set('savaas icestorm',  'horzSavaasIcestorm');
    monsters.set('savaas lavaflow',  'horzSavaasLavaflow');
    monsters.set('spitting drake',  'horzSpittingDrake');
    monsters.set('stone golem',  'horzStoneGolem');
    monsters.set('sun demon',  'horzSunDemon');
    monsters.set('vermling scout',  'horzVermlingScout');
    monsters.set('vermling shaman',  'horzVermlingShaman');
    monsters.set('wind demon',  'horzWindDemon');
} else {
    monsters.set('ancient artillery',  'vertAncientArtillery');
    monsters.set('bandit archer',  'vertBanditArcher');
    monsters.set('bandit guard',  'vertBanditGuard');
    monsters.set('black imp',  'vertBlackImp');
    monsters.set('cave bear',  'vertCaveBear');
    monsters.set('city archer',  'vertCityArcher');
    monsters.set('city guard',  'vertCityGuard');
    monsters.set('cultist',  'vertCultist');
    monsters.set('deep terror',  'vertDeepTerror');
    monsters.set('earth demon',  'vertEarthDemon');
    monsters.set('flame demon',  'vertFlameDemon');
    monsters.set('forest imp',  'vertForestImp');
    monsters.set('frost demon',  'vertFrostDemon');
    monsters.set('giant viper',  'vertGiantViper');
    monsters.set('harrower infester',  'vertHarrowerInfester');
    monsters.set('hound',  'vertHound');
    monsters.set('inox archer',  'vertInoxArcher');
    monsters.set('inox bodyguard',  'vertInoxBodyguard');
    monsters.set('inox guard',  'vertInoxGuard');
    monsters.set('inox shaman',  'vertInoxShaman');
    monsters.set('living bones',  'vertLivingBones');
    monsters.set('living dead',  'vertLivingDead');
    monsters.set('living spirit',  'vertLivingSpirit');
    monsters.set('lurker',  'vertLurker');
    monsters.set('night demon',  'vertNightDemon');
    monsters.set('ooze',  'vertOoze');
    monsters.set('rending drake',  'vertRendingDrake');
    monsters.set('savaas icestorm',  'vertSavaasIcestorm');
    monsters.set('savaas lavaflow',  'vertSavaasLavaflow');
    monsters.set('spitting drake',  'vertSpittingDrake');
    monsters.set('stone golem',  'vertStoneGolem');
    monsters.set('sun demon',  'vertSunDemon');
    monsters.set('vermling scout',  'vertVermlingScout');
    monsters.set('vermling shaman',  'vertVermlingShaman');
    monsters.set('wind demon',  'vertWindDemon');
}

function clearSelection() {
    selected.classList.remove('selected');
    selected = null;
}

function handleClick(e) {
    if (e.button !== 0) {
        return true;
    }
    e = e || window.event;
    const target = e.target || e.srcElement;
    if(selected) {
        // get x,y and move target there
        move(selected.id, e.pageX, e.pageY);
        clearSelection();
        return false;
    }
    if (!target.classList.contains('item') || !target.id) {
        return true;
    }
    selected = target;
    selected.classList.add('selected');
}

function move(id, x, y) {
    const selected = document.querySelector(`#${id}`);
    selected.style.top = `${y - selected.clientHeight/2}`;
    selected.style.left = `${x - selected.clientWidth/2}`;
    selected.classList.remove('waiting-area');
    recordEvent({
        id,
        type: 'move',
        meta: {x, y}
    });
    save();
}

function createWithAlignment(name) {
    create('', `${name}${ALIGNMENT === 'horz' ? 'Horz' : ''}`);
}

function create(text, ...classes) {
    createWithId(`gh${nextId++}`, text, ...classes);
}

function createWithId(id, text, ...classes) {
    const item = document.createElement('div');
    item.id = id;
    for(let objClass of classes) {
        item.classList.add(objClass);
    }
    item.classList.add('item');
    item.classList.add('waiting-area');
    recordEvent({
        id: item.id,
        type: 'create',
        meta: {text, classes: toArray(item.classList)}
    });
    item.textContent = text;
    initDragDrop(item);
    document.body.appendChild(item);
}

function toArray(classList) {
    const iter = classList.entries();
    const array = [];
    while(true) {
        const {value, done} = iter.next();
        if(done) {
            break;
        }
        array.push(value[1]);
    }
    return array;
}

function coin() { create('', `coin`); }
function start() { createWithAlignment(`start`); }
function trap() { createWithAlignment(`trap`); }
function pressure() { createWithAlignment(`pressure`); }
function treasure() { createWithAlignment(`treasure`); }
function altar() { createWithAlignment(`altar`); }
function door() { createWithAlignment(`door`); }
function hazard() { createWithAlignment(`hazard`); }
function obstacle(size) { createWithAlignment(`obstacle${size}`); }

function monster() {
    let classes = ['monster'];
    const isElite = document.querySelector("#elite").checked;
    if(isElite) {
        classes.push('elite');
    }
    const standee = document.querySelector("#standee").value;
    const type = document.querySelector("#monster_type").value.toLowerCase();
    for(let name of monsters.keys()) {
        if(name.includes(type)) {
            classes.push(monsters.get(name));
            break;
        }
    }
    create(standee, ...classes);
}

function recordEvent(evt) {
    history.push(evt);
    save();
}

function save() {
    const serializedHistory = JSON.stringify(history);
    localStorage.setItem("history", serializedHistory);
}

function view() {
    console.log(JSON.stringify(history));
}

function reset() {
    localStorage.removeItem('history');
    location.reload();
}

function load(events) {
    const parsed = JSON.parse(events);
    let maxIdSeen = nextId - 1;
    const createEvents = parsed.filter(event => event.type === 'create');
    const moveEvents = parsed.filter(event => event.type === 'move');
    for(let event of createEvents) {
        createWithId(event.id, event.meta.text, ...event.meta.classes);
        maxIdSeen = Math.max(maxIdSeen, parseInt(event.id.slice(2)));
    }
    // Wait for the DOM updates
    setTimeout(() => {
        for(let event of moveEvents) {
            move(event.id, event.meta.x, event.meta.y);
        }
    }, 100);
    nextId = maxIdSeen + 1;
}

function initDragDrop(item) {
    item.draggable = true;
    let offsetX = 0;
    let offsetY = 0;
    item.ondragstart = evt => {
        const rect = evt.target.getBoundingClientRect();
        offsetX = rect.x - evt.clientX;
        offsetY = rect.y - evt.clientY;
    }

    item.ondragend = evt => {
        const rect = item.getBoundingClientRect();
        move(evt.target.id,
            evt.clientX + (rect.width / 2) + offsetX - 1,
            evt.clientY + (rect.height / 2) + offsetY - 1
        );
        clearSelection();
    };
}

function blessPredefinedItems() {
    document.querySelectorAll('.item').forEach(item => {
        initDragDrop(item);
    });
}

window.onload = function() {
    blessPredefinedItems();
    const history = localStorage.getItem("history");
    if (history) {
        load(history);
    }
}
