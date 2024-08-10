events.listen('recipes', function (e) {


    function ImmersivePlanks(output, log, wood, striped){
    e.custom({
        "type": "immersiveengineering:sawmill",
        "secondaries": [{
            "output": { "tag": "forge:dusts/wood" },
            "stripping": true
        }, {
            "output": { "tag": "forge:dusts/wood" },
            "stripping": false
        }], "result":
        {
            "item": output, "count": 6
        }, "energy": 1600, "input": [{ "item": log },

        { "item": wood }],

        "stripped": { "item": striped }
    })
     }

    //Nether//
    ImmersivePlanks('betternether:rubeus_planks', 'betternether:rubeus_log', 'betternether:rubeus_bark', 'betternether:striped_log_rubeus')
    ImmersivePlanks('betternether:mushroom_fir_planks', 'betternether:mushroom_fir_log', 'betternether:mushroom_fir_wood', 'betternether:striped_log_mushroom_fir')
    ImmersivePlanks('betternether:stalagnate_planks', 'betternether:stalagnate_log', 'betternether:stalagnate_bark', 'betternether:striped_log_stalagnate')
    ImmersivePlanks('betternether:wart_planks', 'betternether:wart_log', 'betternether:wart_bark', 'betternether:striped_log_wart')
    ImmersivePlanks('betternether:willow_planks', 'betternether:willow_log', 'betternether:willow_bark', 'betternether:striped_log_willow')
    ImmersivePlanks('betternether:nether_sakura_planks', 'betternether:nether_sakura_log', 'betternether:nether_sakura_bark', 'betternether:striped_log_nether_sakura')
    ImmersivePlanks('betternether:anchor_tree_planks', 'betternether:anchor_tree_log', 'betternether:anchor_tree_bark', 'betternether:striped_log_anchor_tree')

    //End//
    ImmersivePlanks('betterendforge:tenanea_planks', 'betterendforge:tenanea_log', 'betterendforge:tenanea_bark', 'betterendforge:tenanea_stripped_log')
    ImmersivePlanks('betterendforge:end_lotus_planks', 'betterendforge:end_lotus_log', 'betterendforge:end_lotus_bark', 'betterendforge:end_lotus_stripped_log')
    ImmersivePlanks('betterendforge:umbrella_tree_planks', 'betterendforge:umbrella_tree_log', 'betterendforge:umbrella_tree_bark', 'betterendforge:umbrella_tree_stripped_log')
    ImmersivePlanks('betterendforge:dragon_tree_planks', 'betterendforge:dragon_tree_log', 'betterendforge:dragon_tree_bark', 'betterendforge:dragon_tree_stripped_log')
    ImmersivePlanks('betterendforge:helix_tree_planks', 'betterendforge:helix_tree_log', 'betterendforge:helix_tree_bark', 'betterendforge:helix_tree_stripped_log')
    ImmersivePlanks('betterendforge:lacugrove_planks', 'betterendforge:lacugrove_log', 'betterendforge:lacugrove_bark', 'betterendforge:lacugrove_stripped_log')
    ImmersivePlanks('betterendforge:lucernia_planks', 'betterendforge:lucernia_log', 'betterendforge:lucernia_bark', 'betterendforge:lucernia_stripped_log')
    ImmersivePlanks('betterendforge:jellyshroom_planks', 'betterendforge:jellyshroom_log', 'betterendforge:jellyshroom_bark', 'betterendforge:jellyshroom_stripped_log')
    ImmersivePlanks('betterendforge:mossy_glowshroom_planks', 'betterendforge:mossy_glowshroom_log', 'betterendforge:mossy_glowshroom_bark', 'betterendforge:mossy_glowshroom_stripped_log')
    ImmersivePlanks('betterendforge:pythadendron_planks', 'betterendforge:pythadendron_log', 'betterendforge:pythadendron_bark', 'betterendforge:pythadendron_stripped_log')

    //Sonic//
    ImmersivePlanks('sonicraft:green_hill_palm_planks', 'sonicraft:green_hill_palm_log', 'sonicraft:green_hill_palm_wood', 'sonicraft:stripped_ghz_palm_log')
    ImmersivePlanks('sonicraft:chilly_blossom_planks', 'sonicraft:chilly_blossom_log', 'sonicraft:chilly_blossom_wood', 'sonicraft:stripped_chilly_blossom_log')

    //BlueSkies//
    ImmersivePlanks('blue_skies:bluebright_planks', 'blue_skies:bluebright_log', 'blue_skies:bluebright_wood', 'blue_skies:stripped_bluebright_log')
    ImmersivePlanks('blue_skies:starlit_planks', 'blue_skies:starlit_log', 'blue_skies:starlit_wood', 'blue_skies:stripped_starlit_log')
    ImmersivePlanks('blue_skies:frostbright_planks', 'blue_skies:frostbright_log', 'blue_skies:frostbright_wood', 'blue_skies:stripped_frostbright_log')
    ImmersivePlanks('blue_skies:lunar_planks', 'blue_skies:lunar_log', 'blue_skies:lunar_wood', 'blue_skies:stripped_lunar_log')
    ImmersivePlanks('blue_skies:dusk_planks', 'blue_skies:dusk_log', 'blue_skies:dusk_wood', 'blue_skies:stripped_dusk_log')
    ImmersivePlanks('blue_skies:maple_planks', 'blue_skies:maple_log', 'blue_skies:maple_wood', 'blue_skies:stripped_maple_log')
    ImmersivePlanks('blue_skies:cherry_planks', 'blue_skies:cherry_log', 'blue_skies:cherry_wood', 'blue_skies:stripped_cherry_log')


    //Autre//
    ImmersivePlanks('integrateddynamics:menril_planks', 'integrateddynamics:menril_log', 'integrateddynamics:menril_wood', 'integrateddynamics:menril_log_stripped')
    ImmersivePlanks('outvoted:palm_planks', 'outvoted:palm_log', 'outvoted:palm_wood', 'outvoted:stripped_palm_log')
    ImmersivePlanks('outvoted:baobab_planks', 'outvoted:baobab_log', 'outvoted:baobab_wood', 'outvoted:stripped_baobab_log')
    ImmersivePlanks('tconstruct:skyroot_planks', 'tconstruct:skyroot_log', 'tconstruct:skyroot_wood', 'tconstruct:stripped_skyroot_log')
    ImmersivePlanks('tconstruct:bloodshroom_planks', 'tconstruct:bloodshroom_log', 'tconstruct:bloodshroom_wood', 'tconstruct:stripped_bloodshroom_log')
    ImmersivePlanks('tconstruct:greenheart_planks', 'tconstruct:greenheart_log', 'tconstruct:greenheart_wood', 'tconstruct:stripped_greenheart_log')



})