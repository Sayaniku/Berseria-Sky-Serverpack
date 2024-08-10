events.listen('recipes', function (e) { 

/*****************************Gravel****************************************/
//Wood Crook//
e.shaped(item.of('exnihilosequentia:crook_wood', 1), ['SS', ' S', ' S'], {
    S: 'minecraft:stick', 
})

//Coal//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.20, "mesh": "flint" },
        { "chance": 0.25, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.5, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:coal" }
})
//Lapis//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.5, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:lapis_lazuli" }
})
//Aluminum//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.5, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:aluminum_piece_ore" }
})

//Iron//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.5, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:iron_piece_ore" }
})

//Copper//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:copper_piece_ore" }
})
//Nickel//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.5, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:nickel_piece_ore" }
})
//Lead//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.5, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:lead_piece_ore" }
})
//Tin//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:tin_piece_ore" }
})
//Silver//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:silver_piece_ore" }
})
//Uranium//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:uranium_piece_ore" }
})
//Zinc//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.05, "mesh": "flint" },
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:zinc_piece_ore" }
})
//Flint//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.2, "mesh": "string" },
        { "chance": 0.3, "mesh": "flint" },
        { "chance": 0.5, "mesh": "iron" },
        { "chance": 0.6, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:flint" }
})
//Diamond//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.02, "mesh": "iron" },
        { "chance": 0.05, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.35, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:diamond" }
})
//Emerald//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:gravel" },
    "rolls": [
        { "chance": 0.02, "mesh": "iron" },
        { "chance": 0.05, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.35, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:emerald" }
})

/********************************************Sand********************************/
//Seed Blue Coral//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_blue_coral" }
})
//Seed Pink Coral//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_pink_coral" }
})
//Seed Purple Coral//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_purple_coral" }
})
//Seed Red Coral//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_red_coral" }
})
//Seed Yellow Coral//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_yellow_coral" }
})
//Turtle Egg//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:turtle_egg" }
})
//Seeagrass//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:seagrass" }
})
//Kelp Seed//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_kelp" }
})
//Pickle Seed//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "waterlogged": true,
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_pickle" }
})
//Cocoa Beans//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.03, "mesh": "string" },
        { "chance": 0.2, "mesh": "flint" },
        { "chance": 0.3, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:cocoa_beans" }
})
//Slimy Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "tconstruct:sky_slime_grass_seeds" }
})
//Prismarine Crystal//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.5, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:prismarine_crystals" }
})
//Prismarine Crystal//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.5, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:prismarine_shard" }
})
//Ruby//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "thermal:ruby" }
})
//Sapphire//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "thermal:sapphire" }
})
//Niter//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "thermal:niter" }
})
//Cinnarbar//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:sand" },
    "rolls": [
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "thermal:cinnabar" }
})
/********************************************Dust****************************/
//Gunpower//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.2, "mesh": "flint" },
        { "chance": 0.3, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:gunpowder" }
})
//Bone Meal//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.2, "mesh": "string" },
        { "chance": 0.2, "mesh": "flint" },
        { "chance": 0.3, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:bone_meal" }
})
//Sky Dust//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "appliedenergistics2:sky_dust" }
})
//Redstone//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.150, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:redstone" }
})
//Blaze Powder//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.05, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:blaze_powder" }
})
//Glowstone//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.05, "mesh": "iron" },
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.3, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:glowstone_dust" }
})
//Earth Slimy Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.05, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "tconstruct:earth_slime_grass_seeds" }
})
//Earth Slimy Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:dust" },
    "rolls": [
        { "chance": 0.05, "mesh": "emerald" },
        { "chance": 0.1, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:amethyst_shard" }
})
/********************************************Netherrack*******************************/
//Gold//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_netherrack" },
    "rolls": [
        { "chance": 0.25, "mesh": "flint" },
        { "chance": 0.3, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:gold_piece_ore" }
})
//Ardite//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_netherrack" },
    "rolls": [
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:ardite_piece_ore" }
})
//Cobalt//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_netherrack" },
    "rolls": [
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.4, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:cobalt_piece_ore" }
})
//Netherite Scrap//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_netherrack" },
    "rolls": [
        { "chance": 0.010, "mesh": "iron" },
        { "chance": 0.015, "mesh": "diamond" },
        { "chance": 0.030, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:netherite_scrap" }
})
//Slimy Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_netherrack" },
    "rolls": [
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.5, "mesh": "netherite" }
    ],
    "result": { "item": "tconstruct:blood_slime_grass_seeds" }
})

/*********************************************Dirt***************************************/
//Peddle Andesite//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_andesite" }
})
//Peddle Basalt//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_basalt" }
})
//Peddle BlackStone//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_blackstone" }
})
//Peddle Diorite//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_diorite" }
})
//Peddle Granite//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_granite" }
})
//Peddle Stone//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.4, "mesh": "string" },
        { "chance": 0.5, "mesh": "flint" },
        { "chance": 0.6, "mesh": "iron" },
        { "chance": 0.7, "mesh": "diamond" },
        { "chance": 0.8, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:pebble_stone" }
})
//Ancien Spore//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.2, "mesh": "flint" },
        { "chance": 0.25, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.5, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:ancient_spores" }
})
//Acacia Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_acacia" }
})
//bamboo Seed//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_bamboo" }
})
//Beetroot Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:beetroot_seeds" }
})
//Berry Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_berry" }
})
//Birch Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_birch" }
})
//Cactus Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_cactus" }
})
//Carrot Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_carrot" }
})
//DarkOak Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_darkoak" }
})
//Fern Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_fern" }
})
//Grass Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:grass_seeds" }
})
//Jungle Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_jungle" }
})
//Large Fern Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_large_fern" }
})
//Melon Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:melon_seeds" }
})
//Oak Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_oak" }
})
//Potato Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_potato" }
})
//Pumpkin Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:pumpkin_seeds" }
})
//Spruce Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_spruce" }
})
//Sugarcane Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "exnihilosequentia:seed_sugarcane" }
})
//Wheat Seeds//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:dirt" },
    "rolls": [
        { "chance": 0.05, "mesh": "string" },
        { "chance": 0.1, "mesh": "flint" },
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:wheat_seeds" }
})
/**********************************SkyStone****************************************/
//Certuz Quartz Crystal//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_skystone" },
    "rolls": [
        { "chance": 0.05, "mesh": "iron" },
        { "chance": 0.1, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "appliedenergistics2:certus_quartz_crystal" }
})
//Osmium//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_skystone" },
    "rolls": [
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.2, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:osmium_piece_ore" }
})
//Sulfur Dust//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_skystone" },
    "rolls": [
        { "chance": 0.2, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.4, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "thermal:sulfur_dust" }
})
//Uraninite Poor//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_skystone" },
    "rolls": [
        { "chance": 0.1, "mesh": "iron" },
        { "chance": 0.3, "mesh": "diamond" },
        { "chance": 0.6, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "powah:uraninite_raw_poor" }
})


//****************************************End Stone********************************************//

//Ender Pearl//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_end_stone" },
    "rolls": [
        { "chance": 0.005, "mesh": "iron" },
        { "chance": 0.01, "mesh": "diamond" },
        { "chance": 0.1, "mesh": "emerald" },
        { "chance": 0.2, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:ender_pearl" }
})

//Ender Slime Grass//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_end_stone" },
    "rolls": [
        { "chance": 0.10, "mesh": "iron" },
        { "chance": 0.15, "mesh": "diamond" },
        { "chance": 0.2, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "tconstruct:ender_slime_grass_seeds" }
})

//Prosperity Ore Piece//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "exnihilosequentia:crushed_end_stone" },
    "rolls": [
        {"chance": 0.20, "mesh": "netherite"}
    ],
    "result": { "item": "berseria_sky:prosperity_piece_ore" }
})

/***********************************************Soul Sand**********************************/

//Ghast Tear//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:soul_sand" },
    "rolls": [
        { "chance": 0.05, "mesh": "diamond" },
        { "chance": 0.02, "mesh": "emerald" },
        { "chance": 0.3, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:ghast_tear" }
})

//Nether Wart//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:soul_sand" },
    "rolls": [
        { "chance": 0.10, "mesh": "string" },
        { "chance": 0.12, "mesh": "iron" },
        { "chance": 0.15, "mesh": "diamond" },
        { "chance": 0.20, "mesh": "emerald" },
        { "chance": 0.30, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:nether_wart" }
})

//Quartz//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:soul_sand" },
    "rolls": [
        { "chance": 0.10, "mesh": "string" },
        { "chance": 0.12, "mesh": "iron" },
        { "chance": 0.15, "mesh": "diamond" },
        { "chance": 0.20, "mesh": "emerald" },
        { "chance": 0.30, "mesh": "netherite" }
    ],
    "result": { "item": "minecraft:quartz" }
})

//Soulium Ore Piece//
e.custom({
    "type": "exnihilosequentia:sieve",
    "input": { "item": "minecraft:soul_sand" },
    "rolls": [
        { "chance": 0.15, "mesh": "netherite" }
    ],
    "result": { "item": "berseria_sky:soulium_piece_ore" }
})

/*************************************Heat******************************************/

function Heat(Block ,Hot, Lit) {
e.custom ({
         "type": "exnihilosequentia:heat",
         "block": Block,
         "amount": Hot,
         "state": {"lit": Lit}})
}

Heat('minecraft:campfire', 2, true)
Heat('minecraft:magma_block', 4)
Heat('minecraft:soul_campfire', 5, true)
Heat('berseria_sky:heat_sand', 10)
Heat('berseria_sky:manyerium_block', 20)
Heat('mysticalagradditions:insanium_block', 30)
Heat('berseria_sky:manronium_steel_block', 40)
Heat('envirocore:xerothium', 50)
Heat('mekanism:block_antimatter', 100)
Heat('kubejs:ouranium_ingot_block', 200)
Heat('extendedcrafting:the_ultimate_block', 1000)





})