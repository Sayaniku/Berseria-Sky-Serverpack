onEvent("recipes", (e) => {
    const id_prefix = 'berseria_sky:extendedcrafting/elite_table/';

        //Sun Seeds//
        e.custom({
          "type": "extendedcrafting:shaped_table",
          "tier": 3,
          "pattern": [
          "SCCCCCS",
          "CUWWWUC",
          "CWOPOWC",
          "CWPFPWC",
          "CWOPOWC",
          "CUWWWUC",
          "SCCCCCS"
         ],
        "key": {
        "W": { "item": "berseria_sky:manronium_steel_block_1" },
        "U": { "item": "berseria_sky:sun_speed_1" },
        "O": { "item": "berseria_sky:sun_speed_2" },
        "S": { "item": "kubejs:ornium_block" },
        "C": { "item": "kubejs:sun_block" },
        "P": { "item": "tinkers_reforged:blazing_copper_block" },
        "F": { "item": "kubejs:ornium_seed" }
        },
        "result": {"item": "mysticalagriculture:sun_seeds"}
         }).id(`${id_prefix}sun_seeds`)

        //Sun Crux//
        e.custom({
           "type": "extendedcrafting:shaped_table",
           "tier": 3,
           "pattern": [
           "SCCCCCS",
           "CUWWWUC",
           "CWOPOWC",
           "CWPFPWC",
           "CWOPOWC",
           "CUWWWUC",
           "SCCCCCS"
           ],
        "key": {
        "W": { "item": "berseria_sky:manronium_steel_block_1" },
        "U": { "item": "berseria_sky:sun_speed_1" },
        "O": { "item": "berseria_sky:sun_speed_2" },
        "S": { "item": "kubejs:ornium_ingot_block" },
        "C": { "item": "kubejs:sun_block" },
        "P": { "item": "tinkers_reforged:blazing_copper_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
        },
        "result": {"item": "kubejs:sun_crux"}
        }).id(`${id_prefix}sun_crux`)

        //Moon Seeds//
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 3,
            "pattern": [
             "SCCCCCS",
             "CUWWWUC",
             "CWOPOWC",
             "CWPFPWC",
             "CWOPOWC",
             "CUWWWUC",
             "SCCCCCS"
            ],
        "key": {
            "W": { "item": "tinkers_reforged:gausum_block" },
            "U": { "item": "berseria_sky:moon_speed_1" },
            "O": { "item": "berseria_sky:moon_speed_2" },
            "S": { "item": "kubejs:ornium_block" },
            "C": { "item": "kubejs:moon_block" },
            "P": { "item": "tinkers_reforged:blazing_copper_block" },
            "F": { "item": "kubejs:ornium_seed" }
        },
         "result": {"item": "mysticalagriculture:moon_seeds"}
        }).id(`${id_prefix}moon_seeds`)

        //Moon Crux//
        e.custom({
          "type": "extendedcrafting:shaped_table",
          "tier": 3,
          "pattern": [
          "SCCCCCS",
          "CUWWWUC",
          "CWOPOWC",
          "CWPFPWC",
          "CWOPOWC",
          "CUWWWUC",
          "SCCCCCS"
        ],
        "key": {
          "W": { "item": "tinkers_reforged:gausum_block" },
          "U": { "item": "berseria_sky:moon_speed_1" },
          "O": { "item": "berseria_sky:moon_speed_2" },
          "S": { "item": "kubejs:ornium_ingot_block" },
          "C": { "item": "kubejs:moon_block" },
          "P": { "item": "tinkers_reforged:blazing_copper_block" },
          "F": { "item": "mysticalagradditions:insanium_farmland" }
        },
        "result": {"item": "kubejs:moon_crux"}
        }).id(`${id_prefix}moon_crux`)





});