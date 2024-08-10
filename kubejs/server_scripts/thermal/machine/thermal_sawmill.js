events.listen('recipes', function (e) {

    function SawmillPlanks(input, energy, output) {
        e.custom({
            "type": "thermal:sawmill",
            "input": [{ "tag": input, }],
            "energy": energy,

            "result": [{ "item": output, "count": 6 }, { "item": 'thermal:sawdust', "chance": 1.25 }]
        })
    }

    SawmillPlanks('outvoted:palm_logs', 1000, 'outvoted:palm_planks')
    SawmillPlanks('outvoted:baobab_logs', 1000, 'outvoted:baobab_planks')
    SawmillPlanks('forge:greenhillpalm_log', 1000, 'sonicraft:green_hill_palm_planks')
    SawmillPlanks('forge:chillyblossom_log', 1000, 'sonicraft:chilly_blossom_planks')
    SawmillPlanks('forge:wart_log', 1000, 'betternether:wart_planks')
    SawmillPlanks('forge:mushroom_fir_log', 1000, 'betternether:mushroom_fir_planks')
    SawmillPlanks('forge:willow_log', 1000, 'betternether:willow_planks')
    SawmillPlanks('forge:stalagnate_log', 1000, 'betternether:stalagnate_planks')
    SawmillPlanks('forge:anchor_log', 1000, 'betternether:anchor_tree_planks')
    SawmillPlanks('forge:sakura_log', 1000, 'betternether:nether_sakura_planks')
    SawmillPlanks('forge:rubeus_log', 1000, 'betternether:rubeus_planks')
    SawmillPlanks('blue_skies:logs/bluebright', 1000, 'blue_skies:bluebright_planks')
    SawmillPlanks('blue_skies:logs/starlit', 1000, 'blue_skies:starlit_planks')
    SawmillPlanks('blue_skies:logs/frostbright', 1000, 'blue_skies:frostbright_planks')
    SawmillPlanks('blue_skies:logs/lunar', 1000, 'blue_skies:lunar_planks')
    SawmillPlanks('blue_skies:logs/dusk', 1000, 'blue_skies:dusk_planks')
    SawmillPlanks('blue_skies:logs/maple', 1000, 'blue_skies:maple_planks')
    SawmillPlanks('blue_skies:logs/cherry', 1000, 'blue_skies:cherry_planks')
    SawmillPlanks('blue_skies:logs/crystallized', 1000, 'blue_skies:crystallized_planks')








})