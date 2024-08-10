onEvent("recipes", (e) => {
    const id_prefix = 'berseria_sky:extendedcrafting/ultimate_table/';

   //Ultimate Ingot//
    e.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "tier": 4,
            "ingredients": [
                { "item": "minecraft:gold_ingot" }, { "item": "thermal:nickel_ingot" }, { "item": "create:zinc_ingot" }, { "tag": "forge:ingots/queens_steel" }, { "item": "extendedcrafting:redstone_ingot" }, { "item": "thermal:invar_ingot" },
                { "item": "immersiveengineering:ingot_aluminum" }, { "item": "thermal:signalum_ingot" }, { "item": "thermal:lead_ingot" },
                { "item": "minecraft:iron_ingot" }, { "item": "astralsorcery:starmetal_ingot" }, { "item": "create:brass_ingot" }, { "item": "berseria_sky:comerald_ingot" }, { "item": "thermal:lumium_ingot" }, { "item": "botania:manasteel_ingot" }, { "tag": "forge:ingots/manronium_steel" },
                { "item": "mekanism:ingot_steel" }, { "item": "thermal:tin_ingot" },
                { "item": "thermal:bronze_ingot" }, { "item": "thermal:constantan_ingot" }, { "item": "thermal:copper_ingot" }, { "item": "kubejs:diamond_ingot" }, { "item": "thermal:electrum_ingot" }, { "item": "kubejs:emerald_ingot" }, { "item": "berseria_sky:manyerium_ingot" }, { "item": "minecraft:netherite_ingot" }, { "item": "mekanism:ingot_uranium" },
                { "item": "extendedcrafting:ender_ingot" }, { "item": "thermal:enderium_ingot" }, { "tag": "forge:ingots/fayronium" }, { "item": "botania:terrasteel_ingot" }, { "item": "botania:elementium_ingot" }, { "item": "draconicevolution:awakened_draconium_ingot" }, { "item": "draconicevolution:draconium_ingot" }, { "item": "bigreactors:yellorium_ingot" }, { "item": "bigreactors:cyanite_ingot" },
                { "item": "kubejs:ornium_ingot" }, { "item": "kubejs:lightium_ingot" }, { "item": "mekanism:ingot_antimatter" }, { "item": "kubejs:ardite_ingot" },
                { "item": "immersiveengineering:ingot_hop_graphite" }, { "item": "mysticalagriculture:prosperity_ingot" }, { "item": "kubejs:ouranium_ingot" }, { "item": "kubejs:platinum_ingot" }, { "item": "kubejs:sun_ingot" },
                { "item": "berseria_sky:elinvonze_ingot" }, { "item": "kubejs:moon_ingot" }, { "item": "mysticalagriculture:soulium_ingot" }, { "item": "mysticalagriculture:inferium_ingot" }, { "item": "mysticalagriculture:prudentium_ingot" }, { "item": "mysticalagriculture:tertium_ingot" }, { "item": "mysticalagriculture:imperium_ingot" }, { "item": "mysticalagriculture:supremium_ingot" }, { "item": "mysticalagradditions:insanium_ingot" },
                { "item": "blue_skies:ventium_ingot" }, { "item": "blue_skies:falsite_ingot" }, { "item": "blue_skies:horizonite_ingot" }, { "item": "tconstruct:rose_gold_ingot" }, { "item": "tconstruct:slimesteel_ingot" }, { "item": "thermal_extra:nectium_ingot" }, { "item": "tconstruct:cobalt_ingot" }, { "item": "tconstruct:pig_iron_ingot" }, { "item": "tconstruct:queens_slime_ingot" },
                { "item": "tconstruct:manyullyn_ingot" }, { "item": "tconstruct:hepatizon_ingot" }, { "item": "industrialforegoing:pink_slime_ingot" }, { "item": "kubejs:tornium_ingot" }, { "item": "mythicbotany:alfsteel_ingot" }, { "item": "extendedcrafting:enhanced_ender_ingot" }, { "item": "extendedcrafting:crystaltine_ingot" }, { "item": "materialis:fairy_ingot" }, { "item": "mekanism:ingot_refined_glowstone" },
                { "item": "mekanism:ingot_osmium" }, { "item": "mekanism:ingot_refined_obsidian" }, { "item": "thermal_extra:dragon_bronze_ingot" }, { "item": "thermal_extra:dragon_enderium_ingot" }, { "item": "thermal_extra:vukaium_ingot" }, { "item": "thermal_extra:nebulium_ingot" }, { "item": "thermal_extra:polarium_ingot" }, { "item": "thermal_extra:drownium_ingot" }, { "item": "thermal_extra:zauvium_ingot" }
            
            ],
            "result": { "item": "extendedcrafting:the_ultimate_ingot", "count": 1}
            } 
            ).id('extendedcrafting:the_ultimate_ingot')

     //Ultimate Plate//
      e.custom(
        {
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
    ).id('extendedcrafting:the_ultimate_plate')

  //Ultimate Gear//
    e.custom(
        {
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
    ).id('extendedcrafting:the_ultimate_gear')

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
      }
    ).id('endless:the_ultimate_stew')

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
      "result": {"item":"endless:cosmic_meatballs","count":1}}
      ).id('endless:cosmic_meatballs')

      //Creative Storage Upgrade//
    e.custom(
        {

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
        ).id('berseria_sky:infinity_seeds')

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