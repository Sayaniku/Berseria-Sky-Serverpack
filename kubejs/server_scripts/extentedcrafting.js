events.listen('recipes', function (e) {

  //Nether Star Crux//
  e.remove({ id: "mysticalagradditions:nether_star_crux" })
  e.custom(
    {
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
        "B": { "item": "tconstruct:necrotic_bone" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "W": { "item": "cagedmobs:star_infused_netherite_ingot" }
      },
      "result": {
        "item": "mysticalagradditions:nether_star_crux"
      }
    })
  //Dragon Egg Crux//
  e.remove({ id: "mysticalagradditions:dragon_egg_crux" })
  e.custom(
    {
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
        "W": { "item": "draconicevolution:dragon_heart" },
        "S": { "item": "minecraft:dragon_breath" },
        "C": { "item": "excompressum:compressed_end_stone" },
        "B": { "item": "minecraft:dragon_egg" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "N": { "item": "mysticalagradditions:dragon_scale" }
      },
      "result": {
        "item": "mysticalagradditions:dragon_egg_crux"
      }
    })

  //Awakened Draconium Crux//
  e.remove({ id: "mysticalagradditions:awakened_draconium_crux" })
  e.custom(
    {
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
      "result": {
        "item": "mysticalagradditions:awakened_draconium_crux"
      }
    })

  //Nitro Crystal Crux//
  e.remove({ id: "mysticalagradditions:nitro_crystal_crux" })
  e.custom(
    {
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
      "result": {
        "item": "mysticalagradditions:nitro_crystal_crux"
      }
    })
  //Sun Crux//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": [
        "SCCCCCS",
        "CWWWWWC",
        "CWPPPWC",
        "CWPFPWC",
        "CWPPPWC",
        "CWWWWWC",
        "SCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "S": { "item": "kubejs:ornium_ingot_block" },
        "C": { "item": "kubejs:sun_block" },
        "P": { "item": "extendedcrafting:redstone_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:sun_crux"
      }
    })
  //Sun Seeds//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": [
        "SCCCCCS",
        "CWWWWWC",
        "CWPPPWC",
        "CWPFPWC",
        "CWPPPWC",
        "CWWWWWC",
        "SCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "S": { "item": "kubejs:ornium_block" },
        "C": { "item": "kubejs:sun_block" },
        "P": { "item": "extendedcrafting:redstone_ingot_block" },
        "F": { "item": "kubejs:ornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:sun_seeds"
      }
    })
  //Moon Crux//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": [
        "SCCCCCS",
        "CWWWWWC",
        "CWPPPWC",
        "CWPFPWC",
        "CWPPPWC",
        "CWWWWWC",
        "SCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "S": { "item": "kubejs:ornium_ingot_block" },
        "C": { "item": "kubejs:moon_block" },
        "P": { "item": "extendedcrafting:redstone_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:moon_crux"
      }
    })
  //Moon Seeds//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": [
        "SCCCCCS",
        "CWWWWWC",
        "CWPPPWC",
        "CWPFPWC",
        "CWPPPWC",
        "CWWWWWC",
        "SCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "S": { "item": "kubejs:ornium_block" },
        "C": { "item": "kubejs:moon_block" },
        "P": { "item": "extendedcrafting:redstone_ingot_block" },
        "F": { "item": "kubejs:ornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:moon_seeds"
      }
    })
  //Manyerium Crux//
  e.custom(
    {
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
      "result": {
        "item": "kubejs:manyerium_crux"
      }
    })
  //Manyerium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "item": "thermal:signalum_block" },
        "G": { "item": "mysticalagriculture:signalum_seeds" },
        "Z": { "item": "tconstruct:manyullyn_block" },
        "M": { "item": "mysticalagriculture:manyullyn_seeds" },
        "A": { "item": "thermal:enderium_block" },
        "E": { "item": "mysticalagriculture:enderium_seeds" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "tag": "forge:storage_blocks/manyerium" },
        "F": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:manyerium_seeds"
      }
    })
  //Elinvonze Crux//
  e.custom(
    {
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
        "W": { "item": "thermal:electrum_block" },
        "Z": { "item": "thermal:invar_block" },
        "A": { "item": "thermal:bronze_block" },
        "S": { "item": "kubejs:lightium_ingot_block" },
        "C": { "item": "berseria_sky:elinvonze_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:elinvonze_crux"
      }
    })
  //Elinvonze Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "item": "thermal:electrum_block" },
        "G": { "item": "mysticalagriculture:electrum_seeds" },
        "Z": { "item": "thermal:invar_block" },
        "M": { "item": "mysticalagriculture:invar_seeds" },
        "A": { "item": "thermal:bronze_block" },
        "E": { "item": "mysticalagriculture:bronze_seeds" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "item": "berseria_sky:elinvonze_block" },
        "F": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:elinvonze_seeds"
      }
    })
  //Fayronium Crux//
  e.custom(
    {
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
        "W": { "item": "thermal:lumium_block" },
        "Z": { "item": "tconstruct:hepatizon_block" },
        "A": { "item": "materialis:fairy_block" },
        "S": { "item": "kubejs:lightium_ingot_block" },
        "C": { "tag": "forge:storage_blocks/fayronium" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:fayronium_crux"
      }
    })
  //Fayronium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "item": "thermal:lumium_block" },
        "G": { "item": "mysticalagriculture:lumium_seeds" },
        "Z": { "item": "tconstruct:hepatizon_block" },
        "M": { "item": "mysticalagriculture:hepatizon_seeds" },
        "A": { "item": "materialis:fairy_block" },
        "E": { "item": "mysticalagriculture:fairy_ingot_seeds" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "tag": "forge:storage_blocks/fayronium" },
        "F": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:fayronium_seeds"
      }
    })
  //Queen's Steel Crux//
  e.custom(
    {
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
        "W": { "item": "tconstruct:pig_iron_block" },
        "Z": { "item": "tconstruct:queens_slime_block" },
        "A": { "item": "tconstruct:slimesteel_block" },
        "S": { "item": "kubejs:lightium_ingot_block" },
        "C": { "tag": "forge:storage_blocks/queens_steel" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:queens_steel_crux"
      }
    })
  //Queen's Steel Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "item": "tconstruct:pig_iron_block" },
        "G": { "item": "mysticalagriculture:pig_iron_seeds" },
        "Z": { "item": "tconstruct:queens_slime_block" },
        "M": { "item": "mysticalagriculture:queens_slime_seeds" },
        "A": { "item": "tconstruct:slimesteel_block" },
        "E": { "item": "mysticalagriculture:slimesteel_seeds" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "tag": "forge:storage_blocks/queens_steel" },
        "F": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:queens_steel_seeds"
      }
    })
  //Manronium Steel Crux//
  e.custom(
    {
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
        "W": { "tag": "forge:storage_blocks/queens_steel" },
        "Z": { "tag": "forge:storage_blocks/fayronium" },
        "A": { "tag": "forge:storage_blocks/manyerium" },
        "S": { "item": "kubejs:tornium_ingot_block" },
        "C": { "tag": "forge:storage_blocks/manronium_steel" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:manronium_steel_crux"
      }
    })
  //Manronium Steel Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/queens_steel" },
        "G": { "item": "mysticalagriculture:queens_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/fayronium" },
        "M": { "item": "mysticalagriculture:fayronium_seeds" },
        "A": { "tag": "forge:storage_blocks/manyerium" },
        "E": { "item": "mysticalagriculture:manyerium_seeds" },
        "S": { "item": "kubejs:tornium_block" },
        "C": { "tag": "forge:storage_blocks/manronium_steel" },
        "F": { "item": "kubejs:tornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:manronium_steel_seeds"
      }
    })
  //Antimatter Crux//
  e.custom(
    {
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
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "A": { "item": "draconicevolution:awakened_draconium_block" },
        "S": { "item": "kubejs:tornium_ingot_block" },
        "C": { "item": "mekanism:block_antimatter" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:antimatter_crux"
      }
    })
  //Antimatter Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CSAAEAASC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CSAAAAASC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "G": { "item": "mysticalagriculture:manronium_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "M": { "item": "mysticalagriculture:manyerium_seeds" },
        "A": { "item": "draconicevolution:awakened_draconium_block" },
        "E": { "item": "mysticalagriculture:awakened_draconium_seeds" },
        "S": { "item": "kubejs:tornium_block" },
        "C": { "item": "mekanism:block_antimatter" },
        "F": { "item": "kubejs:tornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:antimatter_seeds"
      }
    })
  //Alsteel Crux//
  e.custom(
    {
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
        "W": { "item": "mythicbotany:asgard_rune" },
        "S": { "item": "mythicbotany:alfsteel_pylon" },
        "C": { "item": "mythicbotany:alfsteel_block" },
        "B": { "item": "mythicbotany:aura_ring_greatest" },
        "F": { "item": "mysticalagradditions:insanium_farmland" },
        "N": { "item": "mythicbotany:alfsteel_armor_upgrade" }
      },
      "result": {
        "item": "kubejs:alfsteel_crux"
      }
    })
    
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
        "B": {"item": "botania:gaia_ingot"},
        "C": {"item": "botania:gaia_head"},
        "D": {"item": "botania:gaia_pylon"},
        "E": {"item": "mysticalagradditions:insanium_farmland"}
      },
      "result": {"item": "kubejs:gaia_spirit_crux"}
    })

  //Ornium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "G": { "item": "mysticalagriculture:manronium_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "M": { "item": "mysticalagriculture:manyerium_seeds" },
        "A": { "item": "mysticalagradditions:insanium_ingot_block" },
        "E": { "item": "mysticalagriculture:insanium_ingot_seeds" },
        "S": { "item": "kubejs:ornium_block" },
        "C": { "item": "kubejs:ornium_ingot_block" },
        "F": { "item": "kubejs:ornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:ornium_ingot_seeds"
      }
    })

  //Ornium Crux//
  e.custom(
    {
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
        "W": { "item": "kubejs:ornium_gear" },
        "Z": { "item": "kubejs:ornium_plate" },
        "A": { "item": "kubejs:ornium_gemstone_block" },
        "S": { "item": "kubejs:ornium_ingot_block" },
        "C": { "item": "kubejs:ornium_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:ornium_crux"
      }
    })

  //Lightium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "G": { "item": "mysticalagriculture:manronium_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "M": { "item": "mysticalagriculture:manyerium_seeds" },
        "A": { "item": "mysticalagradditions:insanium_ingot_block" },
        "E": { "item": "mysticalagriculture:insanium_ingot_seeds" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "item": "kubejs:lightium_ingot_block" },
        "F": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:lightium_ingot_seeds"
      }
    })

  //Lightium Crux//
  e.custom(
    {
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
        "W": { "item": "kubejs:lightium_gear" },
        "Z": { "item": "kubejs:lightium_plate" },
        "A": { "item": "kubejs:lightium_gemstone_block" },
        "S": { "item": "kubejs:lightium_block" },
        "C": { "item": "kubejs:lightium_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:lightium_crux"
      }
    })

  //Tornium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "G": { "item": "mysticalagriculture:manronium_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "M": { "item": "mysticalagriculture:manyerium_seeds" },
        "A": { "item": "mysticalagradditions:insanium_ingot_block" },
        "E": { "item": "mysticalagriculture:insanium_ingot_seeds" },
        "S": { "item": "kubejs:tornium_block" },
        "C": { "item": "kubejs:tornium_ingot_block" },
        "F": { "item": "kubejs:tornium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:tornium_ingot_seeds"
      }
    })

  //Tornium Crux//
  e.custom(
    {
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
        "W": { "item": "kubejs:tornium_gear" },
        "Z": { "item": "kubejs:tornium_plate" },
        "A": { "item": "kubejs:tornium_gemstone_block" },
        "S": { "item": "kubejs:tornium_block" },
        "C": { "item": "kubejs:tornium_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:tornium_crux"
      }
    })

  //Ouranium Seed//
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": [
        "SCCCCCCCS",
        "CAAAEAAAC",
        "CAWWGWWAC",
        "CAWZMZWAC",
        "CAWZFZWAC",
        "CAWZZZWAC",
        "CAWWWWWAC",
        "CAAAAAAAC",
        "SCCCCCCCS"
      ],
      "key": {
        "W": { "tag": "forge:storage_blocks/manronium_steel" },
        "G": { "item": "mysticalagriculture:manronium_steel_seeds" },
        "Z": { "tag": "forge:storage_blocks/manyerium" },
        "M": { "item": "mysticalagriculture:manyerium_seeds" },
        "A": { "item": "mysticalagradditions:insanium_ingot_block" },
        "E": { "item": "mysticalagriculture:insanium_ingot_seeds" },
        "S": { "item": "kubejs:ouranium_block" },
        "C": { "item": "kubejs:ouranium_ingot_block" },
        "F": { "item": "kubejs:ouranium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:ouranium_ingot_seeds"
      }
    })

  //Ouranium Crux//
  e.custom(
    {
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
        "W": { "item": "kubejs:ouranium_gear" },
        "Z": { "item": "kubejs:ouranium_plate" },
        "A": { "item": "kubejs:ouranium_gemstone_block" },
        "S": { "item": "kubejs:ouranium_block" },
        "C": { "item": "kubejs:ouranium_ingot_block" },
        "F": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:ouranium_crux"
      }
    })

  //Bedrock Seeds//
  e.custom(
    {

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
        "A": { "item": "kubejs:lightium_block" },
        "B": { "item": "kubejs:bedrock" },
        "C": { "item": "industrialforegoing:machine_frame_advanced" },
        "D": { "item": "industrialforegoing:machine_frame_supreme" },
        "E": { "item": "industrialforegoing:machine_frame_simple" },
        "F": { "item": "berseria_sky:controller_casing" },
        "G": { "item": "mekanism:steel_casing" },
        "H": { "item": "kubejs:lightium_seed" }
      },
      "result": {
        "item": "mysticalagriculture:bedrock_seeds"
      }
    })

  //Bedrock Crux//
  e.custom(
    {

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
        "A": { "item": "kubejs:lightium_ingot_block" },
        "B": { "item": "kubejs:bedrock" },
        "C": { "item": "industrialforegoing:machine_frame_advanced" },
        "D": { "item": "industrialforegoing:machine_frame_supreme" },
        "E": { "item": "industrialforegoing:machine_frame_simple" },
        "F": { "item": "berseria_sky:controller_casing" },
        "G": { "item": "mekanism:steel_casing" },
        "H": { "item": "mysticalagradditions:insanium_farmland" }
      },
      "result": {
        "item": "kubejs:bedrock_crux"
      }
    })
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
    })

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
    })

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
    })

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
    })
    

})