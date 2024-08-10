events.listen('recipes', function (e) { 

    function Seedtier3(block, Result, additionnalSeed1, additionnalSeed2, isMob) {
        let seed = '';
        if (isMob) seed = 'mysticalagriculture:soulium_seed_base';
        else seed = 'kubejs:tertium_seed';
    
        if(additionnalSeed1 == 0 || additionnalSeed2 == 0) {
            e.custom(
                {
                    "type": "botania:runic_altar",
                    "output": {"item": Result},
                    "mana": 1000000,
                    "ingredients": [
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": seed},
                      {"item": block},
                      {"item": block},
                      {"item": block},
                      {"item": block}
                    ],
                    
                });}
        else {
            e.custom(
                {
                    "type": "botania:runic_altar",
                    "output": {"item": Result},
                    "mana": 1000000,
                    "ingredients": [
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": 'mysticalagriculture:tertium_block'},
                      {"item": additionnalSeed1},
                      {"item": additionnalSeed2},
                      {"item": seed},
                      {"item": block},
                      {"item": block},
                      {"item": block},
                      {"item": block}
                    ],
                    
                }
            );
        }
    } 

      Seedtier3('create:zinc_block','mysticalagriculture:zinc_seeds',0,0,false)
      Seedtier3('mysticalagriculture:tertium_ingot_block','mysticalagriculture:tertium_ingot_seeds',0,false)
      Seedtier3('kubejs:aquamarine_block','mysticalagriculture:aquamarine_seeds',0,false)
      Seedtier3('appliedenergistics2:quartz_block','mysticalagriculture:certus_quartz_seeds',0,false)
      Seedtier3('kubejs:compressed_sky_stone','mysticalagriculture:sky_stone_seeds',0,false)
      Seedtier3('kubejs:ender_biotite_block','mysticalagriculture:ender_biotite_seeds',0,false)
      Seedtier3('minecraft:glowstone','mysticalagriculture:glowstone_seeds',0,false)
      Seedtier3('minecraft:iron_block','mysticalagriculture:iron_seeds',0,false)
      Seedtier3('minecraft:redstone_block','mysticalagriculture:redstone_seeds',0,false)
      Seedtier3('minecraft:quartz_block','mysticalagriculture:nether_quartz_seeds',0,false)
      Seedtier3('bigreactors:graphite_block','mysticalagriculture:graphite_seeds',0,false)
      Seedtier3('botania:manasteel_block','mysticalagriculture:manasteel_seeds',0,false)
      Seedtier3('thermal:lead_block','mysticalagriculture:lead_seeds',0,false)
      Seedtier3('thermal:silver_block','mysticalagriculture:silver_seeds',0,false)
      Seedtier3('thermal:tin_block','mysticalagriculture:tin_seeds',0,false)
      Seedtier3('tconstruct:tinkers_bronze_block','mysticalagriculture:tinkers_bronze_seeds',0,false)

      Seedtier3('create:brass_block','mysticalagriculture:brass_seeds','mysticalagriculture:zinc_seeds','mysticalagriculture:copper_seeds',false)
      Seedtier3('thermal:bronze_block','mysticalagriculture:bronze_seeds','mysticalagriculture:tin_seeds','mysticalagriculture:copper_seeds',false)
      Seedtier3('compressium:obsidian_2','mysticalagriculture:obsidian_seeds','mysticalagriculture:fire_seeds','mysticalagriculture:water_seeds',false)
      Seedtier3('tconstruct:pig_iron_block','mysticalagriculture:pig_iron_seeds','mysticalagriculture:pig_seeds','mysticalagriculture:iron_seeds',false)
      Seedtier3('tconstruct:slimesteel_block','mysticalagriculture:slimesteel_seeds','mysticalagriculture:slime_seeds','mysticalagriculture:iron_seeds',false)

      Seedtier3('minecraft:fermented_spider_eye','mysticalagriculture:spider_seeds',0,0,true)
      Seedtier3('thermal:basalz_block','mysticalagriculture:basalz_seeds',0,0,true)
      Seedtier3('thermal:blitz_block','mysticalagriculture:blitz_seeds',0,0,true)
      Seedtier3('thermal:blizz_block','mysticalagriculture:blizz_seeds',0,0,true)
      Seedtier3('kubejs:rotten_flesh_block','mysticalagriculture:zombie_seeds',0,0,true)
      Seedtier3('minecraft:rabbit_foot','mysticalagriculture:rabbit_seeds',0,0,true)
      Seedtier3('minecraft:bone_block','mysticalagriculture:skeleton_seeds',0,0,true)
      Seedtier3('mysticalagriculture:prismarine_agglomeratio','mysticalagriculture:prismarine_seeds',0,0,true)
      Seedtier3('quark:gunpowder_sack','mysticalagriculture:creeper_seeds',0,0,true)
      
    //Terrasteel Ingot//
    e.custom({ 
        "type": "mythicbotany:infusion",
        "group": "infuser",
        "output": {"item": "botania:terrasteel_ingot"},
        "mana": 500000,
        "ingredients": [
          {"item": "berseria_sky:comerald_ingot"},
          {"item": "botania:mana_pearl"},
          {"tag": "forge:gems/mana_diamond"}
        ],
        "fromColor": 255,
        "toColor": 65280
})
   //Mana Infuser//
   e.custom({ 
    "type": "minecraft:crafting_shaped",
    "group": "mythicbotany:infuser",
    "pattern": ["eee","wdz","xay"],
    "key": {
      "e": {"tag": "forge:ingots/elementium"},
      "d": {"item": "botania:terra_plate"},
      "a": {"item": "mythicbotany:asgard_rune"},
      "w": {"tag": "botania:runes/spring"},
      "x": {"tag": "botania:runes/summer"},
      "y": {"tag": "botania:runes/autumn"},
      "z": {"tag": "botania:runes/winter"}
    },
    "result": {"item": "mythicbotany:mana_infuser"}
  })







})