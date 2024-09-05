onEvent("recipes", (e) => {
    const id_prefix = 'berseria_sky:extendedcrafting/ultimate_table/';
                
    //******************************Tier 7*************************************//

                    //Comerald Seed//
                      e.custom({
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
                        "ABBBBBBBA"
                      ],
                      "key": {
                      "A": {"item": "kubejs:ornium_block"},
                      "B": {"item": "thermal:constantan_block"},
                      "C": {"item": "berseria_sky:comerald_block"},
                      "D": {"item": "kubejs:diamond_block"},
                      "E": {"item": "kubejs:emerald_block"},
                      "F": {"item": "kubejs:ornium_seed"}
                      },
                      "result": {"item": "mysticalagriculture:comerald_seeds"}
                      }).id(`${id_prefix}comerald_seeds`)

                  //Comerald Crux//
                    e.custom({
                      "tier": 4,
                      "type": "extendedcrafting:shaped_table",
                      "pattern": [
                      "ABBBBBBBA",
                      "BCCCCCCCB",
                      "BCDDDDDCB",
                      "BCDEEEDCB",
                      "BCDEFEDCB",
                      "BCDEEEDCB",
                      "BCDDDDDCB",
                      "BCCCCCCCB",
                      "ABBBBBBBA"
                    ],
                    "key": {
                    "A": {"item": "kubejs:ornium_block"},
                    "B": {"item": "thermal:constantan_block"},
                    "C": {"item": "berseria_sky:comerald_block"},
                    "D": {"item": "kubejs:diamond_block"},
                    "E": {"item": "kubejs:emerald_block"},
                    "F": {"item": "mysticalagradditions:insanium_farmland"}
                  },
                  "result": {"item": "berseria_sky:comerald_crux"}
                  }).id(`${id_prefix}comerald_crux`)

                  //Ornium Seed//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                    ],
                    "key": {
                    "W": {"item": "berseria_sky:manronium_steel_block"},
                    "Z": {"item": "berseria_sky:manyerium_block"},
                    "A": {"item": "mysticalagradditions:insanium_ingot_block"},
                    "S": {"item": "kubejs:ornium_block"},
                    "C": {"item": "kubejs:ornium_ingot_block"},
                    "F": {"item": "kubejs:ornium_seed"}
                    },
                    "result": {"item": "mysticalagriculture:ornium_ingot_seeds"}
                    }).id(`${id_prefix}ornium_ingot_seeds`)

                  //Ornium Crux//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                    ],
                    "key": {
                      "W": {"item": "kubejs:ornium_gear"},
                      "Z": {"item": "kubejs:ornium_plate"},
                      "A": {"item": "kubejs:ornium_gemstone_block"},
                      "S": {"item": "kubejs:ornium_ingot_block"},
                      "C": {"item": "kubejs:ornium_ingot_block"},
                      "F": {"item": "mysticalagradditions:insanium_farmland"}
                    },
                    "result": {"item": "kubejs:ornium_crux"}
                    }).id(`${id_prefix}ornium_crux`)

  //*****************************************Tier8********************************//
                  //Elinvonze Seed//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                  ],
                  "key": {
                    "W": {"item": "thermal:electrum_block"},
                    "Z": {"item": "thermal:invar_block"},
                    "A": {"item": "thermal:bronze_block"},
                    "S": {"item": "kubejs:lightium_block"},
                    "C": {"item": "berseria_sky:elinvonze_block"},
                    "F": {"item": "kubejs:lightium_seed"}
                  },
                  "result": {"item": "mysticalagriculture:elinvonze_seeds"}
                  }).id(`${id_prefix}elinvonze_seeds`)

                  //Elinvonze Crux//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                  ],
                  "key": {
                    "W": {"item": "thermal:electrum_block"},
                    "Z": {"item": "thermal:invar_block"},
                    "A": {"item": "thermal:bronze_block"},
                    "S": {"item": "kubejs:lightium_ingot_block"},
                    "C": {"item": "berseria_sky:elinvonze_block"},
                    "F": {"item": "mysticalagradditions:insanium_farmland"}
                  },
                  "result": {"item": "kubejs:elinvonze_crux"}
                  }).id(`${id_prefix}elinvonze_crux`)

                  //Fayronium Seed//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                    ],
                    "key": {
                      "W": {"item": "thermal:lumium_block"},
                      "Z": {"item": "tconstruct:hepatizon_block"},
                      "A": {"item": "materialis:fairy_block"},
                      "S": {"item": "kubejs:lightium_block" },
                      "C": {"item": "berseria_sky:fayronium_block"},
                      "F": {"item": "kubejs:lightium_seed"}
                    },
                    "result": {"item": "mysticalagriculture:fayronium_seeds"}
                    }).id(`${id_prefix}fayronium_seeds`)

                  //Fayronium Crux//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                    ],
                    "key": {
                      "W": {"item": "thermal:lumium_block"},
                      "Z": {"item": "tconstruct:hepatizon_block"},
                      "A": {"item": "materialis:fairy_block"},
                      "S": {"item": "kubejs:lightium_ingot_block"},
                      "C": {"item": "berseria_sky:fayronium_block"},
                      "F": {"item": "mysticalagradditions:insanium_farmland"}
                    },
                    "result": {"item": "kubejs:fayronium_crux"}
                    }).id(`${id_prefix}fayronium_crux`)

                    //Queen's Steel Seed//
                    e.custom({
                      "type": "extendedcrafting:shaped_table",
                      "tier": 4,
                      "pattern": [
                      "SCCCCCCCS",
                      "CAAAAAAAC",
                      "CAWWWWWAC",
                      "CAWZZZWAC",
                      "CAWZFZWAC",
                      "CAWZZZWAC",
                      "CAWWWWWAC",
                      "CAAAAAAAC",
                      "SCCCCCCCS"
                      ],
                      "key": {
                        "W": {"item": "tconstruct:pig_iron_block"},
                        "Z": {"item": "tconstruct:queens_slime_block"},
                        "A": {"item": "tconstruct:slimesteel_block"},
                        "S": {"item": "kubejs:lightium_block"},
                        "C": {"item": "berseria_sky:queens_steel_block"},
                        "F": {"item": "kubejs:lightium_seed"}
                      },
                      "result": {"item": "mysticalagriculture:queens_steel_seeds"}
                      }).id(`${id_prefix}queens_steel_seeds`)

                  //Queen's Steel Crux//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                  ],
                  "key": {
                    "W": {"item": "tconstruct:pig_iron_block"},
                    "Z": {"item": "tconstruct:queens_slime_block"},
                    "A": {"item": "tconstruct:slimesteel_block"},
                    "S": {"item": "kubejs:lightium_ingot_block"},
                    "C": {"item": "berseria_sky:queens_steel_block"},
                    "F": {"item": "mysticalagradditions:insanium_farmland"}
                  },
                  "result": {"item": "kubejs:queens_steel_crux"}
                  }).id(`${id_prefix}queens_steel_crux`)

                  //Manyerium Seed//
                  e.custom({
                    "type": "extendedcrafting:shaped_table",
                    "tier": 4,
                    "pattern": [
                    "SCCCCCCCS",
                    "CAAAAAAAC",
                    "CAWWWWWAC",
                    "CAWZZZWAC",
                    "CAWZFZWAC",
                    "CAWZZZWAC",
                    "CAWWWWWAC",
                    "CAAAAAAAC",
                    "SCCCCCCCS"
                    ],
                  "key": {
                    "W": { "item": "thermal:signalum_block" },
                    "Z": { "item": "tconstruct:manyullyn_block" },
                    "A": { "item": "thermal:enderium_block" },
                    "S": { "item": "kubejs:lightium_block" },
                    "C": { "tag": "forge:storage_blocks/manyerium"},
                    "F": { "item": "kubejs:lightium_seed" }
                  },
                  "result": {"item": "mysticalagriculture:manyerium_seeds"}
                  }).id(`${id_prefix}manyerium_seeds`)

              //Manyerium Crux//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                "SCCCCCCCS",
                "CAAAAAAAC",
                "CAWWWWWAC",
                "CAWZZZWAC",
                "CAWZFZWAC",
                "CAWZZZWAC",
                "CAWWWWWAC",
                "CAAAAAAAC",
                "SCCCCCCCS"
              ],
              "key": {
                "W": { "item": "thermal:signalum_block" },
                "Z": { "item": "tconstruct:manyullyn_block" },
                "A": { "item": "thermal:enderium_block" },
                "S": { "item": "kubejs:lightium_ingot_block" },
                "C": { "tag": "forge:storage_blocks/manyerium" },
                "F": { "item": "mysticalagradditions:insanium_farmland" }
              },
              "result": {"item": "kubejs:manyerium_crux"}
              }).id(`${id_prefix}manyerium_crux`)

            //Lightium Seed//
            e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
              "SCCCCCCCS",
              "CAAAAAAAC",
              "CAWWWWWAC",
              "CAWZZZWAC",
              "CAWZFZWAC",
              "CAWZZZWAC",
              "CAWWWWWAC",
              "CAAAAAAAC",
              "SCCCCCCCS"
            ],
            "key": {
              "W": {"item": "berseria_sky:manronium_steel_block"},
              "Z": {"item": "berseria_sky:manyerium_block"},
              "A": {"item": "mysticalagradditions:insanium_ingot_block"},
              "S": {"item": "kubejs:lightium_block"},
              "C": {"item": "kubejs:lightium_ingot_block"},
              "F": {"item": "kubejs:lightium_seed"}
            },
            "result": {"item": "mysticalagriculture:lightium_ingot_seeds"}
            }).id(`${id_prefix}lightium_ingot_seeds`)

            //Lightium Crux//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "SCCCCCCCS",
                "CAAAAAAAC",
                "CAWWWWWAC",
                "CAWZZZWAC",
                "CAWZFZWAC",
                "CAWZZZWAC",
                "CAWWWWWAC",
                "CAAAAAAAC",
                "SCCCCCCCS"
              ],
              "key": {
                "W": {"item": "kubejs:lightium_gear"},
                "Z": {"item": "kubejs:lightium_plate"},
                "A": {"item": "kubejs:lightium_gemstone_block"},
                "S": {"item": "kubejs:lightium_block"},
                "C": {"item": "kubejs:lightium_ingot_block"},
                "F": {"item": "mysticalagradditions:insanium_farmland"}
              },
              "result": {"item": "kubejs:lightium_crux"}
              }).id(`${id_prefix}lightium_crux`)

            //Bedrock Seeds//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BDEFFFEDB",
                "BDFGGGFDB",
                "BDFGHGFDB",
                "BDFGGGFDB",
                "BDEFFFEDB",
                "BCDDDDDCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:lightium_block"},
                "B": {"item": "kubejs:bedrock"},
                "C": {"item": "industrialforegoing:machine_frame_advanced"},
                "D": {"item": "industrialforegoing:machine_frame_supreme"},
                "E": {"item": "industrialforegoing:machine_frame_simple"},
                "F": {"item": "berseria_sky:controller_casing"},
                "G": {"item": "mekanism:steel_casing"},
                "H": {"item": "kubejs:lightium_seed"}
              },
              "result": {"item": "mysticalagriculture:bedrock_seeds"}
              }).id(`${id_prefix}bedrock_seeds`)

            //Bedrock Crux//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BDEFFFEDB",
                "BDFGGGFDB",
                "BDFGHGFDB",
                "BDFGGGFDB",
                "BDEFFFEDB",
                "BCDDDDDCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:lightium_ingot_block"},
                "B": {"item": "kubejs:bedrock"},
                "C": {"item": "industrialforegoing:machine_frame_advanced"},
                "D": {"item": "industrialforegoing:machine_frame_supreme"},
                "E": {"item": "industrialforegoing:machine_frame_simple"},
                "F": {"item": "berseria_sky:controller_casing"},
                "G": {"item": "mekanism:steel_casing"},
                "H": {"item": "mysticalagradditions:insanium_farmland"}
              },
              "result": {"item": "kubejs:bedrock_crux"}
              }).id(`${id_prefix}bedrock_crux`)

    //******************************************Tier9**********************************************************//

            //Antimatter Seed//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "berseria_sky:manronium_steel_block"},
                  "Z": {"item": "berseria_sky:manyerium_block"},
                  "A": {"item": "draconicevolution:awakened_draconium_block"},
                  "S": {"item": "kubejs:tornium_block"},
                  "C": {"item": "mekanism:block_antimatter"},
                  "F": {"item": "kubejs:tornium_seed"}
                },
                "result": {"item": "mysticalagriculture:antimatter_seeds"}
              }).id(`${id_prefix}antimatter_seeds`)

            //Antimatter Crux//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "SCCCCCCCS",
                "CAAAAAAAC",
                "CAWWWWWAC",
                "CAWZZZWAC",
                "CAWZFZWAC",
                "CAWZZZWAC",
                "CAWWWWWAC",
                "CAAAAAAAC",
                "SCCCCCCCS"
              ],
              "key": {
                "W": {"item": "berseria_sky:manronium_steel_block"},
                "Z": {"item": "berseria_sky:manyerium_block"},
                "A": {"item": "draconicevolution:awakened_draconium_block"},
                "S": {"item": "kubejs:tornium_ingot_block"},
                "C": {"item": "mekanism:block_antimatter"},
                "F": {"item": "mysticalagradditions:insanium_farmland"}
              },
              "result": {"item": "kubejs:antimatter_crux"}
              }).id(`${id_prefix}antimatter_crux`)

              //Manronium Steel Seed//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "berseria_sky:queens_steel_block"},
                  "Z": {"item": "berseria_sky:fayronium_block"},
                  "A": {"item": "berseria_sky:manyerium_block"},
                  "S": {"item": "kubejs:tornium_block"},
                  "C": {"item": "berseria_sky:manronium_steel_block"},
                  "F": {"item": "kubejs:tornium_seed"}
                },
                "result": {"item": "mysticalagriculture:manronium_steel_seeds"}
                }).id(`${id_prefix}manronium_steel_seeds`)

              //Manronium Steel Crux//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "berseria_sky:queens_steel_block"},
                  "Z": {"item": "berseria_sky:fayronium_block"},
                  "A": {"item": "berseria_sky:manyerium_block"},
                  "S": {"item": "kubejs:tornium_ingot_block"},
                  "C": {"item": "berseria_sky:manronium_steel_block"},
                  "F": {"item": "mysticalagradditions:insanium_farmland"}
                },
                "result": {"item": "kubejs:manronium_steel_crux"}
                }).id(`${id_prefix}manronium_steel_crux`)

              //Tornium Seed//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "berseria_sky:manronium_steel_block"},
                  "Z": {"item": "berseria_sky:manyerium_block"},
                  "A": {"item": "mysticalagradditions:insanium_ingot_block"},
                  "S": {"item": "kubejs:tornium_block"},
                  "C": {"item": "kubejs:tornium_ingot_block"},
                  "F": {"item": "kubejs:tornium_seed"}
                },
                "result": {"item": "mysticalagriculture:tornium_ingot_seeds"}
                }).id(`${id_prefix}tornium_ingot_seeds`)

              //Tornium Crux//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                  ],
                  "key": {
                    "W": {"item": "kubejs:tornium_gear"},
                    "Z": {"item": "kubejs:tornium_plate"},
                    "A": {"item": "kubejs:tornium_gemstone_block"},
                    "S": {"item": "kubejs:tornium_block"},
                    "C": {"item": "kubejs:tornium_ingot_block"},
                    "F": {"item": "mysticalagradditions:insanium_farmland"}
                  },
                  "result": {"item": "kubejs:tornium_crux"}
                  }).id(`${id_prefix}tornium_crux`)

    //*******************************************tier10***********************************************************//
              
              //Ouranium Seed//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "berseria_sky:manronium_steel_block"},
                  "Z": {"item": "berseria_sky:manyerium_block"},
                  "A": {"item": "mysticalagradditions:insanium_ingot_block"},
                  "S": {"item": "kubejs:ouranium_block"},
                  "C": {"item": "kubejs:ouranium_ingot_block"},
                  "F": {"item": "kubejs:ouranium_seed"}
                },
                "result": {"item": "mysticalagriculture:ouranium_ingot_seeds"}
                }).id(`${id_prefix}ouranium_ingot_seeds`)

              //Ouranium Crux//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier": 4,
                "pattern": [
                  "SCCCCCCCS",
                  "CAAAAAAAC",
                  "CAWWWWWAC",
                  "CAWZZZWAC",
                  "CAWZFZWAC",
                  "CAWZZZWAC",
                  "CAWWWWWAC",
                  "CAAAAAAAC",
                  "SCCCCCCCS"
                ],
                "key": {
                  "W": {"item": "kubejs:ouranium_gear"},
                  "Z": {"item": "kubejs:ouranium_plate"},
                  "A": {"item": "kubejs:ouranium_gemstone_block"},
                  "S": {"item": "kubejs:ouranium_block"},
                  "C": {"item": "kubejs:ouranium_ingot_block"},
                  "F": {"item": "mysticalagradditions:insanium_farmland"}
                },
                "result": {"item": "kubejs:ouranium_crux"}
                }).id(`${id_prefix}ouranium_ingot_crux`)

              //Ultimate Seed//
              e.custom({
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
                  "A": {"item": "kubejs:ouranium_gemstone_block"},
                  "B": {"item": "extendedcrafting:the_ultimate_block"},
                  "C": {"item": "kubejs:ouranium_block"},
                  "D": {"item": "kubejs:ultimate_gear"},
                  "E": {"item": "kubejs:ultimate_plate"},
                  "F": {"item": "extendedcrafting:the_ultimate_catalyst"},
                  "G": {"item": "kubejs:ouranium_seed"},
                  "H": {"item": "kubejs:ouranium_coal_block"},
                  "I": {"item": "kubejs:ouranium_ingot_block"}
                },
                "result": {"item": "mysticalagriculture:ultimate_seeds"}
                }).id(`${id_prefix}the_ultimate_seeds`)

              //Ultimate Crux//
              e.custom({
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
              "result": {"item": "kubejs:ultimate_crux"}
              }).id(`${id_prefix}the_ultimate_crux`)

              //Neutronium Seeds//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier":4,
                "pattern": [
                  "ABBBBBBBA",
                  "BCDDDDDCB",
                  "BDCEEECDB",
                  "BDEFFFEDB",
                  "BDEFGFEDB",
                  "BDEFFFEDB",
                  "BDCEEECDB",
                  "BCDDDDDCB",
                  "ABBBBBBBA"
                ],
                "key": {
                  "A": {"item": "kubejs:ouranium_block"},
                  "B": {"item": "endless:neutronium_ingot"},
                  "C": {"item": "endless:neutronium_gear"},
                  "D": {"item": "endless:neutronium_nugget"},
                  "E": {"item": "endless:neutronium_pile"},
                  "F": {"item": "kubejs:neutronium_block"},
                  "G": {"item": "kubejs:ouranium_seed"}
                },
                "result": {"item": "mysticalagriculture:neutronium_seeds"}
                }).id(`${id_prefix}neutronium_seeds`)

              //Neutronium Crux//
              e.custom({
                "type": "extendedcrafting:shaped_table",
                "tier":4,
                "pattern": [
                  "ABBBBBBBA",
                  "BCDDDDDCB",
                  "BDCEEECDB",
                  "BDEFFFEDB",
                  "BDEFGFEDB",
                  "BDEFFFEDB",
                  "BDCEEECDB",
                  "BCDDDDDCB",
                  "ABBBBBBBA"
                ],
                "key": {
                  "A": {"item": "kubejs:ouranium_block"},
                  "B": {"item": "endless:neutronium_ingot"},
                  "C": {"item": "endless:neutronium_gear"},
                  "D": {"item": "endless:neutronium_nugget"},
                  "E": {"item": "endless:neutronium_pile"},
                  "F": {"item": "kubejs:neutronium_block"},
                  "G": {"item": "kubejs:ultimate_crux"}
                },
                "result": {"item": "kubejs:neutronium_crux"}
                }).id(`${id_prefix}neutronium_crux`)

            //Infinity Seeds//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BDEFFFEDB",
                "BDFGGGFDB",
                "BDFGHGFDB",
                "BDFGGGFDB",
                "BDEFFFEDB",
                "BCDDDDDCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:ouranium_ingot_block"},
                "G": {"item": "endless:infinity_block"},
                "C": {"item": "endless:infinity_catalyst"},
                "D": {"item": "endless:infinity_ingot"},
                "E": {"item": "endless:infinity_chest"},
                "F": {"item": "storagedrawers:creative_storage_upgrade"},
                "B": {"item": "endless:star_fuel"},
                "H": {"item": "mysticalagriculture:neutronium_seeds"}
              },
              "result": {"item": "mysticalagriculture:infinity_seeds"}
              }
              ).id(`${id_prefix}infinity_seeds`)

            //Infinity Crux//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "pattern": [
                "ABBBBBBBA",
                "BCDDDDDCB",
                "BDEFFFEDB",
                "BDFGGGFDB",
                "BDFGHGFDB",
                "BDFGGGFDB",
                "BDEFFFEDB",
                "BCDDDDDCB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:ouranium_ingot_block"},
                "G": {"item": "endless:infinity_block"},
                "C": {"item": "endless:infinity_catalyst"},
                "D": {"item": "endless:infinity_ingot"},
                "E": {"item": "endless:infinity_chest"},
                "F": {"item": "storagedrawers:creative_storage_upgrade"},
                "B": {"item": "endless:star_fuel"},
                "H": {"item": "kubejs:neutronium_crux"}
              },
              "result": {"item": "berseria_sky:infinity_crux"}
              }
              ).id(`${id_prefix}infinity_crux`)

        //***************************************OtherCraft*********************************************//

            //Master Crystal//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
              "pattern": [
                "ABBBBBBBA",
                "BLCCCCCOB",
                "BCGDDDICB",
                "BCDEEEDCB",
                "BCDEFEDCB",
                "BCDEEEDCB",
                "BCJDDDKCB",
                "BPCCCCCVB",
                "ABBBBBBBA"
              ],
              "key": {
                "A": {"item": "kubejs:ouranium_ingot_block"},
                "B": {"item": "mekanism:block_antimatter"},
                "C": {"item": "extendedcrafting:the_ultimate_block"},
                "D": {"item": "kubejs:moon_block"},
                "E": {"item": "kubejs:creative_plate"},
                "F": {"item": "matc:inferium_crystal"},
                "G": {"item": "kubejs:lightium_crystal"},
                "I": {"item": "kubejs:ornium_crystal"},
                "J": {"item": "kubejs:insanium_crystal"},
                "K": {"item": "matc:supremium_crystal"},
                "L": {"item": "matc:imperium_crystal"},
                "O": {"item": "matc:tertium_crystal"},
                "P": {"item": "matc:prudentium_crystal"},
                "V": {"item": "kubejs:tornium_crystal"}
              },
              "result": {"item": "mysticalagriculture:master_infusion_crystal"}
              }).id ('matc:crystals/master_infusion_crystal') 

    //*******************************************EndGame**********************************************************//



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
            }).id(`${id_prefix}neutronium_collector`)

           //Ultimate Ingot//
          e.custom({
            "type": "extendedcrafting:shapeless_table",
            "tier": 4,
            "ingredients": [
              {"item": "minecraft:gold_ingot" }, { "item": "thermal:nickel_ingot" }, { "item": "create:zinc_ingot" }, { "tag": "forge:ingots/queens_steel" }, { "item": "extendedcrafting:redstone_ingot" }, { "item": "thermal:invar_ingot" },
              {"item": "immersiveengineering:ingot_aluminum" }, { "item": "thermal:signalum_ingot" }, { "item": "thermal:lead_ingot" },
              {"item": "minecraft:iron_ingot" }, { "item": "astralsorcery:starmetal_ingot" }, { "item": "create:brass_ingot" }, { "item": "berseria_sky:comerald_ingot" }, { "item": "thermal:lumium_ingot" }, { "item": "botania:manasteel_ingot" }, { "tag": "forge:ingots/manronium_steel" },
              {"item": "mekanism:ingot_steel" }, { "item": "thermal:tin_ingot" },
              {"item": "thermal:bronze_ingot" }, { "item": "thermal:constantan_ingot" }, { "item": "thermal:copper_ingot" }, { "item": "kubejs:diamond_ingot" }, { "item": "thermal:electrum_ingot" }, { "item": "kubejs:emerald_ingot" }, { "item": "berseria_sky:manyerium_ingot" }, { "item": "minecraft:netherite_ingot" }, { "item": "mekanism:ingot_uranium" },
              {"item": "extendedcrafting:ender_ingot" }, { "item": "thermal:enderium_ingot" }, { "tag": "forge:ingots/fayronium" }, { "item": "botania:terrasteel_ingot" }, { "item": "botania:elementium_ingot" }, { "item": "draconicevolution:awakened_draconium_ingot" }, { "item": "draconicevolution:draconium_ingot" }, { "item": "bigreactors:yellorium_ingot" }, { "item": "bigreactors:cyanite_ingot" },
              {"item": "kubejs:ornium_ingot" }, { "item": "kubejs:lightium_ingot" }, { "item": "mekanism:ingot_antimatter" }, { "item": "kubejs:ardite_ingot" },
              {"item": "immersiveengineering:ingot_hop_graphite" }, { "item": "mysticalagriculture:prosperity_ingot" }, { "item": "kubejs:ouranium_ingot" }, { "item": "kubejs:platinum_ingot" }, { "item": "kubejs:sun_ingot" },
              {"item": "berseria_sky:elinvonze_ingot" }, { "item": "kubejs:moon_ingot" }, { "item": "mysticalagriculture:soulium_ingot" }, { "item": "mysticalagriculture:inferium_ingot" }, { "item": "mysticalagriculture:prudentium_ingot" }, { "item": "mysticalagriculture:tertium_ingot" }, { "item": "mysticalagriculture:imperium_ingot" }, { "item": "mysticalagriculture:supremium_ingot" }, { "item": "mysticalagradditions:insanium_ingot" },
              {"item": "blue_skies:ventium_ingot" }, { "item": "blue_skies:falsite_ingot" }, { "item": "blue_skies:horizonite_ingot" }, { "item": "tconstruct:rose_gold_ingot" }, { "item": "tconstruct:slimesteel_ingot" }, { "item": "thermal_extra:nectium_ingot" }, { "item": "tconstruct:cobalt_ingot" }, { "item": "tconstruct:pig_iron_ingot" }, { "item": "tconstruct:queens_slime_ingot" },
              {"item": "tconstruct:manyullyn_ingot" }, { "item": "tconstruct:hepatizon_ingot" }, { "item": "industrialforegoing:pink_slime_ingot" }, { "item": "kubejs:tornium_ingot" }, { "item": "mythicbotany:alfsteel_ingot" }, { "item": "extendedcrafting:enhanced_ender_ingot" }, { "item": "extendedcrafting:crystaltine_ingot" }, { "item": "materialis:fairy_ingot" }, { "item": "mekanism:ingot_refined_glowstone" },
              {"item": "mekanism:ingot_osmium" }, { "item": "mekanism:ingot_refined_obsidian" }, { "item": "thermal_extra:dragon_bronze_ingot" }, { "item": "thermal_extra:dragon_enderium_ingot" }, { "item": "thermal_extra:vukaium_ingot" }, { "item": "thermal_extra:nebulium_ingot" }, { "item": "thermal_extra:polarium_ingot" }, { "item": "thermal_extra:drownium_ingot" }, { "item": "thermal_extra:zauvium_ingot" }
              ],
            "result": {"item": "extendedcrafting:the_ultimate_ingot", "count": 1}
            } 
            ).id(`${id_prefix}the_ultimate_ingot`)

           //Ultimate Plate//
          e.custom({
            "type": "extendedcrafting:shapeless_table",
            "tier": 4,
            "ingredients": [
                { "item": "thermal:gold_plate" }, { "item": "thermal:nickel_plate" }, { "item": "createaddition:zinc_sheet" }, { "tag": "forge:plates/queens_steel" }, { "item": "kubejs:redstone_plate" }, { "item": "thermal:invar_plate" }, { "item": "immersiveengineering:plate_aluminum" }, { "item": "thermal:signalum_plate" }, { "item": "thermal:silver_plate" },
                { "item": "thermal:iron_plate" }, { "item": "kubejs:starmetal_plate" }, { "item": "create:brass_sheet" }, { "item": "thermal:lead_plate" }, { "item": "thermal:lumium_plate" }, { "item": "kubejs:manasteel_plate" }, { "tag": "forge:plates/manronium_steel" }, { "item": "immersiveengineering:plate_steel" }, { "item": "thermal:tin_plate" },
                { "item": "thermal:bronze_plate" }, { "item": "thermal:constantan_plate" }, { "item": "thermal:copper_plate" }, { "item": "kubejs:diamond_plate" }, { "item": "thermal:electrum_plate" }, { "item": "kubejs:emerald_plate" }, { "item": "berseria_sky:manyerium_plate" }, { "item": "thermal:netherite_plate" }, { "item": "immersiveengineering:plate_uranium" },
                { "item": "kubejs:ender_plate" }, { "item": "thermal:enderium_plate" }, { "tag": "forge:plates/fayronium" }, { "item": "kubejs:terrasteel_plate" }, { "item": "kubejs:elementium_plate" }, { "item": "kubejs:awakened_draconium_plate" }, { "item": "kubejs:draconium_plate" }, { "item": "kubejs:yellorium_plate" }, { "item": "kubejs:cyanite_plate" },
                { "item": "kubejs:ornium_plate" }, { "item": "kubejs:lightium_plate" }, { "item": "mekanism:antimatter_plate" }, { "item": "kubejs:ardite_plate" }, { "item": "kubejs:hop_graphite_plate" }, { "item": "kubejs:prosperity_plate" }, { "item": "kubejs:ouranium_plate" }, { "item": "kubejs:platinum_plate" }, { "item": "kubejs:sun_plate" },
                { "item": "berseria_sky:elinvonze_plate" }, { "item": "kubejs:moon_plate" }, { "item": "kubejs:soulium_plate" }, { "item": "kubejs:inferium_plate" }, { "item": "kubejs:prudentium_plate" }, { "item": "kubejs:tertium_plate" }, { "item": "kubejs:imperium_plate" }, { "item": "kubejs:supremium_plate" }, { "item": "kubejs:insanium_plate" },
                { "item": "kubejs:falsite_plate" }, { "item": "kubejs:ventium_plate" }, { "item": "kubejs:horizonite_plate" }, { "item": "kubejs:rose_gold_plate" }, { "item": "kubejs:slimesteel_plate" }, { "item": "thermal_extra:nectium_plate" }, { "item": "kubejs:cobalt_plate" }, { "item": "kubejs:pig_iron_plate" }, { "item": "kubejs:queens_slime_plate" },
                { "item": "kubejs:manyullyn_plate" }, { "item": "kubejs:hepatizon_plate" }, { "item": "kubejs:pink_slime_ingot_plate" }, { "item": "kubejs:tornium_plate" }, { "item": "kubejs:alfsteel_plate" }, { "item": "kubejs:enhanced_ender_plate" }, { "item": "kubejs:crystaltine_plate" }, { "item": "kubejs:fairy_plate" }, { "item": "kubejs:refined_glowstone_plate" },
                { "item": "kubejs:refined_obsidian_plate" }, { "item": "kubejs:osmium_plate" }, { "item": "thermal_extra:dragon_bronze_plate" },
                { "item": "thermal_extra:dragon_enderium_plate" }, { "item": "thermal_extra:vukaium_plate" }, { "item": "thermal_extra:nebulium_plate" }, { "item": "thermal_extra:polarium_plate" }, { "item": "thermal_extra:drownium_plate" },
                { "item": "thermal_extra:zauvium_plate" }
            ],
            "result": { "item": "kubejs:ultimate_plate", "count": 1 }
            }
            ).id(`${id_prefix}the_ultimate_plate`)

          //Ultimate Gear//
          e.custom({
           "type": "extendedcrafting:shapeless_table",
           "tier": 4,
           "ingredients": [
                { "item": "thermal:gold_gear" }, { "item": "thermal:nickel_gear" }, { "item": "kubejs:zinc_gear" }, { "tag": "forge:gears/queens_steel" }, { "item": "kubejs:redstone_gear" }, { "item": "thermal:invar_gear" }, { "item": "kubejs:aluminium_gear" }, { "item": "thermal:signalum_gear" }, { "item": "thermal:silver_gear" },
                { "item": "thermal:iron_gear" }, { "item": "kubejs:starmetal_gear" }, { "item": "kubejs:brass_gear" }, { "item": "thermal:lead_gear" }, { "item": "thermal:lumium_gear" }, { "item": "kubejs:manasteel_gear" }, { "tag": "forge:gears/manronium_steel" }, { "item": "kubejs:steel_gear" }, { "item": "thermal:tin_gear" },
                { "item": "thermal:bronze_gear" }, { "item": "thermal:constantan_gear" }, { "item": "thermal:copper_gear" }, { "item": "thermal:diamond_gear" }, { "item": "thermal:electrum_gear" }, { "item": "thermal:emerald_gear" }, { "item": "berseria_sky:manyerium_gear" }, { "item": "thermal:netherite_gear" }, { "item": "kubejs:uranium_gear" },
                { "item": "kubejs:ender_gear" }, { "item": "thermal:enderium_gear" }, { "tag": "forge:gears/fayronium" }, { "item": "kubejs:terrasteel_gear" }, { "item": "kubejs:elementium_gear" }, { "item": "kubejs:awakened_draconium_gear" }, { "item": "kubejs:draconium_gear" }, { "item": "kubejs:yellorium_gear" }, { "item": "kubejs:cyanite_gear" },
                { "item": "kubejs:ornium_gear" }, { "item": "kubejs:lightium_gear" }, { "item": "mekanism:antimatter_gear" }, { "item": "kubejs:ardite_gear" }, { "item": "kubejs:hop_graphite_gear" }, { "item": "kubejs:prosperity_gear" }, { "item": "kubejs:ouranium_gear" }, { "item": "kubejs:platinum_gear" }, { "item": "kubejs:sun_gear" },
                { "item": "berseria_sky:elinvonze_gear" }, { "item": "kubejs:moon_gear" }, { "item": "kubejs:soulium_gear" }, { "item": "kubejs:inferium_gear" }, { "item": "kubejs:prudentium_gear" }, { "item": "kubejs:tertium_gear" }, { "item": "kubejs:imperium_gear" }, { "item": "kubejs:supremium_gear" }, { "item": "kubejs:insanium_gear" },
                { "item": "kubejs:falsite_gear" }, { "item": "kubejs:ventium_gear" }, { "item": "kubejs:horizonite_gear" }, { "item": "kubejs:rose_gold_gear" }, { "item": "kubejs:slimesteel_gear" }, { "item": "thermal_extra:nectium_gear" }, { "item": "kubejs:cobalt_gear" }, { "item": "kubejs:pig_iron_gear" }, { "item": "kubejs:queens_slime_gear" },
                { "item": "kubejs:manyullyn_gear" }, { "item": "kubejs:hepatizon_gear" }, { "item": "kubejs:pink_slime_ingot_gear" }, { "item": "kubejs:tornium_gear" }, { "item": "kubejs:alfsteel_gear" }, { "item": "kubejs:enhanced_ender_gear" }, { "item": "kubejs:crystaltine_gear" }, { "item": "kubejs:fairy_gear" }, { "item": "kubejs:refined_glowstone_gear" },
                { "item": "kubejs:refined_obsidian_gear" }, { "item": "kubejs:osmium_gear" }, { "item": "thermal_extra:dragon_bronze_gear" },
                { "item": "thermal_extra:dragon_enderium_gear" }, { "item": "thermal_extra:vukaium_gear" }, { "item": "thermal_extra:nebulium_gear" }, { "item": "thermal_extra:polarium_gear" }, { "item": "thermal_extra:drownium_gear" },
                { "item": "thermal_extra:zauvium_gear" }
            ],
            "result": { "item": "kubejs:ultimate_gear", "count": 1 }
            }
            ).id(`${id_prefix}the_ultimate_gear`)

            //Creative Capacitor//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "pattern": [
                "ABCDEDCBA",
                "BFGHIHGFB",
                "CGJKKKLGC",
                "DHKMNMKHD",
                "OIKNPNKIQ",
                "DHKMNMKHD",
                "CGRKKKSGC",
                "BFGHIHGFB",
                "ABCDTDCBA"
              ],
              "key": {
                "A": {"item": "berseria_sky:mldeg_ingot"},
                "B": {"item": "immersiveengineering:toolupgrade_revolver_electro"},
                "C": {"item": "berseria_sky:component_creative"},
                "D": {"item": "immersiveengineering:capacitor_lv"},
                "E": {"type": "forge:nbt",
                      "item": "tconstruct:creative_slot",
                      "count": 1,"nbt": "{slot:\"defense\"}"},
                "F": {"item": "thermal:machine_efficiency_creative_augment"},
                "G": {"item": "immersiveengineering:component_steel"},
                "H": {"item": "immersiveengineering:capacitor_mv"},
                "I": {"item": "immersiveengineering:component_iron"},
                "J": {"item": "projecte:volcanite_amulet"},
                "K": {"item": "immersiveengineering:capacitor_hv"},
                "L": {"item": "projecte:evertide_amulet"},
                "M": {"item": "thermal:rf_potato"},
                "N": {"item": "thermal:rf_coil_creative_augment"},
                "O": {"type": "forge:nbt",
                      "item": "tconstruct:creative_slot",
                      "count": 1,"nbt": "{slot:\"upgrades\"}"},
                "P": {"item": "berseria_sky:ball_of_hakai"},
                "Q": {"type": "forge:nbt",
                      "item": "tconstruct:creative_slot",
                      "count": 1,"nbt": "{slot:\"souls\"}"},
                "R": { "item": "create:creative_blaze_cake"},
                "S": {"item": "kubejs:creative_crux"},
                "T": {"type": "forge:nbt",
                      "item": "tconstruct:creative_slot",
                      "count": 1,"nbt": "{slot:\"abilities\"}"
                }},
                "result": {"item": "immersiveengineering:capacitor_creative"}
                }).id(`${id_prefix}immersive_creative_capacitor`)

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
                "C": {"item": "appliedenergistics2:quantum_entangled_singularity"},
                "D": {"item": "endless:ultimate_stew"},
                "E": {"item": "ae2extras:16m_fluid_storage_cell"},
                "F": {"item": "create:creative_blaze_cake"},
                "G": {"item": "appliedenergistics2:128_cubed_spatial_storage_cell"},
                "H": {"item": "appliedenergistics2:singularity"},
                "I": {"item": "thermal:energy_cell",},
                "J": {"item": "appliedenergistics2:dense_energy_cell"},
                "K": {"item": "immersiveengineering:capacitor_creative"},
                "L": {"item": "berseria_sky:ball_of_hakai"},
                "M": {"item": "ae2extras:16m_storage_cell"}
              },
              "result": {"item": "appliedenergistics2:creative_energy_cell"}
              }).id(`${id_prefix}applied2_creative_energy_cell`)


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
          }).id(`${id_prefix}endest_pearl`)

            //Ultimate Stew//
            e.custom({ 
              "type": "extendedcrafting:shapeless_table",
              "tier": 4,
              "ingredients": [
            {"item":"pamhc2trees:avocadoitem"}, {"item":"pamhc2trees:candlenutitem"}, {"item":"pamhc2trees:cherryitem"}, {"item":"pamhc2trees:chestnutitem"}, {"item":"pamhc2trees:gooseberryitem"}, {"item":"pamhc2trees:lemonitem"}, {"item":"pamhc2trees:nutmegitem"}, {"item":"pamhc2trees:orangeitem"}, {"item":"pamhc2trees:peachitem"}, 
            {"item":"pamhc2trees:pearitem"}, {"item":"pamhc2trees:plumitem"}, {"item":"pamhc2trees:walnutitem"}, {"item":"pamhc2trees:hazelnutitem"}, {"item":"pamhc2trees:pawpawitem"}, {"item":"pamhc2trees:soursopitem"}, {"item":"pamhc2trees:almonditem"}, {"item":"pamhc2trees:apricotitem"}, {"item":"pamhc2trees:bananaitem"}, 
            {"item":"pamhc2trees:cashewitem"}, {"item":"pamhc2trees:cinnamonitem"}, {"item":"pamhc2trees:coconutitem"}, {"item":"pamhc2trees:dateitem"}, {"item":"pamhc2trees:dragonfruititem"}, {"item":"pamhc2trees:durianitem"}, {"item":"pamhc2trees:figitem"}, {"item":"pamhc2trees:grapefruititem"}, {"item":"pamhc2trees:limeitem"}, 
            {"item":"pamhc2trees:mangoitem"}, {"item":"pamhc2trees:oliveitem"}, {"item":"pamhc2trees:papayaitem"}, {"item":"pamhc2trees:pecanitem"}, {"item":"pamhc2trees:peppercornitem"}, {"item":"pamhc2trees:persimmonitem"}, {"item":"pamhc2trees:pistachioitem"}, {"item":"pamhc2trees:pomegranateitem"}, {"item":"pamhc2trees:starfruititem"}, 
            {"item":"pamhc2trees:vanillabeanitem"}, {"item":"pamhc2trees:breadfruititem"}, {"item":"pamhc2trees:guavaitem"}, {"item":"pamhc2trees:jackfruititem"}, {"item":"endless:neutronium_nugget"}, {"item":"pamhc2trees:passionfruititem"}, {"item":"pamhc2trees:tamarinditem"}, {"item":"pamhc2trees:pinenutitem"}, {"item":"pamhc2trees:maplesyrupitem"}, 
            {"item":"pamhc2crops:cornitem"}, {"item":"pamhc2crops:milletitem"}, {"item":"pamhc2crops:oatsitem"}, {"item":"pamhc2crops:quinoaitem"}, {"item":"pamhc2crops:blackberryitem"}, {"item":"pamhc2crops:blueberryitem"}, {"item":"pamhc2crops:cactusfruititem"}, {"item":"pamhc2crops:candleberryitem"}, {"item":"pamhc2crops:cranberryitem"}, 
            {"item":"pamhc2crops:elderberryitem"}, {"item":"pamhc2crops:grapeitem"}, {"item":"pamhc2crops:greengrapeitem"}, {"item":"pamhc2crops:huckleberryitem"}, {"item":"pamhc2crops:juniperberryitem"}, {"item":"pamhc2crops:raspberryitem"}, {"item":"pamhc2crops:mulberryitem"}, {"item":"pamhc2trees:lycheeitem"}, {"item":"pamhc2crops:strawberryitem"}, 
            {"item":"pamhc2crops:coffeebeanitem"}, {"item":"pamhc2crops:whitemushroomitem"}, {"item":"pamhc2crops:gingeritem"}, {"item":"pamhc2crops:sesameseedsitem"}, {"item":"pamhc2crops:tomatoitem"}, {"item":"pamhc2crops:rhubarbitem"}, {"item":"pamhc2crops:turnipitem"}, {"item":"pamhc2crops:sweetpotatoitem"}, {"item":"pamhc2crops:taroitem"}, 
            {"item":"pamhc2crops:kiwiitem"}, {"item":"pamhc2crops:pineappleitem"}, {"item":"pamhc2crops:chilipepperitem"}, {"item":"pamhc2crops:eggplantitem"}, {"item":"pamhc2crops:lettuceitem"}, {"item":"pamhc2crops:caulifloweritem"}, {"item":"pamhc2crops:radishitem"}, {"item":"pamhc2crops:mustardseedsitem"}, {"item":"pamhc2crops:agaveitem"}
            ],
            "result": { "item": "endless:ultimate_stew", "count": 1 }
            }).id('endless:the_ultimate_stew')

            //Cosmic Meatballs//
            e.custom({ 
              "type": "extendedcrafting:shapeless_table",
              "tier": 4,
              "ingredients": [
            {"item":"pamhc2foodextended:spagettiitem"}, {"item":"pamhc2foodextended:stuffedchilipeppersitem"}, {"item":"pamhc2foodextended:supremepizzaitem"}, {"item":"pamhc2foodextended:tacoitem"}, {"item":"pamhc2foodextended:deluxenachoesitem"}, {"item":"pamhc2foodextended:bbqpotatochipsitem"}, {"item":"pamhc2foodextended:candiedlemonitem"}, {"item":"pamhc2foodextended:soysauceitem"}, {"item":"pamhc2foodextended:mustarditem"}, 
            {"item":"pamhc2foodextended:weekendpicnicitem"}, {"item":"pamhc2foodextended:toadintheholeitem"}, {"item":"pamhc2foodcore:carrotbreaditem"}, {"item":"pamhc2foodcore:pumpkinbreaditem"}, {"item":"pamhc2foodcore:meatloafitem"}, {"item":"pamhc2foodextended:hotsauceitem"}, {"item":"pamhc2foodextended:relishitem"}, {"item":"pamhc2foodextended:ketchupitem"}, {"item":"pamhc2foodextended:sesameoilitem"}, 
            {"item":"pamhc2foodcore:fishandchipsitem"}, {"item":"pamhc2foodextended:salisburysteakitem"}, {"item":"pamhc2foodextended:slawdogitem"}, {"item":"pamhc2foodextended:deviledeggitem"}, {"item":"pamhc2foodextended:toastsandwichitem"}, {"item":"pamhc2foodextended:wontonsoupitem"}, {"item":"pamhc2foodextended:phoitem"}, {"item":"pamhc2foodextended:paradiseburgeritem"}, {"item":"pamhc2foodextended:walnutraisinbreaditem"}, 
            {"item":"pamhc2foodextended:szechuaneggplantitem"}, {"item":"pamhc2foodextended:fortunecookieitem"}, {"item":"pamhc2foodextended:baconpancakesitem"}, {"item":"pamhc2foodextended:picklesitem"}, {"item":"pamhc2foodextended:pickledonionsitem"}, {"item":"pamhc2foodextended:shepardspieitem"}, {"item":"pamhc2foodextended:pambitsboxitem"}, {"item":"pamhc2foodextended:pecanpieitem"}, {"item":"pamhc2foodextended:southernstylebreakfastitem"}, 
            {"item":"pamhc2foodextended:friedfeastitem"}, {"item":"pamhc2foodextended:cookoutmealitem"}, {"item":"pamhc2foodextended:frenchtoastitem"}, {"item":"pamhc2foodextended:battenbergitem"}, {"item":"pamhc2foodextended:spaghettidinneritem"}, {"item":"pamhc2foodextended:deluxechickencurryitem"}, {"item":"pamhc2foodcore:gummybearsitem"}, {"item":"pamhc2foodcore:porkjerkyitem"}, {"item":"pamhc2foodcore:jellybeansitem"}, 
            {"item":"pamhc2foodextended:friedriceitem"}, {"item":"pamhc2foodextended:fruitcakeitem"}, {"item":"pamhc2foodextended:fruitcreamfestivalbreaditem"}, {"item":"pamhc2foodcore:bakedvegetablemedlyitem"}, {"item":"pamhc2foodcore:basicfishsandwichitem"}, {"item":"pamhc2foodextended:gardensoupitem"}, {"item":"pamhc2foodextended:garlicsteakitem"}, {"item":"pamhc2foodextended:generaltsochickenitem"}, {"item":"pamhc2foodextended:deluxecheeseburgeritem"}, 
            {"item":"pamhc2foodextended:mcpamitem"}, {"item":"pamhc2foodextended:footlongitem"}, {"item":"pamhc2foodextended:hotwingsitem"}, {"item":"pamhc2foodextended:dimsumitem"}, {"item":"pamhc2foodextended:garlicchickenitem"}, {"item":"pamhc2foodextended:cantonesenoodlesitem"}, {"item":"pamhc2foodextended:friedgreentomatoesitem"}, {"item":"pamhc2foodextended:friedonionsitem"}, {"item":"pamhc2foodextended:friedpecanokraitem"}, 
            {"item":"pamhc2foodextended:chickencelerycasseroleitem"}, {"item":"pamhc2foodextended:chickenparmasanitem"}, {"item":"pamhc2foodextended:chickenbiscuititem"}, {"item":"pamhc2foodextended:honeyglazedcarrotsitem"}, {"item":"pamhc2foodextended:kohlundpinkelitem"}, {"item":"pamhc2foodextended:lambwithmintsauceitem"}, {"item":"pamhc2foodextended:lamingtonitem"}, {"item":"pamhc2foodextended:honeysoyribsitem"}, {"item":"pamhc2foodextended:hotandsoursoupitem"}, 
            {"item":"pamhc2foodextended:cornedbeefbreakfastitem"}, {"item":"pamhc2foodextended:bolognasandwichitem"}, {"item":"pamhc2foodextended:honeysandwichitem"}, {"item":"pamhc2foodextended:friedbolognasandwichitem"}, {"item":"pamhc2foodextended:bratwurstitem"}, {"item":"pamhc2foodextended:cantonesegreensitem"}, {"item":"pamhc2foodcore:fishjerkyitem"}, {"item":"pamhc2foodcore:muttonjerkyitem"}, {"item":"pamhc2foodcore:rabbitjerkyitem"}
            ],
            "result": {"item":"endless:cosmic_meatballs","count":1}
            }).id('endless:cosmic_meatballs')

            //God Ingot//
            e.custom({
              "type": "extendedcrafting:shaped_table",
              "tier": 4,
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
                "A": {"item": "endless:neutronium_ingot"},
                "B": {"item": "endless:crystal_matrix_ingot"},
                "C": {"item": "mysticalagradditions:insanium_ingot"}
              },
              "result": {"item": "berseria_sky:god_ingot"}
              }).id(`${id_prefix}god_ingot`)

      //Infinity Ingot//
      e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
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
      }).id(`${id_prefix}infinity_ingot`)

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
      }).id(`${id_prefix}infinity_pickaxe`)

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
      }).id(`${id_prefix}infinity_axe`)

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
         }).id(`${id_prefix}infinity_shovel`)

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
        }).id(`${id_prefix}infinity_hoe`)

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
      }).id(`${id_prefix}skullfire_sword`)

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
      }).id(`${id_prefix}infinity_sword`)

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
      }).id(`${id_prefix}infinity_bow`)

      //Infinity CrossBow//
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
      }).id(`${id_prefix}infinity_crossbow`)

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
  }).id(`${id_prefix}infinity_catalyst`)

      //Creative Storage Upgrade//
    e.custom({
           "type": "extendedcrafting:shaped_table",
            "tier": 4,
            "pattern": [
                "ABCDEDCBA",
                "BFGHFHGFB",
                "CGIJKLMGC",
                "DNOPQRSND",
                "EFTUVWXFE",
                "DNYZ123ND",
                "CG45678GC",
                "BFG9F9GFB",
                "ABCDEDCBA"
            ],
            "key": {
                "A": { "item": "storagedrawers:emerald_storage_upgrade" },
                "B": { "item": "storagedrawers:obsidian_storage_upgrade" },
                "C": { "item": "storagedrawers:iron_storage_upgrade" },
                "D": { "item": "storagedrawers:gold_storage_upgrade" },
                "E": { "item": "storagedrawers:diamond_storage_upgrade" },
                "F": { "item": "appliedenergistics2:64k_cell_component" },
                "G": { "item": "sonicraft:green_hill_palm_planks" },
                "H": { "item": "betternether:wart_planks" },
                "I": { "item": "betterendforge:lucernia_planks" },
                "J": { "item": "betterendforge:mossy_glowshroom_planks" },
                "K": { "item": "betterendforge:umbrella_tree_planks" },
                "L": { "item": "betterendforge:helix_tree_planks" },
                "M": { "item": "betterendforge:end_lotus_planks" },
                "N": { "item": "betterendforge:dragon_tree_planks" },
                "O": { "item": "betterendforge:jellyshroom_planks" },
                "P": { "item": "betternether:stalagnate_planks" },
                "Q": { "item": "sonicraft:chilly_blossom_planks" },
                "R": { "item": "betternether:rubeus_planks" },
                "S": { "item": "betterendforge:tenanea_planks" },
                "T": { "item": "blue_skies:frostbright_planks" },
                "U": { "item": "outvoted:palm_planks" },
                "V": { "item": "storagedrawers:upgrade_template" },
                "W": { "item": "betternether:willow_planks" },
                "X": { "item": "tconstruct:skyroot_planks" },
                "Y": { "item": "betterendforge:lacugrove_planks" },
                "Z": { "item": "betterendforge:pythadendron_planks" },
                "1": { "item": "betternether:mushroom_fir_planks" },
                "2": { "item": "tconstruct:greenheart_planks" },
                "3": { "item": "blue_skies:starlit_planks" },
                "4": { "item": "blue_skies:dusk_planks" },
                "5": { "item": "tconstruct:nahuatl" },
                "6": { "item": "minecraft:warped_planks" },
                "7": { "item": "integrateddynamics:menril_planks" },
                "8": { "item": "tconstruct:bloodshroom_planks" },
                "9": { "item": "astralsorcery:infused_wood_planks" }
                },
            "result": {"item": "storagedrawers:creative_storage_upgrade","count":2}
           }
       ).id('storagedrawers:creative_storage_upgrade')


        //Creative Tank(Create)//
        e.custom({
          "type": "extendedcrafting:shaped_table",
          "pattern": [
            "ABBBBBBBA",
            "BCDEFEDCB",
            "BGHIJIHGB",
            "BKLMNMOKB",
            "BFJNPNJFB",
            "BKQMNMRKB",
            "BSHIJIHSB",
            "BCTUFUTCB",
            "VBBBBBBBV"
          ],
          "key": {
            "A": {"item": "thermal:machine_efficiency_creative_augment"},
            "B": {"item": "create:fluid_tank"},
            "C": {"item": "immersiveengineering:capacitor_creative"},
            "D": {"item": "cagedmobs:creative_upgrade"},
            "E": {"item": "mekanism:ultimate_fluid_tank"},
            "F": {"item": "thermal:rf_coil_creative_augment"},
            "G": {"type": "forge:nbt","item": "tconstruct:creative_slot",
              "count": 1,"nbt": "{slot:\"souls\"}"},
            "H": {"item": "create:creative_blaze_cake"},
            "I": {"item": "berseria_sky:alloy_infinity"},
            "J": {"item": "thermal:fluid_tank_creative_augment"},
            "K": {"item": "berseria_sky:sayaniku_ingot"},
            "L": {"item": "draconicevolution:creative_capacitor"},
            "M": {"item": "industrialforegoing:supreme_black_hole_tank"},
            "N": {"item": "storagedrawers:creative_storage_upgrade"},
            "O": {"item": "appliedenergistics2:creative_energy_cell"},
            "P": {"item": "simplyjetpacks:jetpack_creative_armored"},
            "Q": {"item": "create:creative_motor"},
            "R": {"item": "powah:energy_cell_creative"},
            "S": {"type": "forge:nbt","item": "tconstruct:creative_slot",
                  "count": 1,"nbt": "{slot:\"defense\"}"},
            "T": {"type": "forge:nbt","item": "tconstruct:creative_slot",
                  "count": 1,"nbt": "{slot:\"abilities\"}"},
            "U": {"item": "mob_grinding_utils:tank"},
            "V": {"item": "thermal:machine_catalyst_creative_augment"}
          },
          "result": {"item": "create:creative_fluid_tank"}
        }).id(`${id_prefix}creative_fluid_tank`)

});