events.listen('recipes', function (e) {


      //Chaotic Crux//
            e.custom({
                  "type": "extendedcrafting:shaped_table",
                  "pattern": [
                    "ABBBA",
                    "BCCCB",
                    "BCDCB",
                    "BCCCB",
                    "ABBBA"
                  ],
                  "key": {
                    "A": {"item": "draconicevolution:chaotic_core"},
                    "B": {"item": "draconicevolution:large_chaos_frag"},
                    "C": {"item": "minecraft:dragon_breath"},
                    "D": {"item": "mysticalagradditions:insanium_farmland"}
                  },
                  "result": {"item": "berseria_sky:chaotic_crux"}
                })

      //Ornium//
      e.shapeless('kubejs:ornium_block', '9x kubejs:ornium_essence')
      e.shapeless('9x kubejs:ornium_essence', 'kubejs:ornium_block')
      e.shapeless('kubejs:ornium_coal_block', '9x kubejs:ornium_coal')
      e.shapeless('9x kubejs:ornium_coal', 'kubejs:ornium_coal_block')
      e.shapeless('kubejs:ornium_gemstone_block', '9x kubejs:ornium_gemstone')
      e.shapeless('9x kubejs:ornium_gemstone', 'kubejs:ornium_gemstone_block')
      e.shapeless('kubejs:ornium_ingot', '9x kubejs:ornium_nugget')
      e.shapeless('9x kubejs:ornium_nugget', 'kubejs:ornium_ingot')
      e.shapeless('kubejs:ornium_ingot_block', '9x kubejs:ornium_ingot')
      e.shapeless('9x kubejs:ornium_ingot', 'kubejs:ornium_ingot_block')

      //Lightium//
      e.shapeless('kubejs:lightium_block', '9x kubejs:lightium_essence')
      e.shapeless('9x kubejs:lightium_essence', 'kubejs:lightium_block')
      e.shapeless('kubejs:lightium_coal_block', '9x kubejs:lightium_coal')
      e.shapeless('9x kubejs:lightium_coal', 'kubejs:lightium_coal_block')
      e.shapeless('kubejs:lightium_ingot', '9x kubejs:lightium_nugget')
      e.shapeless('9x kubejs:lightium_nugget', 'kubejs:lightium_ingot')
      e.shapeless('kubejs:lightium_ingot_block', '9x kubejs:lightium_ingot')
      e.shapeless('9x kubejs:lightium_ingot', 'kubejs:lightium_ingot_block')
      e.shapeless('kubejs:lightium_gemstone_block', '9x kubejs:lightium_gemstone')
      e.shapeless('9x kubejs:lightium_gemstone', 'kubejs:lightium_gemstone_block')

      //Tornium//
      e.shapeless('kubejs:tornium_block', '9x kubejs:tornium_essence')
      e.shapeless('9x kubejs:tornium_essence', 'kubejs:tornium_block')
      e.shapeless('kubejs:tornium_coal_block', '9x kubejs:tornium_coal')
      e.shapeless('9x kubejs:tornium_coal', 'kubejs:tornium_coal_block')
      e.shapeless('kubejs:tornium_ingot', '9x kubejs:tornium_nugget')
      e.shapeless('9x kubejs:tornium_nugget', 'kubejs:tornium_ingot')
      e.shapeless('kubejs:tornium_ingot_block', '9x kubejs:tornium_ingot')
      e.shapeless('9x kubejs:tornium_ingot', 'kubejs:tornium_ingot_block')
      e.shapeless('kubejs:tornium_gemstone_block', '9x kubejs:tornium_gemstone')
      e.shapeless('9x kubejs:tornium_gemstone', 'kubejs:tornium_gemstone_block')

      //Ouranium//
      e.shapeless('kubejs:ouranium_block', '9x kubejs:ouranium_essence')
      e.shapeless('9x kubejs:ouranium_essence', 'kubejs:ouranium_block')
      e.shapeless('kubejs:ouranium_coal_block', '9x kubejs:ouranium_coal')
      e.shapeless('9x kubejs:ouranium_coal', 'kubejs:ouranium_coal_block')
      e.shapeless('kubejs:ouranium_ingot', '9x kubejs:ouranium_nugget')
      e.shapeless('9x kubejs:ouranium_nugget', 'kubejs:ouranium_ingot')
      e.shapeless('kubejs:ouranium_ingot_block', '9x kubejs:ouranium_ingot')
      e.shapeless('9x kubejs:ouranium_ingot', 'kubejs:ouranium_ingot_block')
      e.shapeless('kubejs:ouranium_gemstone_block', '9x kubejs:ouranium_gemstone')
      e.shapeless('9x kubejs:ouranium_gemstone', 'kubejs:ouranium_gemstone_block')
      
      //Ouranium Ingot/Gemstone//
      e.shaped(item.of('kubejs:ouranium_ingot', 1), [' X ', 'XOX', ' X '],
            { X: 'kubejs:ouranium_essence', O: 'kubejs:tornium_ingot' })
      e.shaped(item.of('kubejs:ouranium_gemstone', 1), [' X ', 'XOX', ' X '],
            { X: 'kubejs:ouranium_essence', O: 'kubejs:tornium_gemstone' })

      //Creative Ingot//
      e.shaped(item.of('kubejs:creative_ingot', 1), ['XXX', 'XOX', 'XXX'],
      { X: 'mysticalagradditions:creative_essence', O: 'extendedcrafting:the_ultimate_ingot' })
      
      e.shapeless('kubejs:creative_block', '9x kubejs:creative_ingot')
      e.shapeless('9x kubejs:creative_ingot', 'kubejs:creative_block')

      //Empty Crystal//
      e.custom({ 
      "type": "mysticalagriculture:infusion",
      "input": {
        "item": "mysticalagriculture:prosperity_seed_base"
      },
      "ingredients": [
        {"item": "berseria_sky:manyerium_block"},
        {"item": "mysticalagriculture:prosperity_block"},
        {"item": "berseria_sky:manyerium_block"},
        {"item": "mysticalagriculture:prosperity_block"},
        {"item": "berseria_sky:manyerium_block"},
        {"item": "mysticalagriculture:prosperity_block"},
        {"item": "berseria_sky:manyerium_block"},
        {"item": "mysticalagriculture:prosperity_block"}
      ],
        "result": {"item": "berseria_sky:prosperity_crystal"}
      })
//************************************Essence**********************************************//
      //Ornium Essence//
      e.shaped('kubejs:ornium_essence', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:insanium_crystal').ignoreNBT(),
            D: 'mysticalagradditions:insanium_essence'
      })
            .keepIngredient('kubejs:insanium_crystal')

      //Ornium Block//
      e.shaped('kubejs:ornium_block', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:insanium_crystal').ignoreNBT(),
            D: 'mysticalagradditions:insanium_block'
      })
            .keepIngredient('kubejs:insanium_crystal')

      //Ornium Block Master Crystaux//
      e.shaped('kubejs:ornium_block', [' D ', 'DSD', ' D '], {
            S: 'mysticalagriculture:master_infusion_crystal',
            D: 'mysticalagradditions:insanium_block'
      })
            

      //Ornium Crystal//
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
              "A": {"item": "kubejs:ornium_ingot_block"},
              "B": {"item": "betterendforge:terminite_block"},
              "C": {"item": "thermal_extra:nebulium_block"},
              "D": {"item": "betternether:blue_obsidian_tile"},
              "E": {"item": "cagedmobs:star_infused_netherite_block"},
              "F": {"item": "berseria_sky:prosperity_crystal"}
            },
            "result": {"item": "kubejs:ornium_crystal"}
          })

      //Lightium Essence//
      e.shaped('kubejs:lightium_essence', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:ornium_crystal').ignoreNBT(),
            D: 'kubejs:ornium_essence'})
            .keepIngredient('kubejs:ornium_crystal')

      //Lightium Block//
      e.shaped('kubejs:lightium_block', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:ornium_crystal').ignoreNBT(),
            D: 'kubejs:ornium_block'})
            .keepIngredient('kubejs:ornium_crystal')

      //Lightium Block Master Crystaux//
      e.shaped('kubejs:lightium_block', [' D ', 'DSD', ' D '], { 
            S: 'mysticalagriculture:master_infusion_crystal',
            D: 'kubejs:ornium_block'
      })
           

      //Lightium Crystal//
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
              "A": {"item": "kubejs:lightium_ingot_block"},
              "B": {"item": "astralsorcery:starmetal"},
              "C": {"item": "bigreactors:cyanite_block"},
              "D": {"item": "extendedcrafting:enhanced_ender_ingot_block"},
              "E": {"item": "cagedmobs:star_infused_netherite_block"},
              "F": {"item": "berseria_sky:prosperity_crystal"}
            },
            "result": {"item": "kubejs:lightium_crystal"}
          })

      //Tornium Essence//
      e.shaped('kubejs:tornium_essence', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:lightium_crystal').ignoreNBT(),
            D: 'kubejs:lightium_essence'
      })
            .keepIngredient('kubejs:lightium_crystal')

      //Tornium Essence//
      e.shaped('kubejs:tornium_block', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:lightium_crystal').ignoreNBT(),
            D: 'kubejs:lightium_block'
      })
            .keepIngredient('kubejs:lightium_crystal')

      //Tornium Block Master Crystaux//
      e.shaped('kubejs:tornium_block', [' D ', 'DSD', ' D '], { 
            S: 'mysticalagriculture:master_infusion_crystal',
            D: 'kubejs:lightium_block'
      })

      //Tornium Crystal//
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
              "A": {"item": "kubejs:tornium_ingot_block"},
              "B": {"item": "mekanism:block_antimatter"},
              "C": {"item": "draconicevolution:large_chaos_frag"},
              "D": {"item": "extendedcrafting:black_iron_block"},
              "E": {"item": "kubejs:sun_block"},
              "F": {"item": "berseria_sky:prosperity_crystal"}
            },
            "result": {"item": "kubejs:tornium_crystal"}
          })


      //Ouranium Essence//
      e.shaped('kubejs:ouranium_essence', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:tornium_crystal').ignoreNBT(),
            D: 'kubejs:tornium_essence'
      })
            .keepIngredient('kubejs:tornium_crystal')

      //Ouranium Essence//
      e.shaped('kubejs:ouranium_block', [' D ', 'DSD', ' D '], {
            S: Item.of('kubejs:tornium_crystal').ignoreNBT(),
            D: 'kubejs:tornium_block'
      })
            .keepIngredient('kubejs:tornium_crystal')

      //Tornium Block Master Crystaux//
      e.shaped('kubejs:ouranium_block', [' D ', 'DSD', ' D '], { 
            S: 'mysticalagriculture:master_infusion_crystal',
            D: 'kubejs:tornium_block'
      })

      //Creative Essence//
      e.shaped(item.of('mysticalagradditions:creative_essence',2), [' D ', 'DSD', ' D '], { 
            S: 'mysticalagriculture:master_infusion_crystal',
            D: 'kubejs:ouranium_essence'
      })


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
          })

      /******************************************Mystical*************************************/
      //Mystical Seed//
      function MysticalSeed(essence, seed, ingot, output) {
            e.custom({
                  "type": "crafting_shaped",
                  "pattern": [
                        "MPM",
                        "PXP",
                        "MPM"],
                  "key": {
                        "P": { "item": essence },
                        "X": { "item": seed },
                        "M": { "item": ingot }
                  },
                  "result": { "item": output }
            })
      }

      MysticalSeed('mysticalagriculture:inferium_essence', 'mysticalagriculture:prosperity_seed_base', 'kubejs:ardite_ingot', 'kubejs:inferium_seed')
      MysticalSeed('mysticalagriculture:prudentium_essence', 'kubejs:inferium_seed', 'create:brass_ingot', 'kubejs:prudentium_seed')
      MysticalSeed('mysticalagriculture:tertium_essence', 'kubejs:prudentium_seed', 'kubejs:platinum_ingot', 'kubejs:tertium_seed')
      MysticalSeed('mysticalagriculture:imperium_essence', 'kubejs:tertium_seed', 'tconstruct:manyullyn_ingot', 'kubejs:imperium_seed')
      MysticalSeed('mysticalagriculture:supremium_essence', 'kubejs:imperium_seed', 'berseria_sky:elinvonze_ingot', 'kubejs:supremium_seed')
      MysticalSeed('mysticalagradditions:insanium_essence', 'kubejs:supremium_seed', 'cagedmobs:star_infused_netherite_ingot', 'kubejs:insanium_seed')
      MysticalSeed('kubejs:ornium_essence', 'kubejs:insanium_seed', 'berseria_sky:queens_steel_ingot', 'kubejs:ornium_seed')
      MysticalSeed('kubejs:lightium_essence', 'kubejs:ornium_seed', 'berseria_sky:fayronium_ingot', 'kubejs:lightium_seed')
      MysticalSeed('kubejs:tornium_essence', 'kubejs:lightium_seed', 'berseria_sky:manronium_steel_ingot', 'kubejs:tornium_seed')
      MysticalSeed('kubejs:ouranium_essence', 'kubejs:tornium_seed', 'extendedcrafting:the_ultimate_ingot', 'kubejs:ouranium_seed')















})