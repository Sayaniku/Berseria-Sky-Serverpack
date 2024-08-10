onEvent('recipes', (e) => {
    const id_prefix = 'berseria_sky:minecraft/smithing_table/';
    const recipes = [
        {
            input:  { item: 'excompressum:compressed_hammer_diamond' },
            addition:  'minecraft:netherite_block',
            output:   'excompressum:compressed_hammer_netherite' ,
            id: `${id_prefix}compressed_hammer_netherite_alt`
           },
        
];
recipes.forEach(recipe => {
    e.custom({
      type: 'minecraft:smithing',
      base: recipe.input,
      addition: recipe.addition,
      result: recipe.output,
    }).id(recipe.id);
  });
});