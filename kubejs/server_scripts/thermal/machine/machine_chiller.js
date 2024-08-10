events.listen('recipes', function (e) { 


  function Ingot(fluid, mb,result) { 
   e.custom({
        "type": "thermal:chiller",
        "energy": 10000,
        "ingredients": [
          {"fluid": fluid,"amount": mb},
          {"item": "thermal:chiller_ingot_cast"}
        ],
        "result": [{"item": result,"count": 1}],
    })}
    
Ingot('kubejs:molten_sunny',144,'kubejs:sun_ingot')
Ingot('kubejs:molten_moon',144,'kubejs:moon_ingot')
Ingot('tconstruct:molten_diamond',144,'kubejs:diamond_ingot')
Ingot('tconstruct:molten_emerald',144,'kubejs:emerald_ingot')

function Rod(fluid, mb,result) { 
  e.custom({
       "type": "thermal:chiller",
       "energy": 10000,
       "ingredients": [
         {"fluid": fluid,"amount": mb},
         {"item": "thermal:chiller_rod_cast"}
       ],
       "result": [{"item": result,"count": 2}],
   })}

Rod('tconstruct:molten_copper', 144,'createaddition:copper_rod')
Rod('tconstruct:molten_iron',144,'createaddition:iron_rod')
Rod('tconstruct:molten_gold',144,'createaddition:gold_rod')
Rod('tconstruct:molten_brass',144,'createaddition:brass_rod')
Rod('tconstruct:molten_steel',144,'immersiveengineering:stick_steel')
Rod('tconstruct:molten_aluminum',144,'immersiveengineering:stick_aluminum')
Rod('tconstruct:molten_constantan',144,'immersiveposts:stick_constantan')
Rod('tconstruct:molten_lead',144,'immersiveposts:stick_lead')
Rod('tconstruct:molten_silver',144,'immersiveposts:stick_silver')
Rod('tconstruct:molten_nickel',144,'immersiveposts:stick_nickel')
Rod('tconstruct:molten_electrum',144,'immersiveposts:stick_electrum')
Rod('tconstruct:molten_uranium',144,'immersiveposts:stick_uranium')



})