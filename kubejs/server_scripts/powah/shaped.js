onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:thermal/shaped/';
    const recipes = [
            {
                output: 'powah:dielectric_casing',
                pattern: ["IHI","V V","IHI"],
                key: {"V":'powah:dielectric_rod',
                      "H":'powah:dielectric_rod_horizontal',
                      "I":'#forge:ingots/brass'
                   },
                  id: 'powah:crafting/dielectric_casing'
            },
            {
                output: 'powah:energy_cell_starter',
                pattern: ["ICI","CDC","ICI"],
                key: {"C":'powah:capacitor_basic_tiny',
                      "I":'#forge:ingots/zinc',
                      "D":'powah:dielectric_casing'
                    },
                    id: 'powah:crafting/energy_cell_starter'
            },
            {
                output: 'powah:energy_cell_basic',
                pattern: ["III","CDC","III"],
                key: {"C":'powah:energy_cell_starter', 
                      "I":'mysticalagriculture:prosperity_ingot',
                      "D":'powah:dielectric_casing'
                    },
                    id: 'powah:crafting/energy_cell_basic'
            },
            {
                output: item.of('powah:ender_gate_basic',4),
                pattern: ["OIO","ICI","OIO"],
                key: {"C":'powah:ender_core', 
                      "I":'powah:energy_cable_basic',
                      "O":'powah:ender_gate_starter'
                    },
                    id: 'powah:crafting/ender_gate_basic'
            },
            {
                output: item.of('powah:ender_gate_hardened',4),
                pattern: ["OIO","ICI","OIO"],
                key: {"C":'powah:ender_core', 
                      "I":'powah:energy_cable_hardened',
                      "O":'powah:ender_gate_basic'
                    },
                    id: 'powah:crafting/ender_gate_hardened'
            },
            {
                output: item.of('powah:ender_gate_niotic',4),
                pattern: ["OIO","ICI","OIO"],
                key: {"C":'powah:ender_core', 
                      "I":'powah:energy_cable_niotic',
                      "O":'powah:ender_gate_hardened'
                    },
                    id: 'powah:crafting/ender_gate_niotic'
            },
            {
                output: item.of('powah:ender_gate_spirited',4),
                pattern: ["OIO","ICI","OIO"],
                key: {"C":'powah:ender_core', 
                      "I":'powah:energy_cable_spirited',
                      "O":'powah:ender_gate_niotic'
                    },
                    id: 'powah:crafting/ender_gate_spirited'
            },
            {
                output: item.of('powah:ender_gate_nitro',4),
                pattern: ["OIO","ICI","OIO"],
                key: {"C":'powah:ender_core', 
                      "I":'powah:energy_cable_nitro',
                      "O":'powah:ender_gate_spirited'
                    },
                    id: 'powah:crafting/ender_gate_nitro'
            },
            {
                output: 'berseria_sky:capacitor_creative',
                pattern: ["PBP","BCB","PBP"],
                key: {"P":'powah:dielectric_paste',
                      "C":'powah:capacitor_nitro',
                      "B":'berseria_sky:creative_crystal_block'
               },
                id: `${id_prefix}capacitor_creative`
            },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});