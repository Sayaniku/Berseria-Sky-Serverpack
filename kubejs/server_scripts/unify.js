//priority: 10000
onEvent('recipes', function (e) {
    /**********************FUNCTION***********************/
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

    /**********************INGOTS***********************/
    var leadIngot = ['#forge:ingots/lead', 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead', 'exnihilosequentia:ingot_lead']
    leadIngot.forEach(I => { replaceIO(I, 'thermal:lead_ingot') })
    var electrumIngot = ['#forge:ingots/electrum', 'immersiveengineering:ingot_electrum']
    electrumIngot.forEach(I => { replaceIO(I, 'thermal:electrum_ingot') })
    var copperIngot = ['#forge:ingots/copper', 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper', 'create:copper_ingot', 'tconstruct:copper_ingot']
    copperIngot.forEach(I => { replaceIO(I, 'thermal:copper_ingot') })
    var silverIngot = ['#forge:ingots/silver', 'immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver']
    silverIngot.forEach(I => { replaceIO(I, 'thermal:silver_ingot') })
    var uraniumIngot = ['#forge:ingots/uranium', 'immersiveengineering:ingot_uranium', 'exnihilosequentia:ingot_uranium']
    uraniumIngot.forEach(I => { replaceIO(I, 'mekanism:ingot_uranium') })
    var steelIngot = ['#forge:ingots/steel', 'immersiveengineering:ingot_steel']
    steelIngot.forEach(I => { replaceIO(I, 'mekanism:ingot_steel') })
    var constantanIngot = ['#forge:ingots/constantan', 'immersiveengineering:ingot_constantan']
    constantanIngot.forEach(I => { replaceIO(I, 'thermal:constantan_ingot') })
    var zincIngot = ['#forge:ingots/zinc', 'exnihilosequentia:ingot_zinc']
    zincIngot.forEach(I => { replaceIO(I, 'create:zinc_ingot') })
    var nickelIngot = ['#forge:ingots/nickel', 'immersiveengineering:ingot_nickel', 'exnihilosequentia:ingot_nickel']
    nickelIngot.forEach(I => { replaceIO(I, 'thermal:nickel_ingot') })
    var aluminumIngot = ['#forge:ingots/aluminum', 'exnihilosequentia:ingot_aluminum','tinkers_reforged:aluminum_ingot']
    aluminumIngot.forEach(I => { replaceIO(I, 'immersiveengineering:ingot_aluminum') })
    var tinIngot = ['#forge:ingots/tin', 'mekanism:ingot_tin', 'exnihilosequentia:ingot_tin']
    tinIngot.forEach(I => { replaceIO(I, 'thermal:tin_ingot') })
    var bronzeIngot = ['#forge:ingots/bronze', 'mekanism:ingot_bronze']
    bronzeIngot.forEach(I => { replaceIO(I, 'thermal:bronze_ingot') })
    var platinumIngot = ['#forge:ingots/platinum', 'exnihilosequentia:ingot_platinum']
    platinumIngot.forEach(I => { replaceIO(I, 'kubejs:platinum_ingot') })


    /**********************NUGGET***********************/
    var uraniumNugget = ['#forge:nuggets/uranium', 'immersiveengineering:nugget_uranium']
    uraniumNugget.forEach(I => { replaceIO(I, 'mekanism:nugget_uranium') })
    var electrumNugget = ['#forge:nuggets/electrum', 'immersiveengineering:nugget_electrum']
    electrumNugget.forEach(I => { replaceIO(I, 'thermal:electrum_nugget') })
    var copperNugget = ['#forge:nuggets/copper', 'create:copper_nugget', 'tconstruct:copper_nugget']
    copperNugget.forEach(I => { replaceIO(I, 'thermal:copper_nugget') })
    var constantanNugget = ['#forge:nuggets/constantan', 'immersiveengineering:nugget_constantan']
    constantanNugget.forEach(I => { replaceIO(I, 'thermal:constantan_nugget') })
    var leadNugget = ['#forge:nuggets/lead', 'immersiveengineering:nugget_lead']
    leadNugget.forEach(I => { replaceIO(I, 'thermal:lead_nugget') })
    var steelNugget = ['#forge:nuggets/steel', 'immersiveengineering:nugget_steel']
    steelNugget.forEach(I => { replaceIO(I, 'mekanism:nugget_steel') })
    var silverNugget = ['#forge:nuggets/silver', 'immersiveengineering:nugget_silver']
    silverNugget.forEach(I => { replaceIO(I, 'thermal:silver_nugget') })
    var nickelNugget = ['#forge:nuggets/nickel', 'immersiveengineering:nugget_nickel']
    nickelNugget.forEach(I => { replaceIO(I, 'thermal:nickel_nugget') })
    var tinNugget = ['#forge:nuggets/tin', 'mekanism:nugget_tin']
    tinNugget.forEach(I => { replaceIO(I, 'thermal:tin_nugget') })
    var bronzeNugget = ['#forge:nuggets/bronze', 'mekanism:nugget_bronze']
    bronzeNugget.forEach(I => { replaceIO(I, 'thermal:bronze_nugget') })
    var aluminumNugget = ['#forge:nuggets/aluminum', 'tinkers_reforged:aluminum_nugget']
    aluminumNugget.forEach(I => { replaceIO(I, 'immersiveengineering:nugget_aluminum') })

    /**********************BLOCK***********************/
    var uraniumBlocks = ['#forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium']
    uraniumBlocks.forEach(I => { replaceIO(I, 'mekanism:block_uranium') })
    var constantanBlocks = ['#forge:storage_blocks/constantan', 'immersiveengineering:storage_constantan']
    constantanBlocks.forEach(I => { replaceIO(I, 'thermal:constantan_block') })
    var electrumBlocks = ['#forge:storage_blocks/electrum', 'immersiveengineering:storage_electrum']
    electrumBlocks.forEach(I => { replaceIO(I, 'thermal:electrum_block') })
    var copperBlocks = ['#forge:storage_blocks/copper', 'create:copper_block', 'mekanism:block_copper', 'tconstruct:copper_block', 'immersiveengineering:storage_copper']
    copperBlocks.forEach(I => { replaceIO(I, 'thermal:copper_block') })
    var steelBlocks = ['#forge:storage_blocks/steel', 'immersiveengineering:storage_steel']
    steelBlocks.forEach(I => { replaceIO(I, 'mekanism:block_steel') })
    var leadBlocks = ['#forge:storage_blocks/lead', 'immersiveengineering:storage_lead']
    leadBlocks.forEach(I => { replaceIO(I, 'thermal:lead_block') })
    var silverBlocks = ['#forge:storage_blocks/silver', 'immersiveengineering:storage_lead']
    silverBlocks.forEach(I => { replaceIO(I, 'thermal:silver_block') })
    var nickelBlocks = ['#forge:storage_blocks/nickel', 'immersiveengineering:storage_nickel']
    nickelBlocks.forEach(I => { replaceIO(I, 'thermal:nickel_block') })
    var tinBlocks = ['#forge:storage_blocks/tin', 'mekanism:block_tin']
    tinBlocks.forEach(I => { replaceIO(I, 'thermal:tin_block') })
    var bronzeBlocks = ['#forge:storage_blocks/bronze', 'mekanism:block_bronze']
    bronzeBlocks.forEach(I => { replaceIO(I, 'thermal:bronze_block') })
    var coalcokeBlocks = ['#forge:storage_blocks/coal_coke', 'immersiveengineering:coke']
    coalcokeBlocks.forEach(I => { replaceIO(I, 'thermal:coal_coke_block') })
    var aluminiumBlocks = ['#forge:ores/aluminum', 'tinkers_reforged:aluminum_ore']
    aluminiumBlocks.forEach(I => { replaceIO(I, 'immersiveengineering:ore_aluminum') })
    var charcoalBlocks = ['#forge:storage_blocks/charcoal', 'quark:charcoal_block', 'mekanism:block_charcoal']
    charcoalBlocks.forEach(I => { replaceIO(I, 'thermal:charcoal_block') })


    /**********************Plate***********************/
    var constantanPlate = ['#forge:plates/constantan', 'immersiveengineering:plate_constantan']
    constantanPlate.forEach(I => { replaceIO(I, 'thermal:constantan_plate') })
    var electrumPlate = ['#forge:plates/electrum', 'immersiveengineering:plate_electrum']
    electrumPlate.forEach(I => { replaceIO(I, 'thermal:electrum_plate') })
    var leadPlate = ['#forge:plates/lead', 'immersiveengineering:plate_lead']
    leadPlate.forEach(I => { replaceIO(I, 'thermal:lead_plate') })
    var silverPlate = ['#forge:plates/silver', 'immersiveengineering:plate_silver']
    silverPlate.forEach(I => { replaceIO(I, 'thermal:silver_plate') })
    var nickelPlate = ['#forge:plates/nickel', 'immersiveengineering:plate_nickel']
    nickelPlate.forEach(I => { replaceIO(I, 'thermal:nickel_plate') })
    var copperPlate = ['#forge:plates/copper', 'immersiveengineering:plate_copper']
    copperPlate.forEach(I => { replaceIO(I, 'thermal:copper_plate', 'create:copper_sheet') })
    var goldPlate = ['#forge:plates/gold', 'immersiveengineering:plate_gold']
    goldPlate.forEach(I => { replaceIO(I, 'thermal:gold_plate') })
    var ironPlate = ['#forge:plates/iron', 'immersiveengineering:plate_iron']
    ironPlate.forEach(I => { replaceIO(I, 'thermal:iron_plate') })

    /**********************DUST***********************/
    var uraniumDust = ['#forge:dusts/uranium', 'immersiveengineering:dust_uranium']
    uraniumDust.forEach(I => { replaceIO(I, 'mekanism:dust_uranium') })
    var diamondDust = ['#forge:dusts/diamond', 'mekanism:dust_diamond']
    diamondDust.forEach(I => { replaceIO(I, 'thermal:diamond_dust') })
    var constantanDust = ['#forge:dusts/constantan', 'immersiveengineering:dust_constantan']
    constantanDust.forEach(I => { replaceIO(I, 'thermal:constantan_dust') })
    var nickelDust = ['#forge:dusts/nickel', 'immersiveengineering:dust_nickel']
    nickelDust.forEach(I => { replaceIO(I, 'thermal:nickel_dust') })
    var electrumDust = ['#forge:dusts/electrum', 'immersiveengineering:dust_electrum']
    electrumDust.forEach(I => { replaceIO(I, 'thermal:electrum_dust') })
    var copperDust = ['#forge:dusts/copper', 'mekanism:dust_copper']
    copperDust.forEach(I => { replaceIO(I, 'thermal:copper_dust') })
    var leadDust = ['#forge:dusts/lead', 'immersiveengineering:dust_lead', 'mekanism:dust_lead']
    leadDust.forEach(I => { replaceIO(I, 'thermal:lead_dust') })
    var silverDust = ['#forge:dusts/silver', 'immersiveengineering:dust_silver']
    silverDust.forEach(I => { replaceIO(I, 'thermal:silver_dust') })
    var goldDust = ['#forge:dusts/gold', 'immersiveengineering:dust_gold', 'mekanism:dust_gold']
    goldDust.forEach(I => { replaceIO(I, 'thermal:gold_dust') })
    var ironDust = ['#forge:dusts/iron', 'appliedenergistics2:iron_dust', 'mekanism:dust_iron', 'immersiveengineering:dust_iron']
    ironDust.forEach(I => { replaceIO(I, 'thermal:iron_dust') })
    var tinDust = ['#forge:dusts/tin', 'mekanism:dust_tin']
    tinDust.forEach(I => { replaceIO(I, 'thermal:tin_dust') })
    var steelDust = ['#forge:dusts/steel', 'immersiveengineering:dust_steel']
    steelDust.forEach(I => { replaceIO(I, 'mekanism:dust_steel') })
    var netheriteDust = ['#forge:dusts/netherite', 'mekanism:dust_netherite']
    netheriteDust.forEach(I => { replaceIO(I, 'thermal:netherite_dust') })
    var sulfurDust = ['#forge:dusts/sulfur', 'mekanism:dust_sulfur', 'immersiveengineering:dust_sulfur']
    sulfurDust.forEach(I => { replaceIO(I, 'thermal:sulfur_dust') })
    var emeraldDust = ['#forge:dusts/emerald', 'mekanism:dust_emerald']
    emeraldDust.forEach(I => { replaceIO(I, 'thermal:emerald_dust') })
    var diamondDust = ['#forge:dusts/diamond', 'mekanism:dust_diamond',]
    diamondDust.forEach(I => { replaceIO(I, 'thermal:diamond_dust') })
    var enderDust = ['#forge:dusts/ender', 'thermal:ender_pearl_dust']
    enderDust.forEach(I => { replaceIO(I, 'miniutilities:ender_dust') })
    var woodDust = ['#forge:dusts/wood', 'immersiveengineering:dust_wood', 'mekanism:sawdust']
    woodDust.forEach(I => { replaceIO(I, 'thermal:sawdust') })
    var quartzDust = ['#forge:dusts/quartz', 'appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz']
    quartzDust.forEach(I => { replaceIO(I, 'thermal:quartz_dust') })
    var lapisDust = ['#forge:dusts/lapis', 'mekanism:dust_lapis_lazuli']
    lapisDust.forEach(I => { replaceIO(I, 'thermal:lapis_dust') })
    var obsidianDust = ['#forge:dusts/obsidian', 'mekanism:dust_obsidian']
    obsidianDust.forEach(I => { replaceIO(I, 'create:powdered_obsidian') })
    var coalDust = ['#forge:dusts/coal', 'mekanism:dust_coal']
    coalDust.forEach(I => { replaceIO(I, 'lazierae2:coal_dust') })

    /**********************Slag***********************/
    var Slag = ['#forge:slag', 'immersiveengineering:slag']
    Slag.forEach(I => { replaceIO(I, 'thermal:slag') })

    /**********************Rod***********************/
    var ironRod = ['#forge:rods/iron', 'immersiveengineering:stick_iron']
    ironRod.forEach(I => { replaceIO(I, 'createaddition:iron_rod') })
    var goldRod = ['#forge:rods/gold', 'immersiveengineering:stick_gold']
    goldRod.forEach(I => { replaceIO(I, 'createaddition:gold_rod') })

    /***********************Ores***********************/
    var uraniumOre = ['#forge:ores/uranium', 'immersiveengineering:ore_uranium']
    uraniumOre.forEach(I => { replaceIO(I, 'mekanism:uranium_ore') })

    /**********************Other***********************/
    var silicon = ['#forge:silicon', 'refinedstorage:silicon']
    silicon.forEach(I => { replaceIO(I, 'appliedenergistics2:silicon') })
    var wireCopper = ['#forge:wires/copper', 'immersiveengineering:wire_copper']
    wireCopper.forEach(I => { replaceIO(I, 'createaddition:copper_wire') })
    var coalCoke = ['#forge:coal_coke', 'immersiveengineering:coal_coke']
    coalCoke.forEach(I => { replaceIO(I, 'thermal:coal_coke') })
    var bitumen = ['#forge:bitumen', 'immersivepetroleum:bitumen']
    bitumen.forEach(I => { replaceIO(I, 'thermal:bitumen') })

    var goldgear = ['#forge:gears/gold', 'hammerlib:gears/gold']
    goldgear.forEach(I => { replaceIO(I, 'thermal:gold_gear') })

})