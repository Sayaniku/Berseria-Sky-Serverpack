onEvent('recipes', (e) => { 



        //Creative Mana Pool//
            e.custom({ 
                 "type": "mythicbotany:infusion",
                 "group": "infuser",
                 "output": {"item": "botania:creative_pool"},
                 "mana": 30000000,
                 "ingredients": [
                {"item": "botania:fabulous_pool"},
                {"item": "botania:manasteel_block"},
                {"item": "botania:terrasteel_block"},
                {"item": "botania:elementium_block"},
                {"item": "mythicbotany:alfsteel_block"},
                {"item": "kubejs:creative_crux"},
                {"item": "kubejs:mana_bucket"},
                {"item": "berseria_sky:ball_of_hakai"},
                {"type": "forge:nbt", 
                 "item": "botania:mana_tablet","count": 1,
                 "nbt": "{mana:500000,creative:1b}"}
                ],
                "fromColor": 255,
                "toColor": 8829
        })

        //Creative Mana Tablet//
           e.custom({ 
                "type": "mythicbotany:infusion",
                "group": "infuser",
                "output": {"type": "forge:nbt",
                "item": "botania:mana_tablet","count": 1,
                "nbt": "{mana:500000,creative:1b}"},
                "mana": 20000000,
                "ingredients": [
               {"item": "botania:mana_tablet"},
               {"item": "thermal:fluid_tank_creative_augment"},
               {"item": "kubejs:mana_bucket"},
               {"item": "botania:elf_glass"},
               {"item": "mythicbotany:helheim_rune"},
               {"item": "create:creative_blaze_cake"},
               {"item": "berseria_sky:ball_of_hakai"},
               {"item": "mythicbotany:alfsteel_armor_upgrade"},
               {"item": "mythicbotany:mana_collector"}
            ],
           "fromColor": 255,
           "toColor": 8829
        })

        //Creative Tank Augment//
        e.custom({ 
            "type": "mythicbotany:infusion",
            "group": "infuser",
            "output": {"item": "thermal:fluid_tank_creative_augment"},
            "mana": 15000000,
            "ingredients": [
            {"item": "berseria_sky:creative_augment_base"},
            {"item": "thermal:fluid_tank_augment"},
            {"item": "thermal_extra:advanced_fluid_tank_augment"},
            {"item": "thermal_extra:bigger_fluid_tank_augment"},
            {"item": "mob_grinding_utils:jumbo_tank"},
            {"item": "industrialforegoing:supreme_black_hole_tank"},
            {"item": "mekanism:ultimate_fluid_tank"}
            ],
            "fromColor": 255,
            "toColor": 8829
        })
})