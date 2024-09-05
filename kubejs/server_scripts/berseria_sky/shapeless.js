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
        {
            output: '9x berseria_sky:crystal_creative',
            inputs: ['berseria_sky:creative_crystal_block'],
            id: 'berseria_sky:crystal_creative'
        },
        {
            output: 'berseria_sky:creative_crystal_block',
            inputs: ['9x berseria_sky:crystal_creative'],
            id: 'berseria_sky:crystal_creative_block'
        },
        {
            output: '9x botania:gaia_ingot',
            inputs: ['kubejs:gaia_spirit_block'],
            id: `${id_prefix}gaia_spirit_ingot_from_gaia_spirit_block`
        },
        {
            output: 'kubejs:gaia_spirit_block',
            inputs: ['9x botania:gaia_ingot'],
            id: `${id_prefix}gaia_spirit_block`
        },
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
