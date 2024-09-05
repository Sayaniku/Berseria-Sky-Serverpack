onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:ae2/shaped/';
    const recipes = [
        {
            output: 'appliedenergistics2:1k_cell_component',
            pattern: ["PBP","BCB","PBP"],
            key: {"P":'thermal:cinnabar_dust',
                  "C":'appliedenergistics2:logic_processor',
                  "B":'appliedenergistics2:charged_certus_quartz_crystal'
           },
            id: 'appliedenergistics2:network/cells/storage_components_cell_1k_part'
        },
         
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});