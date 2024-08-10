onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/metallurgic_infusing/';

    const recipes = [
           {
            output: item.of('thermal:bronze_dust',4),
            input: item.of('thermal:copper_dust',3),
            infusionInput: 'mekanism:tin',
            infusionAmount: 10,
            id: 'mekanism:processing/bronze/dust/from_infusing'
           }
           
      
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismMetallurgicInfusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount).id(recipe.id);
    });
});
