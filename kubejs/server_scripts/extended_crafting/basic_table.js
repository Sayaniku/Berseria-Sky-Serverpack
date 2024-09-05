onEvent("recipes", (e) => {
    const id_prefix = 'berseria_sky:extendedcrafting/basic_table/';

        e.custom({
          "type": "extendedcrafting:shaped_table",
          "tier": 1,
          "pattern": [
            "ACA",
            "CBC",
            "ACA"
          ],
          "key": {
            "A": {"item": "tinkers_reforged:lavium_ingot"},
            "B": {"item": "minecraft:ender_eye"},
            "C": {"item": "kubejs:ender_biotite_block"}
          },
          "result": {
            "item": "packagedauto:package_component"
          }
        }
      ).id('packagedauto:package_component')

      //Creative Cake//
      e.custom({ 
        "type": "extendedcrafting:shaped_table",
        "tier": 1,
        "pattern": ["ABA","CBC","DBD"],
        "key": {
          "A": {"item": "create:blaze_cake"},
          "B": {"item": "kubejs:creative_plate"},
          "C": {"item": "berseria_sky:creeper_cake"},
          "D": {"item": "berseria_sky:enderman_cake"}
        },
        "result": {"item": "create:creative_blaze_cake"}
      }).id(`${id_prefix}creative_blaze_cake`)


      //Infinity Upgrade//
      e.custom({ 
        "type": "extendedcrafting:shaped_table",
        "tier": 1,
        "pattern": ["AAA","ABA","AAA"],
        "key": {
          "A": {"item": "pipez:ultimate_upgrade"},
          "B": {"item": "kubejs:creative_plate"}
        },
        "result": {"item": "pipez:infinity_upgrade"}
      }).id(`${id_prefix}infinity_upgrade`)




});