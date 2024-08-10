events.listen('recipes', function (e) { 

function Block (Down, result) {
e.custom({ 
    "type": "thermal:rock_gen",
    "adjacent": "minecraft:water",
    "below": Down,
    "result": {"item": result}})}

Block('betternether:blue_obsidian_bricks','betternether:blue_obsidian')
Block('mysticalagriculture:soulstone_bricks','mysticalagriculture:soulstone')
Block('minecraft:polished_basalt','minecraft:basalt')
Block('kubejs:chao_garden_stone_bricks','sonicraft:chao_garden_stone')
Block('minecraft:polished_blackstone_bricks','minecraft:blackstone')
Block('botania:metamorphic_forest_bricks','botania:metamorphic_forest_stone')
Block('botania:metamorphic_fungal_bricks','botania:metamorphic_fungal_stone')
Block('botania:metamorphic_plains_bricks','botania:metamorphic_plains_stone')
Block('botania:metamorphic_swamp_bricks','botania:metamorphic_swamp_stone')
Block('botania:metamorphic_mountain_bricks','botania:metamorphic_mountain_stone')
Block('botania:metamorphic_fungal_bricks','botania:metamorphic_fungal_stone')
Block('botania:metamorphic_taiga_bricks','botania:metamorphic_taiga_stone')
Block('botania:metamorphic_desert_bricks','botania:metamorphic_desert_stone')
Block('botania:metamorphic_mesa_bricks','botania:metamorphic_mesa_stone')
Block('tconstruct:seared_bricks','tconstruct:seared_stone')
Block('quark:granite_bricks','minecraft:granite')
Block('quark:andesite_bricks','minecraft:andesite')
Block('astralsorcery:marble_bricks','astralsorcery:marble_raw')
Block('quark:diorite_bricks','minecraft:diorite')
Block('minecraft:end_stone_bricks','minecraft:end_stone')
Block('minecraft:stone_bricks','minecraft:stone')
Block('minecraft:red_sandstone','minecraft:red_sand')
Block('minecraft:nether_bricks','minecraft:netherrack')
Block('quark:basalt_bricks','quark:basalt')


//Vacuumulator//
e.shaped(item.of('thermal:device_collector', 1), ['ACA', 'BDB', 'AAA'], {
    C: 'thermal:redstone_servo',
    B: 'mob_grinding_utils:absorption_hopper',
    D: 'thermal:machine_frame',
    A: 'thermal:tin_block'})



})