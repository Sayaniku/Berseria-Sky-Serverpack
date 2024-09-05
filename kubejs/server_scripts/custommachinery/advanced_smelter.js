onEvent('recipes', e => { 

//Advanced Induction Smelter//
e.shaped(Item.of('custommachinery:custom_machine_item','{machine:"berseria_sky:advanced_machine_smelter"}'), 
        ['CAC','FBF','DED'],{
    A:'thermal:machine_smelter', 
    B:'industrialforegoing:machine_frame_advanced',
    C:'thermal:signalum_block',
    D:'tconstruct:manyullyn_block',
    E:'thermal:enderium_block',
    F:'quark:gunpowder_sack'})



//Manyerium Ingot//
e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem(Item.of('thermal:enderium_ingot',8))
  .requireItem(Item.of('tconstruct:manyullyn_ingot',8))
  .requireItem(Item.of('thermal:signalum_ingot',8))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:manyerium_ingot', 4))

//Manyerium Glass//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem('berseria_sky:manyerium_dust')
  .requireItem(Item.of('thermal:obsidian_glass',2))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:manyerium_glass',2))

//Queens Steel//
e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem(Item.of('tconstruct:queens_slime_ingot',8))
  .requireItem(Item.of('tconstruct:pig_iron_ingot',8))
  .requireItem(Item.of('tconstruct:slimesteel_ingot',8))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:queens_steel_ingot', 4))

//Queenssteel Glass//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem('berseria_sky:queens_steel_dust')
  .requireItem(Item.of('thermal:obsidian_glass',2))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:queens_steel_glass',2))

//Fayronium Ingot//
e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem(Item.of('tconstruct:hepatizon_ingot',8))
  .requireItem(Item.of('thermal:lumium_ingot',8))
  .requireItem(Item.of('materialis:fairy_ingot',8))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:fayronium_ingot', 4))

//Fayronium Glass//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 1000)
  .requireItem('berseria_sky:fayronium_dust')
  .requireItem(Item.of('thermal:obsidian_glass',2))
  .requireEnergy(15000)
  .produceItem(Item.of('berseria_sky:fayronium_glass',2))

//Manronium Steel Ingot//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 2000)
  .requireItem(Item.of('berseria_sky:manyerium_ingot',8))
  .requireItem(Item.of('berseria_sky:queens_steel_ingot',8))
  .requireItem(Item.of('berseria_sky:fayronium_ingot',8))
  .requireEnergy(30000)
  .produceItem(Item.of('berseria_sky:manronium_steel_ingot', 4))

//Manronium Steel Glass//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 2000)
  .requireItem('berseria_sky:manronium_steel_dust')
  .requireItem(Item.of('thermal:obsidian_glass',2))
  .requireEnergy(30000)
  .produceItem(Item.of('berseria_sky:manronium_steel_glass',2))

//Wither Ingot//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 2000)
  .requireItem(Item.of('minecraft:soul_sand',4))
  .requireItem(Item.of('minecraft:wither_skeleton_skull',3))
  .requireItem('minecraft:nether_star')
  .requireEnergy(30000)
  .produceItem(Item.of('kubejs:wither_skeleton_ingot',2))

//Comerald Ingot//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 2000)
  .requireItem(Item.of('kubejs:emerald_ingot',4))
  .requireItem(Item.of('thermal:constantan_ingot',6))
  .requireItem(Item.of('kubejs:diamond_ingot',4))
  .requireEnergy(30000)
  .produceItem(Item.of('berseria_sky:comerald_ingot',4))

  //Comerald Ingot//
  e.recipes.custommachinery.custom_machine("berseria_sky:advanced_machine_smelter", 2000)
  .requireItem(Item.of('thermal:invar_ingot',8))
  .requireItem(Item.of('thermal:bronze_ingot',8))
  .requireItem(Item.of('thermal:electrum_ingot',8))
  .requireEnergy(25000)
  .produceItem(Item.of('berseria_sky:elinvonze_ingot',4))













})