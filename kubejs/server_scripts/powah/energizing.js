onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:powah/energizing/';
    const recipes = [
        {
            ingredients: [
                {item: 'powah:nitro_crystal_block'},
                {item: 'powah:nitro_crystal_block'},
                {item: 'kubejs:creative_block'},
                {item: 'powah:charged_snowball'},
                {item: 'powah:charged_snowball'}
            ],
            energy: 800000,
            result: {
                item: 'berseria_sky:crystal_creative',
                count: 4
            },
            id: `${id_prefix}creative_crystal`
        },
        {
            ingredients: [
                {item: 'berseria_sky:god_ingot'},
                {item: 'berseria_sky:black_amethyst_block'},
                {item: 'extendedcrafting:ultimate_singularity'},
                {item: 'endless:ultimate_stew'},
                {item: 'endless:cosmic_meatballs'},
                {item: 'endless:endest_pearl'}
            ],
            energy: 1000000000,
            result: {
                item: 'berseria_sky:ball_of_hakai',
                count: 1
            },
            id: `${id_prefix}ball_of_hakai`
        }










    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
});
});