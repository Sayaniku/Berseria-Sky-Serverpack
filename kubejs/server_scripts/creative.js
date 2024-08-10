events.listen('recipes', function (e) {


    //Ultimate Seed//
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BDEEEEEDB",
                "BDEFFFEDB",
                "BDEFGFEDB",
                "BDEFFFEDB",
                "BDEEEEEDB",
                "BHDDDDDHB",
                "IBBBBBBBI"
            ],
            "key": {
                "A": { "item": "kubejs:ouranium_gemstone_block" },
                "B": { "item": "extendedcrafting:the_ultimate_block" },
                "C": { "item": "kubejs:ouranium_block" },
                "D": { "item": "kubejs:ultimate_gear" },
                "E": { "item": "kubejs:ultimate_plate" },
                "F": { "item": "extendedcrafting:the_ultimate_catalyst" },
                "G": { "item": "kubejs:ouranium_seed" },
                "H": { "item": "kubejs:ouranium_coal_block" },
                "I": { "item": "kubejs:ouranium_ingot_block" }
            },
            "result": {
                "item": "mysticalagriculture:ultimate_seeds"
            }
        })

    //Ultimate Crux//
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "ABBBBBBBA",
                "BCCCCCCCB",
                "BCDDDDDCB",
                "BCDEEEDCB",
                "BCDEFEDCB",
                "BCDEEEDCB",
                "BCDDDDDCB",
                "BCCCCCCCB",
                "GBBBBBBBG"
            ],
            "key": {
                "A": { "item": "kubejs:ouranium_block" },
                "B": { "item": "extendedcrafting:the_ultimate_block" },
                "C": { "item": "kubejs:ultimate_gear" },
                "D": { "item": "kubejs:ultimate_plate" },
                "E": { "item": "extendedcrafting:the_ultimate_ingot" },
                "F": { "item": "mysticalagradditions:insanium_farmland" },
                "G": { "item": "kubejs:ouranium_ingot_block" }
            },
            "result": {
                "item": "kubejs:ultimate_crux"
            }
        })
        

  //Infinity Catalyst//
  e.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 4,
    "pattern": [
      "         ",
      " A  B  C ",
      "  D E F  ",
      "   GHI   ",
      " JKLMNOP ",
      "   QRS   ",
      "  T U V  ",
      " W  X  Y ",
      "         "
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:blizz\"}"
      },
      "B": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:basalz\"}"
      },
      "C": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:silicon\"}"
      },
      "D": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:gaia_ingot\"}"
      },
      "E": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:qivium\"}"
      },
      "F": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:gold\"}"
      },
      "G": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:xerothium\"}"
      },
      "H": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:duralumin\"}"
      },
      "I": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:cobalt\"}"
      },
      "J": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:blitz\"}"
      },
      "K": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:lavium\"}"
      },
      "L": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:gausum\"}"
      },
      "M": {
        "item": "berseria_sky:ball_of_hakai"
      },
      "N": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:draconium\"}"
      },
      "O": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:awakened_draconium\"}"
      },
      "P": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:infused_enderpearl\"}"
      },
      "Q": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:iron\"}"
      },
      "R": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:electrical_copper\"}"
      },
      "S": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:scute\"}"
      },
      "T": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:hdpe\"}"
      },
      "U": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:blazing_copper\"}"
      },
      "V": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:cardboard\"}"
      },
      "W": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:poisonous_pototato\"}"
      },
      "X": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:amethyst\"}"
      },
      "Y": {
        "type": "forge:nbt",
        "item": "extendedcrafting:singularity",
        "count": 1,
        "nbt": "{Id:\"extendedcrafting:shadow_steel\"}"
      }
    },
    "result": {"item": "endless:infinity_catalyst"}
  })

      //Infinity Ingot//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "AAAAAAAAA",
          "ABCDEDCBA",
          "ADBECEBDA",
          "ABCDEDCBA",
          "AAAAAAAAA",
          "         ",
          "         "
        ],
        "key": {
          "A": {"item": "berseria_sky:god_ingot"},
          "B": {"item": "endless:infinity_catalyst"},
          "C": {"item": "endless:ultimate_stew"},
          "D": {"item": "endless:cosmic_meatballs"},
          "E": {"item": "endless:endest_pearl"}
        },
        "result": {"item": "endless:infinity_ingot"}
      })
      //God Ingot//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "AAAAAAAAA",
          "ABBBBBBBA",
          "ABCCCCCBA",
          "ABBBBBBBA",
          "AAAAAAAAA",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "item": "endless:neutronium_ingot"
          },
          "B": {
            "item": "endless:crystal_matrix_ingot"
          },
          "C": {
            "item": "mysticalagradditions:insanium_ingot"
          }
        },
        "result": {
          "item": "berseria_sky:god_ingot"
        }
      })

      //Endest Pearls//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   AAA   ",
          " AABBBAA ",
          " ABBBBBA ",
          "ABBBCBBBA",
          "ABBCDCBBA",
          "ABBBCBBBA",
          " ABBBBBA ",
          " AABBBAA ",
          "   AAA   "
        ],
        "key": {
          "A": {"item": "compressium:endstone_2"},
          "B": {"item": "minecraft:ender_eye"},
          "C": {"item": "endless:neutronium_ingot"},
          "D": {"item": "envirocore:xerothium_crystal"}
        },
        "result": {"item": "endless:endest_pearl"}
      })
      //Infinity Pickaxe//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          " AAAAAAA ",
          "AAAABAAAA",
          "AAAACAAAA",
          "AADEFGDAA",
          " HIJKLMN ",
          "  DOPQD  ",
          "   RPS   ",
          "   TPU   ",
          "   VPW   "
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "mysticalagriculture:prudentium_pickaxe"},
          "C": {"item": "mysticalagriculture:imperium_pickaxe"},
          "D": {"item": "endless:infinity_catalyst"},
          "E": {"item": "mysticalagriculture:tertium_pickaxe"},
          "F": {"item": "mysticaladaptations:insanium_pickaxe"},
          "G": {"item": "kubejs:ornium_pickaxe"},
          "H": {"item": "endless:crystal_matrix_pickaxe"},
          "I": {"item": "betterendforge:terminite_pickaxe"},
          "J": {"item": "endless:neutronium_pickaxe"},
          "K": {"item": "mysticalagriculture:supremium_pickaxe"},
          "L": {"item": "kubejs:lightium_pickaxe"},
          "M": {"item": "botania:manasteel_pick"},
          "N": {"item": "mysticalagriculture:inferium_pickaxe"},
          "O": {"item": "minecraft:netherite_pickaxe"},
          "P": {"item": "endless:neutronium_ingot"},
          "Q": {"item": "kubejs:tornium_pickaxe"},
          "R": {"item": "draconicevolution:chaotic_pickaxe"},
          "S": {"item": "kubejs:ouranium_pickaxe"},
          "T": {"item": "botania:elementium_pickaxe"},
          "U": {"item": "botania:terra_pick","count": 1,},
          "V": {"item": "mythicbotany:alfsteel_pick"},
          "W": {"item": "endless:neutronium_pickaxe"}
        },
        "result": {"item": "endless:infinity_pickaxe"}
      })
      //infinity Axe//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "  A      ",
          "AAAAAAAAA",
          " AAAAAAAA",
          "     BCDE",
          "     FGHI",
          "     JGKL",
          "     MGNO",
          "     PGQR",
          "     SGTU"
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "projecte:rm_pick"},
          "C": {"item": "draconicevolution:chaotic_axe"},
          "D": {"item": "mysticalagriculture:inferium_axe"},
          "E": {"item": "mysticalagriculture:prudentium_axe",},
          "F": {"item": "minecraft:netherite_axe"},
          "G": {"item": "endless:neutronium_ingot"},
          "H": {"item": "mysticalagriculture:tertium_axe",},
          "I": {"item": "mysticalagriculture:imperium_axe"},
          "J": {"item": "botania:manasteel_axe"},
          "K": {"item": "mysticalagriculture:supremium_axe"},
          "L": {"item": "mysticaladaptations:insanium_axe"},
          "M": {"item": "botania:elementium_axe"},
          "N": {"item": "kubejs:ornium_axe"},
          "O": {"item": "kubejs:lightium_axe"},
          "P": {"item": "botania:terra_axe"},
          "Q": {"item": "kubejs:tornium_axe"},
          "R": {"item": "kubejs:ouranium_axe"},
          "S": {"item": "mythicbotany:alfsteel_axe"},
          "T": {"item": "betterendforge:terminite_axe"},
          "U": {"item": "endless:neutronium_axe",}
        },
        "result": {"item": "endless:infinity_axe"}
      })
      //Infinity Shovel//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "      AAA",
          "     AABA",
          "    CDAAA",
          "    EFGA ",
          "   HIJK  ",
          "  LIM    ",
          " NIO     ",
          "PIQ      ",
          "IR       "
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "endless:infinity_catalyst"},
          "C": {"item": "botania:elementium_shovel",},
          "D": {"item": "mysticalagriculture:inferium_shovel",},
          "E": {"item": "mysticalagriculture:tertium_shovel",},
          "F": {"item": "draconicevolution:chaotic_shovel"},
          "G": {"item": "kubejs:ornium_shovel"},
          "H": {"item": "mysticalagriculture:imperium_shovel",},
          "I": {"item": "endless:neutronium_ingot"},
          "J": {"item": "kubejs:lightium_shovel"},
          "K": {"item": "endless:neutronium_shovel"},
          "L": {"item": "mysticalagriculture:supremium_shovel"},
          "M": {"item": "kubejs:tornium_shovel"},
          "N": {"item": "mysticaladaptations:insanium_shovel"},
          "O": {"item": "kubejs:ouranium_shovel"},
          "P": {"item": "projecte:dm_shovel"},
          "Q": {"item": "endless:crystal_matrix_shovel",},
          "R": {"item": "projecte:rm_shovel"}
        },
        "result": {"item": "endless:infinity_shovel"}
      })
      //Infinity Hoe//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "  AAAAAA ",
          " AAAAAAA ",
          "ABCDEFAA ",
          "     GHI ",
          "     JHK ",
          "     LHM ",
          "     NHO ",
          "     PHQ ",
          "     RST "
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "projecte:dm_hoe"},
          "C": {"item": "projecte:rm_hoe"},
          "D": {"item": "botania:manasteel_hoe"},
          "E": {"item": "botania:elementium_hoe"},
          "F": {"item": "draconicevolution:chaotic_hoe"},
          "G": {"item": "mysticalagriculture:inferium_hoe"},
          "H": {"item": "endless:neutronium_ingot"},
          "I": {"item": "mysticaladaptations:insanium_hoe"},
          "J": {"item": "mysticalagriculture:prudentium_hoe"},
          "K": {"item": "kubejs:ornium_hoe"},
          "L": {"item": "mysticalagriculture:tertium_hoe"},
          "M": {"item": "kubejs:lightium_hoe"},
          "N": {"item": "mysticalagriculture:imperium_hoe",},
          "O": {"item": "kubejs:tornium_hoe"},
          "P": {"item": "mysticalagriculture:supremium_hoe"},
          "Q": {"item": "kubejs:ouranium_hoe"},
          "R": {"item": "endless:crystal_matrix_hoe"},
          "S": {"item": "endless:neutronium_hoe"},
          "T": {"item": "minecraft:netherite_hoe"}
        },
        "result": {"item": "endless:infinity_hoe"}
      })
      //Infinity Sword//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "      ABB",
          "     CBDB",
          "    EBBBF",
          "G  HBDBI ",
          "JGKBBBL  ",
          "MNGDBO   ",
          "PQRGS    ",
          "TUVWG    ",
          "UXYZ1G   "
        ],
        "key": {
          "A": {"item": "mysticalagriculture:supremium_sword"},
          "B": {"item": "endless:infinity_block"},
          "C": {"item": "mysticalagriculture:imperium_sword",},
          "D": {"item": "endless:infinity_catalyst"},
          "E": {"item": "mysticalagriculture:tertium_sword",},
          "F": {"item": "mysticaladaptations:insanium_sword"},
          "G": {"item": "endless:crystal_matrix_block"},
          "H": {"item": "mysticalagriculture:prudentium_sword",},
          "I": {"item": "kubejs:ornium_sword"},
          "J": {"item": "projecte:dm_sword"},
          "K": {"item": "mysticalagriculture:inferium_sword",},
          "L": {"item": "kubejs:lightium_sword"},
          "M": {"item": "botania:terra_sword",},
          "N": {"item": "projecte:rm_sword"},
          "O": {"item": "kubejs:tornium_sword"},
          "P": {"item": "betterendforge:terminite_sword",},
          "Q": {"item": "botania:star_sword",},
          "R": {"item": "draconicevolution:chaotic_sword"},
          "S": {"item": "kubejs:ouranium_sword"},
          "T": {"item": "minecraft:netherite_sword"},
          "U": {"item": "endless:neutronium_ingot"},
          "V": {"item": "mythicbotany:alfsteel_sword",},
          "W": {"item": "botania:manasteel_sword",},
          "X": {"item": "endless:neutronium_sword",},
          "Y": {"item": "endless:crystal_matrix_sword",},
          "Z": {"item": "endless:skullfire_sword",},
          "1": {"item": "botania:elementium_sword",}
        },
        "result": {"item": "endless:infinity_sword"}
      })

      //Infinity Bow//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "   AA    ",
          "  ABC    ",
          " A  C    ",
          "AD  C    ",
          "EF  C    ",
          "AG  C    ",
          " A  C    ",
          "  AHC    ",
          "   AA    "
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "draconicevolution:wyvern_bow"},
          "C": {"item": "endless:neutronium_ingot"},
          "D": {"item": "mekanism:electric_bow"},
          "E": {"item": "endless:infinity_catalyst"},
          "F": {"item": "draconicevolution:draconic_bow"},
          "G": {"item": "minecraft:bow"},
          "H": {"item": "draconicevolution:chaotic_bow"}
        },
        "result": {"item": "endless:infinity_bow"}
      })

      //Infinity CrowwBow//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "   AA    ",
          "  A B    ",
          " A  B    ",
          "A   BC   ",
          "D   BEC  ",
          "A   BCDC ",
          " A  B CDC",
          "  A B  CF",
          "   AA   C"
        ],
        "key": {
          "A": {"item": "endless:infinity_block"},
          "B": {"item": "endless:neutronium_ingot"},
          "C": {"item": "endless:crystal_matrix_block"},
          "D": {"item": "endless:infinity_catalyst"},
          "E": {"item": "minecraft:crossbow"},
          "F": {"item": "endless:infinity_bow"}
        },
        "result": {"item": "endless:infinity_crossbow"}
      })

      //SkullFire Sword//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
          "       AB",
          "      ABA",
          "     ABA ",
          "    ABA  ",
          " C ABA   ",
          "  CBA    ",
          "  DC     ",
          " D  C    ",
          "E        "
        ],
        "key": {
          "A": {"item": "endless:crystal_matrix_block"},
          "B": {"item": "powah:blazing_crystal_block"},
          "C": {"item": "minecraft:bone_block"},
          "D": {"tag": "minecraft:logs"},
          "E": {"item": "envirocore:xerothium"}
        },
        "result": {"item": "endless:skullfire_sword"}
      })

          
            //Creative Cake//
            e.custom({ 
              "type": "extendedcrafting:shaped_table",
              "tier": 1,
              "pattern": ["ABA","CBC","DBD"],
              "key": {
                "A": {"item": "create:blaze_cake"},
                "B": {"item": "kubejs:creative_plate"},
                "C": {"item": "berseria_sky:creeper_cake"},
                "D": {"item": "berseria_sky:enderman_cake"}
              },
              "result": {"item": "create:creative_blaze_cake"}
            })

            //Ball of hakai//
            e.custom({ 
              "type": "powah:energizing",
              "ingredients": [
              {"item": "berseria_sky:god_ingot"},
              {"item": "berseria_sky:black_amethyst_block"},
              {"item": "extendedcrafting:ultimate_singularity"},
              {"item": "endless:ultimate_stew"},
              {"item": "endless:cosmic_meatballs"},
              {"item": "endless:endest_pearl"}
              ],
              "energy": 800000000,
              "result": {
              "item": "berseria_sky:ball_of_hakai"
              }
            })
            //Infinity Upgrade//
            e.custom({ 
              "type": "extendedcrafting:shaped_table",
              "tier": 1,
              "pattern": ["AAA","ABA","AAA"],
              "key": {
                "A": {"item": "pipez:ultimate_upgrade"},
                "B": {"item": "kubejs:creative_plate"}
              },
              "result": {"item": "pipez:infinity_upgrade"}
            })

            //Neutron Collector//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "ABBBBBBBA",
                "BCDEEEDCB",
                "BDFGGGHDB",
                "BEGIIIGEB",
                "BEGIIIGEB",
                "BEGIIIGEB",
                "BDJGGGKDB",
                "BCDEEEDCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:ultimate_plate"},
                "B": {"item": "mysticalagradditions:imperium_coal_block"},
                "C": {"item": "endless:cosmic_meatballs"},
                "D": {"item": "extendedcrafting:the_ultimate_catalyst"},
                "E": {"item": "kubejs:ultimate_gear"},
                "F": {"item": "quark:white_crystal"},
                "G": {"item": "thermal:dust_mana"},
                "H": {"item": "quark:black_crystal"},
                "I": {"item": "endless:crystal_matrix_block"},
                "J": {"item": "quark:violet_crystal"},
                "K": {"item": "quark:green_crystal"}
              },
              "result": {"item": "endless:neutronium_collector"}
            })
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
                //Creative Tank Augment//
                e.custom({ 
                  "type": "mythicbotany:infusion",
                  "group": "infuser",
                  "output": {"item": "thermal:fluid_tank_creative_augment"},
                  "mana": 7000000,
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
                    {"item": "botania:lens_paint"},
                    {"item": "create:creative_blaze_cake"},
                    {"item": "berseria_sky:ball_of_hakai"},
                    {"item": "botania:prism"},
                    {"item": "mythicbotany:mana_collector"}
                  ],
                  "fromColor": 255,
                  "toColor": 8829
                })

                //Creative Mana Pool//
                e.custom({ 
                  "type": "mythicbotany:infusion",
                  "group": "infuser",
                  "output": {"item": "botania:creative_pool"},
                  "mana": 30000000,
                  "ingredients": [
                    {"item": "botania:fabulous_pool"},
                    {"item": "kubejs:mana_bucket"},
                    {"item": "botania:elf_glass"},
                    {"item": "botania:lens_paint"},
                    {"item": "create:creative_blaze_cake"},
                    {"item": "berseria_sky:ball_of_hakai"},
                    {"item": "botania:prism"},
                    {"item": "mythicbotany:mana_collector"}
                  ],
                  "fromColor": 255,
                  "toColor": 8829
                })

                //Creative Flux//
                e.custom({
                  "type": "industrialforegoing:dissolution_chamber",
                  "output": {
                  "item": "thermal:machine_efficiency_creative_augment",
                  "count": 1},
                  "inputFluid": "{FluidName:\"materialis:molten_starmetal\",Amount:20000}",
                  "processingTime": 800,
                  "input": [
                  {"item": "thermal:machine_speed_augment"},
                  {"item": "berseria_sky:creative_augment_base"},
                  {"item": "thermal_extra:advanced_machine_speed_augment"},
                  {"item": "fluxnetworks:gargantuan_flux_storage"},
                  {"item": "fluxnetworks:gargantuan_flux_storage"},
                  {"item": "thermal:machine_efficiency_augment"},
                  {"item": "kubejs:bedrock"},
                  {"item": "thermal:machine_efficiency_augment"}],
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
                  //Creative Capacitor//
                    e.custom({
                      "type": "extendedcrafting:shaped_table",
                      "tier": 4,
                      "pattern": [
                      "ABBBCBBBA",
                      "BDEEEEEDB",
                      "BEFGGGHEB",
                      "BEGIJIGEB",
                      "KEGJLJGEM",
                      "BEGIJIGEB",
                      "BENGGGOEB",
                      "BDEEEEEDB",
                      "ABBBPBBBA"
                    ],
                    "key": {
                      "A": {"item": "berseria_sky:mldeg_ingot"},
                      "B": {"item": "immersiveengineering:capacitor_lv"},
                      "C": {"type": "forge:nbt",
                            "item": "tconstruct:creative_slot","count": 1,
                            "nbt": "{slot:\"defense\"}"},
                      "D": {"item": "thermal:machine_efficiency_creative_augment"},
                      "E": {"item": "immersiveengineering:capacitor_mv"},
                      "F": {"item": "projecte:volcanite_amulet"},
                      "G": {"item": "immersiveengineering:capacitor_hv"},
                      "H": {"item": "projecte:evertide_amulet"},
                      "I": {"item": "thermal:rf_potato"},
                      "J": {"item": "thermal:rf_coil_creative_augment"},
                      "K": {"type": "forge:nbt",
                            "item": "tconstruct:creative_slot","count": 1,
                            "nbt": "{slot:\"upgrades\"}"},
                      "L": {"item": "berseria_sky:ball_of_hakai"},
                      "M": {"type": "forge:nbt",
                            "item": "tconstruct:creative_slot","count": 1,
                            "nbt": "{slot:\"souls\"}"},
                      "N": {"item": "create:creative_blaze_cake"},
                      "O": {"item": "kubejs:creative_crux"},
                      "P": {"type": "forge:nbt",
                            "item": "tconstruct:creative_slot","count": 1,
                           "nbt": "{slot:\"abilities\"}"}
                    },
                    "result": {"item": "immersiveengineering:capacitor_creative"}
                  })
                  //Creative Energy cell//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                      "ABBBBBBBA",
                      "BCDEFEDCB",
                      "BGHIIIHGB",
                      "BEIJJJIEB",
                      "BKIJLJIKB",
                      "BMIJJJIMB",
                      "BGHIIIHGB",
                      "BCDMFMDCB",
                      "ABBBBBBBA"
                    ],
                    "key": {
                      "A": {"item": "berseria_sky:beyond_kev_ingot"},
                      "B": {"item": "appliedenergistics2:energy_cell"},
                      "C": {"item": "lazierae2:fluix_steel_ingot"},
                      "D": {"item": "endless:ultimate_stew"},
                      "E": {"item": "ae2extras:16m_fluid_storage_cell"},
                      "F": {"item": "create:creative_blaze_cake"},
                      "G": {"item": "blue_skies:star_flare"},
                      "H": {"item": "appliedenergistics2:singularity"},
                      "I": {"item": "thermal:energy_cell",},
                      "J": {"item": "appliedenergistics2:dense_energy_cell"},
                      "K": {"item": "immersiveengineering:capacitor_creative"},
                      "L": {"item": "berseria_sky:ball_of_hakai"},
                      "M": {"item": "ae2extras:16m_storage_cell"}
                    },
                    "result": {"item": "appliedenergistics2:creative_energy_cell"}
                  })







})