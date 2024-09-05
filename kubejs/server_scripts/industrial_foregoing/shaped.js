onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:minecraft/shaped/';
    const recipes = [
        {
            output: 'industrialforegoing:fluid_extractor',
            pattern: ["ILI","CFC","IPI"],
            key: {"I":'kubejs:diamond_ingot',
                  "F":'industrialforegoing:machine_frame_pity',
                  "C":'#forge:cobblestone',
                  "L":'minecraft:light_weighted_pressure_plate',
                  "P":'minecraft:piston'
                  },
                id: 'industrialforegoing:fluid_extractor'
        },
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
