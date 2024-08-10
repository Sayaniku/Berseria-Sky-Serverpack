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