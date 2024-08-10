onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/washing/';

    const recipes = [
      {
        fluidInput: { amount: 5, tag: 'minecraft:water' },
        slurryInput: { amount: 1, slurry:'berseria_sky:dirty_crystaltine' },
        output: { slurry : 'berseria_sky:clean_crystaltine', amount: 1 },
        id: `${id_prefix}clean_crystaltine_slurry`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:washing',
          fluidInput: recipe.fluidInput,
          slurryInput: recipe.slurryInput,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
