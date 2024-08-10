events.listen('recipes', function (e) {

 function Dust (ingot, result) { 
  e.custom({ 
    "type": "thermal:pulverizer",
    "ingredient": {"item": ingot},
    "result": [
      {"item": result,"count": 1}],"energy_mod": 2.0})}

    Dust('berseria_sky:manyerium_ingot','berseria_sky:manyerium_dust')
    Dust('berseria_sky:fayronium_ingot','berseria_sky:fayronium_dust')
    Dust('berseria_sky:queens_steel_ingot','berseria_sky:queens_steel_dust')
    Dust('berseria_sky:manronium_steel_ingot','berseria_sky:manronium_steel_dust')
    Dust('draconicevolution:draconium_ingot','draconicevolution:draconium_dust')
    Dust('tconstruct:manyullyn_ingot','tconstruct:manyullyn_dust')
    Dust('tconstruct:cobalt_ingot','kubejs:cobalt_dust')
    Dust('mekanism:fluorite_gem','mekanism:dust_fluorite')
    Dust('kubejs:ardite_ingot','kubejs:ardite_dust')
    Dust('kubejs:platinum_ingot','kubejs:platinum_dust')
    Dust('mekanism:ingot_uranium','mekanism:dust_uranium')
    Dust('immersiveengineering:ingot_aluminum','immersiveengineering:dust_aluminum')
    Dust('create:brass_ingot','create:brass_dust')
    Dust('create:zinc_ingot','create:zinc_dust')
    Dust('tinkers_reforged:blazing_copper_ingot','tinkers_reforged:blazing_copper_dust')
    

/**********************************Pulvizer***************************************/
   //Ardite//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": "berseria_sky:raw_ardite"},
      "result": [
        {"item": "kubejs:crushed_ardite_ore",
                 "chance": 2.0}
      ],
      "experience": 0.2,})

      //Ardite Dust//
      e.custom({ 
        "type": "thermal:pulverizer",
        "ingredient": {"item": "kubejs:ardite_ore"},
        "result": [
          {"item": "kubejs:ardite_dust",
            "chance": 2.0},
          {"item": "kubejs:ardite_dust",
            "chance": 0.1},
          {"item": "minecraft:netherrack",
            "chance": 0.2}],"experience": 0.2,})

    //Cobalt//
    e.custom({ "type": "thermal:pulverizer",
            "ingredient": {"item": "berseria_sky:raw_cobalt"},
            "result": [
           {"item": "morecreatestuffs:crushed_cobalt_ore",
            "chance": 2.0}
            ],
            "experience": 0.2,})

    //Cobalt Dust//
      e.custom({ 
        "type": "thermal:pulverizer",
        "ingredient": {"item": "tconstruct:cobalt_ore"},
        "result": [
          {"item": "kubejs:cobalt_dust",
            "chance": 2.0},
          {"item": "kubejs:cobalt_dust",
            "chance": 0.1},
          {"item": "minecraft:netherrack",
            "chance": 0.2}],"experience": 0.2,})

    //Iron//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_iron"},
      "result": [
        {"item": "create:crushed_iron_ore",
                 "chance": 2.0},
        {"item": "minecraft:cobblestone",
                 "chance": 0.2}],
        "experience": 0.2,})

    //Lead//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_lead"},
      "result": [
        {"item": "create:crushed_lead_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Tin//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_tin"},
      "result": [
        {"item": "create:crushed_tin_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Aluminum//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_aluminum"},
      "result": [
        {"item": "create:crushed_aluminum_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Uranium//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_uranium"},
      "result": [
        {"item": "create:crushed_uranium_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Osmium//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_osmium"},
      "result": [
        {"item": "create:crushed_osmium_ore",
                 "chance": 2.0},
      ],
        "experience": 0.2,})

    //Silver//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_silver"},
      "result": [
        {"item": "create:crushed_silver_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Nickel//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_nickel"},
      "result": [
        {"item": "create:crushed_nickel_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Gold//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_gold"},
      "result": [
        {"item": "create:crushed_gold_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

    //Copper//
    e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "berseria_sky:raw_copper"},
      "result": [
        {"item": "create:crushed_copper_ore",
                 "chance": 2.0},
        ],
        "experience": 0.2,})

     //Zinc Dust//
     e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"item": "create:zinc_ore"},
      "result": [
        {"item": "create:zinc_dust",
          "chance": 2.0},
        {"item": "create:zinc_dust",
          "chance": 0.1},
        {"item": "minecraft:gravel",
          "chance": 0.2}],"experience": 0.2,})

      //Platinum Dust//
      e.custom({ 
        "type": "thermal:pulverizer",
        "ingredient": {"item": "thermal:nickel_ore"},
        "result": [
          {"item": "thermal:nickel_dust",
            "chance": 2.0},
          {"item": "kubejs:platinum_dust",
            "chance": 0.1},
          {"item": "minecraft:gravel",
            "chance": 0.2}],"experience": 0.2,})

      //Moonstone Shard//
      e.custom({ 
        "type": "thermal:pulverizer",
        "ingredient": {"tag": "blue_skies:ores/moonstone"},
        "result": [
          {"item": "blue_skies:moonstone_shard",
            "chance": 1.0},
          {"item": "blue_skies:moonstone_shard",
            "chance": 0.2},
          {"item": "blue_skies:turquoise_stone",
            "chance": 0.2}],"experience": 0.2,})

    //Falsite//
      e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"tag": "blue_skies:ores/falsite"},
      "result": [
        {"item": "blue_skies:crushed_falsite_ore",
                 "chance": 2.0},
        {"item": "blue_skies:turquoise_stone",
                 "chance": 0.2}],"experience": 0.2,})

      //Ventium//
      e.custom({ 
        "type": "thermal:pulverizer",
        "ingredient": {"tag": "blue_skies:ores/ventium"},
        "result": [
          {"item": "blue_skies:crushed_ventium_ore",
                   "chance": 2.0},
          {"item": "blue_skies:turquoise_stone",
                   "chance": 0.2}],"experience": 0.2,})

    //Horizonite//
      e.custom({ 
      "type": "thermal:pulverizer",
      "ingredient": {"tag": "blue_skies:ores/horizonite"},
      "result": [
        {"item": "blue_skies:crushed_horizonite_ore",
                 "chance": 2.0},
        {"item": "blue_skies:lunar_stone",
                 "chance": 0.2}],"experience": 0.2,})








})