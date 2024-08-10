onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mystical_agriculture/shapeless/';

    const recipes = [
        {
            output: '4x mysticalagradditions:insanium_essence',
            inputs: ['kubejs:ornium_essence'],
            id: `${id_prefix}ornium_essence_uncraft`
        },
        {
            output: '4x kubejs:ornium_essence',
            inputs: ['kubejs:lightium_essence'],
            id: `${id_prefix}lightium_essence_uncraft`
        },
        {
            output: '4x kubejs:lightium_essence',
            inputs: ['kubejs:tornium_essence'],
            id: `${id_prefix}tornium_essence_uncraft`
        },
        {
            output: '4x kubejs:tornium_essence',
            inputs: ['kubejs:ouranium_essence'],
            id: `${id_prefix}ouranium_essence_uncraft`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
