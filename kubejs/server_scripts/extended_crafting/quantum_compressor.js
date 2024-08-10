onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:extendedcrafting/quantum_compressor/';

    const recipes = [
        {
            powerCost: 3000000,
            inputCount: 64,
            ingredient: { item: 'endless:infinity_ingot' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:coks_ingot' },
            id: `${id_prefix}beta_tester_coks`
        },
        {
            powerCost: 3000000,
            inputCount: 64,
            ingredient: { item: 'kubejs:ouranium_ingot_block' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:myraft_ingot' },
            id: `${id_prefix}beta_tester_myraft`
        },
        {
            powerCost: 3000000,
            inputCount: 1000,
            ingredient: { item: 'create:electron_tube' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:beyond_kev_ingot' },
            id: `${id_prefix}beta_tester_beyond_kev`
        },
        {
            powerCost: 3000000,
            inputCount: 3000,
            ingredient: { item: 'create:andesite_alloy' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:sayaniku_ingot' },
            id: `${id_prefix}beta_tester_sayaniku`
        },
        {
            powerCost: 3000000,
            inputCount: 2000,
            ingredient: { item: 'thermal:tar' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:mldeg_ingot' },
            id: `${id_prefix}beta_tester_mldeg`
        },
        {
            powerCost: 3000000,
            inputCount: 3000,
            ingredient: { item: 'minecraft:blue_glazed_terracotta' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:reps_ingot' },
            id: `${id_prefix}beta_tester_reps`
        },
        {
            powerCost: 3000000,
            inputCount: 1000,
            ingredient: { item: 'minecraft:amethyst_block' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:clauclau_ingot' },
            id: `${id_prefix}beta_tester_clauclau`
        },
        {
            powerCost: 3000000,
            inputCount: 1000,
            ingredient: { item: 'createaddition:alternator' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:drimoz_ingot' },
            id: `${id_prefix}beta_tester_drimoz`
        },
        {
            powerCost: 3000000,
            inputCount: 128,
            ingredient: { item: 'berseria_sky:manyerium_block_3' },
            catalyst: { item: 'extendedcrafting:the_ultimate_catalyst' },
            result: { item: 'berseria_sky:velvetcrowe_ingot' },
            id: `${id_prefix}creatice_velvetcrowe`
        },


];

recipes.forEach((recipe) => {
    event
        .custom({
            type: 'extendedcrafting:compressor',
            powerCost: recipe.powerCost,
            inputCount: recipe.inputCount,
            ingredient: recipe.ingredient,
            catalyst: recipe.catalyst,
            result: recipe.result
        })
        .id(recipe.id);
});
});
