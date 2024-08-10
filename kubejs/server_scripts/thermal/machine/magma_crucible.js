onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:thermal/crucible/';
    const recipes = [
        {
            output: Fluid.of('kubejs:molten_manronium_steel', 144),
            input: 'berseria_sky:manronium_steel_ingot',
            energy: 200000,
            id: `${id_prefix}molten_manronium_steel`
        },
        {
            output: Fluid.of('mysticalagradditions:molten_supremium', 144),
            input: 'mysticalagriculture:supremium_ingot',
            energy: 50000,
            id: `${id_prefix}molten_supremium`
        },
        {
            output: Fluid.of('tconstruct:molten_platinum', 144),
            input: 'kubejs:platinum_ingot',
            energy: 20000,
            id: `${id_prefix}molten_platinum`
        },
        {
            output: Fluid.of('kubejs:aerotheum', 250),
            input: 'thermal:dust_aerotheum',
            energy: 100000,
            id: `${id_prefix}zephyrean_aerotheum`
        },
        {
            output: Fluid.of('kubejs:pyrotheum', 250),
            input: 'thermal:dust_pyrotheum',
            energy: 100000,
            id: `${id_prefix}blazing_pyrotheum`
        },
        {
            output: Fluid.of('kubejs:petrotheum', 250),
            input: 'thermal:dust_petrotheum',
            energy: 100000,
            id: `${id_prefix}tectonic_petrotheum`
        },
        {
            output: Fluid.of('kubejs:cryotheum', 250),
            input: 'thermal:dust_cryotheum',
            energy: 100000,
            id: `${id_prefix}gelid_cryotheum`
        },
        {
            output: Fluid.of('kubejs:mana', 250),
            input: 'thermal:dust_mana',
            energy: 150000,
            id: `${id_prefix}primal_mana`
        },
        {
            output: Fluid.of('tconstruct:molten_diamond', 144),
            input: 'minecraft:diamond',
            energy: 50000,
            id: `${id_prefix}molten_diamond`
        },
        {
            output: Fluid.of('tconstruct:molten_emerald', 144),
            input: 'minecraft:emerald',
            energy: 50000,
            id: `${id_prefix}molten_emerald`
        },
        {
            output: Fluid.of('tconstruct:molten_ender', 250),
            input: 'minecraft:ender_eye',
            energy: 50000,
            id: `${id_prefix}molten_ender`
        },
];

recipes.forEach((recipe) => {
    event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
});
});