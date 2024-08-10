onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/nucleosynthesizing/';
    var data = {
        recipes: [
          {
              output: Item.of('createaddition:creative_energy'),
              itemInput: { ingredient: { item: 'create:creative_crate' } },
              gasInput: { amount: 4000, gas: 'berseria_sky:creative' },
              duration: 5000,
              id: `${id_prefix}creative_generator`
          }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
