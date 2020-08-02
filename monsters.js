const monsters = new Map();
monsters.set('ancient artillery', 'AncientArtillery');
monsters.set('bandit archer', 'BanditArcher');
monsters.set('bandit guard', 'BanditGuard');
monsters.set('black imp', 'BlackImp');
monsters.set('cave bear', 'CaveBear');
monsters.set('city archer', 'CityArcher');
monsters.set('city guard', 'CityGuard');
monsters.set('cultist', 'Cultist');
monsters.set('deep terror', 'DeepTerror');
monsters.set('earth demon', 'EarthDemon');
monsters.set('flame demon', 'FlameDemon');
monsters.set('forest imp', 'ForestImp');
monsters.set('frost demon', 'FrostDemon');
monsters.set('giant viper', 'GiantViper');
monsters.set('harrower infester', 'HarrowerInfester');
monsters.set('hound', 'Hound');
monsters.set('inox archer', 'InoxArcher');
monsters.set('inox bodyguard', 'InoxBodyguard');
monsters.set('inox guard', 'InoxGuard');
monsters.set('inox shaman', 'InoxShaman');
monsters.set('living bones', 'LivingBones');
monsters.set('living corpse', 'LivingDead');
monsters.set('living spirit', 'LivingSpirit');
monsters.set('lurker', 'Lurker');
monsters.set('night demon', 'NightDemon');
monsters.set('ooze', 'Ooze');
monsters.set('rending drake', 'RendingDrake');
monsters.set('savaas icestorm', 'SavaasIcestorm');
monsters.set('savaas lavaflow', 'SavaasLavaflow');
monsters.set('spitting drake', 'SpittingDrake');
monsters.set('stone golem', 'StoneGolem');
monsters.set('sun demon', 'SunDemon');
monsters.set('vermling scout', 'VermlingScout');
monsters.set('vermling shaman', 'VermlingShaman');
monsters.set('wind demon', 'WindDemon');
// Bosses
monsters.set('bandit commander', 'BanditCommander');
monsters.set('merciless overseer', 'MercilessOverseer');
monsters.set('inox bodyguard', 'InoxBodyguard');
monsters.set('captain of the guard', 'GuardCaptain');
monsters.set('jekserah', 'Jekserah');
monsters.set('prime demon', 'PrimeDemon');
monsters.set('elder drake', 'ElderDrake');
monsters.set('betrayer', 'Betrayer');
monsters.set('colorless', 'Colorless');
monsters.set('sightless eye', 'SightlessEye');
monsters.set('dark rider', 'DarkRider');
monsters.set('winged horror', 'WingedHorror');
monsters.set('gloom', 'Gloom');


function monsterClasses(alignment, monster, elite) {
    return [
        'monster',
        monsters.has(monster) ? `${alignment}${monsters.get(monster)}` : 'missing-monster',
        ...(elite ? ['elite'] : []),
    ];
}
