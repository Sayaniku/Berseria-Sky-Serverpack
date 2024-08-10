onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:thermal/shaped/';
    const recipes = [
           {
            output: 'thermal:machine_press',
            pattern: [" X ","YCY","IPI"],
            key: {"C":'thermal:machine_frame',
                  "I":'#forge:gears/electrum',
                  "P":'thermal:rf_coil',
                  "X":'#forge:storage_blocks/elinvonze',
                  "Y":'kubejs:pink_slime_ingot_gear'
                 },
            id: 'thermal:machine_press'
            },
            {
                output: 'thermal:machine_pulverizer',
                pattern: [" X ","YCY","IPI"],
                key: {"C":'thermal:machine_frame',
                      "I":'#forge:gears/tin',
                      "P":'thermal:rf_coil',
                      "X":'botania:piston_relay',
                      "Y":'thermal:cinnabar_dust'
                     },
              id: 'thermal:machine_pulverizer'
            },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
