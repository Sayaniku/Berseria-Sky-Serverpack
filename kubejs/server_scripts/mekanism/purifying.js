onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/purifying/';

    const recipes = [
      {
        input: 'berseria_sky:crystaltine_shard',
        extrainput: { gas: 'mekanism:oxygen', amount: 1 },
        output: 'berseria_sky:crystaltine_clump',
        id: `${id_prefix}crystaltine_clump`
      },
      {
        input: 'draconicevolution:small_chaos_frag',
        extrainput: { gas: 'mekanism:oxygen', amount: 5 },
        output: item.of('draconicevolution:small_chaos_frag',2),
        id: `${id_prefix}small_chaos_frag_al`
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismPurifying(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
