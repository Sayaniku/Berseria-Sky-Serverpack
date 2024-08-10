onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/dissolution/';

    const recipes = [
      {
        itemInput: {
          ingredient: {
            tag: "forge:ores/crystaltine"
          }
        },
        gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid'},
        output: { slurry: 'berseria_sky:dirty_crystaltine', amount: 1000, chemicalType: "slurry"},
        id: `${id_prefix}dirty_crystaltine`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
          type: 'mekanism:dissolution',
          itemInput: recipe.itemInput,
          gasInput: recipe.gasInput,
          output: recipe.output
        })
        .id(recipe.id);
    });
});
