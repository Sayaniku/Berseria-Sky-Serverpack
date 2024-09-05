onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/nucleosynthesizing/';
    var data = {
        recipes: [
          {
              output: Item.of('createaddition:creative_energy'),
              itemInput: { ingredient: { item: 'create:creative_crate' } },
              gasInput: { amount: 10000, gas: 'berseria_sky:creative' },
              duration: 6000,
              id: `${id_prefix}creative_generator`
          }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
