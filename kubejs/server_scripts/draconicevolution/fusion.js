onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:draconicevolution/fusion/';

    const recipes = [
        {
            inputs: [
              { item: 'berseria_sky:elinvonze_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'berseria_sky:elinvonze_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'berseria_sky:elinvonze_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'berseria_sky:elinvonze_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'berseria_sky:prosperity_crystal' },
            total_energy: 10000000,
            result: { item:'kubejs:insanium_crystal'},
            id: `${id_prefix}insanium_crystal`
        },
        {
            inputs: [
              { item: 'extendedcrafting:nether_star_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'extendedcrafting:nether_star_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'extendedcrafting:nether_star_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'extendedcrafting:nether_star_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 10000000,
            result: { item:'mysticalagriculture:nether_star_seeds'},
            id: `${id_prefix}nether_star_seeds`
        },
        {
            inputs: [
              { item: 'minecraft:dragon_head'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'minecraft:dragon_head'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'minecraft:dragon_head'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'minecraft:dragon_head'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'mysticalagriculture:soulium_seed_base' },
            total_energy: 10000000,
            result: { item:'mysticalagriculture:dragon_egg_seeds'},
            id: `${id_prefix}dragon_egg_seeds`
        },
        {
            inputs: [
              { item: 'draconicevolution:awakened_draconium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:awakened_draconium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:awakened_draconium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:awakened_draconium_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 10000000,
            result: { item:'mysticalagriculture:awakened_draconium_seeds'},
            id: `${id_prefix}awakened_draconium_seeds`
        },
        {
            inputs: [
              { item: 'powah:nitro_crystal_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'powah:nitro_crystal_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'powah:nitro_crystal_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'powah:nitro_crystal_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 10000000,
            result: { item:'mysticalagriculture:nitro_crystal_seeds'},
            id: `${id_prefix}nitro_crystal_seeds`
        },
        {
            inputs: [
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mysticalagradditions:insanium_ingot_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "DRACONIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 10000000,
            result: { item: 'mysticalagriculture:insanium_ingot_seeds'},
            id: `${id_prefix}insanium_ingot_seeds`
        },
        {
            inputs: [
              { item: 'thermal_extra:zauvium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'thermal_extra:zauvium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'thermal_extra:zauvium_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'thermal_extra:zauvium_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 50000000,
            result: { item: 'mysticalagriculture:zauvium_seeds'},
            id: `${id_prefix}zauvium_seeds`
        },
        {
            inputs: [
              { item: 'draconicevolution:chaotic_core'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'mysticalagriculture:soulium_seed_base' },
            total_energy: 50000000,
            result: { item: 'mysticalagriculture:chaotic_seeds'},
            id: `${id_prefix}chaotic_seeds`
        },
        {
            inputs: [
              { item: 'kubejs:gaia_spirit_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'kubejs:gaia_spirit_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'kubejs:gaia_spirit_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'kubejs:gaia_spirit_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 50000000,
            result: { item: 'mysticalagriculture:gaia_spirit_seeds'},
            id: `${id_prefix}gaia_spirit_seeds`
        },
        {
            inputs: [
              { item: 'mythicbotany:alfsteel_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mythicbotany:alfsteel_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mythicbotany:alfsteel_block'},
              { item: 'mysticalagradditions:insanium_block'},
              { item: 'mythicbotany:alfsteel_block'},
              { item: 'mysticalagradditions:insanium_block'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'kubejs:insanium_seed' },
            total_energy: 50000000,
            result: { item: 'mysticalagriculture:alfsteel_seeds'},
            id: `${id_prefix}alfsteel_seeds`
        },
        {
            inputs: [
              { item: 'kubejs:creative_ingot'},
              { item: 'kubejs:creative_ingot'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'draconicevolution:chaos_shard'},
              { item: 'draconicevolution:chaos_shard'},
              { item: 'kubejs:creative_ingot'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'draconicevolution:chaotic_core'},
              { item: 'draconicevolution:chaos_shard'},
              { item: 'draconicevolution:chaos_shard'},
              { item: 'kubejs:creative_ingot'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'envirocore:xerothium' },
            total_energy: 300000000,
            result: { item: 'berseria_sky:creative_core'},
            id: `${id_prefix}creative_core`
        },
        {
            inputs: [
              { item: 'draconicevolution:chaotic_energy_module'},
              { item: 'draconicevolution:chaotic_energy_module'},
              { item: 'berseria_sky:creative_energy_core'},
              { item: 'berseria_sky:creative_energy_core'},
              { item: 'immersiveengineering:capacitor_creative'},
              { item: 'immersiveengineering:capacitor_creative'},
              { item: 'kubejs:creative_crux'},
              { item: 'kubejs:creative_crux'},
              { item: 'berseria_sky:creative_energy_core'},
              { item: 'berseria_sky:creative_energy_core'},
              { item: 'create:creative_motor'},
              { item: 'create:creative_motor'}
            ],
            tier: "CHAOTIC",
            catalyst: { item: 'draconicevolution:chaotic_capacitor' },
            total_energy: 1024000000,
            result: { item: 'draconicevolution:creative_capacitor'},
            id: `${id_prefix}draconic_creative_capacitor`
        }

];

recipes.forEach((recipe) => {
    let ingredient = [];
    recipe.inputs.forEach((input) => {
        ingredient.push(input);
    });

    event
        .custom({
            type: 'draconicevolution:fusion_crafting',
            tier: recipe.tier,
            catalyst: recipe.catalyst,
            total_energy: recipe.total_energy,
            ingredients: ingredient,
            result: recipe.result
        })
        .id(recipe.id);
});
});