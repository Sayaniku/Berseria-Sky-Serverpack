onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:immersiveengineering/arc_furnace/';
    const recipes = [
        {
            input: 'blue_skies:raw_charoite_block',
            secondaries: [],
            outputs: [Item.of('blue_skies:charoite',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_charoite`
        },
        {
            input: 'blue_skies:raw_aquite_block',
            secondaries: [],
            outputs: [Item.of('blue_skies:aquite_gem',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_aquite`
        },
        {
            input: 'blue_skies:raw_falsite_block',
            secondaries: [],
            outputs: [Item.of('blue_skies:falsite_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_falsite`
        },
        {
            input: 'blue_skies:raw_ventium_block',
            secondaries: [],
            outputs: [Item.of('blue_skies:ventium_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_ventium`
        },
        {
            input: 'blue_skies:raw_horizonite_block',
            secondaries: [],
            outputs: [Item.of('blue_skies:horizonite_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_horizonite`
        },
        {
            input: 'berseria_sky:raw_zinc_block',
            secondaries: [],
            outputs: [Item.of('create:zinc_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_zinc`
        },
        {
            input: 'berseria_sky:raw_iron_block',
            secondaries: [],
            outputs: [Item.of('minecraft:iron_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_iron`
        },
        {
            input: 'berseria_sky:raw_gold_block',
            secondaries: [],
            outputs: [Item.of('minecraft:gold_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_gold`
        },
        {
            input: 'berseria_sky:raw_osmium_block',
            secondaries: [],
            outputs: [Item.of('mekanism:ingot_osmium',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_osmium`
        },
        {
            input: 'berseria_sky:raw_uranium_block',
            secondaries: [],
            outputs: [Item.of('mekanism:ingot_uranium',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_uranium`
        },
        {
            input: 'berseria_sky:raw_cobalt_block',
            secondaries: [],
            outputs: [Item.of('tconstruct:cobalt_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_cobalt`
        },
        {
            input: 'berseria_sky:raw_tin_block',
            secondaries: [],
            outputs: [Item.of('thermal:tin_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_tin`
        },
        {
            input: 'berseria_sky:raw_lead_block',
            secondaries: [],
            outputs: [Item.of('thermal:lead_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_lead`
        },
        {
            input: 'berseria_sky:raw_silver_block',
            secondaries: [],
            outputs: [Item.of('thermal:silver_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_silver`
        },
        {
            input: 'berseria_sky:raw_nickel_block',
            secondaries: [],
            outputs: [Item.of('thermal:nickel_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_nickel`
        },
        {
            input: 'berseria_sky:raw_copper_block',
            secondaries: [],
            outputs: [Item.of('thermal:copper_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_copper`
        },
        {
            input: 'berseria_sky:raw_ardite_block',
            secondaries: [],
            outputs: [Item.of('kubejs:ardite_ingot',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_ardite`
        },
        {
            input: 'berseria_sky:raw_aluminum_block',
            secondaries: [],
            outputs: [Item.of('immersiveengineering:ingot_aluminum',13)],
            energy: 102400,
            id:`${id_prefix}raw_block_aluminium`
        },
        {
            input: item.of('kubejs:ardite_ingot',3),
            secondaries: ['minecraft:netherite_ingot',item.of('tconstruct:cobalt_ingot',3)],
            outputs: [Item.of('tconstruct:manyullyn_ingot',4)],
            energy: 51200,
            id:('immersiveengineering:arcfurnace/alloy_manyullyn')
        },
        {
            input: 'minecraft:iron_ingot',
            secondaries: [item.of('minecraft:redstone',8)],
            outputs: ['extendedcrafting:redstone_ingot'],
            energy: 51200,
            id:`${id_prefix}redstone_ingot`
        },
        {
            input: '#chipped:obsidian',
            secondaries: ['tconstruct:cobalt_ingot',item.of('thermal:copper_ingot',2)],
            outputs: ['tconstruct:hepatizon_ingot'],
            energy: 51200,
            id:`${id_prefix}alloy_hepatizon`
        },
        {
            input: 'minecraft:magma_cream',
            secondaries: ['minecraft:gold_ingot','tconstruct:cobalt_ingot'],
            outputs: [item.of('tconstruct:queens_slime_ingot',2)],
            energy: 51200,
            id:`${id_prefix}alloy_queens_slime`
        },
        {
            input: 'tconstruct:sky_slime_ball',
            secondaries: ['minecraft:iron_ingot','#tconstruct:smeltery'],
            outputs: [item.of('tconstruct:slimesteel_ingot',2)],
            energy: 51200,
            id:`${id_prefix}alloy_slimesteel`
        },
        {
            input: item.of('pamhc2foodcore:freshmilkitem',16),
            secondaries: [item.of('#chipped:soul_sand',4),item.of('minecraft:gold_ingot',6)],
            outputs: [item.of('materialis:fairy_ingot',4)],
            energy: 51200,
            id:`${id_prefix}alloy_fairy`
        },
        {
            input: item.of('extendedcrafting:ender_ingot',2),
            secondaries: ['kubejs:diamond_ingot',item.of('thermal:lead_ingot',3)],
            outputs: [item.of('thermal:enderium_ingot',4)],
            energy: 51200,
            id:`${id_prefix}alloy_enderium`
        },
        {
            input: 'tconstruct:blood_slime_ball',
            secondaries: ['minecraft:clay_ball','minecraft:iron_ingot'],
            outputs: 'tconstruct:pig_iron_ingot',
            energy: 51200,
            id:`${id_prefix}alloy_pig_iron`
        },
        {
            input: 'immersiveengineering:storage_aluminum',
            secondaries: item.of('thermal:bronze_ingot',4),
            outputs: item.of('tinkers_reforged:duralumin_ingot',5),
            energy: 51200,
            id:`${id_prefix}alloy_duralumin`
        },
        {
            input: item.of('tinkers_reforged:blazing_copper_ingot',2),
            secondaries: 'extendedcrafting:redstone_ingot',
            outputs: item.of('tinkers_reforged:electrical_copper_ingot',2),
            energy: 51200,
            id:`${id_prefix}alloy_electrical_copper`
        },
        {
            input: item.of('kubejs:ardite_ingot',4),
            secondaries: 'minecraft:soul_sand',
            outputs: item.of('tinkers_reforged:lavium_ingot',2),
            energy: 51200,
            id:`${id_prefix}alloy_lavium`
        },
        {
            input: item.of('thermal:dust_pyrotheum',4),
            secondaries: 'thermal:copper_block',
            outputs: 'tinkers_reforged:blazing_copper_block',
            energy: 51200,
            id:`${id_prefix}alloy_blazing_copper`
        },
        {
            input: item.of('tconstruct:cobalt_ingot',4),
            secondaries: 'tconstruct:queens_slime_ingot',
            outputs: item.of('tinkers_reforged:qivium_ingot',4),
            energy: 51200,
            id:`${id_prefix}alloy_qivium`
        },
        {
            input: 'minecraft:lapis_block',
            secondaries: [item.of('tinkers_reforged:blazing_copper_ingot',2),('minecraft:netherite_ingot')],
            outputs: item.of('tinkers_reforged:gausum_ingot',2),
            energy: 51200,
            id:`${id_prefix}alloy_gausum`
        },
        
        
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineeringArcFurnace(recipe.outputs, recipe.input, recipe.secondaries).energy(recipe.energy).id(recipe.id);
    });
});

