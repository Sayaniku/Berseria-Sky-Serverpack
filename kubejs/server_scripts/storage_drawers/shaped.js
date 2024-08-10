onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:minecraft/shaped/';
    const recipes = [
           {
            output: 'storagedrawers:controller_slave',
            pattern: ["SSS","RDR","SES"],
            key: {"S":'compressium:stone_1',
                  "R":'minecraft:comparator',
                  "D":'#storagedrawers:drawers',
                  "E":'#forge:storage_blocks/electrum'
                 },
            id: 'storagedrawers:controller_slave'
            },
            {
              output: 'storagedrawers:compacting_drawers_3',
              pattern: ["SSS","PDP","SES"],
              key: {"S":'compressium:stone_1',
                    "P":'minecraft:piston',
                    "D":'storagedrawers:controller_slave',
                    "E":'thermal:enderium_plate'
                   },
              id: 'storagedrawers:compacting_drawers_3'
            },
            {
                output: 'storagedrawers:controller',
                pattern: ["SSS","RDR","SES"],
                key: {"S":'compressium:stone_1',
                      "R":'minecraft:comparator',
                      "D":'storagedrawers:controller_slave',
                      "E":'kubejs:diamond_plate'
                     },
                id: 'storagedrawers:controller'
            }
  

        
];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
