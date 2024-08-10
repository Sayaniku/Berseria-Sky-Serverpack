onEvent("recipes", (event) => {
    const id_prefix = 'berseria_sky:extendedcrafting/basic_table/';

    event.custom(
        {
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
});