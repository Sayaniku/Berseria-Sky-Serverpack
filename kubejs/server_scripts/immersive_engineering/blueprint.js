onEvent('recipes', (event) => {

    const recipes = [
        {
            inputs: [
                { item: 'immersiveengineering:component_iron' },
                { item: 'immersiveengineering:component_steel' },
                { "count": 2,"base_ingredient":{ item: 'kubejs:creative_plate'}}
            ],
            category: 'components',
            output: {
                item: 'berseria_sky:component_creative',
                count: 1
            },
            id: 'berseria_sky:blueprint/creative_component'
        },
        
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
