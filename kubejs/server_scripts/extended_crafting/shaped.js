onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:extendedcrafting/shaped/';
    const recipes = [
      {
        output: 'packagedexcrafting:basic_crafter',
          pattern: ["ICI","YTY","IRI"],
          key: {
            "C":  'packagedauto:package_component',
            "T":  'extendedcrafting:basic_auto_table',
            "I":  'extendedcrafting:black_iron_ingot',
            "Y":  'extendedcrafting:crystaltine_component',
            "R":  'extendedcrafting:redstone_catalyst'
            
          },
          id: 'packagedexcrafting:basic_crafter_ae'
        },
        {
          output: 'packagedauto:encoder',
            pattern: ["ICI","YTY","IRI"],
            key: {
              "C":  'packagedauto:package_component',
              "T":  'appliedenergistics2:blank_pattern',
              "I":  'kubejs:sun_plate',
              "Y":  'endless:double_compressed_crafting_table',
              "R":  'extendedcrafting:redstone_catalyst'
              
            },
            id: 'packagedauto:encoder'
          },
          {
            output: 'packagedauto:packager',
              pattern: ["ICI","YTY","IRI"],
              key: {
                "C":  'packagedauto:me_package_component',
                "T":  'endless:double_compressed_crafting_table',
                "I":  'thermal_extra:polarium_ingot',
                "Y":  'tconstruct:slimesteel_ingot',
                "R":  'botania:piston_relay'
                
              },
              id: 'packagedauto:packager_ae'
            },
            {
              output: 'packagedauto:unpackager',
                pattern: ["ICI","YTY","IRI"],
                key: {
                  "C":  'packagedauto:me_package_component',
                  "T":  'ironchest:obsidian_chest',
                  "I":  'thermal_extra:nebulium_ingot',
                  "Y":  'minecraft:redstone_block',
                  "R":  'speedyhoppers:speedyhopper_mk3'
                  
                },
                id: 'packagedauto:unpackager_ae'
              },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
