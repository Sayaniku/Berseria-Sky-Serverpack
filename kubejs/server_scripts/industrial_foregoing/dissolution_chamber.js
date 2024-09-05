events.listen('recipes', function (e) { 

        function Core(block, blaze, cake, core ) {
        e.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {"item": block}, {"item": cake}, {"item": block},
          {"item": blaze},                 {"item": blaze},
          {"item": block}, {"item": cake}, {"item": block}],
        "inputFluid": "{FluidName:\"minecraft:lava\",Amount:4000}",
        "processingTime": 600,
        "output": {"item": core,"count": 1}})
      }

      Core('thermal:lumium_plate','botania:blaze_block','create:blaze_cake','berseria_sky:lumium_core')  
      Core('thermal:enderium_plate','botania:blaze_block','berseria_sky:lumium_core','berseria_sky:enderium_core') 
      Core('berseria_sky:queens_steel_plate','botania:blaze_block','berseria_sky:enderium_core','berseria_sky:queens_steel_core') 
      Core('berseria_sky:fayronium_plate','botania:blaze_block','berseria_sky:queens_steel_core','berseria_sky:fayronium_core') 
      Core('berseria_sky:manyerium_plate','botania:blaze_block','berseria_sky:fayronium_core','berseria_sky:manyerium_core')
      Core('berseria_sky:manronium_steel_plate','botania:blaze_block','berseria_sky:manyerium_core','berseria_sky:manronium_steel_core')

})
onEvent('recipes', (event) => {
  const id_prefix = 'berseria_sky:industrialforegoing/dissolution_chamber/';

  const recipes = [
          {
              inputs: [
                  'thermal:machine_speed_augment',
                  'berseria_sky:creative_augment_base',
                  'thermal_extra:advanced_machine_speed_augment',
                  'fluxnetworks:gargantuan_flux_storage',
                  'fluxnetworks:gargantuan_flux_storage',
                  'thermal:machine_efficiency_augment',
                  'kubejs:bedrock',
                  'thermal:machine_efficiency_augment'
              ],
              inputFluid: 'materialis:molten_starmetal',
              inputFluidAmount: 20000,
              processingTime: 800,
              outputItem: { item: 'thermal:machine_efficiency_creative_augment', count: 1 },
              outputFluid: '',
              outputFluidAmount: 0,
              id: `${id_prefix}creative_efficiency_augment`
        },

];

recipes.forEach((recipe) => {
    let ingredients = [];

    recipe.inputs.forEach((input) => {
        ingredients.push(Ingredient.of(input));
    });

    event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredients,
            inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
            processingTime: recipe.processingTime,
            output: recipe.outputItem,
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        })
        .id(recipe.id);
});
});