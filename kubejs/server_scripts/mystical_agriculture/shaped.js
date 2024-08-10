onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mystical_agriculture/shaped/';
    const recipes = [
        {
            output: Item.of('mysticalagriculture:inferium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:inferium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_inferium_ingot'
        },
        {
            output: Item.of('mysticalagriculture:prudentium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:prudentium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_prudentium_ingot'
        },
        {
            output: Item.of('mysticalagriculture:tertium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:tertium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_tertium_ingot'
        },
        {
            output: Item.of('mysticalagriculture:imperium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:imperium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_imperium_ingot'
        },
        {
            output: Item.of('mysticalagriculture:supremium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:supremium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_supremium_ingot'
        },
        {
            output: Item.of('mysticalagradditions:insanium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:insanium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_insanium_ingot'
        },
        {
            output: Item.of('kubejs:ornium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:ornium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_ornium_ingot'
        },
        {
            output: Item.of('kubejs:lightium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:lightium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_lightium_ingot'
        },
        {
            output: Item.of('kubejs:tornium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:tornium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_tornium_ingot'
        },
        {
            output: Item.of('kubejs:ouranium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:ouranium_ingot_essence'},
            id: 'mysticalagriculture:essence_to_ouranium_ingot'
        },
        {
            output: Item.of('berseria_sky:manyerium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:manyerium_essence'},
            id: 'mysticalagriculture:essence_to_manyerium_ingot'
        },
        {
            output: Item.of('berseria_sky:queens_steel_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:queens_steel_essence'},
            id: 'mysticalagriculture:essence_to_queens_steel_ingot'
        },
        {
            output: Item.of('berseria_sky:fayronium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:fayronium_essence'},
            id: 'mysticalagriculture:essence_to_fayronium_ingot'
        },
        {
            output: Item.of('berseria_sky:manronium_steel_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:manronium_steel_essence'},
            id: 'mysticalagriculture:essence_to_manronium_steel_ingot'
        },
        {
            output: Item.of('berseria_sky:comerald_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:comerald_essence'},
            id: 'mysticalagriculture:essence_to_comerald_ingot'
        },
        {
            output: Item.of('berseria_sky:elinvonze_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:elinvonze_essence'},
            id: 'mysticalagriculture:essence_to_elinvonze_ingot'
        },
        {
            output: Item.of('kubejs:sun_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:sun_essence'},
            id: 'mysticalagriculture:essence_to_sun_ingot'
        },
        {
            output: Item.of('kubejs:moon_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:moon_essence'},
            id: 'mysticalagriculture:essence_to_moon_ingot'
        },
        {
            output: Item.of('mekanism:ingot_antimatter',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:antimatter_essence'},
            id: 'mysticalagriculture:essence_to_antimatter_ingot'
        },
        {
            output: Item.of('materialis:fairy_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:fairy_ingot_essence'},
            id: 'mysticalagriculture:essence_to_fairy_ingot'
        },
        {
            output: Item.of('botania:life_essence',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:gaia_spirit_essence'},
            id: 'mysticalagriculture:essence_to_gaia_spirit'
        },
        {
            output: Item.of('minecraft:amethyst_shard',4),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:amethyst_essence'},
            id: 'mysticalagriculture:essence_to_amethyst_shard'
        },
        {
            output: Item.of('lazierae2:fluix_steel_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:fluix_steel_ingot_essence'},
            id: 'mysticalagriculture:essence_to_fluix_steel_ingot'
        },
        {
            output: Item.of('tinkers_reforged:electrical_copper_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:electrical_copper_essence'},
            id: 'mysticalagriculture:essence_to_electrical_copper_ingot'
        },
        {
            output: Item.of('tinkers_reforged:duralumin_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:duralumin_essence'},
            id: 'mysticalagriculture:essence_to_duralumin_ingot'
        },
        {
            output: Item.of('tinkers_reforged:gausum_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:gausum_essence'},
            id: 'mysticalagriculture:essence_to_gausum_ingot'
        },
        {
            output: Item.of('tinkers_reforged:lavium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:lavium_essence'},
            id: 'mysticalagriculture:essence_to_lavium_ingot'
        },
        {
            output: Item.of('tinkers_reforged:qivium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:qivium_essence'},
            id: 'mysticalagriculture:essence_to_qivium_ingot'
        },
        {
            output: Item.of('thermal_extra:zauvium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:zauvium_essence'},
            id: 'mysticalagriculture:essence_to_zauvium_ingot'
        },
        {
            output: Item.of('blue_skies:ventium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:ventium_essence'},
            id: 'mysticalagriculture:essence_to_ventium_ingot'
        },
        {
            output: Item.of('blue_skies:falsite_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:falsite_essence'},
            id: 'mysticalagriculture:essence_to_falsite_ingot'
        },
        {
            output: Item.of('blue_skies:horizonite_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:horizonite_essence'},
            id: 'mysticalagriculture:essence_to_horizonite_ingot'
        },
        {
            output: Item.of('betterendforge:terminite_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:terminite_essence'},
            id: 'mysticalagriculture:essence_to_terminite_ingot'
        },
        {
            output: Item.of('draconicevolution:small_chaos_frag',3),
            pattern: ["XXX","XXX","XXX"],
            key: {"X":'mysticalagriculture:chaotic_essence'},
            id: 'mysticalagriculture:essence_to_small_chaos_frag'
        },
        {
            output: Item.of('extendedcrafting:the_ultimate_nugget',3),
            pattern: ["XXX","XXX","XXX"],
            key: {"X":'mysticalagriculture:ultimate_essence'},
            id: 'mysticalagriculture:essence_to_the_ultimate_nugget'
        },
        {
            output: Item.of('endless:neutronium_pile',3),
            pattern: ["XXX","XXX","XXX"],
            key: {"X":'mysticalagriculture:neutronium_essence'},
            id: 'mysticalagriculture:essence_to_the_neutronium_pile'
        },
        {
            output: Item.of('endless:infinity_nugget',3),
            pattern: ["XXX","XXX","XXX"],
            key: {"X":'mysticalagriculture:infinity_essence'},
            id: 'mysticalagriculture:essence_to_infinity_nugget'
        },
        {
            output: Item.of('mythicbotany:alfsteel_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:alfsteel_essence'},
            id: 'mysticalagriculture:essence_to_alfsteel_ingot'
        },
        {
            output: 'betterendforge:amber_gem',
            pattern: ["XXX","XXX","XXX"],
            key: {"X":'mysticalagriculture:amber_essence'},
            id: 'mysticalagriculture:essence_to_amber_gem'
        },
        {
            output: item.of('draconicevolution:awakened_draconium_ingot',2),
            pattern: ["XXX","X X","XXX"],
            key: {"X":'mysticalagriculture:awakened_draconium_essence'},
            id: 'mysticalagradditions:essence/awakened_draconium_nugget'
        },
          
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
