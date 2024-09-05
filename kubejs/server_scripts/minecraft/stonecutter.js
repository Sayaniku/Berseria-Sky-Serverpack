//priority: 10000
events.listen('recipes', function (e) {  

    function stoneCutter(output, input) {
    e.custom({"type": "minecraft:stonecutting","ingredient": input,"result": output,"count": 1})
  }
  //Flint//
  stoneCutter('excompressum:compressed_flint', [{"item": 'supplementaries:flint_block'}])
  stoneCutter('supplementaries:flint_block', [{"item": 'excompressum:compressed_flint'}])
  stoneCutter('mekanism:block_steel', [{"item": 'immersiveengineering:storage_steel'}])
  stoneCutter('immersiveengineering:storage_steel', [{"item": 'mekanism:block_steel'}])






})