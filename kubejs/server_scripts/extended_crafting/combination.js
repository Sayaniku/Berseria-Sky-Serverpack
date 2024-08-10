onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:extendedcrafting/combination/'
    const recipes = [
      {
          inputs: [
              { item: 'kubejs:ornium_essence' },
              { item: 'mysticalagriculture:inferium_essence' },
              { item: 'mysticalagradditions:insanium_essence' },
              { item: 'mysticalagriculture:prudentium_essence' },
              { item: 'mysticalagriculture:supremium_essence' },
              { item: 'mysticalagriculture:tertium_essence' },
              { item: 'mysticalagriculture:imperium_essence' },
              { item: 'kubejs:tornium_essence' },
              { item: 'kubejs:lightium_essence' },   
          ],
          catalyst: { item: 'kubejs:ouranium_essence' },
          powerCost: 5000000,
          powerRate: 1000000,
          result: { item: 'mysticalagradditions:creative_essence' },
          id: 'extendedcrafting:creative_essence'
      },
      {
        inputs: [
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'betterendforge:terminite_block' },
            { item: 'betterendforge:terminite_block' },
            { item: 'betterendforge:terminite_block' },
            { item: 'betterendforge:terminite_block'},
  
        ],
        catalyst: { item: 'kubejs:supremium_seed' },
        powerCost: 2000000,
        powerRate: 1000000,
        result: { item: 'mysticalagriculture:terminite_seeds' },
        id: `${id_prefix}terminite_seeds_tier_5`
    },
    
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
