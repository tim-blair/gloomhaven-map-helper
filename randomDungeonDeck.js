const roomCards = new Map();
roomCards.set('cabin', {
    id: 'cabin',
    alignment: 'horz',
    map: {
        name: 'I2b.resized',
        classes: ['revrotate'],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '139px', left: '6px'},
        {top: '139px', left: '306px'},
    ],
    start: [
        {top: '144px', left: '14px'},
    ],
});
roomCards.set('clearing', {
    id: 'clearing',
    alignment: 'vert',
    map: {
        name: 'L3a.resized',
        classes: ['flip'],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '184px', left: '-14px'},
        {top: '184px', left: '279px'},
    ],
    start: [
        {top: '195px', left: '-8px'},
    ],
});
roomCards.set('crossroads', {
    id: 'crossroads',
    alignment: 'vert',
    map: {
        name: 'H2b.resized',
        classes: [],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '32px', left: '-14px'},
        {top: '32px', left: '394px'},
    ],
    start: [
        {top: '41px', left: '400px'},
    ],
});
roomCards.set('encampment', {
    id: 'encampment',
    alignment: 'vert',
    map: {
        name: 'M1b.resized',
        classes: [],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '186px', left: '-14px'},
        {top: '32px', left: '307px'},
    ],
    start: [
        {top: '196px', left: '-8px'},
    ],
});
roomCards.set('road', {
    id: 'road',
    alignment: 'horz',
    map: {
        name: 'G1a.resized',
        classes: ['rotate'],
        style: {margin: '130px 0 0 0'}
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '393px', left: '117px'},
        {top: '451px', left: '217px'},
        {top: '219px', left: '317px'},
    ],
    start: [
        {top: '398px', left: '125px'},
        {top: '456px', left: '225px'},
    ],
});
roomCards.set('sewer', {
    id: 'sewer',
    alignment: 'vert',
    map: {
        name: 'H1b.resized',
        classes: [],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '-19px', left: '190px'},
        {top: '386px', left: '190px'},
    ],
    start: [
        {top: '395px', left: '195px'},
    ],
});
roomCards.set('trail', {
    id: 'trail',
    alignment: 'vert',
    map: {
        name: 'F1b.resized',
        classes: [],
    },
    doorType: 'stoneDoor',
    doors: [
        {top: '82px', left: '-14px'},
        {top: '486px', left: '103px'},
    ],
    start: [
        {top: '495px', left: '108px'},
    ],
});

const monsterCards = new Map();
monsterCards.set('cutthroat', {
    id: 'cutthroat',
    monsters: ['bandit guard', 'bandit archer', 'hound'],
    items: [],
});
monsterCards.set('infected', {
    id: 'infected',
    monsters: ['giant viper', 'ooze'],
    items: [],
});
monsterCards.set('mangy', {
    id: 'mangy',
    monsters: ['vermling shaman', 'vermling scout', 'cave bear'],
    items: [],
});
monsterCards.set('scaled', {
    id: 'scaled',
    monsters: ['giant viper', 'rending drake', 'spitting drake'],
    items: [],
});
monsterCards.set('tribal', {
    id: 'tribal',
    monsters: ['inox guard', 'inox archer', 'inox shaman'],
    items: [],
});
monsterCards.set('wild', {
    id: 'wild',
    monsters: ['cave bear', 'hound', 'forest imp'],
    items: ['bearTrap'],
});
