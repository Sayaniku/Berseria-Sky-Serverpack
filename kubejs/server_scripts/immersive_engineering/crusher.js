onEvent('recipes', (event) => {
  const id_prefix = 'berseria_sky:immersiveengineering/crusher/';
  var data = {
      recipes: [
          {
              input: '#forge:gems/lapis',
              output: '#forge:dusts/lapis',
              secondary: [],
              id: `${id_prefix}dust_lapis`
          },
          {
            input: '#forge:gems/apatite',
            output: '#forge:dusts/apatite',
            secondary: [],
            id: `${id_prefix}dust_apatite`
          },
          {
            input: '#forge:gems/cinnabar',
            output: '#forge:dusts/cinnabar',
            secondary: [],
            id: `${id_prefix}dust_cinnabar`
          },
          {
            input: '#forge:gems/quartz',
            output: '#forge:dusts/quartz',
            secondary: [],
            id: `${id_prefix}dust_quartz`
          },
          {
            input: '#forge:gems/emerald',
            output: '#forge:dusts/emerald',
            secondary: [],
            id: `${id_prefix}dust_emerald`
          },
          {
            input: '#forge:gems/diamond',
            output: '#forge:dusts/diamond',
            secondary: [],
            id: `${id_prefix}dust_diamond`
          },
          {
            input: '#forge:gems/niter',
            output: '#forge:dusts/niter',
            secondary: [],
            id: `${id_prefix}dust_niter`
          },
          {
            input: '#forge:gems/fluorite',
            output: '#forge:dusts/fluorite',
            secondary: [],
            id: `${id_prefix}dust_fluorite`
          },
          {
            input: '#forge:ingots/draconium',
            output: '#forge:dusts/draconium',
            secondary: [],
            id: `${id_prefix}dust_draconium`
          },
          {
            input: '#forge:ingots/lumium',
            output: '#forge:dusts/lumium',
            secondary: [],
            id: `${id_prefix}dust_lumium`
          },
          {
            input: '#forge:ingots/enderium',
            output: '#forge:dusts/enderium',
            secondary: [],
            id: `${id_prefix}dust_enderium`
          },
          {
            input: '#forge:ingots/signalum',
            output: '#forge:dusts/signalum',
            secondary: [],
            id: `${id_prefix}dust_signalum`
          },
          {
            input: '#forge:ingots/netherite',
            output: '#forge:dusts/netherite',
            secondary: [],
            id: `${id_prefix}dust_netherite`
          },
          {
            input: '#forge:ingots/blazing_copper',
            output: '#forge:dusts/blazing_copper',
            secondary: [],
            id: `${id_prefix}dust_blazing_copper`
          },
          {
            input: '#forge:ender_pearls',
            output: '#forge:dusts/ender',
            secondary: [],
            id: `${id_prefix}dust_ender`
          }
          
      ]
  };

  data.recipes.forEach((recipe) => {
      const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
      if (recipe.id) {
          re.id(recipe.id);
      }
  });
});
