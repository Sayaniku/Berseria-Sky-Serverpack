onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:shaped/';
    const recipes = [ 
            {
                output: 'berseria_sky:creative_energy_core',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'kubejs:creative_ingot',
                      "C":'berseria_sky:creative_core',
                      "B":'draconicevolution:chaotic_energy_core'
               },
                id: `${id_prefix}creative_energy_core`
            },
            {
                output: 'berseria_sky:sun_speed_1',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'kubejs:sun_block',
                      "C":'industrialforegoing:speed_addon_1',
                      "B":'berseria_sky:elinvonze_plate'
               },
                id: `${id_prefix}sun_speed_addon_1`
            },
            {
                output: 'berseria_sky:sun_speed_2',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'kubejs:sun_block',
                      "C":'berseria_sky:sun_speed_1',
                      "B":'berseria_sky:elinvonze_plate'
               },
                id: `${id_prefix}sun_speed_addon_2`
            },
            {
                output: 'berseria_sky:moon_speed_1',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'kubejs:moon_block',
                      "C":'industrialforegoing:speed_addon_1',
                      "B":'thermal:invar_plate'
               },
                id: `${id_prefix}moon_speed_addon_1`
            },
            {
                output: 'berseria_sky:moon_speed_2',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'kubejs:moon_block',
                      "C":'berseria_sky:moon_speed_1',
                      "B":'thermal:invar_plate'
               },
                id: `${id_prefix}moon_speed_addon_2`
            },
  
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
