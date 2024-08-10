onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/injecting/';

    const recipes = [
      {
        input: 'berseria_sky:crystaltine_crystal',
        extrainput: { gas: 'mekanism:hydrogen_chloride', amount: 1 },
        output: 'berseria_sky:crystaltine_shard',
        id: `${id_prefix}crystaltine_shard`
      },
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismInjecting(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
