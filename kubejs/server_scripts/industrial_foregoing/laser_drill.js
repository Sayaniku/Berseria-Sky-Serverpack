events.listen('recipes', function (e) {


    oreLaserNether('mysticalagriculture:soulium_ore', 80, 120, 10, 'industrialforegoing:laser_lens12')
    oreLaserNether('kubejs:ardite_ore', 89, 116, 8, 'industrialforegoing:laser_lens1')
    oreLaserNether('mysticalagradditions:nether_inferium_ore', 16, 8, 100, 'industrialforegoing:laser_lens5')
    oreLaserNether('rftoolsbase:dimensionalshard_nether', 8, 8, 40, 'industrialforegoing:laser_lens3')
    oreLaserNether('betternether:nether_ruby_ore', 30, 30, 40, 'industrialforegoing:laser_lens14')
    oreLaserNether('betternether:nether_lapis_ore', 13, 40, 14, 'industrialforegoing:laser_lens11')
    oreLaserNether('minecraft:nether_gold_ore', 20, 45, 20, 'industrialforegoing:laser_lens4')

    oreLaser('forge:ores/rock_crystal', 30, 60,6, 'industrialforegoing:laser_lens0')
    oreLaser('forge:ores/zinc', 40, 70, 10,'industrialforegoing:laser_lens8')
    oreLaser('forge:ores/aquamarine', 32, 65, 10,'industrialforegoing:laser_lens3')
    oreLaser('forge:ores/inferium', 35, 67, 12,'industrialforegoing:laser_lens13')

    oreLaserEnd('mysticalagradditions:end_inferium_ore', 80, 120, 12, 'industrialforegoing:laser_lens5')
    oreLaserEnd('quark:biotite_ore', 50, 100, 15, 'industrialforegoing:laser_lens15')
    oreLaserEnd('betterendforge:thallasium_ore', 40, 90, 12, 'industrialforegoing:laser_lens3')

    oreLaserEverbright('blue_skies:ventium_ore',50,80,15,'industrialforegoing:laser_lens14')
    oreLaserEverbright('blue_skies:falsite_ore',60,70,10,'industrialforegoing:laser_lens10')
    oreLaserEverbright('blue_skies:everbright_emerald_ore',70,55,10,'industrialforegoing:laser_lens5')
    oreLaserEverbright('blue_skies:everbright_moonstone_ore',60,80,20,'industrialforegoing:laser_lens0')
    oreLaserEverbright('blue_skies:everbright_charoite_ore',65,82,15,'industrialforegoing:laser_lens2')
    oreLaserEverbright('blue_skies:everbright_aquite_ore',30,65,12,'industrialforegoing:laser_lens3')
    oreLaserEverbright('blue_skies:everbright_diopside_ore',55,83,19,'industrialforegoing:laser_lens13')
    oreLaserEverbright('blue_skies:everbright_pyrope_ore',55,85,17,'industrialforegoing:laser_lens14')

    oreLaserEverdawn('blue_skies:horizonite_ore',40,55,80,'industrialforegoing:laser_lens1')
    oreLaserEverdawn('blue_skies:everdawn_emerald_ore',70,55,10,'industrialforegoing:laser_lens5')
    oreLaserEverdawn('blue_skies:everdawn_moonstone_ore',60,80,20,'industrialforegoing:laser_lens0')
    oreLaserEverdawn('blue_skies:everdawn_charoite_ore',65,82,15,'industrialforegoing:laser_lens2')
    oreLaserEverdawn('blue_skies:everdawn_aquite_ore',30,65,12,'industrialforegoing:laser_lens3')
    oreLaserEverdawn('blue_skies:everdawn_diopside_ore',55,83,19,'industrialforegoing:laser_lens13')
    oreLaserEverdawn('blue_skies:everdawn_pyrope_ore',55,85,17,'industrialforegoing:laser_lens14')

    function oreLaserNether(ore, min, max, weight, lens) { e.custom({ "output": { "item": ore }, "rarity": [{ "whitelist": { "type": "minecraft:worldgen/biome", "values": ["minecraft:nether_wastes", "minecraft:basalt_deltas", "minecraft:warped_forest", "minecraft:crimson_forest", "minecraft:soul_sand_valley","betternether:upside_down_forest","betternether:nether_swampland","betternether:nether_mushroom_forest","betternether:nether_mushroom_forest_edge","betternether:nether_swampland_terraces","betternether:gravel_desert","betternether:sulfuric_bone_reef","betternether:magma_land"] }, "blacklist": {}, "depth_min": min, "depth_max": max, "weight": weight }], "pointer": 0, "catalyst": { "item": lens }, "type": "industrialforegoing:laser_drill_ore" }) }

    function oreLaser (ore, min, max, weight, lens) {e.custom({"output": {"tag": ore},"rarity": [{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": min,"depth_max": max,"weight": weight}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"})}

    function oreLaserEnd (ore, min , max , weight, lens) {e.custom({"output": {"item": ore},"rarity": [{"whitelist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"blacklist": {},"depth_min": min,"depth_max": max,"weight": weight}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"})}

    function oreLaserEverbright (ore, min, max, weight, lens) {e.custom({"output": {"item": ore},"rarity": [{"blacklist": {"type": "minecraft:worldgen/biome","values":["blue_skies:unorthodox_valley","blue_skies:shaded_woodlands","blue_skies:crystal_dunes","blue_skies:sunset_maple_forest","blue_skies:rising_creek","blue_skies:moonlit_reservoir","blue_skies:crystal_roughs","blue_skies:searing_grassland","blue_skies:crescent_orchard","blue_skies:crescent_orchard_lake","blue_skies:crystal_dunes_spikes"]},"whitelist": {"type": "minecraft:worldgen/biome","values": ["blue_skies:calming_skies","blue_skies:brightlands","blue_skies:slushlands","blue_skies:frostbitten_forest","blue_skies:peeking_ocean","blue_skies:midday_shore","blue_skies:snow_covered_pines","blue_skies:deep_peeking_ocean","blue_skies:brisk_meadow","blue_skies:polar_highland","blue_skies:frostbitten_forest_clearing","blue_skies:brumble_forest"]},"depth_min": min,"depth_max": max,"weight": weight}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"})}

    function oreLaserEverdawn (ore, min, max, weight, lens) {e.custom({"output": {"item": ore},"rarity": [{"blacklist": {"type": "minecraft:worldgen/biome","values": ["blue_skies:calming_skies","blue_skies:brightlands","blue_skies:slushlands","blue_skies:frostbitten_forest","blue_skies:peeking_ocean","blue_skies:midday_shore","blue_skies:snow_covered_pines","blue_skies:deep_peeking_ocean","blue_skies:brisk_meadow","blue_skies:polar_highland","blue_skies:frostbitten_forest_clearing","blue_skies:brumble_forest"]},"whitelist": {"type": "minecraft:worldgen/biome","values": ["blue_skies:unorthodox_valley","blue_skies:shaded_woodlands","blue_skies:crystal_dunes","blue_skies:sunset_maple_forest","blue_skies:rising_creek","blue_skies:moonlit_reservoir","blue_skies:crystal_roughs","blue_skies:searing_grassland","blue_skies:crescent_orchard","blue_skies:crescent_orchard_lake","blue_skies:crystal_dunes_spikes"]},"depth_min": min,"depth_max": max,"weight": weight}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"})}
})