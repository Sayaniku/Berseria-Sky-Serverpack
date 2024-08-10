onEvent('recipes', e => { 


  //Sun Fluid//
  e.recipes.custommachinery.custom_machine("berseria_sky:sun_collector", 1000)
  .requireTime([">=1000", "<<11000"])
  .produceFluid(Fluid.of("kubejs:molten_sunny", 16))

  //Sun Collector//
  e.custom({ 
    "type": "extendedcrafting:shaped_table",
    "tier":2,
    "pattern": [
      "ABBBA",
      "BCDCB",
      "BDEDB",
      "BCDCB",
      "ABBBA"
    ],
    "key": {
      "A":{"item":"berseria_sky:manronium_steel_block"},
      "B":{"item":"botania:sunny_quartz"},
      "C":{"item":"kubejs:horizonite_gear"},
      "D":{"item":"kubejs:starmetal_plate"},
      "E":{"item":"sonicraft:ghz_sunflower"}
    },
    "result":{"type": "forge:nbt",
    "item": "custommachinery:custom_machine_item","count": 1,
    "nbt": "{machine:\"berseria_sky:sun_collector\"}"}
   
  })

  
  //Moon Fluid//
  e.recipes.custommachinery.custom_machine("berseria_sky:moon_collector", 1000)
  .requireTime([">=11000", "<<23000"])
  .produceFluid(Fluid.of("kubejs:molten_moon", 16))

  //Moon Controller//
  e.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 600,
    "starlight": 7000,
    "pattern": [
      "AFDFA",
      "ZECEZ",
      "DCSCD",
      "MECEM",
      "AFDFA"
    ],
    "key": {
      "A": {"item": "astralsorcery:resonating_gem"},
      "E": {"item": "thermal:ruby_block"},
      "F": {"item": "thermal:dust_mana"},
      "C": {"item": "berseria_sky:manronium_steel_gear"},
      "S": {"item": "tconstruct:molten_electrum_bucket"},
      "M": {"item": "mysticalagriculture:imperium_gemstone"},
      "Z": {"item": "thermal_extra:zauvium_plate"},
      "D": {"item": "storagedrawers:controller"}
    },
    "recipe_class": "astralsorcery:nbt_copy",
    "output": [
      {"item": 'custommachinery:custom_machine_item', 
       "count": 1,
       "nbt": '{machine:"berseria_sky:moon_collector"}'}
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
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })

  
})