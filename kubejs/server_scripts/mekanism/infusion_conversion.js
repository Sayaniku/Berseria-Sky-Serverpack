onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/infusion_conversion/';
    const recipes = [
      {
        input: { ingredient: [{ item: 'tconstruct:manyullyn_dust' },{ item: 'tconstruct:manyullyn_ingot' }]},
        output: { amount: 10, infuse_type: 'berseria_sky:manyullyn' },
        id: `${id_prefix}manyullyn_from_ingot`
      },
      {
        input: { ingredient: { item: 'berseria_sky:enriched_manyullyn' }},
        output: { amount: 80, infuse_type: 'berseria_sky:manyullyn' },
        id: `${id_prefix}manyullyn_from_enriched`
      },
      {
        input: { ingredient: [{ item: 'berseria_sky:manyerium_dust' },{ item: 'berseria_sky:manyerium_ingot' }] },
        output: { amount: 10, infuse_type: 'berseria_sky:manyerium' },
        id: `${id_prefix}manyerium_from_ingot`
      },
      {
        input: { ingredient: { item: 'berseria_sky:enriched_manyerium' }},
        output: { amount: 80, infuse_type: 'berseria_sky:manyerium' },
        id: `${id_prefix}manyerium_from_enriched`
      },
      {
        input: { ingredient: { item: 'mysticalagradditions:insanium_ingot' }},
        output: { amount: 10, infuse_type: 'berseria_sky:insanium' },
        id: `${id_prefix}insanium_from_ingot`
      },
      {
        input: { ingredient: { item: 'berseria_sky:enriched_insanium' }},
        output: { amount: 80, infuse_type: 'berseria_sky:insanium' },
        id: `${id_prefix}insanium_from_enriched`
      },
      {
        input: { ingredient: [{ item: 'berseria_sky:manronium_steel_dust' },{ item: 'berseria_sky:manronium_steel_ingot' }] },
        output: { amount: 10, infuse_type: 'berseria_sky:manronium_steel' },
        id: `${id_prefix}manronium_steel_from_ingot`
      },
      {
        input: { ingredient: { item: 'endless:infinity_ingot' }},
        output: { amount: 10, infuse_type: 'berseria_sky:infinity' },
        id: `${id_prefix}infinity_from_ingot`
      },
      {
        input: { ingredient: { item: 'berseria_sky:enriched_infinity' }},
        output: { amount: 80, infuse_type: 'berseria_sky:infinity' },
        id: `${id_prefix}infinity_from_enriched`
      }
      
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        }).id(recipe.id);
    });
});
