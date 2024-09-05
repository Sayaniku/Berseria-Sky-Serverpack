onEvent('recipes', (e) => {
    const id_prefix = 'berseria_sky:minecraft/smelting/';
    const recipes = [
           {
            input: { ingredient: { item: 'create:brass_dust' }},
            output:   'create:brass_ingot' ,
            experience: 0, 
            cookingtime: 200,
            id: `${id_prefix}from_brass_dust`
           },
           {
            input: { ingredient: { tag: 'forge:ores/cobalt' }},
            output:   'tconstruct:cobalt_ingot' ,
            experience: 0.5, 
            cookingtime: 200,
            id: `${id_prefix}from_cobalt_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_cobalt' }},
            output:   'tconstruct:cobalt_block' ,
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_cobalt_block`
           },
           {
            input: { ingredient: { tag: 'crushed:ore/cobalt' }},
            output:   'tconstruct:cobalt_ingot' ,
            experience: 0.1, 
            cookingtime: 200,
            id: `${id_prefix}from_crushed_cobalt_ore`
           },
           {
            input: { ingredient: { tag: 'forge:dusts/cobalt' }},
            output:   'tconstruct:cobalt_ingot' ,
            experience: 0, 
            cookingtime: 200,
            id: `${id_prefix}from_cobalt_dust`
           },
           {
            input: { ingredient: { tag: 'forge:ores/aluminum' }},
            output:   'immersiveengineering:ingot_aluminum' ,
            experience: 0.5, 
            cookingtime: 200,
            id: `${id_prefix}from_bauxite_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_aluminum' }},
            output:   'immersiveengineering:storage_aluminum' ,
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_aluminum_block`
           },
           {
            input: { ingredient: { tag: 'forge:ores/uranium' }},
            output:   'mekanism:ingot_uranium' ,
            experience: 0.5, 
            cookingtime: 200,
            id: `${id_prefix}from_uranium_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_uranium' }},
            output:   'mekanism:block_uranium' ,
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_uranium_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_falsite' }},
            output:   'blue_skies:falsite_block' ,
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_falsite_block`
           },
           {
            input: { ingredient: { tag: 'crushed:ore/falsite' }},
            output:   'blue_skies:falsite_ingot',
            experience: 0.3, 
            cookingtime: 200,
            id: `${id_prefix}from_crushed_falsite_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_horizonite' }},
            output:   'blue_skies:horizonite_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_horizonite_block`
           },
           {
            input: { ingredient: { tag: 'crushed:ore/horizonite' }},
            output:   'blue_skies:horizonite_ingot',
            experience: 0.3, 
            cookingtime: 200,
            id: `${id_prefix}from_crushed_horizonite_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_ventium' }},
            output:   'blue_skies:ventium_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_ventium_block`
           },
           {
            input: { ingredient: { tag: 'crushed:ore/ventium' }},
            output:   'blue_skies:ventium_ingot',
            experience: 0.3, 
            cookingtime: 200,
            id: `${id_prefix}from_crushed_ventium_ore`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_charoite' }},
            output:   'blue_skies:charoite_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_charoite_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_aquite' }},
            output:   'blue_skies:aquite_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_aquite_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_zinc' }},
            output:   'create:zinc_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_zinc_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_silver' }},
            output:   'thermal:silver_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_silver_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_copper' }},
            output:   'thermal:copper_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_copper_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_tin' }},
            output:   'thermal:tin_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_tin_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_nickel' }},
            output:   'thermal:nickel_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_nickel_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_lead' }},
            output:   'thermal:lead_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_lead_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_iron' }},
            output:   'minecraft:iron_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_iron_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_gold' }},
            output:   'minecraft:gold_block',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_gold_block`
           },
           {
            input: { ingredient: { tag: 'forge:storage_blocks/raw_osmium' }},
            output:   'mekanism:block_osmium',
            experience: 2, 
            cookingtime: 600,
            id: `${id_prefix}from_raw_osmium_block`
           },
           {
            input: { ingredient: { tag: 'forge:dusts/manyullyn' }},
            output:   'tconstruct:manyullyn_ingot',
            experience: 0, 
            cookingtime: 200,
            id: `${id_prefix}from_manyullyn_dust`
           },
           {
            input: { ingredient: { tag: 'forge:dusts/blazing_copper' }},
            output:   'tinkers_reforged:blazing_copper_ingot',
            experience: 0, 
            cookingtime: 200,
            id: `${id_prefix}from_blazing_copper_dust`
           },
           {
            input: { ingredient: { item: 'excompressum:compressed_cobblestone' }},
            output:   'compressium:stone_1',
            experience: 1, 
            cookingtime: 300,
            id: `${id_prefix}from_compressed_cobblestone_1`
           },
           {
            input: { ingredient: { item: 'minecraft:quartz_block' }},
            output:   'betternether:quartz_glass',
            experience: 0.3, 
            cookingtime: 300,
            id: `${id_prefix}from_quartz_block`
           },
           
          

    ];
    recipes.forEach(recipe => {
        e.custom({
          type: 'minecraft:smelting',
          ingredient: recipe.input,
          result: recipe.output,
          cookingtime: recipe.cookingtime,
          experience: recipe.experience
        }).id(recipe.id);
      });
});