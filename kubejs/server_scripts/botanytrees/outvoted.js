events.listen('recipes', function (e) {


    //Plam//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "outvoted:palm_sapling"
        },
        "categories": [
            "dirt"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "outvoted:palm_sapling"
        },
        "results": [
            {
                "chance": 0.50,
                "output": {
                    "item": "outvoted:palm_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.10,
                "output": {
                    "item": "minecraft:stick"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.01,
                "output": {
                    "item": "outvoted:palm_leaves"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "outvoted:palm_sapling"
                },
                "minRolls": 1,
                "maxRolls": 1
            }
        ]
    })

    //Baobab//
    e.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "outvoted:baobab_sapling"
        },
        "categories": [
            "dirt"
        ],
        "growthTicks": 2400,
        "display": {
            "block": "outvoted:baobab_sapling"
        },
        "results": [
            {
                "chance": 0.50,
                "output": {
                    "item": "outvoted:baobab_log"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.10,
                "output": {
                    "item": "minecraft:stick"
                },
                "minRolls": 1,
                "maxRolls": 2
            },
            {
                "chance": 0.01,
                "output": {
                    "item": "outvoted:baobab_leaves"
                },
                "minRolls": 1,
                "maxRolls": 1
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "outvoted:baobab_sapling"
                },
                "minRolls": 1,
                "maxRolls": 1
            }
        ]
    })

















})