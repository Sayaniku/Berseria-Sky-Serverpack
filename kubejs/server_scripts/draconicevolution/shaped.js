onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:draconicevolution/shaped/';
    const recipes = [ 
            {
                output: 'draconicevolution:chaotic_energy_core',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'draconicevolution:chaos_shard',
                      "C":'draconicevolution:chaotic_core',
                      "B":'draconicevolution:draconic_energy_core'
               },
                id: 'draconicevolution:components/chaotic_energy_core'
            },
            {
                output: 'draconicevolution:draconic_energy_core',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'draconicevolution:awakened_draconium_block',
                      "C":'draconicevolution:awakened_core',
                      "B":'draconicevolution:wyvern_energy_core'
               },
                id: 'draconicevolution:components/draconic_energy_core'
            },
            {
                output: 'draconicevolution:wyvern_energy_core',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'draconicevolution:draconium_block',
                      "C":'draconicevolution:wyvern_core',
                      "B":'compressium:redstone_1'
               },
                id: 'draconicevolution:components/wyvern_energy_core'
            },
            {
                output: 'draconicevolution:draconium_core',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'draconicevolution:draconium_ingot',
                      "C":'extendedcrafting:ender_star',
                      "B":'tinkers_reforged:qivium_ingot'
               },
                id: 'draconicevolution:components/draconium_core'
            }
  



];

recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});
