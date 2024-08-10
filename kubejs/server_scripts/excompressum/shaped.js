onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:excompressum/shaped/';
    const recipes = [
        {
            output: 'excompressum:compressed_hammer_stone',
            pattern: [" CH"," SC","S  "],
            key: {"H":'excompressum:compressed_hammer_wood',
                  "C":'excompressum:compressed_cobblestone',
                  "S":'quark:stick_block'
              },id: `${id_prefix}compressed_hammer_stone_alt`
        },
        {
            output: 'excompressum:compressed_hammer_iron',
            pattern: [" CH"," SC","S  "],
            key: {"H":'excompressum:compressed_hammer_stone',
                  "C":'minecraft:iron_block',
                  "S":'quark:stick_block'
              },id: `${id_prefix}compressed_hammer_iron_alt`
        },
        {
            output: 'excompressum:compressed_hammer_diamond',
            pattern: [" CH"," SC","S  "],
            key: {"H":'excompressum:compressed_hammer_iron',
                  "C":'minecraft:diamond_block',
                  "S":'quark:stick_block'
              },id: `${id_prefix}compressed_hammer_diamond_alt`
        }
      
];


recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
