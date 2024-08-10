events.listen('recipes', function (e) {

    //Seeds//
    function seedsTier2(input1, input2, result, isMob) {
        let seed = ''
        if (isMob) seed = 'mysticalagriculture:soulium_seed_base'
        else seed = 'kubejs:prudentium_seed'
        e.custom({

            "type": "create:mixing",
            "ingredients": [
                { "item": input1 },
                { "item": input1 },
                { "item": input1 },
                { "item": input1 },
                { "item": seed },
                { "item": input2 },
                { "item": input2 },
                { "item": input2 },
                { "item": input2 }
            ],
            "results": [
                { "item": result }],
            "heatRequirement": "heated"
        })
    }
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:dye_agglomeratio', 'mysticalagriculture:dye_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:nether_agglomeratio', 'mysticalagriculture:nether_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:coral_agglomeratio', 'mysticalagriculture:coral_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:honey_agglomeratio', 'mysticalagriculture:honey_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'immersiveengineering:storage_aluminum', 'mysticalagriculture:aluminum_seeds', false)

    seedsTier2('mysticalagriculture:prudentium_block', 'thermal:copper_block', 'mysticalagriculture:copper_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'compressium:coal_1', 'mysticalagriculture:coal_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'thermal:apatite_block', 'mysticalagriculture:apatite_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'astralsorcery:marble_raw', 'mysticalagriculture:marble_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'thermal:sulfur_dust', 'mysticalagriculture:sulfur_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'thermal:niter_dust', 'mysticalagriculture:saltpeter_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'industrialforegoing:plastic', 'mysticalagriculture:rubber_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'appliedenergistics2:silicon', 'mysticalagriculture:silicon_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:amethyst_block', 'mysticalagriculture:amethyst_seeds', false)
    seedsTier2('mysticalagriculture:prudentium_block', 'mysticalagriculture:prudentium_ingot_block', 'mysticalagriculture:prudentium_ingot_seeds', false)

    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:cooked_chicken', 'mysticalagriculture:chicken_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:white_wool', 'mysticalagriculture:sheep_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:cooked_beef', 'mysticalagriculture:cow_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:ink_sac', 'mysticalagriculture:squid_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:cooked_porkchop', 'mysticalagriculture:pig_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:cod', 'mysticalagriculture:fish_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:scute', 'mysticalagriculture:turtle_seeds', true)
    seedsTier2('mysticalagriculture:prudentium_block', 'minecraft:slime_block', 'mysticalagriculture:slime_seeds', true)

    //Create Pressing Plate//
    function Pressing(input, result){
    e.custom({
        "type": "create:pressing",
        "ingredients": [
            { "item": input }],
        "results": [
            { "item": result }],
    })
}
    Pressing('draconicevolution:awakened_draconium_ingot', 'kubejs:awakened_draconium_plate')
    Pressing('draconicevolution:draconium_ingot', 'kubejs:draconium_plate')
    Pressing('bigreactors:yellorium_ingot', 'kubejs:yellorium_plate')
    Pressing('bigreactors:cyanite_ingot', 'kubejs:cyanite_plate')
    Pressing('astralsorcery:starmetal_ingot', 'kubejs:starmetal_plate')
    Pressing('botania:terrasteel_ingot', 'kubejs:terrasteel_plate')
    Pressing('botania:elementium_ingot', 'kubejs:elementium_plate')
    Pressing('botania:manasteel_ingot', 'kubejs:manasteel_plate')
    Pressing('immersiveengineering:ingot_aluminum', 'immersiveengineering:plate_aluminum')
    Pressing('immersiveengineering:ingot_hop_graphite', 'kubejs:hop_graphite_plate')
    Pressing('thermal:bronze_ingot', 'thermal:bronze_plate')
    Pressing('thermal:constantan_ingot', 'thermal:constantan_plate')
    Pressing('thermal:copper_ingot', 'thermal:copper_plate')
    Pressing('thermal:electrum_ingot', 'thermal:electrum_plate')
    Pressing('thermal:enderium_ingot', 'thermal:enderium_plate')
    Pressing('thermal:invar_ingot', 'thermal:invar_plate')
    Pressing('thermal:lead_ingot', 'thermal:lead_plate')
    Pressing('thermal:lumium_ingot', 'thermal:lumium_plate')
    Pressing('thermal:nickel_ingot', 'thermal:nickel_plate')
    Pressing('thermal:signalum_ingot', 'thermal:signalum_plate')
    Pressing('thermal:silver_ingot', 'thermal:silver_plate')
    Pressing('thermal:tin_ingot', 'thermal:tin_plate')
    Pressing('thermal_extra:dragon_enderium_ingot', 'thermal_extra:dragon_enderium_plate')
    Pressing('thermal_extra:dragon_bronze_ingot', 'thermal_extra:dragon_bronze_plate')
    Pressing('thermal_extra:drownium_ingot', 'thermal_extra:drownium_plate')
    Pressing('thermal_extra:vukaium_ingot', 'thermal_extra:vukaium_plate')
    Pressing('thermal_extra:nectium_ingot', 'thermal_extra:nectium_plate')
    Pressing('thermal_extra:polarium_ingot', 'thermal_extra:polarium_plate')
    Pressing('thermal_extra:nebulium_ingot', 'thermal_extra:nebulium_plate')
    Pressing('thermal_extra:zauvium_ingot', 'thermal_extra:zauvium_plate')
    Pressing('materialis:fairy_ingot', 'kubejs:fairy_plate')
    Pressing('mekanism:ingot_steel', 'immersiveengineering:plate_steel')
    Pressing('mekanism:ingot_uranium', 'immersiveengineering:plate_uranium')
    Pressing('mekanism:ingot_osmium', 'kubejs:osmium_plate')
    Pressing('mekanism:ingot_refined_glowstone', 'kubejs:refined_glowstone_plate')
    Pressing('mekanism:ingot_refined_obsidian', 'kubejs:refined_obsidian_plate')
    Pressing('minecraft:gold_ingot', 'thermal:gold_plate')
    Pressing('minecraft:iron_ingot', 'thermal:iron_plate')
    Pressing('mythicbotany:alfsteel_ingot', 'kubejs:alfsteel_plate')
    Pressing('mysticalagriculture:prosperity_ingot', 'kubejs:prosperity_plate')
    Pressing('mysticalagriculture:soulium_ingot', 'kubejs:soulium_plate')
    Pressing('mysticalagriculture:inferium_ingot', 'kubejs:inferium_plate')
    Pressing('mysticalagriculture:prudentium_ingot', 'kubejs:prudentium_plate')
    Pressing('mysticalagriculture:tertium_ingot', 'kubejs:tertium_plate')
    Pressing('mysticalagriculture:imperium_ingot', 'kubejs:imperium_plate')
    Pressing('mysticalagriculture:supremium_ingot', 'kubejs:supremium_plate')
    Pressing('mysticalagradditions:insanium_ingot', 'kubejs:insanium_plate')
    Pressing('minecraft:netherite_ingot', 'thermal:netherite_plate')
    Pressing('extendedcrafting:crystaltine_ingot', 'kubejs:crystaltine_plate')
    Pressing('extendedcrafting:ender_ingot', 'kubejs:ender_plate')
    Pressing('extendedcrafting:enhanced_ender_ingot', 'kubejs:enhanced_ender_plate')
    Pressing('extendedcrafting:redstone_ingot', 'kubejs:redstone_plate')
    Pressing('blue_skies:ventium_ingot', 'kubejs:ventium_plate')
    Pressing('blue_skies:falsite_ingot', 'kubejs:falsite_plate')
    Pressing('blue_skies:horizonite_ingot', 'kubejs:horizonite_plate')
    Pressing('tconstruct:cobalt_ingot', 'kubejs:cobalt_plate')
    Pressing('tconstruct:manyullyn_ingot', 'kubejs:manyullyn_plate')
    Pressing('tconstruct:hepatizon_ingot', 'kubejs:hepatizon_plate')
    Pressing('tconstruct:pig_iron_ingot', 'kubejs:pig_iron_plate')
    Pressing('industrialforegoing:pink_slime_ingot', 'kubejs:pink_slime_ingot_plate')
    Pressing('tconstruct:queens_slime_ingot', 'kubejs:queens_slime_plate')
    Pressing('tconstruct:rose_gold_ingot', 'kubejs:rose_gold_plate')
    Pressing('tconstruct:slimesteel_ingot', 'kubejs:slimesteel_plate')
    Pressing('berseria_sky:elinvonze_ingot', 'berseria_sky:elinvonze_plate')
    Pressing('berseria_sky:manyerium_ingot', 'berseria_sky:manyerium_plate')
    Pressing('berseria_sky:fayronium_ingot', 'berseria_sky:fayronium_plate')
    Pressing('berseria_sky:queens_steel_ingot', 'berseria_sky:queens_steel_plate')
    Pressing('berseria_sky:manronium_steel_ingot', 'berseria_sky:manronium_steel_plate')
    Pressing('berseria_sky:comerald_ingot', 'berseria_sky:comerald_plate')
    Pressing('kubejs:ardite_ingot', 'kubejs:ardite_plate')
    Pressing('mekanism:ingot_antimatter', 'mekanism:antimatter_plate')
    Pressing('kubejs:diamond_ingot', 'kubejs:diamond_plate')
    Pressing('kubejs:ornium_ingot', 'kubejs:ornium_plate')
    Pressing('kubejs:lightium_ingot', 'kubejs:lightium_plate')
    Pressing('kubejs:emerald_ingot', 'kubejs:emerald_plate')
    Pressing('kubejs:ouranium_ingot', 'kubejs:ouranium_plate')
    Pressing('kubejs:platinum_ingot', 'kubejs:platinum_plate')
    Pressing('kubejs:moon_ingot', 'kubejs:moon_plate')
    Pressing('kubejs:sun_ingot', 'kubejs:sun_plate')




})