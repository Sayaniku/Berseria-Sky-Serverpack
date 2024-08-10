events.listen('recipes', function (e) { 

    function Raw (raw,ingots){
    e.custom({
    "type":"immersiveengineering:arc_furnace",
    "additives":[],"energy":230400,"input":{"tag": raw},
    "results":[{"base_ingredient":{"tag":ingots},"count":13}],
    "slag":{"tag":"forge:slag"},"time":200,
    "secondaries":[{"chance":0.5,"output":{"tag":ingots}}],"time":900})
    }
    

    Raw ('forge:storage_blocks/raw_aluminum','forge:ingots/aluminum')
    Raw ('forge:storage_blocks/raw_ardite','forge:ingots/ardite')
    Raw ('forge:storage_blocks/raw_copper','forge:ingots/copper')
    Raw ('forge:storage_blocks/raw_cobalt','forge:ingots/cobalt')
    Raw ('forge:storage_blocks/raw_nickel','forge:ingots/nickel')
    Raw ('forge:storage_blocks/raw_silver','forge:ingots/silver')
    Raw ('forge:storage_blocks/raw_iron','forge:ingots/iron')
    Raw ('forge:storage_blocks/raw_lead','forge:ingots/lead')
    Raw ('forge:storage_blocks/raw_tin','forge:ingots/tin')
    Raw ('forge:storage_blocks/raw_osmium','forge:ingots/osmium')
    Raw ('forge:storage_blocks/raw_gold','forge:ingots/gold')
    Raw ('forge:storage_blocks/raw_uranium','forge:ingots/uranium')
    Raw ('forge:storage_blocks/raw_zinc','forge:ingots/zinc')
    Raw ('forge:storage_blocks/raw_horizonite','blue_skies:ingots/horizonite')
    Raw ('forge:storage_blocks/raw_ventium','blue_skies:ingots/ventium')
    Raw ('forge:storage_blocks/raw_falsite','blue_skies:ingots/falsite')
    Raw ('forge:storage_blocks/raw_aquite','blue_skies:gems/aquite')
    Raw ('forge:storage_blocks/raw_charoite','blue_skies:gems/charoite')
})
