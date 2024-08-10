onEvent('recipes', (event) => {
  const id_prefix = 'berseria_sky:immersiveengineering/metalpress/';
  const recipes = [
         {
           input: item.of('powah:steel_energized',4),
           output: 'kubejs:steel_energized_gear',
           mold : 'immersiveengineering:mold_gear',
           energy : 5000,
           id: `${id_prefix}steel_energized_gear`
         },
         {
           input: 'kubejs:diamond_ingot',
           output: 'kubejs:diamond_plate',
           mold : 'immersiveengineering:mold_plate',
           energy : 2400,
           id: `${id_prefix}diamond_plate`
         },
         {
           input: item.of('kubejs:diamond_plate',4),
           output: 'thermal:diamond_gear',
           mold : 'immersiveengineering:mold_gear',
           energy : 5000,
           id: `${id_prefix}diamond_gear`
        },
        {
          input: 'kubejs:emerald_ingot',
          output: 'kubejs:emerald_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}emerald_plate`
        },
        {
          input: item.of('kubejs:emerald_plate',4),
          output: 'thermal:emerald_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}emerald_gear`
        },
        {
           input: 'thermal:enderium_ingot',
           output: 'thermal:enderium_plate',
           mold : 'immersiveengineering:mold_plate',
           energy : 2400,
           id: `${id_prefix}enderium_plate`
        },
        {
          input: item.of('thermal:enderium_plate',4),
          output: 'thermal:enderium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}enderium_gear`
        },
        {
          input: 'minecraft:netherite_ingot',
          output: 'thermal:netherite_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}netherite_plate`
        },
        {
          input: item.of('thermal:netherite_plate',4),
          output: 'thermal:netherite_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}netherite_gear`
        },
        {
          input: 'thermal:signalum_ingot',
          output: 'thermal:signalum_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}signalum_plate`
        },
        {
          input: item.of('thermal:signalum_plate',4),
          output: 'thermal:signalum_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}signalum_gear`
        },
        {
          input: 'thermal:lumium_ingot',
          output: 'thermal:lumium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}lumium_plate`
        },
        {
          input: item.of('thermal:lumium_plate',4),
          output: 'thermal:lumium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}lumium_gear`
        },
        {
          input: 'mekanism:ingot_antimatter',
          output: 'mekanism:antimatter_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}antimatter_plate`
        },
        {
          input: item.of('mekanism:antimatter_plate',4),
          output: 'mekanism:antimatter_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}antimatter_gear`
        },
        {
          input: 'thermal_extra:dragon_bronze_ingot',
          output: 'thermal_extra:dragon_bronze_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}dragon_bronze_plate`
        },
        {
          input: item.of('thermal_extra:dragon_bronze_plate',4),
          output: 'thermal_extra:dragon_bronze_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}dragon_bronze_gear`
        },
        {
          input: 'thermal_extra:dragon_enderium_ingot',
          output: 'thermal_extra:dragon_enderium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}dragon_enderium_plate`
        },
        {
          input: item.of('thermal_extra:dragon_enderium_plate',4),
          output: 'thermal_extra:dragon_enderium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}dragon_enderium_gear`
        },
        {
          input: 'thermal_extra:drownium_ingot',
          output: 'thermal_extra:drownium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}drownium_plate`
        },
        {
          input: item.of('thermal_extra:drownium_plate',4),
          output: 'thermal_extra:drownium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}drownium_gear`
        },
        {
          input: 'thermal_extra:polarium_ingot',
          output: 'thermal_extra:polarium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}polarium_plate`
        },
        {
          input: item.of('thermal_extra:polarium_plate',4),
          output: 'thermal_extra:polarium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}polarium_gear`
        },
        {
          input: 'thermal_extra:nebulium_ingot',
          output: 'thermal_extra:nebulium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}nebulium_plate`
        },
        {
          input: item.of('thermal_extra:nebulium_plate',4),
          output: 'thermal_extra:nebulium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}nebulium_gear`
        },
        {
          input: 'thermal_extra:vukaium_ingot',
          output: 'thermal_extra:vukaium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}vukaium_plate`
        },
        {
          input: item.of('thermal_extra:vukaium_plate',4),
          output: 'thermal_extra:vukaium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}vukaium_gear`
        },
        {
          input: 'thermal_extra:nectium_ingot',
          output: 'thermal_extra:nectium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}nectium_plate`
        },
        {
          input: item.of('thermal_extra:nectium_plate',4),
          output: 'thermal_extra:nectium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}nectium_gear`
        },
        {
          input: 'thermal_extra:zauvium_ingot',
          output: 'thermal_extra:zauvium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}zauvium_plate`
        },
        {
          input: item.of('thermal_extra:zauvium_plate',4),
          output: 'thermal_extra:zauvium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}zauvium_gear`
        },
        {
          input: 'astralsorcery:starmetal_ingot',
          output: 'kubejs:starmetal_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}starmetal_plate`
        },
        {
          input: item.of('kubejs:starmetal_plate',4),
          output: 'kubejs:starmetal_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}starmetal_gear`
        },
        {
          input: 'draconicevolution:draconium_ingot',
          output: 'kubejs:draconium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}draconium_plate`
        },
        {
          input: item.of('kubejs:draconium_plate',4),
          output: 'kubejs:draconium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}draconium_gear`
        },
        {
          input: 'draconicevolution:awakened_draconium_ingot',
          output: 'kubejs:awakened_draconium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}awakened_draconium_plate`
        },
        {
          input: item.of('kubejs:awakened_draconium_plate',4),
          output: 'kubejs:awakened_draconium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}awakened_draconium_gear`
        },
        {
          input: 'bigreactors:yellorium_ingot',
          output: 'kubejs:yellorium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}yellorium_plate`
        },
        {
          input: item.of('kubejs:yellorium_plate',4),
          output: 'kubejs:yellorium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}yellorium_gear`
        },
        {
          input: 'bigreactors:cyanite_ingot',
          output: 'kubejs:cyanite_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}cyanite_plate`
        },
        {
          input: item.of('kubejs:cyanite_plate',4),
          output: 'kubejs:cyanite_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}cyanite_gear`
        },
        {
          input: 'immersiveengineering:ingot_hop_graphite',
          output: 'kubejs:hop_graphite_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}hop_graphite_plate`
        },
        {
          input: item.of('kubejs:hop_graphite_plate',4),
          output: 'kubejs:hop_graphite_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}hop_graphite_gear`
        },
        {
          input: 'extendedcrafting:ender_ingot',
          output: 'kubejs:ender_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}ender_plate`
        },
        {
          input: item.of('kubejs:ender_plate',4),
          output: 'kubejs:ender_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}ender_gear`
        },
        {
          input: 'extendedcrafting:enhanced_ender_ingot',
          output: 'kubejs:enhanced_ender_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}enhanced_ender_plate`
        },
        {
          input: item.of('kubejs:enhanced_ender_plate',4),
          output: 'kubejs:enhanced_ender_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}enhanced_ender_gear`
        },
        {
          input: 'extendedcrafting:redstone_ingot',
          output: 'kubejs:redstone_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}redstone_plate`
        },
        {
          input: item.of('kubejs:redstone_plate',4),
          output: 'kubejs:redstone_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}redstone_gear`
        },
        {
          input: 'extendedcrafting:crystaltine_ingot',
          output: 'kubejs:crystaltine_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}crystaltine_plate`
        },
        {
          input: item.of('kubejs:crystaltine_plate',4),
          output: 'kubejs:crystaltine_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}crystaltine_gear`
        },
        {
          input: 'materialis:fairy_ingot',
          output: 'kubejs:fairy_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}fairy_plate`
        },
        {
          input: item.of('kubejs:fairy_plate',4),
          output: 'kubejs:fairy_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}fairy_gear`
        },
        {
          input: 'mekanism:ingot_refined_glowstone',
          output: 'kubejs:refined_glowstone_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}refined_glowstone_plate`
        },
        {
          input: item.of('kubejs:refined_glowstone_plate',4),
          output: 'kubejs:refined_glowstone_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}refined_glowstone_gear`
        },
        {
          input: 'mekanism:ingot_refined_obsidian',
          output: 'kubejs:refined_obsidian_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}refined_obsidian_plate`
        },
        {
          input: item.of('kubejs:refined_obsidian_plate',4),
          output: 'kubejs:refined_obsidian_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}refined_obsidian_gear`
        },
        {
          input: 'mythicbotany:alfsteel_ingot',
          output: 'kubejs:alfsteel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}alfsteel_plate`
        },
        {
          input: item.of('kubejs:alfsteel_plate',4),
          output: 'kubejs:alfsteel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}alfsteel_gear`
        },
        {
          input: 'mysticalagriculture:prosperity_ingot',
          output: 'kubejs:prosperity_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}prosperity_plate`
        },
        {
          input: item.of('kubejs:prosperity_plate',4),
          output: 'kubejs:prosperity_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}prosperity_gear`
        },
        {
          input: 'mysticalagriculture:soulium_ingot',
          output: 'kubejs:soulium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}soulium_plate`
        },
        {
          input: item.of('kubejs:soulium_plate',4),
          output: 'kubejs:soulium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}soulium_gear`
        },
        {
          input: 'mysticalagriculture:inferium_ingot',
          output: 'kubejs:inferium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}inferium_plate`
        },
        {
          input: item.of('kubejs:inferium_plate',4),
          output: 'kubejs:inferium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}inferium_gear`
        },
        {
          input: 'mysticalagriculture:prudentium_ingot',
          output: 'kubejs:prudentium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}prudentium_plate`
        },
        {
          input: item.of('kubejs:prudentium_plate',4),
          output: 'kubejs:prudentium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}prudentium_gear`
        },
        {
          input: 'mysticalagriculture:tertium_ingot',
          output: 'kubejs:tertium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}tertium_plate`
        },
        {
          input: item.of('kubejs:tertium_plate',4),
          output: 'kubejs:tertium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}tertium_gear`
        },
        {
          input: 'mysticalagriculture:imperium_ingot',
          output: 'kubejs:imperium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}imperium_plate`
        },
        {
          input: item.of('kubejs:imperium_plate',4),
          output: 'kubejs:imperium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}imperium_gear`
        },
        {
          input: 'mysticalagriculture:supremium_ingot',
          output: 'kubejs:supremium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}supremium_plate`
        },
        {
          input: item.of('kubejs:supremium_plate',4),
          output: 'kubejs:supremium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}supremium_gear`
        },
        {
          input: 'mysticalagradditions:insanium_ingot',
          output: 'kubejs:insanium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}insanium_plate`
        },
        {
          input: item.of('kubejs:insanium_plate',4),
          output: 'kubejs:insanium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}insanium_gear`
        },
        {
          input: 'kubejs:ornium_ingot',
          output: 'kubejs:ornium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}ornium_plate`
        },
        {
          input: item.of('kubejs:ornium_plate',4),
          output: 'kubejs:ornium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}ornium_gear`
        },
        {
          input: 'kubejs:lightium_ingot',
          output: 'kubejs:lightium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}lightium_plate`
        },
        {
          input: item.of('kubejs:lightium_plate',4),
          output: 'kubejs:lightium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}lightium_gear`
        },
        {
          input: 'kubejs:tornium_ingot',
          output: 'kubejs:tornium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}tornium_plate`
        },
        {
          input: item.of('kubejs:tornium_plate',4),
          output: 'kubejs:tornium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}tornium_gear`
        },
        {
          input: 'kubejs:ouranium_ingot',
          output: 'kubejs:ouranium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}ouranium_plate`
        },
        {
          input: item.of('kubejs:ouranium_plate',4),
          output: 'kubejs:ouranium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}ouranium_gear`
        },
        {
          input: 'industrialforegoing:pink_slime_ingot',
          output: 'kubejs:pink_slime_ingot_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}pink_slime_ingot_plate`
        },
        {
          input: item.of('kubejs:pink_slime_ingot_plate',4),
          output: 'kubejs:pink_slime_ingot_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}pink_slime_ingot_gear`
        },
        {
          input: 'blue_skies:falsite_ingot',
          output: 'kubejs:falsite_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}falsite_plate`
        },
        {
          input: item.of('kubejs:falsite_plate',4),
          output: 'kubejs:falsite_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}falsite_gear`
        },
        {
          input: 'blue_skies:ventium_ingot',
          output: 'kubejs:ventium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}ventium_plate`
        },
        {
          input: item.of('kubejs:ventium_plate',4),
          output: 'kubejs:ventium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}ventium_gear`
        },
        {
          input: 'blue_skies:horizonite_ingot',
          output: 'kubejs:horizonite_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}horizonite_plate`
        },
        {
          input: item.of('kubejs:horizonite_plate',4),
          output: 'kubejs:horizonite_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}horizonite_gear`
        },
        {
          input: 'tconstruct:hepatizon_ingot',
          output: 'kubejs:hepatizon_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}hepatizon_plate`
        },
        {
          input: item.of('kubejs:hepatizon_plate',4),
          output: 'kubejs:hepatizon_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}hepatizon_gear`
        },
        {
          input: 'tconstruct:pig_iron_ingot',
          output: 'kubejs:pig_iron_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}pig_iron_plate`
        },
        {
          input: item.of('kubejs:pig_iron_plate',4),
          output: 'kubejs:pig_iron_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}pig_iron_gear`
        },
        {
          input: 'tconstruct:queens_slime_ingot',
          output: 'kubejs:queens_slime_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}queens_slime_plate`
        },
        {
          input: item.of('kubejs:queens_slime_plate',4),
          output: 'kubejs:queens_slime_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}queens_slime_gear`
        },
        {
          input: 'tconstruct:slimesteel_ingot',
          output: 'kubejs:slimesteel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}slimesteel_plate`
        },
        {
          input: item.of('kubejs:slimesteel_plate',4),
          output: 'kubejs:slimesteel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}slimesteel_gear`
        },
        {
          input: 'botania:manasteel_ingot',
          output: 'kubejs:manasteel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}manasteel_plate`
        },
        {
          input: item.of('kubejs:manasteel_plate',4),
          output: 'kubejs:manasteel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}manasteel_gear`
        },
        {
          input: 'botania:terrasteel_ingot',
          output: 'kubejs:terrasteel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}terrasteel_plate`
        },
        {
          input: item.of('kubejs:terrasteel_plate',4),
          output: 'kubejs:terrasteel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}terrasteel_gear`
        },
        {
          input: 'botania:elementium_ingot',
          output: 'kubejs:elementium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}elementium_plate`
        },
        {
          input: item.of('kubejs:elementium_plate',4),
          output: 'kubejs:elementium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}elementium_gear`
        },
        {
          input: 'kubejs:moon_ingot',
          output: 'kubejs:moon_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}moon_plate`
        },
        {
          input: item.of('kubejs:moon_plate',4),
          output: 'kubejs:moon_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}moon_gear`
        },
        {
          input: 'kubejs:sun_ingot',
          output: 'kubejs:sun_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}sun_plate`
        },
        {
          input: item.of('kubejs:sun_plate',4),
          output: 'kubejs:sun_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}sun_gear`
        },
        {
          input: 'berseria_sky:elinvonze_ingot',
          output: 'berseria_sky:elinvonze_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}elinvonze_plate`
        },
        {
          input: item.of('berseria_sky:elinvonze_plate',4),
          output: 'berseria_sky:elinvonze_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}elinvonze_gear`
        },
        {
          input: 'berseria_sky:comerald_ingot',
          output: 'berseria_sky:comerald_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}comerald_plate`
        },
        {
          input: item.of('berseria_sky:comerald_plate',4),
          output: 'berseria_sky:comerald_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}comerald_gear`
        },
        {
          input: 'berseria_sky:queens_steel_ingot',
          output: 'berseria_sky:queens_steel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}queens_steel_plate`
        },
        {
          input: item.of('berseria_sky:queens_steel_plate',4),
          output: 'berseria_sky:queens_steel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}queens_steel_gear`
        },
        {
          input: 'berseria_sky:fayronium_ingot',
          output: 'berseria_sky:fayronium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}fayronium_plate`
        },
        {
          input: item.of('berseria_sky:fayronium_plate',4),
          output: 'berseria_sky:fayronium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}fayronium_gear`
        },
        {
          input: 'berseria_sky:manyerium_ingot',
          output: 'berseria_sky:manyerium_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}manyerium_plate`
        },
        {
          input: item.of('berseria_sky:manyerium_plate',4),
          output: 'berseria_sky:manyerium_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}manyerium_gear`
        },
        {
          input: 'berseria_sky:manronium_steel_ingot',
          output: 'berseria_sky:manronium_steel_plate',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: `${id_prefix}manronium_steel_plate`
        },
        {
          input: item.of('berseria_sky:manronium_steel_plate',4),
          output: 'berseria_sky:manronium_steel_gear',
          mold : 'immersiveengineering:mold_gear',
          energy : 5000,
          id: `${id_prefix}manronium_steel_gear`
        },
        {
          input: item.of('kubejs:ardite_plate',4),
          output: '#forge:gears/ardite',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: 'immersiveengineering:metalpress/gear_ardite'
        },
        {
          input: item.of('#forge:plates/aluminum',4),
          output: '#forge:gears/aluminum',
          mold : 'immersiveengineering:mold_plate',
          energy : 2400,
          id: 'immersiveengineering:metalpress/gear_aluminum'
        },
        
  ];

  recipes.forEach((recipe) => {
      event.recipes.immersiveengineering
          .metalPress(recipe.output, recipe.input, recipe.mold)
          .energy(recipe.energy)
          .id(recipe.id);
  });
});