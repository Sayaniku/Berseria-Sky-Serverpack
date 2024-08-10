events.listen('recipes', function (e) {



    //Categorie
    e.custom({ "type": "botanypots:soil", "input": { "item": "betternether:swampland_grass" }, "display": { "block": "betternether:swampland_grass" }, "categories": ["swampland_grass"], "growthModifier": 0 })
    //Willow//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:willow_sapling"
        },
        "categories": [
            "swampland_grass"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:willow_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:willow_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.1,
                "output": {
                    "item": "betternether:willow_leaves"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:willow_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Categorie
    e.custom({ "type": "botanypots:soil", "input": { "item": "betternether:ceiling_mushrooms" }, "display": { "block": "betternether:ceiling_mushrooms" }, "categories": ["ceiling_mushrooms"], "growthModifier": 0 })
    //Anchor//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:anchor_tree_sapling"
        },
        "categories": [
            "ceiling_mushrooms"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:anchor_tree_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:anchor_tree_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.1,
                "output": {
                    "item": "betternether:anchor_tree_leaves"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:anchor_tree_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Sakura//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:nether_sakura_sapling"
        },
        "categories": [
            "ceiling_mushrooms"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:nether_sakura_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:nether_sakura_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.1,
                "output": {
                    "item": "betternether:nether_sakura_leaves"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:nether_sakura_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Categorie
    e.custom({ "type": "botanypots:soil", "input": { "item": "betternether:jungle_grass" }, "display": { "block": "betternether:jungle_grass" }, "categories": ["jungle_grass"], "growthModifier": 0 })
    //Rubeus//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:rubeus_sapling"
        },
        "categories": [
            "jungle_grass"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:rubeus_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:rubeus_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.1,
                "output": {
                    "item": "betternether:rubeus_leaves"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:rubeus_cone"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:rubeus_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Categorie
    e.custom({ "type": "botanypots:soil", "input": { "item": "betternether:nether_mycelium" }, "display": { "block": "betternether:nether_mycelium" }, "categories": ["nether_mycelium"], "growthModifier": 0 })
    //Mushroom Fir//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:mushroom_fir_sapling"
        },
        "categories": [
            "nether_mycelium"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:mushroom_fir_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:mushroom_fir_stem"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:mushroom_fir_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Giant Mold//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:giant_mold_sapling"
        },
        "categories": [
            "nether_mycelium"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:giant_mold_sapling"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:mushroom_stem"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:giant_mold_sapling"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Wart Seed//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:wart_seed"
        },
        "categories": [
            "soul_sand"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:wart_seed"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:wart_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "minecraft:nether_wart_block"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:wart_seed"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })

    //Stalagnate Seed//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "betternether:stalagnate_seed"
        },
        "categories": [
            "jungle_grass"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "betternether:stalagnate_seed"
        },
        "results": [
            {
                "chance": 0.5,
                "output": {
                    "item": "betternether:stalagnate_stem"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "betternether:stalagnate_seed"
                },
                "minRolls": 1,
                "maxRolls": 2
            }
        ]
    })


})