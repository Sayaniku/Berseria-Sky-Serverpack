events.listen('recipes', function (e) {

    function multiservoPlate(input, qte, output, energy) {
        e.custom({ "type": "thermal:press", "input": [{ "item": input, "count": qte }], "energy": energy, "result": [{ "item": output }] })
    }
    /**********************************Thermal Plate****************************/
    multiservoPlate('astralsorcery:starmetal_ingot', 1, 'kubejs:starmetal_plate', 5000)
    multiservoPlate('botania:manasteel_ingot', 1, 'kubejs:manasteel_plate', 5000)
    multiservoPlate('botania:elementium_ingot', 1, 'kubejs:elementium_plate', 5000)
    multiservoPlate('botania:terrasteel_ingot', 1, 'kubejs:terrasteel_plate', 5000)
    multiservoPlate('bigreactors:cyanite_ingot', 1, 'kubejs:cyanite_plate', 5000)
    multiservoPlate('bigreactors:yellorium_ingot', 1, 'kubejs:yellorium_plate', 5000)
    multiservoPlate('create:brass_ingot', 1, 'create:brass_sheet', 5000)
    multiservoPlate('create:zinc_ingot', 1, 'createaddition:zinc_sheet', 5000)
    multiservoPlate('draconicevolution:awakened_draconium_ingot', 1, 'kubejs:awakened_draconium_plate', 5000)
    multiservoPlate('draconicevolution:draconium_ingot', 1, 'kubejs:draconium_plate', 5000)
    multiservoPlate('extendedcrafting:crystaltine_ingot', 1, 'kubejs:crystaltine_plate', 5000)
    multiservoPlate('extendedcrafting:enhanced_ender_ingot', 1, 'kubejs:enhanced_ender_plate', 5000)
    multiservoPlate('extendedcrafting:ender_ingot', 1, 'kubejs:ender_plate', 5000)
    multiservoPlate('extendedcrafting:redstone_ingot', 1, 'kubejs:redstone_plate', 5000)
    multiservoPlate('industrialforegoing:pink_slime_ingot', 1, 'kubejs:pink_slime_ingot_plate', 5000)
    multiservoPlate('immersiveengineering:ingot_aluminum', 1, 'immersiveengineering:plate_aluminum', 5000)
    multiservoPlate('immersiveengineering:ingot_hop_graphite', 1, 'kubejs:hop_graphite_plate', 5000)
    multiservoPlate('mythicbotany:alfsteel_ingot', 1, 'kubejs:alfsteel_plate', 5000)
    multiservoPlate('materialis:fairy_ingot', 1, 'kubejs:fairy_plate', 5000)
    multiservoPlate('mekanism:ingot_steel', 1, 'immersiveengineering:plate_steel', 5000)
    multiservoPlate('mekanism:ingot_osmium', 1, 'kubejs:osmium_plate', 5000)
    multiservoPlate('mekanism:ingot_antimatter', 1, 'mekanism:antimatter_plate', 5000)
    multiservoPlate('mekanism:ingot_refined_glowstone', 1, 'kubejs:refined_glowstone_plate', 5000)
    multiservoPlate('mekanism:ingot_refined_obsidian', 1, 'kubejs:refined_obsidian_plate', 5000)
    multiservoPlate('mysticalagriculture:soulium_ingot', 1, 'kubejs:soulium_plate', 5000)
    multiservoPlate('mysticalagriculture:prosperity_ingot', 1, 'kubejs:prosperity_plate', 5000)
    multiservoPlate('mysticalagriculture:inferium_ingot', 1, 'kubejs:inferium_plate', 5000)
    multiservoPlate('mysticalagriculture:prudentium_ingot', 1, 'kubejs:prudentium_plate', 5000)
    multiservoPlate('mysticalagriculture:tertium_ingot', 1, 'kubejs:tertium_plate', 5000)
    multiservoPlate('mysticalagriculture:imperium_ingot', 1, 'kubejs:imperium_plate', 5000)
    multiservoPlate('mysticalagriculture:supremium_ingot', 1, 'kubejs:supremium_plate', 5000)
    multiservoPlate('mysticalagradditions:insanium_ingot', 1, 'kubejs:insanium_plate', 5000)
    multiservoPlate('tconstruct:cobalt_ingot', 1, 'kubejs:cobalt_plate', 5000)
    multiservoPlate('tconstruct:manyullyn_ingot', 1, 'kubejs:manyullyn_plate', 5000)
    multiservoPlate('tconstruct:hepatizon_ingot', 1, 'kubejs:hepatizon_plate', 5000)
    multiservoPlate('tconstruct:rose_gold_ingot', 1, 'kubejs:rose_gold_plate', 5000)
    multiservoPlate('tconstruct:pig_iron_ingot', 1, 'kubejs:pig_iron_plate', 5000)
    multiservoPlate('tconstruct:queens_slime_ingot', 1, 'kubejs:queens_slime_plate', 5000)
    multiservoPlate('tconstruct:slimesteel_ingot', 1, 'kubejs:slimesteel_plate', 5000)
    multiservoPlate('blue_skies:falsite_ingot', 1, 'kubejs:falsite_plate', 5000)
    multiservoPlate('blue_skies:ventium_ingot', 1, 'kubejs:ventium_plate', 5000)
    multiservoPlate('blue_skies:horizonite_ingot', 1, 'kubejs:horizonite_plate', 5000)
    multiservoPlate('kubejs:ardite_ingot', 1, 'kubejs:ardite_plate', 5000)
    multiservoPlate('kubejs:platinum_ingot', 1, 'kubejs:platinum_plate', 5000)
    multiservoPlate('kubejs:diamond_ingot', 1, 'kubejs:diamond_plate', 5000)
    multiservoPlate('kubejs:sun_ingot', 1, 'kubejs:sun_plate', 5000)
    multiservoPlate('kubejs:moon_ingot', 1, 'kubejs:moon_plate', 5000)
    multiservoPlate('kubejs:emerald_ingot', 1, 'kubejs:emerald_plate', 5000)
    multiservoPlate('berseria_sky:elinvonze_ingot', 1, 'berseria_sky:elinvonze_plate', 5000)
    multiservoPlate('berseria_sky:manronium_steel_ingot', 1, 'berseria_sky:manronium_steel_plate', 5000)
    multiservoPlate('berseria_sky:manyerium_ingot', 1, 'berseria_sky:manyerium_plate', 5000)
    multiservoPlate('berseria_sky:fayronium_ingot', 1, 'berseria_sky:fayronium_plate', 5000)
    multiservoPlate('kubejs:ornium_ingot', 1, 'kubejs:ornium_plate', 5000)
    multiservoPlate('kubejs:tornium_ingot', 1, 'kubejs:tornium_plate', 5000)
    multiservoPlate('kubejs:ouranium_ingot', 1, 'kubejs:ouranium_plate', 5000)
    multiservoPlate('kubejs:lightium_ingot', 1, 'kubejs:lightium_plate', 5000)
    multiservoPlate('berseria_sky:queens_steel_ingot', 1, 'berseria_sky:queens_steel_plate', 5000)
    multiservoPlate('berseria_sky:comerald_ingot', 1, 'berseria_sky:comerald_plate', 50000)
    multiservoPlate('kubejs:creative_ingot', 1, 'kubejs:creative_plate', 50000)

    /***************************************Gear Thermal**********************************/
    function multiservoGear(input, qte, output, energy) {
        e.custom({ "type": "thermal:press", "input": [{ "item": input, "count": qte }, { "item": 'thermal:press_gear_die' }], "energy": energy, "result": [{ "item": output }] })
    }

    multiservoGear('kubejs:starmetal_plate', 4, 'kubejs:starmetal_gear', 5000)
    multiservoGear('create:brass_sheet', 4, 'kubejs:brass_gear', 5000)
    multiservoGear('createaddition:zinc_sheet', 4, 'kubejs:zinc_gear', 5000)
    multiservoGear('kubejs:manasteel_plate', 4, 'kubejs:manasteel_gear', 5000)
    multiservoGear('kubejs:elementium_plate', 4, 'kubejs:elementium_gear', 5000)
    multiservoGear('kubejs:terrasteel_plate', 4, 'kubejs:terrasteel_gear', 5000)
    multiservoGear('kubejs:cyanite_plate', 4, 'kubejs:cyanite_gear', 5000)
    multiservoGear('kubejs:yellorium_plate', 4, 'kubejs:yellorium_gear', 5000)
    multiservoGear('kubejs:crystaltine_plate', 4, 'kubejs:crystaltine_gear', 5000)
    multiservoGear('kubejs:enhanced_ender_plate', 4, 'kubejs:enhanced_ender_gear', 5000)
    multiservoGear('kubejs:redstone_plate', 4, 'kubejs:redstone_gear', 5000)
    multiservoGear('kubejs:ender_plate', 4, 'kubejs:ender_gear', 5000)
    multiservoGear('kubejs:awakened_draconium_plate', 4, 'kubejs:awakened_draconium_gear', 5000)
    multiservoGear('kubejs:draconium_plate', 4, 'kubejs:draconium_gear', 5000)
    multiservoGear('kubejs:pink_slime_ingot_plate', 4, 'kubejs:pink_slime_ingot_gear', 5000)
    multiservoGear('kubejs:hop_graphite_plate', 4, 'kubejs:hop_graphite_gear', 5000)
    multiservoGear('immersiveengineering:plate_aluminum', 4, 'kubejs:aluminium_gear', 5000)
    multiservoGear('kubejs:alfsteel_plate', 4, 'kubejs:alfsteel_gear', 5000)
    multiservoGear('kubejs:fairy_plate', 4, 'kubejs:fairy_gear', 5000)
    multiservoGear('immersiveengineering:plate_steel', 4, 'kubejs:steel_gear', 5000)
    multiservoGear('kubejs:osmium_plate', 4, 'kubejs:osmium_gear', 5000)
    multiservoGear('mekanism:antimatter_plate', 4, 'mekanism:antimatter_gear', 5000)
    multiservoGear('kubejs:refined_glowstone_plate', 4, 'kubejs:refined_glowstone_gear', 5000)
    multiservoGear('kubejs:refined_obsidian_plate', 4, 'kubejs:refined_obsidian_gear', 5000)
    multiservoGear('kubejs:soulium_plate', 4, 'kubejs:soulium_gear', 5000)
    multiservoGear('kubejs:prosperity_plate', 4, 'kubejs:prosperity_gear', 5000)
    multiservoGear('kubejs:inferium_plate', 4, 'kubejs:inferium_gear', 5000)
    multiservoGear('kubejs:prudentium_plate', 4, 'kubejs:prudentium_gear', 5000)
    multiservoGear('kubejs:tertium_plate', 4, 'kubejs:tertium_gear', 5000)
    multiservoGear('kubejs:imperium_plate', 4, 'kubejs:imperium_gear', 5000)
    multiservoGear('kubejs:supremium_plate', 4, 'kubejs:supremium_gear', 5000)
    multiservoGear('kubejs:insanium_plate', 4, 'kubejs:insanium_gear', 5000)
    multiservoGear('kubejs:manyullyn_plate', 4, 'kubejs:manyullyn_gear', 5000)
    multiservoGear('kubejs:hepatizon_plate', 4, 'kubejs:hepatizon_gear', 5000)
    multiservoGear('kubejs:rose_gold_plate', 4, 'kubejs:rose_gold_gear', 5000)
    multiservoGear('kubejs:pig_iron_plate', 4, 'kubejs:pig_iron_gear', 5000)
    multiservoGear('kubejs:queens_slime_plate', 4, 'kubejs:queens_slime_gear', 5000)
    multiservoGear('kubejs:slimesteel_plate', 4, 'kubejs:slimesteel_gear', 5000)
    multiservoGear('kubejs:cobalt_plate', 4, 'kubejs:cobalt_gear', 5000)
    multiservoGear('immersiveengineering:plate_uranium', 4, 'kubejs:uranium_gear', 5000)
    multiservoGear('kubejs:horizonite_plate', 4, 'kubejs:horizonite_gear', 5000)
    multiservoGear('powah:steel_energized', 4, 'kubejs:steel_energized_gear', 5000)
    multiservoGear('kubejs:ventium_plate', 4, 'kubejs:ventium_gear', 5000)
    multiservoGear('kubejs:falsite_plate', 4, 'kubejs:falsite_gear', 5000)
    multiservoGear('kubejs:ardite_plate', 4, 'kubejs:ardite_gear', 5000)
    multiservoGear('kubejs:diamond_plate', 4, 'thermal:diamond_gear', 5000)
    multiservoGear('kubejs:emerald_plate', 4, 'thermal:emerald_gear', 5000)
    multiservoGear('kubejs:platinum_plate', 4, 'kubejs:platinum_gear', 5000)
    multiservoGear('berseria_sky:elinvonze_plate', 4, 'berseria_sky:elinvonze_gear', 5000)
    multiservoGear('kubejs:moon_plate', 4, 'kubejs:moon_gear', 5000)
    multiservoGear('kubejs:sun_plate', 4, 'kubejs:sun_gear', 5000)
    multiservoGear('berseria_sky:fayronium_plate', 4, 'berseria_sky:fayronium_gear', 5000)
    multiservoGear('berseria_sky:manyerium_plate', 4, 'berseria_sky:manyerium_gear', 5000)
    multiservoGear('berseria_sky:manronium_steel_plate', 4, 'berseria_sky:manronium_steel_gear', 5000)
    multiservoGear('kubejs:ornium_plate', 4, 'kubejs:ornium_gear', 5000)
    multiservoGear('kubejs:tornium_plate', 4, 'kubejs:tornium_gear', 5000)
    multiservoGear('kubejs:ouranium_plate', 4, 'kubejs:ouranium_gear', 5000)
    multiservoGear('kubejs:lightium_plate', 4, 'kubejs:lightium_gear', 5000)
    multiservoGear('berseria_sky:queens_steel_plate', 4, 'berseria_sky:queens_steel_gear', 5000)
    multiservoGear('berseria_sky:comerald_plate', 4, 'berseria_sky:comerald_gear', 5000)

    //Cryothuem//
    e.custom(
        {
            "type": "thermal:bottler",
            "ingredients": [
                {
                    "item": "simplyjetpacks:unit_cryotheum_empty"
                },
                {
                    "fluid": "kubejs:cryotheum",
                    "amount": 8000
                }
            ],
            "result": [
                {
                    "item": "simplyjetpacks:unit_cryotheum"
                }
            ]
        })

    //Glowstone Elevation//
    e.custom(
        {
            "type": "thermal:bottler",
            "ingredients": [
                {
                    "item": "simplyjetpacks:unit_glowstone_empty"
                },
                {
                    "fluid": "thermal:glowstone",
                    "amount": 8000
                }
            ],
            "result": [
                {
                    "item": "simplyjetpacks:unit_glowstone"
                }
            ]
        })
})