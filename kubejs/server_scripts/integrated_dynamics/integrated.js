events.listen('recipes', function (e) { 

   //Battery//
  e.remove({ id: "integrateddynamics:crafting/energy_battery" })
  e.shaped(item.of('integrateddynamics:energy_battery', 1), ['EEE', 'ECE', 'EEE'], {
    E: 'integrateddynamics:crystalized_menril_block', 
    C: 'immersiveengineering:capacitor_hv'})

    //Store//
  e.remove({ id: "integrateddynamics:crafting/variablestore" })
  e.shaped(item.of('integrateddynamics:variablestore', 1), ['EEE', 'ECE', 'EEE'], {
    E: 'integrateddynamics:crystalized_menril_block', 
    C: 'metalbarrels:netherite_barrel'})








})