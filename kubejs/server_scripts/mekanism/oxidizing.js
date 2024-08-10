onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/oxidizing/';

    const recipes = [
      {
        input: { ingredient : { item: 'kubejs:creative_ingot' }},
        output: { gas : 'berseria_sky:creative', amount: 1000 },
        id: `${id_prefix}creative`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:oxidizing',
          input: recipe.input,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
