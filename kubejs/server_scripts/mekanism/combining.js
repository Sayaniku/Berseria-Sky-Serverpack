onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/combining/';

    const recipes = [
      {
        input: 'extendedcrafting:crystaltine_ingot',
        extrainput: 'kubejs:bedrock',
        output: 'kubejs:crystaltine_ore',
        id: `${id_prefix}crystaltine_ore`
      }
      
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
