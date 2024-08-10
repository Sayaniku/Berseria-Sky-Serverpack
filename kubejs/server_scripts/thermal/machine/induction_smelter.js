onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:thermal/induction_smelter/';
    const recipes = [
        {
            inputs: ['thermal:bronze_ingot', Item.of('thermal_extra:dragon_breath_plating',3), 'thermal:lumium_ingot'],
            outputs: item.of('thermal_extra:dragon_bronze_ingot',2),
            energy: 10000,
            id: `${id_prefix}dragon_bronze_ingot`
        },
        {
            inputs: ['thermal:enderium_ingot', Item.of('thermal_extra:dragon_breath_plating',3), 'thermal_extra:dragon_bronze_ingot'],
            outputs: item.of('thermal_extra:dragon_enderium_ingot',2),
            energy: 10000,
            id: `${id_prefix}dragon_enderium_ingot`
        },
        {
            inputs: ['minecraft:honey_block', 'thermal_extra:dragon_enderium_ingot', 'thermal:constantan_ingot'],
            outputs: item.of('thermal_extra:nectium_ingot',2),
            energy: 10000,
            id: `${id_prefix}nectium_ingot`
        },
        {
            inputs: ['thermal:cinnabar', 'thermal_extra:nectium_ingot', 'thermal_extra:cactus_dust'],
            outputs: item.of('thermal_extra:vukaium_ingot',2),
            energy: 10000,
            id: `${id_prefix}venkaium_ingot`
        },
        {
            inputs: ['thermal:dust_cryotheum', 'thermal_extra:vukaium_ingot', 'kubejs:platinum_ingot'],
            outputs: item.of('thermal_extra:polarium_ingot',2),
            energy: 10000,
            id: `${id_prefix}polarium_ingot`
        },
        {
            inputs: ['thermal:apatite', 'thermal_extra:polarium_ingot', 'minecraft:prismarine_shard'],
            outputs: item.of('thermal_extra:drownium_ingot',2),
            energy: 10000,
            id: `${id_prefix}drownium_ingot`
        },
        {
            inputs: ['minecraft:purpur_block', 'thermal_extra:drownium_ingot', 'tconstruct:manyullyn_ingot'],
            outputs: item.of('thermal_extra:nebulium_ingot',2),
            energy: 10000,
            id: `${id_prefix}nebulium_ingot`
        },
        {
            inputs: ['thermal:dust_aerotheum', 'thermal_extra:nebulium_ingot', 'thermal:electrum_ingot'],
            outputs: item.of('thermal_extra:zauvium_ingot',2),
            energy: 15000,
            id: `${id_prefix}zauvium_ingot`
        },
        {
            inputs: [item.of('tinkers_reforged:blazing_copper_ingot',2), 'minecraft:netherite_ingot', 'minecraft:lapis_block'],
            outputs: item.of('tinkers_reforged:gausum_ingot',2),
            energy: 15000,
            id: `${id_prefix}gausum_ingot`
        },
        {
            inputs: [item.of('thermal:bronze_ingot',8), Item.of('thermal:invar_ingot',8), item.of('thermal:electrum_ingot',8)],
            outputs: item.of('berseria_sky:elinvonze_ingot',4),
            energy: 20000,
            id: `${id_prefix}elinvonze_ingot`
        },
        {
            inputs: [item.of('minecraft:soul_sand',4), Item.of('pamhc2foodcore:freshmilkitem',16), item.of('minecraft:gold_ingot',6)],
            outputs: item.of('materialis:fairy_ingot',4),
            energy: 10000,
            id: `${id_prefix}fairy_ingot`
        },
        {
            inputs: ['kubejs:diamond_ingot', Item.of('thermal:lead_ingot',3), item.of('extendedcrafting:ender_ingot',2)],
            outputs: item.of('thermal:enderium_ingot',4),
            energy: 10000,
            id: `${id_prefix}enderium_ingot`
        },
        {
            inputs: [item.of('thermal:constantan_ingot',6), Item.of('kubejs:diamond_ingot',4), item.of('kubejs:emerald_ingot',4)],
            outputs: item.of('berseria_sky:comerald_ingot',4),
            energy: 30000,
            id: `${id_prefix}comerald_ingot`
        },
        {
            inputs: ['betterendforge:ender_dust', 'betterendforge:thallasium_ingot'],
            outputs: 'betterendforge:terminite_ingot',
            energy: 15000,
            id: `${id_prefix}terminite_ingot`
        },
        {
            inputs: ['minecraft:iron_ingot', item.of('minecraft:redstone',8)],
            outputs: 'extendedcrafting:redstone_ingot',
            energy: 15000,
            id: `${id_prefix}redstone_ingot`
        },
        {
            inputs: ['immersiveengineering:storage_aluminum','thermal:copper_ingot'],
            outputs: item.of('tinkers_reforged:duralumin_ingot',5),
            energy: 15000,
            id: `${id_prefix}duralium_ingot`
        },
        {
            inputs: ['thermal:copper_block',item.of('thermal:dust_pyrotheum',4)],
            outputs: 'tinkers_reforged:blazing_copper_block',
            energy: 15000,
            id: `${id_prefix}blazing_copper_block`
        },
        {
            inputs: ['extendedcrafting:redstone_ingot',item.of('tinkers_reforged:blazing_copper_ingot',2)],
            outputs: item.of('tinkers_reforged:electrical_copper_ingot',2),
            energy: 15000,
            id: `${id_prefix}electrical_copper_ingot`
        },
        {
            inputs: ['minecraft:soul_sand',item.of('kubejs:ardite_ingot',4)],
            outputs: item.of('tinkers_reforged:lavium_ingot',2),
            energy: 15000,
            id: `${id_prefix}lavium_ingot`
        },
        {
            inputs: ['minecraft:magma_cream',item.of('tconstruct:cobalt_ingot',4)],
            outputs: item.of('tinkers_reforged:qivium_ingot',4),
            energy: 15000,
            id: `${id_prefix}qivium_ingot`
        },
        {
            inputs: 'simplyjetpacks:jetpack_vanilla1_armored',
            outputs: ['simplyjetpacks:jetpack_vanilla1',item.of('kubejs:ardite_plate',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_vanilla1_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_vanilla2_armored',
            outputs: ['simplyjetpacks:jetpack_vanilla2',item.of('kubejs:rose_gold_plate',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_vanilla2_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_vanilla3_armored',
            outputs: ['simplyjetpacks:jetpack_vanilla3',item.of('kubejs:slimesteel_plate',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_vanilla3_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_vanilla4_armored',
            outputs: ['simplyjetpacks:jetpack_vanilla4',item.of('berseria_sky:elinvonze_plate',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_vanilla4_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_te1_armored',
            outputs: ['simplyjetpacks:jetpack_te1',item.of('simplyjetpacks:armorplating_te1',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_te1_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_te2_armored',
            outputs: ['simplyjetpacks:jetpack_te2',item.of('simplyjetpacks:armorplating_te2',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_te2_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_te3_armored',
            outputs: ['simplyjetpacks:jetpack_te3',item.of('simplyjetpacks:armorplating_te3',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_te3_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_te4_armored',
            outputs: ['simplyjetpacks:jetpack_te4',item.of('simplyjetpacks:armorplating_te4',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_te4_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_mek1_armored',
            outputs: ['simplyjetpacks:jetpack_mek1',item.of('simplyjetpacks:armorplating_mek1',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_mek1_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_mek2_armored',
            outputs: ['simplyjetpacks:jetpack_mek2',item.of('simplyjetpacks:armorplating_mek2',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_mek2_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_mek3_armored',
            outputs: ['simplyjetpacks:jetpack_mek3',item.of('simplyjetpacks:armorplating_mek3',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_mek3_uncraft`
        },
        {
            inputs: 'simplyjetpacks:jetpack_mek4_armored',
            outputs: ['simplyjetpacks:jetpack_mek4',item.of('simplyjetpacks:armorplating_mek4',8)],
            energy: 100000,
            id: `${id_prefix}jetpack_mek4_uncraft`
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});