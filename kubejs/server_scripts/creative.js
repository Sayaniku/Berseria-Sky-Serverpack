events.listen('recipes', function (e) {


              //Creative Jetpack//
              e.custom({
              "type": "minecraft:crafting_shaped",
              "pattern": ["ABA","CDE","AFA"],
              "key": {
                "A": {"item": "kubejs:creative_ingot"},
                "B": {"item": "simplyjetpacks:jetpack_te5_enderium",},
                "C": {"item": "simplyjetpacks:jetpack_mek4_armored"},
                "D": {"item": "extendedcrafting:ultimate_singularity"},
                "E": {"item": "simplyjetpacks:jetpack_vanilla4_armored"},
                "F": {"tag": "forge:angelring"}
              },
               "result": {"item": "simplyjetpacks:jetpack_creative"}
              })
              //Creative Jetpack Armored//
              e.custom({
                "type": "minecraft:crafting_shaped",
                "pattern": ["BAB","BBB","BBB"],
                "key": {
                  "A": {"item": "simplyjetpacks:jetpack_creative"},
                  "B": {"item": "kubejs:creative_plate",},
                },
                 "result": {"item": "simplyjetpacks:jetpack_creative_armored"}
                })
                //Creative Augment//
                e.custom({
                  "type": "minecraft:crafting_shaped",
                  "pattern": ["ABA","BCB","DBD"],
                  "key": {
                    "A": {"item": "thermal_extra:advanced_augment_base"},
                    "B": {"item": "kubejs:creative_plate"},
                    "C": {"item": "extendedcrafting:ultimate_singularity"},
                    "D": {"item": "thermal_extra:augment_base"}
                  },
                  "result": {"item": "berseria_sky:creative_augment_base"}
                })
                //Creative RF Coil//
                e.custom({
                  "type": "astralsorcery:altar",
                  "altar_type": 3,
                  "duration": 1200,
                  "starlight": 3200,
                  "pattern": [
                    "ABBBA",
                    "BGHCB",
                    "BHIHB",
                    "BEHFB",
                    "DBBBD"
                  ],
                  "key": {
                    "A": {"item": "thermal:rf_coil_augment"},
                    "B": {"item": "materialis:pink_slime_crystal"},
                    "C": {"item": "thermal:rf_coil_xfer_augment"},
                    "D": {"item": "thermal_extra:advanced_rf_coil_augment"},
                    "E": {"item": "thermal_extra:advanced_rf_coil_storage_augment"},
                    "F": {"item": "thermal_extra:advanced_rf_coil_xfer_augment"},
                    "G": {"item": "thermal:rf_coil_storage_augment"},
                    "H": {"item": "envirocore:xerothium"},
                    "I": {"item": "berseria_sky:creative_augment_base"}
                  },
                  "output": [
                    {"item": "thermal:rf_coil_creative_augment","count": 1}
                  ],
                  "focus_constellation": "astralsorcery:armara",
                  "effects": [
                    "astralsorcery:built_in_effect_constellation_finish",
                    "astralsorcery:built_in_effect_trait_relay_highlight",
                    "astralsorcery:built_in_effect_discovery_central_beam",
                    "astralsorcery:built_in_effect_trait_focus_circle",
                    "astralsorcery:altar_default_sparkle",
                    "astralsorcery:built_in_effect_constellation_lines",
                    "astralsorcery:built_in_effect_attunement_sparkle"
                  ]
                })
                

                  //Creative Reclamation//
                  e.custom({
                    "type": "extendedcrafting:combination",
                    "powerCost": 5000000,
                    "input": {"item": "berseria_sky:creative_augment_base"},
                    "ingredients": [
                      {"item": "thermal:machine_cycle_augment"},
                      {"item": "thermal:machine_catalyst_augment"},
                      {"item": "thermal:dust_mana"},
                      {"item": "storagedrawers:creative_storage_upgrade"},
                      {"item": "kubejs:sun_gear"},
                      {"item": "astralsorcery:shifting_star_vicio"},
                      {"item": "astralsorcery:shifting_star_discidia"},
                      {"item": "astralsorcery:shifting_star_evorsio"},
                      {"item": "astralsorcery:shifting_star_aevitas"},
                      {"item": "astralsorcery:shifting_star_armara"},
                      {"item": "endless:neutronium_gear"},
                      {"item": "blue_skies:soul_fragment"}
                    ],
                    "result": {"item": "thermal:machine_catalyst_creative_augment"}
                  })
                  //Creative Defense//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "miniutilities:infused_chestplate"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"type": "forge:nbt",
                    "item": "tconstruct:creative_slot","count": 1,
                    "nbt": "{slot:\"defense\"}"}
                  })
                  //Creative Upgrade//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "pipez:ultimate_upgrade"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"type": "forge:nbt",
                    "item": "tconstruct:creative_slot","count": 1,
                    "nbt": "{slot:\"upgrades\"}"}
                  })
                  //Creative Ability//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "minecraft:nether_star"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"type": "forge:nbt",
                    "item": "tconstruct:creative_slot","count": 1,
                    "nbt": "{slot:\"abilities\"}"}
                  })
                  //Creative Slot//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "minecraft:emerald"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"type": "forge:nbt",
                    "item": "tconstruct:creative_slot","count": 1,
                    "nbt": "{slot:\"souls\"}"}
                  })
                  //Creative Sensor//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "mekanism:ultimate_tier_installer"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"type": "forge:nbt",
                    "item": "tconstruct:creative_slot","count": 1,
                    "nbt": "{slot:\"sensor\"}"}
                  })
                  //Creative Cage//
                  e.custom({
                    "type": "minecraft:smithing",
                    "base": {"item": "cagedmobs:speed_iii_upgrade"},
                    "addition": {"item": "kubejs:creative_ingot"},
                    "result": {"item": "cagedmobs:creative_upgrade"}
                  })
                  
                  







})