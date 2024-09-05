onEvent("recipes", (e) => {
    const id_prefix = 'berseria_sky:extendedcrafting/advanced_table/';

    //Chaotic Crux//
        e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier":2,
        "pattern": [
          "ABBBA",
          "BCCCB",
          "BCDCB",
          "BCCCB",
          "ABBBA"
        ],
        "key": {
          "A": {"item": "draconicevolution:chaotic_core"},
          "B": {"item": "draconicevolution:chaos_shard"},
          "C": {"item": "minecraft:dragon_breath"},
          "D": {"item": "mysticalagradditions:insanium_farmland"}
        },
        "result": {"item": "berseria_sky:chaotic_crux"}
        }).id(`${id_prefix}chaotic_crux`)

      //Nether Star Crux//
       e.custom({
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": [
            "SCNCS",
            "BWWWB",
            "NWFWN",
            "BWWWB",
            "SCNCS"
      ],
       "key": {
        "N": { "item": "extendedcrafting:nether_star_block" },
        "S": { "item": "minecraft:wither_skeleton_skull" },
        "C": { "item": "excompressum:compressed_soul_sand" },
        "B": { "item": "miniutilities:nether_star_opinium_core" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "W": { "item": "cagedmobs:star_infused_netherite_block" }
       },
      "result": {"item": "mysticalagradditions:nether_star_crux"}
       }).id('mysticalagradditions:nether_star_crux')

       //Dragon Egg Crux//
       e.custom({
          "type": "extendedcrafting:shaped_table",
          "tier": 2,
          "pattern": [
            "SCNCS",
            "BWWWB",
            "NWFWN",
            "BWWWB",
            "SCNCS"
          ],
          "key": {
            "W": { "item": "draconicevolution:dragon_heart"},
            "S": { "item": "thermal_extra:dragon_bronze_block"},
            "C": { "item": "compressium:endstone_3"},
            "B": { "item": "minecraft:dragon_egg"},
            "F": { "item": "mysticalagradditions:insanium_farmland"},
            "N": { "item": "mysticalagradditions:dragon_scale"}
          },
          "result": {"item": "mysticalagradditions:dragon_egg_crux"}
        }).id('mysticalagradditions:dragon_egg_crux')

        //Awakened Draconium Crux//
       e.custom({
         "type": "extendedcrafting:shaped_table",
         "tier": 2,
         "pattern": [
         "SCNCS",
         "BWWWB",
         "NWFWN",
         "BWWWB",
         "SCNCS"
      ],
      "key": {
        "W": { "item": "draconicevolution:awakened_draconium_block" },
        "S": { "item": "draconicevolution:awakened_core" },
        "C": { "item": "excompressum:compressed_end_stone" },
        "B": { "item": "draconicevolution:draconic_relay_crystal" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "N": { "item": "draconicevolution:draconic_energy_core" }
      },
      "result": {"item": "mysticalagradditions:awakened_draconium_crux"}
    }).id('mysticalagradditions:awakened_draconium_crux')

      //Nitro Crystal Crux//
     e.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": [
        "SCNCS",
        "BWWWB",
        "NWFWN",
        "BWWWB",
        "SCNCS"
      ],
      "key": {
        "W": { "item": "powah:solar_panel_nitro" },
        "S": { "item": "powah:ender_core" },
        "C": { "item": "powah:nitro_crystal_block" },
        "B": { "item": "powah:ender_gate_nitro" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "N": { "item": "powah:energy_cell_nitro" }
      },
      "result": {"item": "mysticalagradditions:nitro_crystal_crux"}
      }).id('mysticalagradditions:nitro_crystal_crux')

      //Alsteel Crux//
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": [
        "SCNCS",
        "BWWWB",
        "NWFWN",
        "BWWWB",
        "SCNCS"
      ],
      "key": {
        "W": {"item": "mythicbotany:asgard_rune"},
        "S": {"item": "mythicbotany:alfsteel_pylon"},
        "C": {"item": "mythicbotany:alfsteel_block"},
        "B": {"item": "mythicbotany:aura_ring_greatest"},
        "F": {"item": "mysticalagradditions:insanium_farmland"},
        "N": {"item": "mythicbotany:alfsteel_armor_upgrade"}
      },
      "result": {"item": "kubejs:alfsteel_crux"}
      }).id(`${id_prefix}alfsteel_crux`)

    //Gaia Spirit Crux//
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": [
        "ABBBA",
        "BCDCB",
        "BDEDB",
        "BCDCB",
        "ABBBA"
      ],
      "key": {
        "A": {"item": "botania:gaia_spreader"},
        "B": {"item": "kubejs:gaia_spirit_block"},
        "C": {"item": "botania:gaia_head"},
        "D": {"item": "botania:gaia_pylon"},
        "E": {"item": "mysticalagradditions:insanium_farmland"}
      },
      "result": {"item": "kubejs:gaia_spirit_crux"}
      }).id(`${id_prefix}gaia_spirit_crux`)

           //Time in Bottle//
           e.custom({
             "type": "extendedcrafting:shaped_table",
             "tier": 2,
             "pattern":[
             "ABBBA",
             "CDEFC",
             "BEGEB",
             "CHEIC",
             "ABBBA"
            ],
            "key": {
              "A": {"item":"kubejs:imperium_plate"},
              "B": {"item":"powah:charged_snowball"},
              "C": {"item":"storagenetwork:stack_upgrade"},
              "D": {"item":"botania:rune_envy"},
              "E": {"item":"miniutilities:the_final_opinium_core"},
              "F": {"item":"botania:rune_pride"},
              "G": {"item":"astralsorcery:shifting_star_aevitas"},
              "H": {"item":"botania:rune_sloth"},
              "I": {"item":"botania:rune_wrath"}
              },
              "result": {"item": "tiab:timeinabottle"}
              }).id ('tiab:timeinabottle')





});