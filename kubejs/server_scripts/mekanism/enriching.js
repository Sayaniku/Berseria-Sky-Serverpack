onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/enriching/';
    const recipes = [
      {
        input: 'tconstruct:manyullyn_ingot',
        output: 'berseria_sky:enriched_manyullyn',
        id: `${id_prefix}enriched_manyullyn`
      },
      {
        input: 'berseria_sky:manyerium_ingot',
        output: 'berseria_sky:enriched_manyerium',
        id: `${id_prefix}enriched_manyerium`
      },
      {
        input: 'mysticalagradditions:insanium_ingot',
        output: 'berseria_sky:enriched_insanium',
        id: `${id_prefix}enriched_insanium`
      },
      {
        input: 'berseria_sky:manronium_steel_ingot',
        output: 'berseria_sky:enriched_manronium_steel',
        id: `${id_prefix}enriched_manronium_steel`
      },
      {
        input: 'berseria_sky:dirty_dust_crystaltine',
        output: 'extendedcrafting:crystaltine_dust',
        id: `${id_prefix}from_dirty_dust`
      },
      {
        input: item.of('endless:infinity_ingot',4),
        output: 'berseria_sky:enriched_infinity',
        id: `${id_prefix}enriched_infinity`
      },
      
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
