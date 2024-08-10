onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:minecraft/shaped/';
    const recipes = [
      {
        output: Item.of('quark:acacia_chest', 4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:acacia_log'},
          id: 'quark:acacia_log_chest'
     },
     {
        output: 'quark:acacia_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:acacia_planks'},
          id: 'quark:acacia_chest'
     },
     {
        output: Item.of('quark:dark_oak_chest', 4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:dark_oak_log'},
          id: 'quark:dark_oak_log_chest'
     },
     {
        output: 'quark:dark_oak_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:dark_oak_planks'},
          id: 'quark:dark_oak_chest'
     },
     {
        output: Item.of('quark:crimson_chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:crimson_stem'},
          id: 'quark:crimson_stem_chest'
     },
     {
        output: 'quark:crimson_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:crimson_planks'},
          id: 'quark:crimson_chest'
     },
     {
        output: Item.of('quark:warped_chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:warped_stem'},
          id: 'quark:warped_stem_chest'
     },
     {
        output: 'quark:warped_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:warped_planks'},
          id: 'quark:warped_chest'
     },
     {
        output: Item.of('minecraft:chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:oak_log'},
          id: 'minecraft:oak_log_chest'
     },
     {
        output: 'minecraft:chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:oak_planks'},
          id: 'minecraft:oak_chest'
     },
     {
        output: Item.of('quark:spruce_chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:spruce_log'},
          id: 'quark:spruce_log_chest'
     },
     {
        output: 'quark:spruce_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:spruce_planks'},
          id: 'quark:spruce_chest'
     },
     {
        output: Item.of('quark:birch_chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:birch_log'},
          id: 'quark:birch_log_chest'
     },
     {
        output: 'quark:birch_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:birch_planks'},
          id: 'quark:birch_chest'
     },
     {
        output: Item.of('quark:jungle_chest',4),
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:jungle_log'},
          id: 'quark:jungle_log_chest'
     },
     {
        output: 'quark:jungle_chest',
          pattern: ["###","# #","###"],
          key: {"#":'minecraft:jungle_planks'},
          id: 'quark:jungle_chest'
     },
        
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
