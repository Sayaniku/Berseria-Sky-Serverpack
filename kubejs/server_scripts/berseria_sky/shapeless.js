onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:shapeless/';

    const recipes = [
        {
            output: 'berseria_sky:manyerium_ingot',
            inputs: ['9x berseria_sky:manyerium_nugget'],
            id: 'berseria_sky:manyerium_ingot_from_nuggets'
        },
        {
            output: '9x berseria_sky:manyerium_nugget',
            inputs: ['berseria_sky:manyerium_ingot'],
            id: 'berseria_sky:manyerium_nugget'
        },
        {
            output: '9x berseria_sky:manyerium_ingot',
            inputs: ['berseria_sky:manyerium_block'],
            id: 'berseria_sky:manyerium_ingot_from_manyerium_block'
        },
        {
            output: 'berseria_sky:manyerium_block',
            inputs: ['9x berseria_sky:manyerium_ingot'],
            id: 'berseria_sky:manyerium_block'
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
