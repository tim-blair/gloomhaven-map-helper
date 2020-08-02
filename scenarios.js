const scenarios = new Map();
scenarios.set(1, {
    id: 1,
    alignment: 'horz',
    map: {
        G1b: {classes: ['revrotate'], style: {top: '144px', left: '400px'}},
        I1b: {classes: ['rotate'], style: {top: '91px', left: '204px'}},
        L1a: {classes: ['rotate'], style: {top: '423px', left: '487px'}},
    },
    monsters: ['bandit guard', 'bandit archer', 'living bones'],
    items: ['coin', 'treasure', 'trap', 'obstacle1'],
    start: [
        {top: '705px', left: '625px'},
        {top: '735px', left: '575px'},
        {top: '675px', left: '575px'},
        {top: '705px', left: '525px'},
        {top: '675px', left: '675px'},
        {top: '735px', left: '675px'},
        {top: '705px', left: '725px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '229px', left: '514px'},
        {top: '466px', left: '616px'},
    ]
});
scenarios.set(6, {
    id: 6,
    alignment: 'vert',
    map: {
        L1a: {classes: [], style: {top: '423px', left: '487px'}},
        K1a: {classes: ['flip'], style: {top: '828px', left: '541px'}},
        K2b: {classes: [], style: {top: '70px', left: '541px'}},
        M1a: {classes: [], style: {top: '424px', left: '779px'}},
    },
    monsters: ['living bones', 'living corpse', 'living spirit'],
    items: ['coin', 'treasure', 'trap', 'obstacle1', 'difficult'],
    start: [
        {top: '618px', left: '713px'},
        {top: '567px', left: '740px'},
        {top: '567px', left: '687px'},
        {top: '667px', left: '740px'},
        {top: '667px', left: '687px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '409px', left: '649px'},
        {top: '409px', left: '943px'},
        {top: '816px', left: '943px'},
        {top: '816px', left: '649px'},
    ]
});
scenarios.set(16, {
    id: 16,
    alignment: 'horz',
    map: {
        B4b: {classes: ['rotate'], style: {top: '758px', left: '567px'}},
        A2b: {classes: ['rotate'], style: {top: '546px', left: '537px'}},
        K2a: {classes: ['revrotate'], style: {top: '210px', left: '166px'}},
        I2a: {classes: ['rotate'], style: {top: '90px', left: '585px'}},
    },
    monsters: ['earth demon', 'wind demon', 'inox guard', 'inox archer'],
    items: ['coin', 'treasure', 'trap', 'obstacle1'],
    start: [
        {top: '934px', left: '701px'},
        {top: '934px', left: '601px'},
        {top: '906px', left: '648px'},
        {top: '906px', left: '748px'},
        {top: '965px', left: '648px'},
        {top: '965px', left: '748px'},
    ],
    doorType: 'darkFog',
    doors: [
        {top: '231px', left: '592px'},
        {top: '521px', left: '592px'},
    ],
    markers: {
        1: {top: '536px', left: '612px'},
    }
});
scenarios.set(18, {
    id: 18,
    alignment: 'horz',
    style: {height: '900px'},
    map: {
        H1b: {classes: ['rotate'], style: {top: '0px', left: '405px'}},
        H3b: {classes: ['rotate'], style: {top: '409px', left: '405px'}},
        M1a: {classes: ['rotate'], style: {top: '408px', left: '30px'}},
    },
    monsters: ['giant viper', 'ooze', 'vermling scout'],
    items: ['coin', 'treasure', 'poisonGas', 'water'],
    start: [
        {top: '164px', left: '447px'},
        {top: '223px', left: '447px'},
        {top: '194px', left: '498px'},
        {top: '252px', left: '498px'},
        {top: '223px', left: '550px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '392px', left: '742px'},
        {top: '596px', left: '391px'},
    ],
    markers: {
        1: {top: '613px', left: '410px'},
    }
});
scenarios.set(20, {
    id: 20,
    alignment: 'vert',
    style: {height: '1150px'},
    map: {
        K1a: {style: {top: '304px', left: '289px'}},
        J1a: {classes: ['rotate'], style: {top: '598px', left: '59px'}},
        C1a: {style: {top: '658px', left: '554px'}},
        D1a: {style: {top: '0', left: '350px'}},
    },
    monsters: ['living bones', 'cultist', 'night demon', 'living corpse', 'jekserah'],
    items: ['coin', 'treasure', 'bearTrap', 'obstacle1'],
    start: [
        {top: '903px', left: '77px'},
        {top: '955px', left: '49px'},
        {top: '955px', left: '106px'},
        {top: '955px', left: '165px'},
        {top: '1006px', left: '136px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '286px', left: '539px'},
        {top: '641px', left: '394px'},
        {top: '641px', left: '685px'},
    ],
    markers: {
        1: {top: '307px', left: '556px'},
    }
});
scenarios.set(24, {
    id: 24,
    alignment: 'horz',
    style: {height: '1500px'},
    map: {
        L2a: {classes: ['rotate'], style: {top: '0px', left: '500px'}},
        A2b: {classes: ['rotate'], style: {top: '418px', left: '475px'}},
        G2a: {classes: ['revrotate'], style: {top: '480px', left: '211px'}},
        J1b: {style: {top: '640px', left: '343px'}},
        D2b: {classes: ['rotate30'], style: {top: '636px', left: '725px'}},
        B4b: {classes: ['rotate30'], style: {top: '916px', left: '668px'}},
    },
    monsters: ['rending drake', 'ooze', 'living spirit'],
    items: ['coin', 'treasure', 'bearTrap', 'obstacle1'],
    start: [
        {top: '106px', left: '537px'},
        {top: '106px', left: '637px'},
        {top: '106px', left: '737px'},
        {top: '78px', left: '588px'},
        {top: '78px', left: '688px'},
        {top: '136px', left: '588px'},
        {top: '136px', left: '688px'},
    ],
    doorType: 'darkFog',
    doors: [
        {top: '335px', left: '630px'},
        {top: '452px', left: '530px'},
        {top: '628px', left: '632px'},
        {top: '687px', left: '528px'},
        {top: '744px', left: '528px'},
        {top: '746px', left: '730px'},
        {top: '922px', left: '832px'},
        {top: '947px', left: '681px'},
    ],
});
scenarios.set(26, {
    id: 26,
    alignment: 'vert',
    style: {height: '1150px'},
    map: {
        M1a: {style: {top: '100px', left: '600px'}},
        J1a: {classes: ['rotate330'], style: {top: '267px', left: '412px'}},
        C1a: {style: {top: '403px', left: '102px'}},
        L1a: {style: {top: '656px', left: '103px'}},
    },
    monsters: ['black imp', 'ooze', 'night demon', 'living corpse'],
    items: ['coin', 'treasure', 'poisonGas', 'obstacle1', 'difficult', 'corridor'],
    start: [
        {top: '193px', left: '649px'},
        {top: '193px', left: '882px'},
        {top: '243px', left: '854px'},
        {top: '243px', left: '795px'},
        {top: '243px', left: '736px'},
        {top: '243px', left: '678px'},
    ],
    doorType: 'woodDoor',
    doors: [
        {top: '485px', left: '762px'},
        {top: '485px', left: '352px'},
    ],
    markers: {
        c: {top: '759px', left: '338px'},
        b: {top: '759px', left: '163px'},
        a: {top: '963px', left: '163px'},
        d: {top: '963px', left: '338px'},
        1: {top: '504px', left: '368px'},
    }
});
scenarios.set(30, {
    id: 30,
    alignment: 'horz',
    style: {height: '1150px'},
    map: {
        N1b: {classes: ['revrotate'], style: {top: '100px', left: '200px'}},
        L1a: {classes: ['rotate'], style: {top: '480px', left: '287px'}},
        E1a: {classes: ['revrotate'], style: {top: '823px', left: '288px'}},
    },
    monsters: ['deep terror', 'lurker', 'ooze'],
    items: ['coin', 'treasure', 'bearTrap', 'obstacle1', 'difficult', 'corridor', 'altar'],
    start: [
        {top: '1084px', left: '374px'},
        {top: '1084px', left: '474px'},
        {top: '1027px', left: '474px'},
        {top: '1027px', left: '374px'},
        {top: '1055px', left: '424px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '815px', left: '416px'},
    ],
});
scenarios.set(32, {
    id: 32,
    alignment: 'vert',
    style: {height: '1500px'},
    map: {
        H2b: {style: {top: '603px', left: '721px'}},
        I1a: {classes: ['flip'], style: {top: '302px', left: '750px'}},
        L1b: {style: {top: '450px', left: '428px'}},
        A4a: {classes: ['flip'], style: {top: '302px', left: '400px'}},
        G2b: {style: {top: '100px', left: '400px'}},
    },
    monsters: ['harrower infester', 'giant viper', 'deep terror', 'black imp'],
    items: ['coin', 'treasure', 'trap', 'poisonGas', 'obstacle1', 'obstacle2', 'obstacle3', 'corridor', 'nest'],
    start: [
        {top: '947px', left: '887px'},
        {top: '947px', left: '945px'},
        {top: '898px', left: '974px'},
        {top: '898px', left: '916px'},
        {top: '898px', left: '858px'},
    ],
    doorType: 'woodDoor',
    doors: [
        {top: '588px', left: '969px'},
        {top: '634px', left: '707px'},
        {top: '286px', left: '794px'},
        {top: '286px', left: '443px'},
    ],
});
scenarios.set(38, {
    id: 38,
    alignment: 'horz',
    style: {height: '1150px'},
    map: {
        C2a: {classes: ['revrotate'], style: {top: '25px', left: '750px'}},
        A4a: {classes: ['rotate'], style: {top: '134px', left: '547px'}},
        M1b: {classes: ['rotate'], style: {top: '329px', left: '544px'}},
        H2b: {classes: ['rotate'], style: {top: '709px', left: '363px'}},
        D1b: {classes: ['revrotate'], style: {top: '729px', left: '38px'}},
    },
    monsters: ['inox guard', 'inox archer', 'inox shaman', 'stone golem'],
    items: ['coin', 'treasure', 'bearTrap', 'obstacle1'],
    start: [
        {top: '85px', left: '963px'},
        {top: '202px', left: '963px'},
        {top: '232px', left: '913px'},
        {top: '174px', left: '913px'},
        {top: '116px', left: '913px'},
        {top: '57px', left: '913px'},
    ],
    doorType: 'lightFog',
    doors: [
        {top: '140px', left: '753px'},
        {top: '341px', left: '703px'},
        {top: '694px', left: '703px'},
        {top: '897px', left: '350px'},
    ],
    markers: {
        a: {top: '157px', left: '975px'},
    }
});
scenarios.set(43, {
    id: 43,
    alignment: 'horz',
    style: {height: '1250px'},
    map: {
        I2a: {classes: ['rotate'], style: {top: '787px', left: '273px'}},
        N1a: {classes: ['revrotate'], style: {top: '328px', left: '265px'}},
        G2a: {classes: ['rotate'], style: {top: '430px', left: '-38px'}},
        A2b: {classes: ['revrotate'], style: {top: '630px', left: '630px'}},
        A3a: {classes: ['revrotate'], style: {top: '278px', left: '630px'}},
        E1b: {classes: ['rotate'], style: {top: '0', left: '353px'}},
    },
    monsters: ['flame demon', 'rending drake', 'spitting drake'],
    items: ['coin', 'treasure', 'spikeTrap', 'nest', 'obstacle1'],
    start: [
        {top: '1048px', left: '389px'},
        {top: '1048px', left: '491px'},
        {top: '1077px', left: '340px'},
        {top: '1077px', left: '440px'},
        {top: '1077px', left: '540px'},
    ],
    doorType: 'darkFog',
    doors: [
        {top: '283px', left: '482px'},
        {top: '399px', left: '684px'},
        {top: '634px', left: '684px'},
        {top: '693px', left: '281px'},
        {top: '343px', left: '281px'},
        {top: '750px', left: '483px'},
    ],
});
scenarios.set(44, {
    id: 44,
    alignment: 'vert',
    style: {height: '1250px'},
    map: {
        B1b: {style: {top: '757px', left: '450px'}},
        B3a: {classes: ['flip'], style: {top: '100px', left: '450px'}},
        B4a: {classes: ['flip'], style: {top: '100px', left: '100px'}},
        M1b: {style: {top: '353px', left: '392px'}},
        L1b: {classes: ['flip'], style: {top: '353px', left: '100px'}},
    },
    monsters: ['inox guard', 'inox archer', 'inox shaman', 'hound'],
    items: ['coin', 'bearTrap', 'nest', 'obstacle1', 'corridor'],
    start: [
        {top: '952px', left: '500px'},
        {top: '952px', left: '558px'},
        {top: '952px', left: '616px'},
        {top: '901px', left: '528px'},
        {top: '901px', left: '588px'},
    ],
    doorType: 'woodDoor',
    doors: [
        {top: '333px', left: '202px'},
        {top: '333px', left: '555px'},
        {top: '536px', left: '373px'},
    ],
    markers: {
        a: {top: '406px', left: '481px'},
        b: {top: '912px', left: '482px'},
        c: {top: '406px', left: '597px'},
        d: {top: '558px', left: '569px'},
        e: {top: '508px', left: '715px'},
        f: {top: '608px', left: '715px'},
    }
})
scenarios.set(55, {
    id: 55,
    dynamic: true,
    roomCards: ['cabin', 'clearing', 'crossroads', 'encampment', 'road', 'trail'],
    monsterCards: ['cutthroat', 'infected', 'mangy', 'scaled', 'tribal', 'wild'],
})
scenarios.set(57, {
    id: 57,
    alignment: 'vert',
    style: {height: '1250px'},
    map: {
        C1a: {classes: ['flip'], style: {top: '100px', left: '200px'}},
        F1b: {classes: ['flip'], style: {top: '353px', left: '287px'}},
        I1b: {classes: ['flip'], style: {top: '249px', left: '464px'}},
        A1a: {style: {top: '723px', left: '478px'}},
        C2b: {style: {top: '859px', left: '200px'}},
    },
    monsters: ['city guard', 'city archer', 'hound'],
    items: ['coin', 'treasure', 'bearTrap', 'obstacle1', 'corridor'],
    start: [
        {top: '547px', left: '336px'},
        {top: '598px', left: '307px'},
        {top: '598px', left: '366px'},
        {top: '649px', left: '338px'},
    ],
    doorType: 'woodDoor',
    doors: [
        {top: '337px', left: '331px'},
        {top: '434px', left: '446px'},
        {top: '738px', left: '448px'},
        {top: '842px', left: '331px'},
    ],
    markers: {
        a: {top: '760px', left: '348px'},
        1: {top: '357px', left: '348px'},
        2: {top: '456px', left: '462px'},
        3: {top: '759px', left: '462px'},
        4: {top: '863px', left: '348px'},
    }
});
scenarios.set(58, {
    id: 58,
    alignment: 'horz',
    style: {height: '1050px'},
    map: {
        C2a: {classes: ['revrotate'], style: {top: '407px', left: '577px'}},
        D1b: {classes: ['rotate210'], style: {top: '0px', left: '573px'}},
        G2b: {classes: ['revrotate'], style: {top: '256px', left: '261px'}},
        B1a: {classes: ['rotate'], style: {top: '231px', left: '150px'}},
    },
    monsters: ['city guard', 'earth demon', 'black imp', 'harrower infester'],
    items: ['coin', 'treasure', 'poisonGas', 'obstacle1'],
    start: [
        {top: '614px', left: '740px'},
        {top: '584px', left: '792px'},
        {top: '28px', left: '740px'},
        {top: '55px', left: '793px'},
    ],
    doorType: 'woodDoor',
    doors: [
        {top: '167px', left: '578px'},
        {top: '520px', left: '578px'},
        {top: '343px', left: '376px'},
    ],
    markers: {
        a: {top: '302px', left: '190px'},
        b: {top: '419px', left: '190px'},
        c: {top: '447px', left: '345px'},
        d: {top: '272px', left: '346px'},
        1: {top: '184px', left: '596px'},
        l: {top: '536px', left: '596px'},
        2: {top: '360px', left: '395px'},
    }
});
scenarios.set(61, {
    id: 61,
    alignment: 'vert',
    style: {height: '1500px'},
    map: {
        M1a: {style: {top: '947px', left: '549px'}},
        A1a: {classes: ['flip'], style: {top: '801px', left: '525px'}},
        D1a: {classes: ['rotate300'], style: {top: '492px', left: '373px'}},
        A3b: {style: {top: '340px', left: '519px'}},
        C1a: {classes: ['rotate240'], style: {top: '100px', left: '600px'}},
    },
    monsters: ['flame demon', 'frost demon', 'ooze', 'giant viper'],
    items: ['coin', 'treasure', 'bearTrap', 'nest', 'obstacle1', 'difficult'],
    start: [
        {top: '1292px', left: '627px'},
        {top: '1292px', left: '685px'},
        {top: '1292px', left: '743px'},
        {top: '1292px', left: '801px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '322px', left: '708px'},
        {top: '471px', left: '564px'},
        {top: '778px', left: '562px'},
        {top: '929px', left: '712px'},
    ],
});
scenarios.set(62, {
    id: 62,
    alignment: 'vert',
    map: {
        M1a: {style: {top: '353px', left: '266px'}},
        B2b: {classes: ['flip'], style: {top: '100px', left: '325px'}},
    },
    monsters: ['living spirit', 'living bones'],
    items: ['coin', 'treasure', 'spikeTrap', 'difficult', 'corridor'],
    start: [
        {top: '698px', left: '344px'},
        {top: '698px', left: '402px'},
        {top: '698px', left: '460px'},
        {top: '698px', left: '518px'},
    ],
    doors: [],
});
scenarios.set(72, {
    id: 72,
    alignment: 'vert',
    style: {height: '900px'},
    map: {
        M1b: {style: {top: '100px', left: '617px'}},
        L3a: {classes: ['flip'], style: {top: '100px', left: '325px'}},
        L1b: {classes: ['flip'], style: {top: '100px', left: '967px'}},
    },
    monsters: ['ooze', 'forest imp', 'giant viper'],
    items: ['coin', 'treasure', 'obstacle1', 'obstacle3', 'difficult', 'corridor'],
    start: [
        {top: '445px', left: '696px'},
        {top: '445px', left: '754px'},
        {top: '445px', left: '812px'},
        {top: '445px', left: '872px'},
    ],
    doors: [],
});
scenarios.set(93, {
    id: 93,
    alignment: 'vert',
    style: {height: '900px'},
    map: {
        G1a: {classes: ['rotate240'], style: {top: '505px', left: '124px'}},
        K2a: {style: {top: '100px', left: '325px'}},
        I1a: {classes: ['flip'], style: {top: '454px', left: '561px'}},
        B3a: {classes: ['flip'], style: {top: '505px', left: '912px'}},
    },
    monsters: ['lurker', 'living spirit', 'frost demon'],
    items: ['coin', 'treasure', 'obstacle1', 'hazard', 'difficult'],
    start: [
        {top: '496px', left: '232px'},
        {top: '546px', left: '262px'},
        {top: '597px', left: '291px'},
        {top: '649px', left: '318px'},
        {top: '699px', left: '349px'},
        {top: '749px', left: '379px'},
    ],
    doorType: 'darkFog',
    doors: [
        {top: '436px', left: '720px'},
        {top: '386px', left: '343px'},
        {top: '638px', left: '898px'},
    ],
});
// Solo scenarios: 200 + page #
// Cthulhu/Squidface
scenarios.set(214, {
    id: 214,
    alignment: 'vert',
    map: {
        M1a: {classes: [], style: {top: '200px', left: '500px'}},
        A1a: {classes: ['rotate120'], style: {top: '200px', left: '291px'}},
        C1a: {classes: ['rotate180'], style: {top: '99px', left: '792px'}},
        C2b: {classes: [], style: {top: '453px', left: '792px'}},
        D1a: {classes: [], style: {top: '453px', left: '208px'}},
    },
    monsters: ['giant viper', 'black imp', 'city guard'],
    items: ['coin', 'obstacle2', 'obstacle1', 'obstacle3'],
    start: [
        {top: '1127px', left: '511px'},
        {top: '1127px', left: '680px'},
    ],
    doorType: 'stoneDoor',
    doors: [
        {top: '230px', left: '515px'},
        {top: '535px', left: '808px'},
        {top: '230px', left: '808px'},
        {top: '535px', left: '515px'}
    ],
    markers: {
        b: {top: '248px', left: '530px'},
        c: {top: '248px', left: '823px'},
        d: {top: '553px', left: '823px'},
        e: {top: '553px', left: '530px'},
    }
});
// Two-minis
scenarios.set(220, {
    id: 220,
    alignment: 'vert',
    map: {
        E1b: {classes: ['flip'], style: {top: '23px', left: '487px'}},
        N1a: {classes: ['flip'], style: {top: '327px', left: '341px'}},
        G2a: {classes: [], style: {top: '731px', left: '341px'}},
        B4b: {classes: ['flip'], style: {top: '933px', left: '313px'}},
        D2b: {classes: ['rotate120'], style: {top: '931px', left: '602px'}},
    },
    monsters: ['hound', 'forest imp', 'rending drake', 'vermling shaman', 'cave bear'],
    items: ['coin', 'obstacle2', 'obstacle1', 'obstacle3'],
    start: [
        {top: '1127px', left: '511px'},
        {top: '1127px', left: '680px'},
    ],
    doorType: 'darkFog',
    doors: [
        {top: '310px', left: '561px'},
        {top: '310px', left: '677px'},
        {top: '714px', left: '445px'},
        {top: '714px', left: '676px'},
        {top: '914px', left: '733px'},
        {top: '914px', left: '383px'},
    ],
    markers: {
        1: {top: '933px', left: '747px'},
        a: {top: '933px', left: '399px'},
        2: {top: '733px', left: '690px'},
        b: {top: '733px', left: '459px'},
        3: {top: '329px', left: '694px'},
        c: {top: '329px', left: '575px'},
    }
});
