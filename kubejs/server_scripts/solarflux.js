events.listen('recipes', function (e) {

    //Mirror//
    e.shaped(item.of('solarflux:mirror', 3), ['AAA', 'BBB', 'CCC'], {
        A: 'botania:mana_glass',
        B: 'minecraft:white_dye',
        C: 'kubejs:ardite_ingot'
    })

    //Blazing Coating//
    e.shaped(item.of('solarflux:blazing_coating', 3), ['AAA', 'BBB', 'AAA'], {
        A: 'solarflux:mirror',
        B: 'botania:blaze_block'

    })

    //Emerald Glass//
    e.shaped(item.of('solarflux:emerald_glass', 2), ['AAA', 'BBB', 'CCC'], {
        A: 'tconstruct:clear_glass_pane',
        B: 'solarflux:blazing_coating',
        C: 'kubejs:emerald_ingot'

    })

    //Ender Glass//
    e.shaped(item.of('solarflux:ender_glass', 3), ['AAA', 'BBB', 'CCC'], {
        A: 'solarflux:mirror',
        B: 'solarflux:emerald_glass',
        C: 'extendedcrafting:enhanced_ender_ingot'

    })

    //Photovoltaic Cell 1//
    e.shaped(item.of('solarflux:photovoltaic_cell_1', 3), ['AAA', 'BBB', 'CCC'], {
        A: '#forge:glass',
        B: 'minecraft:lapis_lazuli',
        C: 'solarflux:mirror'
    })

    //Photovoltaic Cell 2//
    e.shaped(item.of('solarflux:photovoltaic_cell_2', 3), ['ADA', 'DAD', 'CBC'], {
        A: 'minecraft:bricks',
        B: 'solarflux:photovoltaic_cell_1',
        C: 'solarflux:mirror',
        D: 'thermal:bronze_plate'
    })

    //Photovoltaic Cell 3//
    e.shaped(item.of('solarflux:photovoltaic_cell_3', 3), ['AAA', 'BBB', 'CCC'], {
        A: 'solarflux:photovoltaic_cell_2',
        B: 'minecraft:glowstone',
        C: 'kubejs:hepatizon_plate'

    })

    //Photovoltaic Cell 4//
    e.shaped(item.of('solarflux:photovoltaic_cell_4', 3), ['AAA', 'BCB', 'DCD'], {
        A: 'solarflux:blazing_coating',
        B: 'minecraft:glowstone',
        C: 'solarflux:photovoltaic_cell_3',
        D: '#forge:plates/invar'

    })

    //Photovoltaic Cell 5//
    e.shaped(item.of('solarflux:photovoltaic_cell_5', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'solarflux:emerald_glass',
        B: 'minecraft:glowstone',
        C: 'solarflux:photovoltaic_cell_4',
        D: '#forge:ingots/lumium',
        E: 'kubejs:diamond_ingot'

    })

    //Photovoltaic Cell 6//
    e.shaped(item.of('solarflux:photovoltaic_cell_6', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'solarflux:ender_glass',
        B: 'minecraft:glowstone',
        C: 'solarflux:photovoltaic_cell_5',
        D: 'kubejs:manyullyn_plate',
        E: 'kubejs:slimesteel_gear'

    })

    //Photovoltaic Cell 7//
    e.shaped(item.of('kubejs:photovoltaic_cell_7', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'solarflux:photovoltaic_cell_5',
        B: 'kubejs:draconium_plate',
        C: 'solarflux:photovoltaic_cell_6',
        D: 'draconicevolution:wyvern_energy_core',
        E: 'kubejs:prudentium_plate'

    })

    //Photovoltaic Cell 8//
    e.shaped(item.of('kubejs:photovoltaic_cell_8', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'solarflux:photovoltaic_cell_6',
        B: 'draconicevolution:awakened_draconium_block',
        C: 'kubejs:photovoltaic_cell_7',
        D: 'draconicevolution:draconic_energy_core',
        E: 'kubejs:tertium_plate'

    })

    //Photovoltaic Cell 9//
    e.shaped(item.of('kubejs:photovoltaic_cell_9', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_7',
        B: 'draconicevolution:large_chaos_frag',
        C: 'kubejs:photovoltaic_cell_8',
        D: 'draconicevolution:large_chaos_frag',
        E: 'kubejs:imperium_plate'

    })

    //Photovoltaic Cell 10//
    e.shaped(item.of('kubejs:photovoltaic_cell_10', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_9',
        B: '#forge:ingots/fayronium',
        C: 'kubejs:photovoltaic_cell_8',
        D: 'draconicevolution:chaotic_core',
        E: 'kubejs:supremium_plate'

    })

    //Photovoltaic Cell 11//
    e.shaped(item.of('kubejs:photovoltaic_cell_11', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_10',
        B: '#forge:ingots/queens_steel',
        C: 'kubejs:photovoltaic_cell_9',
        D: 'kubejs:insanium_gear',
        E: 'kubejs:insanium_plate'

    })

    //Photovoltaic Cell 12//
    e.shaped(item.of('kubejs:photovoltaic_cell_12', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_11',
        B: '#forge:ingots/manyerium',
        C: 'kubejs:photovoltaic_cell_10',
        D: 'kubejs:ornium_gear',
        E: 'kubejs:ornium_plate'

    })

    //Photovoltaic Cell 13//
    e.shaped(item.of('kubejs:photovoltaic_cell_13', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_12',
        B: '#forge:ingots/manronium_steel',
        C: 'kubejs:photovoltaic_cell_11',
        D: 'kubejs:lightium_gear',
        E: 'kubejs:lightium_plate'

    })

    //Ultimate Photovoltaic Cell//
    e.shaped(item.of('kubejs:ultimate_photovoltaic_cell', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_13',
        B: 'extendedcrafting:the_ultimate_ingot',
        C: 'kubejs:photovoltaic_cell_12',
        D: 'kubejs:ultimate_gear',
        E: 'kubejs:ouranium_ingot'
    })

    //Neutronium Photovaltaic Cell//
    e.shaped(item.of('kubejs:photovoltaic_cell_14', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:ultimate_photovoltaic_cell',
        B: 'endless:neutronium_block',
        C: 'kubejs:photovoltaic_cell_13',
        D: 'kubejs:tornium_gear',
        E: 'kubejs:tornium_plate'
    })

    //Infinity Photovaltaic Cell//
    e.shaped(item.of('kubejs:photovoltaic_cell_15', 3), ['AAA', 'BEB', 'CDC'], {
        A: 'kubejs:photovoltaic_cell_14',
        B: 'endless:infinity_block',
        C: 'kubejs:ultimate_photovoltaic_cell',
        D: 'kubejs:ouranium_gear',
        E: 'kubejs:ouranium_plate'
    })

    //Solar Panel 1//
    e.shaped(item.of('solarflux:sp_1', 2), ['AAA', 'CBC', 'CCC'], {
        A: 'solarflux:mirror',
        B: 'extendedcrafting:redstone_ingot_block',
        C: '#forge:stripped/wood'
    })

    //Solar Panel 3//
    e.shaped(item.of('solarflux:sp_3', 2), ['AAA', 'BCB', 'BCB'], {
        A: 'solarflux:photovoltaic_cell_1',
        B: 'solarflux:sp_2',
        C: 'thermal:electrum_plate'
    })

    //Solar Panel 4//
    e.shaped(item.of('solarflux:sp_4', 2), ['AAA', 'BDB', 'BDB'], {
        A: 'solarflux:photovoltaic_cell_2',
        B: 'solarflux:sp_3',
        D: 'thermal:constantan_plate'
    })

    //Solar Panel 5//
    e.shaped(item.of('solarflux:sp_5', 2), ['AAA', 'BCB', 'BCB'], {
        A: 'solarflux:photovoltaic_cell_3',
        B: 'solarflux:sp_4',
        C: 'thermal:signalum_gear',

    })

    //Solar Panel 6//
    e.shaped(item.of('solarflux:sp_6', 2), ['AAA', 'BCB', 'BCB'], {
        A: 'solarflux:photovoltaic_cell_4',
        B: 'solarflux:sp_5',
        C: 'thermal:enderium_gear',

    })

    //Solar Panel 7//
    e.shaped(item.of('solarflux:sp_7', 2), ['AAA', 'BDB', 'BDB'], {
        A: 'solarflux:photovoltaic_cell_5',
        B: 'solarflux:sp_6',
        D: 'kubejs:wither_skeleton_ingot',

    })

    //Solar Panel 8//
    e.shaped(item.of('solarflux:sp_8', 2), ['AAA', 'BCB', 'BDB'], {
        A: 'solarflux:photovoltaic_cell_6',
        B: 'solarflux:sp_7',
        C: 'minecraft:dragon_egg',
        D: 'berseria_sky:elinvonze_plate',

    })

    //Solar Panel Wyvern//
    e.custom({
        "type": "draconicevolution:fusion_crafting",
        "tier": "WYVERN",
        "catalyst": { "item": "draconicevolution:wyvern_core" },
        "total_energy": 2000000,
        "ingredients": [
            { "item": "solarflux:sp_8" },
            { "item": "kubejs:photovoltaic_cell_7" },
            { "item": "solarflux:sp_8" },
            { "item": "kubejs:photovoltaic_cell_7" },
            { "item": "solarflux:sp_8" },
            { "item": "kubejs:photovoltaic_cell_7" },
            { "item": "solarflux:sp_8" },
            { "item": "kubejs:photovoltaic_cell_7" },

        ],
        "result": { "item": "solarflux:sp_de.wyvern",
        "count": 2}
    })

    //Solar Panel Draconic//
    e.custom({
        "type": "draconicevolution:fusion_crafting",
        "tier": "DRACONIC",
        "catalyst": { "item": "draconicevolution:awakened_core" },
        "total_energy": 2000000,
        "ingredients": [
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "kubejs:photovoltaic_cell_8" },
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "kubejs:photovoltaic_cell_8" },
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "kubejs:photovoltaic_cell_8" },
            { "item": "solarflux:sp_de.wyvern" },
            { "item": "kubejs:photovoltaic_cell_8" },

        ],
        "result": { "item": "solarflux:sp_de.draconic", 
        "count": 2
    }
    })

    //Solar Panel Chaotic//
    e.custom({
        "type": "draconicevolution:fusion_crafting",
        "tier": "CHAOTIC",
        "catalyst": { "item": "draconicevolution:chaotic_core" },
        "total_energy": 2000000,
        "ingredients": [
            { "item": "solarflux:sp_de.draconic" },
            { "item": "kubejs:photovoltaic_cell_9" },
            { "item": "solarflux:sp_de.draconic" },
            { "item": "kubejs:photovoltaic_cell_9" },
            { "item": "solarflux:sp_de.draconic" },
            { "item": "kubejs:photovoltaic_cell_9" },
            { "item": "solarflux:sp_de.draconic" },
            { "item": "kubejs:photovoltaic_cell_9" },
        ],
        "result": { "item": "solarflux:sp_de.chaotic",
        "count": 2
        }
    })

    //Fayronium Solar Panel//
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "WSSSSSSSW",
                "SCFFFFFCS",
                "SFGGGGGFS",
                "SFGMMMGFS",
                "SFGMLMGFS",
                "SFGMMMGFS",
                "SFGGGGGFS",
                "SCFFFFFCS",
                "WSSSSSSSW"
            ],
            "key": {
                "W": { "item": "solarflux:sp_de.chaotic" },
                "S": { "item": "kubejs:photovoltaic_cell_10" },
                "C": { "item": "mysticalagriculture:supremium_ingot_block" },
                "F": { "tag": "forge:plates/fayronium" },
                "G": { "tag": "forge:gears/fayronium" },
                "M": { "tag": "forge:storage_blocks/fayronium" },
                "L": { "item": "kubejs:molten_fayronium_bucket" }
            },
            "result": {"item": "solarflux:sp_custom_fayronium",
            "count": 2
        }
})

    //Queens Steel Solar Panel//
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "WSSSSSSSW",
                "SCFFFFFCS",
                "SFGGGGGFS",
                "SFGMMMGFS",
                "SFGMLMGFS",
                "SFGMMMGFS",
                "SFGGGGGFS",
                "SCFFFFFCS",
                "WSSSSSSSW"
            ],
            "key": {
                "W": { "item": "solarflux:sp_custom_fayronium" },
                "S": { "item": "kubejs:photovoltaic_cell_11" },
                "C": { "item": "mysticalagradditions:insanium_ingot_block" },
                "F": { "tag": "forge:gears/queens_steel" },
                "G": { "tag": "forge:plates/queens_steel" },
                "M": { "tag": "forge:storage_blocks/queens_steel" },
                "L": { "item": "kubejs:molten_queens_steel_bucket" }
            },
            "result": {"item": "solarflux:sp_custom_queens_steel",
            "count": 2
        }
        })

    //Manyerium Solar Panel //
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "WSSSSSSSW",
                "SCFFFFFCS",
                "SFGGGGGFS",
                "SFGMMMGFS",
                "SFGMLMGFS",
                "SFGMMMGFS",
                "SFGGGGGFS",
                "SCFFFFFCS",
                "WSSSSSSSW"
            ],
            "key": {
                "W": { "item": "solarflux:sp_custom_queens_steel" },
                "S": { "item": "kubejs:photovoltaic_cell_12" },
                "C": { "item": "kubejs:ornium_ingot_block" },
                "F": { "tag": "forge:plates/manyerium" },
                "G": { "tag": "forge:gears/manyerium" },
                "M": { "tag": "forge:storage_blocks/manyerium" },
                "L": { "item": "kubejs:molten_manyerium_bucket" }
            },
            "result": {"item": "solarflux:sp_custom_manyerium",
            "count": 2
        }
            
        })

    //Manronium Steel Solar Panel //
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "WSSSSSSSW",
                "SCFFFFFCS",
                "SFGGGGGFS",
                "SFGMMMGFS",
                "SFGMLMGFS",
                "SFGMMMGFS",
                "SFGGGGGFS",
                "SCFFFFFCS",
                "WSSSSSSSW"
            ],
            "key": {
                "W": { "item": "solarflux:sp_custom_manyerium" },
                "S": { "item": "kubejs:photovoltaic_cell_13" },
                "C": { "item": "kubejs:lightium_ingot_block" },
                "F": { "tag": "forge:plates/manronium_steel" },
                "G": { "tag": "forge:gears/manronium_steel" },
                "M": { "tag": "forge:storage_blocks/manronium_steel" },
                "L": { "item": "kubejs:molten_manronium_steel_bucket" }
            },
            "result": {"item": "solarflux:sp_custom_manronium_steel",
            "count": 2
        }
            
        })

    //Ultimate Solar Panel //
    e.custom(
           {"type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "WSSSSSSSW",
                "SFFFFFFFS",
                "SFGGGGGFS",
                "SFGMMMGFS",
                "SFGMLMGFS",
                "SFGMMMGFS",
                "SFGGGGGFS",
                "SFFFFFFFS",
                "WSSSSSSSW"
            ],
            "key": {
                "W": { "item": "solarflux:sp_custom_manronium_steel" },
                "S": { "item": "kubejs:ultimate_photovoltaic_cell" },
                "F": { "item": "kubejs:ultimate_plate" },
                "G": { "item": "kubejs:ultimate_gear" },
                "M": { "item": "extendedcrafting:the_ultimate_block" },
                "L": { "item": "extendedcrafting:ultimate_singularity" }
            },
            "result": {"item": "solarflux:sp_custom_ultimate",
            "count": 2
            }
        })
        //Neutronium Solar Panel//
        e.custom({ 
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
              "ABBBBBBBA",
              "BCCCCCCCB",
              "BCDDDDDCB",
              "BCDEEEDCB",
              "BCDEFEDCB",
              "BCDEEEDCB",
              "BCDDDDDCB",
              "BCCCCCCCB",
              "ABBBBBBBA"
            ],
            "key": {
              "A": {"item": "solarflux:sp_custom_ultimate"},
              "B": {"item": "kubejs:photovoltaic_cell_14"},
              "C": {"item": "endless:neutronium_block"},
              "D": {"item": "endless:neutronium_ingot"},
              "E": {"item": "kubejs:lightium_plate"},
              "F": {"item": "kubejs:lightium_gear"}
            },
            "result": {"item": "solarflux:sp_custom_neutronium"}
        })

        //Infinity Solar Panel//
        e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
              "ABBBBBBBA",
              "BCCCCCCCB",
              "BCDDDDDCB",
              "BCDEFEDCB",
              "BCDFGFDCB",
              "BCDEFEDCB",
              "BCDDDDDCB",
              "BCCCCCCCB",
              "ABBBBBBBA"
            ],
            "key": {
              "A": {"item": "solarflux:sp_custom_neutronium"},
              "B": {"item": "kubejs:photovoltaic_cell_15"},
              "C": {"item": "endless:infinity_block"},
              "D": {"item": "endless:infinity_ingot"},
              "E": {"item": "projectex:final_star"},
              "F": {"item": "pipez:infinity_upgrade"},
              "G": {"item": "endless:infinity_catalyst"}
            },
            "result": {"item": "solarflux:sp_custom_infinity"}
        })
























})