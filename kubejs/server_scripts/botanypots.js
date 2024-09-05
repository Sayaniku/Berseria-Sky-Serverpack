onEvent('recipes', function (e) {
  //Hopper botany pot
  function hopperPots(color) {
    e.remove({ id: "botanypots:crafting/hopper_" + color + "botany_pot" })
    e.remove({ id: "botanypots:crafting/compact_hopper_" + color + "botany_pot" })
    e.shaped('botanypots:hopper_' + color + 'botany_pot',
      ["SES", "SFS", " S "], {
      S: 'minecraft:' + color + 'terracotta',
      E: 'goldenhopper:golden_hopper',
      F: 'botanypots:' + color + 'botany_pot'
    })
    //Elite Botany Pot//
    e.remove({ id: "botanypotstiers:elite_" + color + "botany_pot" })
    e.shaped('botanypotstiers:elite_' + color + 'botany_pot',
      ["SES", "SFS", " S "], {
      S: 'thermal:invar_block',
      E: 'create:brass_sheet',
      F: 'botanypots:' + color + 'botany_pot'
    })
    //Elite Hopper Botany Pot//
    e.remove({ id: "botanypotstiers:elite_hopper_" + color + "botany_pot" })
    e.remove({ id: "botanypotstiers:elite_hopper_" + color + "botany_pot_2" })
    e.shaped('botanypotstiers:elite_hopper_' + color + 'botany_pot',
      ["SBS", "SFS", "SES"], {
      S: 'thermal:signalum_plate',
      E: 'speedyhoppers:speedyhopper_mk1',
      B: 'botanypots:hopper_' + color + 'botany_pot',
      F: 'botanypotstiers:elite_' + color + 'botany_pot'
    })
    //Ultra Botany Pot//
    e.remove({ id: "botanypotstiers:ultra_" + color + "botany_pot" })
    e.shaped('botanypotstiers:ultra_' + color + 'botany_pot',
      ["SES", "SFS", " S "], {
      S: '#forge:plates/manronium_steel',
      E: '#forge:gears/manyerium',
      F: 'botanypotstiers:elite_' + color + 'botany_pot'
    })
    //Ultra Hopper Botany Pot//
    e.remove({ id: "botanypotstiers:ultra_hopper_" + color + "botany_pot" })
    e.remove({ id: "botanypotstiers:ultra_hopper_" + color + "botany_pot_2" })
    e.shaped('botanypotstiers:ultra_hopper_' + color + 'botany_pot',
      ["SBS", "SFS", "SES"], {
      S: '#forge:plates/manronium_steel',
      E: 'speedyhoppers:speedyhopper_mk2',
      B: 'botanypotstiers:elite_hopper_' + color + 'botany_pot',
      F: 'botanypotstiers:ultra_' + color + 'botany_pot'
    })


    //Creative Botany pot//
    e.remove({ id: "botanypotstiers:creative_" + color + "botany_pot" })
    e.remove({ id: "botanypotstiers:creative_hopper_" + color + "botany_pot" })
    e.remove({ id: "botanypotstiers:creative_hopper_" + color + "botany_pot_2" })

    e.recipes.custommachinery.custom_machine("berseria_sky:auto_smithing_table",150)
      .requireItem('botanypotstiers:ultra_' + color + 'botany_pot' )
      .requireItem('kubejs:creative_ingot')
      .requireEnergy(50000)
      .produceItem('botanypotstiers:creative_' + color + 'botany_pot')

    //Creative Hopper Botany Pot//
    e.shaped('botanypotstiers:creative_hopper_' + color + 'botany_pot',
    ["SBS", "SFS", "SES"], {
    S: 'kubejs:creative_plate',
    E: 'speedyhoppers:speedyhopper_mk3',
    B: 'botanypotstiers:ultra_hopper_' + color + 'botany_pot',
    F: 'botanypotstiers:creative_' + color + 'botany_pot'
  })

             //Creative Crux//
             e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BEFGGGFHB",
                "BEIJJJKHB",
                "BEIJAJKHB",
                "BEIJJJKHB",
                "BEFLLLFHB",
                "BCMMMMMCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": 'botanypotstiers:creative_hopper_' + color + 'botany_pot'},
                "B": {"item": "kubejs:creative_plate"},
                "C": {"item": "storagenetwork:stack_upgrade"},
                "D": {"item": "quark:yellow_crystal"},
                "E": {"item": "quark:black_crystal"},
                "F": {"item": "draconicevolution:chaotic_speed_module"},
                "G": {"item": "quark:red_crystal"},
                "H": {"item": "quark:violet_crystal"},
                "I": {"item": "quark:white_crystal"},
                "J": {"item": "mekanism:upgrade_speed"},
                "K": {"item": "quark:blue_crystal"},
                "L": {"item": "quark:green_crystal"},
                "M": {"item": "quark:indigo_crystal"}
              },
              "result": {"item": "kubejs:creative_crux"}
            })

  }

  let color = ["", "red_", "orange_", "yellow_", "lime_", "green_", "blue_", "cyan_", "light_blue_", "pink_", "magenta_", "purple_", "brown_", "black_", "gray_", "light_gray_", "white_"]
  color.forEach(C => { hopperPots(C) })


})









