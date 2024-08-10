onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:mekanism/crushing/';
    const recipes = [
      {
        input: 'berseria_sky:manyerium_ingot',
        output: 'berseria_sky:manyerium_dust',
        id: `${id_prefix}manyerium_dust`
      },
      {
        input: 'berseria_sky:fayronium_ingot',
        output: 'berseria_sky:fayronium_dust',
        id: `${id_prefix}fayronium_dust`
      },
      {
        input: 'berseria_sky:queens_steel_ingot',
        output: 'berseria_sky:queens_steel_dust',
        id: `${id_prefix}queens_steel_dust`
      },
      {
        input: 'berseria_sky:manronium_steel_ingot',
        output: 'berseria_sky:manronium_steel_dust',
        id: `${id_prefix}manronium_steel_dust`
      },
      {
        input: 'bigreactors:yellorium_ingot',
        output: 'bigreactors:yellorium_dust',
        id: `${id_prefix}yellorium_dust`
      },
      {
        input: 'bigreactors:cyanite_ingot',
        output: 'bigreactors:cyanite_dust',
        id: `${id_prefix}cyanite_dust`
      },
      {
        input: 'bigreactors:graphite_ingot',
        output: 'bigreactors:graphite_dust',
        id: `${id_prefix}graphite_dust`
      },
      {
        input: 'create:brass_ingot',
        output: 'create:brass_dust',
        id: `${id_prefix}brass_dust`
      },
      {
        input: 'create:zinc_ingot',
        output: 'create:zinc_dust',
        id: `${id_prefix}zinc_dust`
      },
      {
        input: 'minecraft:cactus',
        output: 'thermal_extra:cactus_dust',
        id: `${id_prefix}cactus_dust`
      },
      {
        input: 'minecraft:quartz',
        output: 'thermal:quartz_dust',
        id: `${id_prefix}quartz_dust`
      },
      {
        input: 'minecraft:ender_pearl',
        output: 'miniutilities:ender_dust',
        id: `${id_prefix}ender_dust`
      },
      {
        input: 'immersiveengineering:ingot_aluminum',
        output: 'immersiveengineering:dust_aluminum',
        id: `${id_prefix}aluminum_dust`
      },
      {
        input: 'minecraft:netherite_ingot',
        output: 'thermal:netherite_dust',
        id: `${id_prefix}netherite_dust`
      },
      {
        input: 'thermal:cinnabar',
        output: 'thermal:cinnabar_dust',
        id: `${id_prefix}cinnabar_dust`
      },
      {
        input: 'thermal:niter',
        output: 'thermal:niter_dust',
        id: `${id_prefix}niter_dust`
      },
      {
        input: 'thermal:constantan_ingot',
        output: 'thermal:constantan_dust',
        id: `${id_prefix}constantan_dust`
      },
      {
        input: 'thermal:nickel_ingot',
        output: 'thermal:nickel_dust',
        id: `${id_prefix}nickel_dust`
      },
      {
        input: 'thermal:electrum_ingot',
        output: 'thermal:electrum_dust',
        id: `${id_prefix}electrum_dust`
      },
      {
        input: 'thermal:silver_ingot',
        output: 'thermal:silver_dust',
        id: `${id_prefix}silver_dust`
      },
      {
        input: 'thermal:invar_ingot',
        output: 'thermal:invar_dust',
        id: `${id_prefix}invar_dust`
      },
      {
        input: 'thermal:bronze_ingot',
        output: 'thermal:bronze_dust',
        id: `${id_prefix}bronze_dust`
      },
      {
        input: 'thermal:apatite',
        output: 'thermal:apatite_dust',
        id: `${id_prefix}apatite_dust`
      },
      {
        input: 'thermal:lumium_ingot',
        output: 'thermal:lumium_dust',
        id: `${id_prefix}lumium_dust`
      },
      {
        input: 'thermal:signalum_ingot',
        output: 'thermal:signalum_dust',
        id: `${id_prefix}signalum_dust`
      },
      {
        input: 'thermal:enderium_ingot',
        output: 'thermal:enderium_dust',
        id: `${id_prefix}enderium_dust`
      },
      {
        input: 'thermal_extra:dragon_bronze_ingot',
        output: 'thermal_extra:dragon_bronze_dust',
        id: `${id_prefix}dragon_bronze_dust`
      },
      {
        input: 'thermal_extra:dragon_enderium_ingot',
        output: 'thermal_extra:dragon_enderium_dust',
        id: `${id_prefix}dragon_enderium_dust`
      },
      {
        input: 'thermal_extra:nectium_ingot',
        output: 'thermal_extra:nectium_dust',
        id: `${id_prefix}nectium_dust`
      },
      {
        input: 'thermal_extra:vukaium_ingot',
        output: 'thermal_extra:vukaium_dust',
        id: `${id_prefix}vukaium_dust`
      },
      {
        input: 'thermal_extra:polarium_ingot',
        output: 'thermal_extra:polarium_dust',
        id: `${id_prefix}polarium_dust`
      },
      {
        input: 'thermal_extra:drownium_ingot',
        output: 'thermal_extra:drownium_dust',
        id: `${id_prefix}drownium_dust`
      },
      {
        input: 'thermal_extra:nebulium_ingot',
        output: 'thermal_extra:nebulium_dust',
        id: `${id_prefix}nebulium_dust`
      },
      {
        input: 'thermal_extra:zauvium_ingot',
        output: 'thermal_extra:zauvium_dust',
        id: `${id_prefix}zauvium_dust`
      },
      {
        input: 'tconstruct:manyullyn_ingot',
        output: 'tconstruct:manyullyn_dust',
        id: `${id_prefix}manyullyn_dust`
      },
      {
        input: 'tconstruct:cobalt_ingot',
        output: 'kubejs:cobalt_dust',
        id: `${id_prefix}cobalt_dust`
      },
      {
        input: 'tinkers_reforged:duralumin_ingot',
        output: 'tinkers_reforged:duralumin_dust',
        id: `${id_prefix}duralumin_dust`
      },
      {
        input: 'tinkers_reforged:gausum_ingot',
        output: 'tinkers_reforged:gausum_dust',
        id: `${id_prefix}gausum_dust`
      },
      {
        input: 'tinkers_reforged:electrical_copper_ingot',
        output: 'tinkers_reforged:electrical_copper_dust',
        id: `${id_prefix}electrical_copper_dust`
      },
      {
        input: 'tinkers_reforged:lavium_ingot',
        output: 'tinkers_reforged:lavium_dust',
        id: `${id_prefix}lavium_dust`
      },
      {
        input: 'tinkers_reforged:qivium_ingot',
        output: 'tinkers_reforged:qivium_dust',
        id: `${id_prefix}qivium_dust`
      },
      {
        input: 'tinkers_reforged:blazing_copper_ingot',
        output: 'tinkers_reforged:blazing_copper_dust',
        id: `${id_prefix}blazing_copper_dust`
      },
      {
        input: 'kubejs:platinum_ingot',
        output: 'kubejs:platinum_dust',
        id: `${id_prefix}platinum_dust`
      },
      {
        input: 'kubejs:ardite_ingot',
        output: 'kubejs:ardite_dust',
        id: `${id_prefix}ardite_dust`
      },
      {
        input: 'berseria_sky:crystaltine_clump',
        output: 'berseria_sky:dirty_dust_crystaltine',
        id: `${id_prefix}from_clump`
      }
      
      
      
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});