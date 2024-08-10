onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/crystallizing/';

    const recipes = [
      {
        input: { amount: 200, slurry:'berseria_sky:clean_crystaltine' },
        output: 'berseria_sky:crystaltine_crystal',
        id: `${id_prefix}crystaltine_crystal`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:crystallizing',
          chemicalType: 'slurry',
          input: recipe.input,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
