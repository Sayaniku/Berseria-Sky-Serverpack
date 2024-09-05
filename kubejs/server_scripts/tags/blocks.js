onEvent('block.tags', event => {
    //Removed tags//
    event.remove('forge:ores/aluminum', ['tinkers_reforged:aluminum_ore'])
    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'create:copper_ore','immersiveengineering:ore_copper'])
    event.remove('forge:ores/lead', ['mekanism:lead_ore', 'immersiveengineering:ore_lead'])
    event.remove('forge:ores/uranium', ['bigreactors:yellorite_ore','immersiveengineering:ore_uranium'])
    event.remove('forge:ores/tin', ['mekanism:tin_ore'])
    event.remove('forge:ores/nickel', ['immersiveengineering:ore_nickel'])
    event.remove('forge:ores/silver', ['immersiveengineering:ore_silver'])
    event.remove('forge:ores/copper', ['mekanism:copper_ore', 'tconstruct:copper_ore', 'create:copper_ore'])
    event.remove('forge:ores/uraninite_dense', ['powah:uraninite_ore_dense'])
    event.remove('forge:ores/uraninite_poor', ['powah:uraninite_ore_poor'])
    event.remove('forge:ores', ['powah:uraninite_ore_dense', 'powah:uraninite_ore_poor','immersiveengineering:ore_uranium','tinkers_reforged:aluminum_ore'])
    event.remove('forge:ores/certus_quartz', ['appliedenergistics2:charged_quartz_ore'])
    event.remove('forge:chests', ['quark:oak_chest','quark:spruce_chest'])
    

    //Add Tags//
    event.add('forge:ores/aquamarine', 'astralsorcery:aquamarine_sand_ore')
    event.add('tconstruct:anvil_metal', ['berseria_sky:manronium_steel_block', 'kubejs:emerald_block', 'kubejs:sun_block', 'endless:infinity_block', 'kubejs:pink_slime_ingot_block', 'kubejs:fertilized_block', 'kubejs:platinum_block', 'kubejs:ardite_block', 'kubejs:moon_block', 'berseria_sky:queens_steel_block', 'berseria_sky:fayronium_block', 'kubejs:diamond_block', 'kubejs:aquamarine_block', 'kubejs:ender_biotite_block', 'kubejs:certus_quartz_crystal_charged_block', 'berseria_sky:elinvonze_block', 'kubejs:wither_skeleton_ingot_block', 'kubejs:hop_graphite_block', 'extendedcrafting:the_ultimate_block'])
    event.add('forge:storage_blocks', ['kubejs:ardite_block', 'berseria_sky:manyerium_block', 'berseria_sky:queens_steel_block', 'berseria_sky:fayronium_block', 'berseria_sky:manronium_steel_block', 'berseria_sky:raw_cobalt_block', 'berseria_sky:raw_ardite_block', 'berseria_sky:raw_aluminum_block', 'berseria_sky:raw_silver_block', 'berseria_sky:raw_iron_block', 'berseria_sky:raw_tin_block', 'berseria_sky:raw_zinc_block', 'berseria_sky:raw_uranium_block', 'berseria_sky:raw_lead_block', 'berseria_sky:raw_nickel_block', 'berseria_sky:raw_gold_block', 'berseria_sky:raw_copper_block', 'kubejs:emerald_block', 'kubejs:sun_block', 'endless:infinity_block', 'kubejs:pink_slime_ingot_block', 'kubejs:fertilized_block', 'kubejs:platinum_block', 'kubejs:moon_block'])
 
})