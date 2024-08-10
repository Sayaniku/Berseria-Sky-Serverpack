events.listen('recipes', function (e) { 

   //Enderium//
    e.custom({ 
        "type": "create:mixing",
        "ingredients": [
          {"item": "kubejs:diamond_ingot"},
          {"item": "thermal:lead_ingot"},
          {"item": "thermal:lead_ingot"},
          {"item": "thermal:lead_ingot"},
          {"item": "extendedcrafting:ender_ingot"},
          {"item": "extendedcrafting:ender_ingot"}
        ],"results": [
          {"item": "thermal:enderium_ingot",
            "count": 2}
        ],
        "heatRequirement": "heated"})

     //Lumium//   
    e.custom({ 
        "type": "create:mixing",
        "ingredients": [
          {"item": "thermal:silver_ingot"},
          {"item": "thermal:tin_ingot"},
          {"item": "thermal:tin_ingot"},
          {"item": "thermal:tin_ingot"},
          {"item": "minecraft:glowstone_dust"},
          {"item": "minecraft:glowstone_dust"}
        ],"results": [
          {"item": "thermal:lumium_ingot",
            "count": 4}
        ],
        "heatRequirement": "heated"
    }) 
    //Invar//   
    e.custom({ 
        "type": "create:mixing",
        "ingredients": [
          {"item": "minecraft:iron_ingot"},
          {"item": "minecraft:iron_ingot"},
          {"item": "thermal:nickel_ingot"} 
        ],"results": [
          {"item": "thermal:invar_ingot",
            "count": 3}
        ],
        "heatRequirement": "heated"
    }) 
    //signalum//   
    e.custom({ 
        "type": "create:mixing",
        "ingredients": [
          {"item": "thermal:silver_ingot"},
          {"item": "thermal:copper_ingot"},
          {"item": "thermal:copper_ingot"},
          {"item": "thermal:copper_ingot"},
          {"item": "extendedcrafting:redstone_ingot"},
          {"item": "extendedcrafting:redstone_ingot"},
          {"item": "extendedcrafting:redstone_ingot"},
          {"item": "extendedcrafting:redstone_ingot"}
        ],"results": [
          {"item": "thermal:signalum_ingot",
            "count": 4}
        ],
        "heatRequirement": "heated"
    }) 
    //netherite//   
    e.custom({ 
        "type": "create:mixing",
        "ingredients": [
          {"item": "thermal:electrum_ingot"},
          {"item": "thermal:electrum_ingot"},
          {"item": "thermal:electrum_ingot"},
          {"item": "thermal:electrum_ingot"},
          {"item": "minecraft:netherite_scrap"},
          {"item": "minecraft:netherite_scrap"},
          {"item": "minecraft:netherite_scrap"},
          {"item": "minecraft:netherite_scrap"}
        ],"results": [
          {"item": "minecraft:netherite_ingot",
            "count": 1}
        ],
        "heatRequirement": "superheated"
    }) 
    //Bronze//   
    e.custom({ 
      "type": "create:mixing",
      "ingredients": [
        {"item": "thermal:copper_ingot"},
        {"item": "thermal:copper_ingot"},
        {"item": "thermal:copper_ingot"},
        {"item": "thermal:tin_ingot"}
      ],"results": [
        {"item": "thermal:bronze_ingot",
          "count": 4}
        ],
      "heatRequirement": "heated"
  }) 

  //Comerald//   
  e.custom({ 
    "type": "create:mixing",
    "ingredients": [
      {"item": "thermal:constantan_ingot"},
      {"item": "thermal:constantan_ingot"},
      {"item": "thermal:constantan_ingot"},
      {"item": "thermal:constantan_ingot"},
      {"item": "thermal:constantan_ingot"},
      {"item": "thermal:constantan_ingot"},

      {"item": "kubejs:diamond_ingot"},
      {"item": "kubejs:diamond_ingot"},
      {"item": "kubejs:diamond_ingot"},
      {"item": "kubejs:diamond_ingot"},

      {"item": "kubejs:emerald_ingot"},
      {"item": "kubejs:emerald_ingot"},
      {"item": "kubejs:emerald_ingot"},
      {"item": "kubejs:emerald_ingot"} 
    ],"results": [
      {"item": "berseria_sky:comerald_ingot",
        "count": 4}
      ],
    "heatRequirement": "superheated"
}) 
//Blue Lava//
e.custom({ 
  "type": "create:mixing",
  "ingredients": [
      {"fluid": "minecraft:lava",
          "amount": 1000},
      {"fluid": "tconstruct:blazing_blood",
          "amount": 1000},
      {"item": "tconstruct:hepatizon_ingot"}
  ],
  "results": [
      {"fluid": "kubejs:blue_lava",
          "amount": 100}
  ],
  "heatRequirement": "superheated"
})












})