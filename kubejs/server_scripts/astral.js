onEvent('recipes', function (e) {

   function Seedt4 (Block,Seeds) { 
   e.custom({ 
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 7000,
    "pattern": ["A___A","_BCB_","DCSCD","_BCB_","A___A"],
    "key": {
      "A": {"item": "astralsorcery:resonating_gem"},
      "B": {"item": Block},
      "C": {"item": "mysticalagriculture:imperium_block"},
      "S": {"item": "kubejs:imperium_seed"},
      "D": {"item": "astralsorcery:starmetal"}
    },
    "output": [
      {"item": Seeds,"count": 1}
    ],
    "focus_constellation": "astralsorcery:horologium",
    "relay_inputs": [
      {"item": "astralsorcery:aquamarine"},
      {"item": "astralsorcery:aquamarine"},
      {"item": "astralsorcery:aquamarine"},
      {"item": "astralsorcery:aquamarine"},
      {"item": "astralsorcery:aquamarine"}
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"]})}



      Seedt4('kubejs:ardite_block','mysticalagriculture:ardite_seeds')
      Seedt4('tconstruct:cobalt_block','mysticalagriculture:cobalt_seeds')
      Seedt4('minecraft:gold_block','mysticalagriculture:gold_seeds')
      Seedt4('mekanism:block_steel','mysticalagriculture:steel_seeds')
      Seedt4('mekanism:block_uranium','mysticalagriculture:uranium_seeds')
      Seedt4('astralsorcery:starmetal','mysticalagriculture:starmetal_seeds')
      Seedt4('thermal:ruby_block','mysticalagriculture:ruby_seeds')
      Seedt4('thermal:sapphire_block','mysticalagriculture:sapphire_seeds')
      Seedt4('mysticalagriculture:imperium_ingot_block','mysticalagriculture:imperium_ingot_seeds')
      Seedt4('mekanism:block_osmium','mysticalagriculture:osmium_seeds')
      Seedt4('thermal:nickel_block','mysticalagriculture:nickel_seeds')
      Seedt4('blue_skies:ventium_block','mysticalagriculture:ventium_seeds')
      Seedt4('blue_skies:falsite_block','mysticalagriculture:falsite_seeds')
      Seedt4('blue_skies:horizonite_block','mysticalagriculture:horizonite_seeds')
      Seedt4('kubejs:hop_graphite_block','mysticalagriculture:hop_graphite_seeds')
      Seedt4('mekanism:block_fluorite','mysticalagriculture:fluorite_seeds')
      Seedt4('compressium:lapis_2','mysticalagriculture:lapis_lazuli_seeds')
      Seedt4('minecraft:experience_bottle','mysticalagriculture:experience_seeds')
      Seedt4('excompressum:compressed_end_stone','mysticalagriculture:end_seeds')
})