events.listen('recipes', function (e) { 


//Draconic Ingot//
e.custom({ 
"type": "create:sequenced_assembly",
"ingredient": {
    "item": "mekanism:ingot_antimatter"
  },
  "transitionalItem": {
    "item": "mekanism:ingot_antimatter"
  },
  "sequence": [
    {"type": "create:filling",
      "ingredients": [
        {"item": "mekanism:ingot_antimatter"},
        {"fluid": "kubejs:molten_manronium_steel",
        "amount": 250},
      ],
      "results": [
        {"item": "mekanism:ingot_antimatter"}
]},
    {"type": "create:deploying",
    "ingredients": [
      {"item": "mekanism:ingot_antimatter"},
      {"item": "berseria_sky:fayronium_ingot"}
    ],
    "results": [
      {"item": "mekanism:ingot_antimatter"}
    ]},
    {"type": "create:deploying",
      "ingredients": [
          {"item": "mekanism:ingot_antimatter"},
          {"item": "kubejs:moon_ingot"}
        ],
        "results": [
          {"item": "mekanism:ingot_antimatter"}
        ]},
        {"type": "create:deploying",
      "ingredients": [
          {"item": "mekanism:ingot_antimatter"},
          {"item": "berseria_sky:manyerium_ingot"}
        ],
        "results": [
          {"item": "mekanism:ingot_antimatter"}
        ]},
        {"type": "create:deploying",
      "ingredients": [
          {"item": "mekanism:ingot_antimatter"},
          {"item": "kubejs:sun_ingot"}
        ],
        "results": [
          {"item": "mekanism:ingot_antimatter"}
        ]},
        
    {"type": "create:cutting",
      "ingredients": [
        {"item": "mekanism:ingot_antimatter"}
      ],
      "results": [
        {"item": "mekanism:ingot_antimatter"}
      ],
      "processingTime": 100} 
  ],
  "results": [
    {"item": "draconicevolution:draconium_ingot","count": 1,}
  ],
  "loops": 1
})


})