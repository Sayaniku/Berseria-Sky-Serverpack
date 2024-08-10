onEvent('recipes', e => {

   //Auto Smithing Table//
   e.shaped(Item.of('custommachinery:custom_machine_item','{machine:"berseria_sky:auto_smithing_table"}'), 
         ['CAC','CBC','EDE'],{
       A:'minecraft:smithing_table', 
       B:'thermal:machine_frame',
       C:'minecraft:netherite_ingot',
       D:'pipez:basic_upgrade',
       E:'#minecraft:logs'})

 function AutoSmith (input1, input2 ,energy, result) {e.custom({"type": "custommachinery:custom_machine","machine": "berseria_sky:auto_smithing_table","time": 50,"requirements": [
{"type": "custommachinery:item","mode": "input","id": "input1","item": input1,"amount":1},
{"type": "custommachinery:item","mode": "input","id": "input2","item": input2,"amount":1},
{"type": "custommachinery:item","mode": "output","id": "result","item": result,"amount":1},
{"type": "custommachinery:energy","mode": "input","amount": energy}]})}

//Netherite//  
AutoSmith('exnihilosequentia:mesh_emerald','tconstruct:manyullyn_ingot',1000,'exnihilosequentia:mesh_netherite')       
AutoSmith('exnihilosequentia:hammer_diamond','minecraft:netherite_ingot',1200,'exnihilosequentia:hammer_netherite')
AutoSmith('metalbarrels:obsidian_barrel','tconstruct:manyullyn_ingot',1200,'metalbarrels:netherite_barrel')
AutoSmith('minecraft:diamond_pickaxe','minecraft:netherite_ingot',1200,'minecraft:netherite_pickaxe')
AutoSmith('minecraft:diamond_sword','minecraft:netherite_ingot',1200,'minecraft:netherite_sword')
AutoSmith('minecraft:diamond_shovel','minecraft:netherite_ingot',1200,'minecraft:netherite_shovel')
AutoSmith('minecraft:diamond_axe','minecraft:netherite_ingot',1200,'minecraft:netherite_axe')
AutoSmith('minecraft:diamond_hoe','minecraft:netherite_ingot',1200,'minecraft:netherite_hoe')
AutoSmith('minecraft:diamond_helmet','minecraft:netherite_ingot',1200,'minecraft:netherite_helmet')
AutoSmith('minecraft:diamond_chestplate','minecraft:netherite_ingot',1200,'minecraft:netherite_chestplate')
AutoSmith('minecraft:diamond_leggings','minecraft:netherite_ingot',1200,'minecraft:netherite_leggings')
AutoSmith('minecraft:diamond_boots','minecraft:netherite_ingot',1200,'minecraft:netherite_boots')
AutoSmith('cagedmobs:diamond_dna_sampler','cagedmobs:star_infused_netherite_ingot',1200,'cagedmobs:netherite_dna_sampler')
//Alfsteel//
AutoSmith('botania:terrasteel_helmet','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_helmet')
AutoSmith('botania:terrasteel_chestplate','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_chestplate')
AutoSmith('botania:terrasteel_leggings','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_leggings')
AutoSmith('botania:terrasteel_boots','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_boots')
AutoSmith('botania:terra_sword','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_sword')
AutoSmith('botania:terra_pick','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_pick')
AutoSmith('botania:terra_axe','mythicbotany:alfsteel_armor_upgrade',1500,'mythicbotany:alfsteel_axe')
//Terminite//
AutoSmith('betterendforge:terminite_ingot','#forge:rods/wooden',800,'betterendforge:terminite_sword_handle')
AutoSmith('betterendforge:terminite_sword_blade','betterendforge:terminite_sword_handle',1000,'betterendforge:terminite_sword')
AutoSmith('betterendforge:terminite_hoe_head','#forge:rods/wooden',1000,'betterendforge:terminite_hoe')
AutoSmith('betterendforge:terminite_shovel_head','#forge:rods/wooden',1000,'betterendforge:terminite_shovel')
AutoSmith('betterendforge:terminite_axe_head','#forge:rods/wooden',1000,'betterendforge:terminite_axe')
AutoSmith('betterendforge:terminite_pickaxe_head','#forge:rods/wooden',1000,'betterendforge:terminite_pickaxe')


//CageMobs Creative Upgrade//
e.recipes.custommachinery.custom_machine("berseria_sky:auto_smithing_table",120)
  .requireItem('cagedmobs:speed_iii_upgrade')
  .requireItem('kubejs:creative_ingot')
  .requireEnergy(5000)
  .produceItem('cagedmobs:creative_upgrade')


//Creative Abilities//
  e.custom({
    "type": "thermal:smelter",
    "energy": 15000,
    "ingredients": [{
        "value": {"item": "kubejs:creative_ingot"}},
      {"value": {"tag": "forge:nether_stars"}}],
    "result": [{"type": "forge:nbt",
                "item": "tconstruct:creative_slot","count": 1,
                "nbt": "{slot:\"abilities\"}"}]
        })

  //Creative Souls//
  e.custom({
    "type": "thermal:smelter",
    "energy": 15000,
    "ingredients": [{
        "value": {"item": "kubejs:creative_ingot"}},
      {"value": {"tag": "forge:gems/emerald"}}],
    "result": [{"type": "forge:nbt",
                "item": "tconstruct:creative_slot","count": 1,
                "nbt": "{slot:\"souls\"}"}]
        })

  //Creative Upgrades//
  e.custom({
    "type": "thermal:smelter",
    "energy": 15000,
    "ingredients": [{
        "value": {"item": "kubejs:creative_ingot"}},
      {"value": {"item": "pipez:ultimate_upgrade"}}],
    "result": [{"type": "forge:nbt",
                "item": "tconstruct:creative_slot","count": 1,
                "nbt": "{slot:\"upgrades\"}"}]
        })

  //Creative Defense//
  e.custom({
    "type": "thermal:smelter",
    "energy": 15000,
    "ingredients": [{
        "value": {"item": "kubejs:creative_ingot"}},
      {"value": {"item": "miniutilities:infused_chestplate"}}],
    "result": [{"type": "forge:nbt",
                "item": "tconstruct:creative_slot","count": 1,
                "nbt": "{slot:\"defense\"}"}]
        })

  //Creative Sensor//
  e.custom({
    "type": "thermal:smelter",
    "energy": 15000,
    "ingredients": [{
        "value": {"item": "kubejs:creative_ingot"}},
      {"value": {"item": "mekanism:ultimate_tier_installer"}}],
    "result": [{"type": "forge:nbt",
                "item": "tconstruct:creative_slot","count": 1,
                "nbt": "{slot:\"sensor\"}"}]
        })



















})