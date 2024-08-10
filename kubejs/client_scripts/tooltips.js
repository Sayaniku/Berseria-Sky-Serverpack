onEvent('item.tooltip', tooltip => {

    //Seed//
    tooltip.add('kubejs:inferium_seed', ['Tier: §e1'])
    tooltip.add('kubejs:prudentium_seed', ['Tier: §22'])
    tooltip.add('kubejs:tertium_seed', ['Tier: §63'])
    tooltip.add('kubejs:imperium_seed', ['Tier: §94'])
    tooltip.add('kubejs:supremium_seed', ['Tier: §45'])
    tooltip.add('kubejs:insanium_seed', ['Tier: §56'])
    tooltip.add(['kubejs:ornium_seed', 'kubejs:ornium_pickaxe', 'kubejs:ornium_shovel', 'kubejs:ornium_axe', 'kubejs:ornium_sword', 'kubejs:ornium_hoe', 'kubejs:ornium_helmet', 'kubejs:ornium_chestplate', 'kubejs:ornium_leggings', 'kubejs:ornium_boots',], ['Tier: §d7'])
    tooltip.add(['kubejs:lightium_seed', 'kubejs:lightium_pickaxe', 'kubejs:lightium_sword', 'kubejs:lightium_axe', 'kubejs:lightium_shovel', 'kubejs:lightium_hoe', 'kubejs:lightium_helmet', 'kubejs:lightium_chestplate', 'kubejs:lightium_leggings', 'kubejs:lightium_boots'], ['Tier: §38'])
    tooltip.add(['kubejs:tornium_seed', 'kubejs:tornium_sword', 'kubejs:tornium_pickaxe', 'kubejs:tornium_axe', 'kubejs:tornium_shovel', 'kubejs:tornium_hoe', 'kubejs:tornium_chestplate', 'kubejs:tornium_leggings', 'kubejs:tornium_boots', 'kubejs:tornium_helmet'], ['Tier: §79'])
    tooltip.add(['kubejs:ouranium_seed', 'kubejs:ouranium_pickaxe', 'kubejs:ouranium_sword', 'kubejs:ouranium_axe', 'kubejs:ouranium_shovel', 'kubejs:ouranium_hoe', 'kubejs:ouranium_helmet', 'kubejs:ouranium_chestplate', 'kubejs:ouranium_leggings', 'kubejs:ouranium_boots'], ['Tier: §210'])

    //Furnaces//
    tooltip.add('ironfurnaces:copper_furnace', ['§4Smelting Time: 180 Ticks'])
    tooltip.add('ironfurnaces:iron_furnace', ['§4Smelting Time: 160 Ticks'])
    tooltip.add('ironfurnaces:silver_furnace', ['§4Smelting Time: 140 Ticks'])
    tooltip.add('ironfurnaces:gold_furnace', ['§4Smelting Time: 120 Ticks'])
    tooltip.add('ironfurnaces:diamond_furnace', ['§4Smelting Time: 80 Ticks'])
    tooltip.add('ironfurnaces:emerald_furnace', ['§4Smelting Time: 40 Ticks'])
    tooltip.add('ironfurnaces:crystal_furnace', ['§4Smelting Time: 40 Ticks'])
    tooltip.add('ironfurnaces:obsidian_furnace', ['§4Smelting Time: 20 Ticks'])
    tooltip.add('ironfurnaces:netherite_furnace', ['§4Smelting Time: 5 Ticks'])
    tooltip.add('ironfurnaces:million_furnace', ['§4Smelting Time: 2 Ticks'])

    //Chest/Barrel//
    tooltip.add(['ironchest:copper_chest','metalbarrels:copper_barrel'], ['§4Slot: 45'])
    tooltip.add(['ironchest:iron_chest','metalbarrels:iron_barrel'], ['§4Slot: 54'])
    tooltip.add(['ironchest:silver_chest','metalbarrels:silver_barrel'], ['§4Slot: 72'])
    tooltip.add(['ironchest:gold_chest','metalbarrels:gold_barrel'], ['§4Slot: 81'])
    tooltip.add(['ironchest:diamond_chest','metalbarrels:diamond_barrel','ironchest:obsidian_chest','metalbarrels:obsidian_barrel','ironchest:crystal_chest','metalbarrels:crystal_barrel'], ['§4Slot: 108'])
    tooltip.add('metalbarrels:netherite_barrel',['§4Slot: 135']) 


    //Other//
    tooltip.add('kubejs:wither_skeleton_fragment', ['§4Original By Wither Skeleton Tweaks'])
    tooltip.add('endless:singularity', ['§4Can`t Be Hidden from JEI'])
    tooltip.add('berseria_sky:enderman_cake', ['§5Refill End Cake!'])
    tooltip.add('create:blaze_cake', ['§5Refill Nether Cake!'])
    tooltip.add('berseria_sky:creeper_cake', ['§5Refill Overworld Cake!'])
    tooltip.add('tconstruct:ender_slime_sapling', ['§4Spawn in the END'])
    tooltip.add('tconstruct:blood_slime_sapling', ['§4Use Bone Meal on Bloody Nylium'])
    tooltip.add('tconstruct:sky_slime_sapling', ['§4Spawn in Overworld (Dont Spawn In SkyBlock)'])
    tooltip.add('berseria_sky:heat_sand', ['§4Y:1-32'])
    tooltip.addAdvanced(['berseria_sky:manronium_steel_augment'], (item, advanced, text) => {
    text.add(1, Text.of('§6Improve base attributes. Other augments may be more effective as a result.'))
    })

    //********************************Crystaux*****************************************/
    tooltip.addAdvanced(['kubejs:insanium_crystal'], (item, advanced, text) => {
        text.add(1, Text.of('§7Insanium -> Ornium'))
        text.add(2, Text.of('§7Uses Left: §cUnlimited'))
    })
    tooltip.addAdvanced(['kubejs:ornium_crystal'], (item, advanced, text) => {
        text.add(1, Text.of('§7Ornium -> Lightium'))
        text.add(2, Text.of('§7Uses Left: §cUnlimited'))
    })
    tooltip.addAdvanced(['kubejs:lightium_crystal'], (item, advanced, text) => {
        text.add(1, Text.of('§7Lightium -> Tornium'))
        text.add(2, Text.of('§7Uses Left: §cUnlimited'))
    })
    tooltip.addAdvanced(['kubejs:tornium_crystal'], (item, advanced, text) => {
        text.add(1, Text.of('§7Tornium -> Ouranium'))
        text.add(2, Text.of('§7Uses Left: §cUnlimited'))
    })

})