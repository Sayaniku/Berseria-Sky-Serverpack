events.listen('recipes', function (e) { 


/*********************************************Milling**********************/
   function  Milling(Input, Output){ 
    e.custom({"type": "create:milling",
    "ingredients": [{"item": Input}],
    "results": [
   {"item": Output}],"processingTime": 250})
  }

   Milling('kubejs:ardite_ingot','kubejs:ardite_dust')
   Milling('create:brass_ingot','create:brass_dust')
   Milling('create:zinc_ingot','create:zinc_dust')
   Milling('exnihilosequentia:dust','create:limesand')
   Milling('immersiveengineering:ingot_aluminum','immersiveengineering:dust_aluminum')
   Milling('mekanism:fluorite_gem','mekanism:dust_fluorite')
   Milling('minecraft:gravel','minecraft:sand')
   Milling('minecraft:sand','exnihilosequentia:dust')
   Milling('minecraft:netherrack','exnihilosequentia:crushed_netherrack')
   Milling('minecraft:end_stone','exnihilosequentia:crushed_end_stone')
   Milling('minecraft:diamond','thermal:diamond_dust')
   Milling('minecraft:emerald','thermal:emerald_dust')
   Milling('minecraft:quartz','thermal:quartz_dust')
   Milling('minecraft:iron_ingot','thermal:iron_dust')
   Milling('minecraft:gold_ingot','thermal:gold_dust')
   Milling('minecraft:netherite_ingot','thermal:netherite_dust')
   Milling('minecraft:ender_pearl','miniutilities:ender_dust')
   Milling('minecraft:lapis_lazuli','thermal:lapis_dust')
   Milling('thermal:niter','thermal:niter_dust')
   Milling('thermal:apatite','thermal:apatite_dust')
   Milling('thermal:cinnabar','thermal:cinnabar_dust')
   Milling('thermal:silver_ingot','thermal:silver_dust')
   Milling('thermal:copper_ingot','thermal:copper_dust')
   Milling('thermal:nickel_ingot','thermal:nickel_dust')
   Milling('thermal:invar_ingot','thermal:invar_dust')
   Milling('thermal:lead_ingot','thermal:lead_dust')
   Milling('thermal:tin_ingot','thermal:tin_dust')
   Milling('thermal:bronze_ingot','thermal:bronze_dust')
   Milling('thermal:constantan_ingot','thermal:constantan_dust')
   Milling('thermal:electrum_ingot','thermal:electrum_dust')
   Milling('thermal:lumium_ingot','thermal:lumium_dust')
   Milling('thermal:enderium_ingot','thermal:enderium_dust')
   Milling('thermal:signalum_ingot','thermal:signalum_dust')
   Milling('tconstruct:manyullyn_ingot','tconstruct:manyullyn_dust')
   Milling('tconstruct:cobalt_ingot','kubejs:cobalt_dust')
   Milling('tinkers_reforged:blazing_copper_ingot','tinkers_reforged:blazing_copper_dust')
   Milling('mekanism:ingot_uranium','mekanism:dust_uranium')
   Milling('mekanism:ingot_osmium','mekanism:dust_osmium')
   Milling('kubejs:platinum_ingot','kubejs:platinum_dust')
   

/*********************************************Crushing**************************/
function Crushing(Input, Output) {
    e.custom({"type": "create:crushing",
    "ingredients": [{"item": Input}],
    "results": [
   {"item": Output}],"processingTime": 250})
  }


   Crushing('kubejs:ardite_ingot','kubejs:ardite_dust')
   Crushing('create:brass_ingot','create:brass_dust')
   Crushing('create:zinc_ingot','create:zinc_dust')
   Crushing('exnihilosequentia:dust','create:limesand')
   Crushing('immersiveengineering:ingot_aluminum','immersiveengineering:dust_aluminum')
   Crushing('mekanism:fluorite_gem','mekanism:dust_fluorite')
   Crushing('minecraft:gravel','minecraft:sand')
   Crushing('minecraft:sand','exnihilosequentia:dust')
   Crushing('minecraft:end_stone','exnihilosequentia:crushed_end_stone')
   Crushing('minecraft:diamond','thermal:diamond_dust')
   Crushing('minecraft:emerald','thermal:emerald_dust')
   Crushing('minecraft:quartz','thermal:quartz_dust')
   Crushing('minecraft:iron_ingot','thermal:iron_dust')
   Crushing('minecraft:gold_ingot','thermal:gold_dust')
   Crushing('minecraft:netherite_ingot','thermal:netherite_dust')
   Crushing('minecraft:ender_pearl','miniutilities:ender_dust')
   Crushing('minecraft:lapis_lazuli','thermal:lapis_dust')
   Crushing('thermal:niter','thermal:niter_dust')
   Crushing('thermal:apatite','thermal:apatite_dust')
   Crushing('thermal:cinnabar','thermal:cinnabar_dust')
   Crushing('thermal:silver_ingot','thermal:silver_dust')
   Crushing('thermal:copper_ingot','thermal:copper_dust')
   Crushing('thermal:nickel_ingot','thermal:nickel_dust')
   Crushing('thermal:invar_ingot','thermal:invar_dust')
   Crushing('thermal:lead_ingot','thermal:lead_dust')
   Crushing('thermal:tin_ingot','thermal:tin_dust')
   Crushing('thermal:bronze_ingot','thermal:bronze_dust')
   Crushing('thermal:constantan_ingot','thermal:constantan_dust')
   Crushing('thermal:electrum_ingot','thermal:electrum_dust')
   Crushing('thermal:lumium_ingot','thermal:lumium_dust')
   Crushing('thermal:enderium_ingot','thermal:enderium_dust')
   Crushing('thermal:signalum_ingot','thermal:signalum_dust')
   Crushing('tconstruct:manyullyn_ingot','tconstruct:manyullyn_dust')
   Crushing('tconstruct:cobalt_ingot','kubejs:cobalt_dust')
   Crushing('tinkers_reforged:blazing_copper_ingot','tinkers_reforged:blazing_copper_dust')
   Crushing('mekanism:ingot_uranium','mekanism:dust_uranium')
   Crushing('mekanism:ingot_osmium','mekanism:dust_osmium')
   Crushing('kubejs:platinum_ingot','kubejs:platinum_dust')
  
   
  /******************************************Crushed Ore***************************************************/
  
  //Milling Ardite//
  e.custom({ "type": "create:milling",
             "ingredients": [
      {"tag": "forge:ores/ardite"}],
      "results": [
      {"item": "kubejs:crushed_ardite_ore"}],
       "processingTime": 350,})


   //Crushed Ardite//
   e.custom({ 
      "type": "create:crushing",
      "ingredients": [
        {"tag": "forge:ores/ardite"}
      ],
      "results": [
        {"item": "kubejs:crushed_ardite_ore"},
        {"item": "kubejs:crushed_ardite_ore",
          "count": 2,
          "chance": 0.3},
        {"item": "minecraft:netherrack",
        "chance": 0.125}],
      "processingTime": 350})

      //Crushed Netherrack//
      e.custom({ "type": "create:crushing",
      "ingredients": [
      {"item": "excompressum:compressed_netherrack"}],
       "results": [
      {"item": "excompressum:compressed_nether_gravel"}],
       "processingTime": 600,})



    





})