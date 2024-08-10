events.listen('recipes', function (e) { 

//Categorie
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:turquoise_grass_block" }, "display": { "block": "blue_skies:turquoise_grass_block" }, "categories": ["turquoise_grass"], "growthModifier": 0 })

//starlit//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:starlit_sapling"
    },
    "categories": [
        "turquoise_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:starlit_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:starlit_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:starlit_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:starlit_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//bluebright//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:bluebright_sapling"
    },
    "categories": [
        "turquoise_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:bluebright_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:bluebright_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:bluebright_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:bluebright_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Categorie//
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:turquoise_cherry_grass_block" }, "display": { "block": "blue_skies:turquoise_cherry_grass_block" }, "categories": ["turquoise_cherry_grass"], "growthModifier": 0 })

//Cheery//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:cherry_sapling"
    },
    "categories": [
        "turquoise_cherry_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:cherry_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:cherry_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:cherry_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:cherry_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Categorie//
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:lunar_grass_block" }, "display": { "block": "blue_skies:lunar_grass_block" }, "categories": ["lunar_grass"], "growthModifier": 0 })

//Maple//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:maple_sapling"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:maple_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:maple_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:maple_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:maple_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Dusk//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:dusk_sapling"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:dusk_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:dusk_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:dusk_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.2,
            "output": {
                "item": "blue_skies:dusk_vine"
            },
            "minRolls": 2,
            "maxRolls": 4
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:dusk_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Cresent fruit//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:crescent_fruit_sapling"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:crescent_fruit_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:dusk_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:crescent_fruit_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.2,
            "output": {
                "item": "blue_skies:crescent_fruit"
            },
            "minRolls": 1,
            "maxRolls": 3
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:crescent_fruit_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Lunar//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:lunar_sapling"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:lunar_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:lunar_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:lunar_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:lunar_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Frostbright//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:frostbright_sapling"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:frostbright_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:frostbright_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:frostbright_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:frostbright_vine"
            },
            "minRolls": 1,
            "maxRolls": 4
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:frostbright_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Categorie//
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:crystal_sand" }, "display": { "block": "blue_skies:crystal_sand" }, "categories": ["crystal_sand"], "growthModifier": 0 })

//Crystal Flower//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:crystal_flower"
    },
    "categories": [
        "lunar_grass"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:crystal_flower"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:crystallized_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:crystallized_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "blue_skies:crystal_flower"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Categorie//
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:turquoise_farmland" }, "display": { "block": "blue_skies:turquoise_farmland" }, "categories": ["farmland_blue"], "growthModifier": 0 })
e.custom({ "type": "botanypots:soil", "input": { "item": "blue_skies:lunar_farmland" }, "display": { "block": "blue_skies:lunar_farmland" }, "categories": ["farmland_blue"], "growthModifier": 0 })

//WinterLeaf Seeds//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:winter_leaf_seeds"
    },
    "categories": [
        "farmland_blue"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:winter_leaves"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:winter_leaves"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:winter_leaf_seeds"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
        
    ]
})

//PineFruit Seeds//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:pine_fruit_seeds"
    },
    "categories": [
        "farmland_blue"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:pine_fruits"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:pine_fruit"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:pine_fruit_seeds"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
        
    ]
})

//FieryBean Seeds//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:fiery_bean_seeds"
    },
    "categories": [
        "farmland_blue"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:fiery_beans"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:fiery_beans"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:fiery_bean_seeds"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
        
    ]
})

//ScaleFruit Seeds//
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "blue_skies:scalefruit_seeds"
    },
    "categories": [
        "farmland_blue"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "blue_skies:scalefruits"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "blue_skies:scalefruit"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "blue_skies:scalefruit_seeds"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
        
    ]
})








})