events.listen('recipes', function (e) { 

 
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