onEvent('recipes', (event) => {
    const id_prefix = 'berseria_sky:projecte/shaped/';
    const recipes = [
          {
            output: 'projectex:dark_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:basic_power_flower',
                  "C":'projectex:dark_compressed_collector',
                  "R": 'projectex:dark_relay'
            },
            id: 'projectex:power_flower/dark'
          },
          {
            output: 'projectex:red_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:dark_power_flower',
                  "C":'projectex:red_compressed_collector',
                  "R": 'projectex:red_relay'
            },
            id: 'projectex:power_flower/red'
          },
          {
            output: 'projectex:magenta_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:red_power_flower',
                  "C":'projectex:magenta_compressed_collector',
                  "R": 'projectex:magenta_relay'
            },
            id: 'projectex:power_flower/magenta'
          },
          {
            output: 'projectex:pink_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:magenta_power_flower',
                  "C":'projectex:pink_compressed_collector',
                  "R": 'projectex:pink_relay'
            },
            id: 'projectex:power_flower/pink'
          },
          {
            output: 'projectex:purple_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:pink_power_flower',
                  "C":'projectex:purple_compressed_collector',
                  "R": 'projectex:purple_relay'
            },
            id: 'projectex:power_flower/purple'
          },
          {
            output: 'projectex:violet_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:purple_power_flower',
                  "C":'projectex:violet_compressed_collector',
                  "R": 'projectex:violet_relay'
            },
            id: 'projectex:power_flower/violet'
          },
          {
            output: 'projectex:blue_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:violet_power_flower',
                  "C":'projectex:blue_compressed_collector',
                  "R": 'projectex:blue_relay'
            },
            id: 'projectex:power_flower/blue'
          },
          {
            output: 'projectex:cyan_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:blue_power_flower',
                  "C":'projectex:cyan_compressed_collector',
                  "R": 'projectex:cyan_relay'
            },
            id: 'projectex:power_flower/cyan'
          },
          {
            output: 'projectex:green_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:cyan_power_flower',
                  "C":'projectex:green_compressed_collector',
                  "R": 'projectex:green_relay'
            },
            id: 'projectex:power_flower/green'
          },
          {
            output: 'projectex:lime_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:green_power_flower',
                  "C":'projectex:lime_compressed_collector',
                  "R": 'projectex:lime_relay'
            },
            id: 'projectex:power_flower/lime'
          },
          {
            output: 'projectex:yellow_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:lime_power_flower',
                  "C":'projectex:yellow_compressed_collector',
                  "R": 'projectex:yellow_relay'
            },
            id: 'projectex:power_flower/yellow'
          },
          {
            output: 'projectex:orange_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:yellow_power_flower',
                  "C":'projectex:orange_compressed_collector',
                  "R": 'projectex:orange_relay'
            },
            id: 'projectex:power_flower/orange'
          },
          {
            output: 'projectex:white_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:orange_power_flower',
                  "C":'projectex:white_compressed_collector',
                  "R": 'projectex:white_relay'
            },
            id: 'projectex:power_flower/white'
          },
          {
            output: 'projectex:fading_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:white_power_flower',
                  "C":'projectex:fading_compressed_collector',
                  "R": 'projectex:fading_relay'
            },
            id: 'projectex:power_flower/fading'
          },
          {
            output: 'projectex:final_power_flower',
            pattern: ["CLC","RRR","RRR"],
            key: {"L":'projectex:fading_power_flower',
                  "C":'projectex:final_compressed_collector',
                  "R": 'projectex:final_relay'
            },
            id: 'projectex:power_flower/final'
          },
          {
            output: 'projectex:personal_link',
            pattern: ["RER","EAE","RER"],
            key: {"E":'projectex:energy_link',
                  "A":'projecte:condenser_mk1',
                  "R":'projectex:purple_relay'
            },
            id: 'projectex:personal_link'
          }
 


];


recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
});
});