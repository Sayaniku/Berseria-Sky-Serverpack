

//ajouter des item dans JEI
onEvent('jei.add.items', event => {

   event.add([
      Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
      Item.of('exnihilosequentia:crook_wood'),('mekanism:basic_tier_installer'),('mekanism:advanced_tier_installer'),('mekanism:elite_tier_installer'),('mekanism:ultimate_tier_installer'),
      Item.of('buildinggadgets:gadget_destruction', '{overlay:1b,fuzzy:1b}'),
      Item.of('buildinggadgets:gadget_building', '{state:{serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"},data:{}}}'),
      Item.of('buildinggadgets:gadget_exchanging', '{state:{serializer:"buildinggadgets:dummy_serializer",state:{Name:"minecraft:air"},data:{}}}'),
      Item.of('buildinggadgets:gadget_copy_paste', '{mode:0b,template_id:[I;2073204272,1445285290,-1603344729,1713198522]}'),
      Item.of('thermal:ruby_ore'), ('thermal:ruby_block'), ('thermal:ruby'), ('thermal:sapphire_ore'), ('thermal:sapphire_block'), ('thermal:sapphire'),
      Item.of('mekanism:creative_fluid_tank'), ('mekanism:creative_chemical_tank'),('mekanism:basic_control_circuit'),('mekanism:advanced_control_circuit'),('mekanism:elite_control_circuit'),('mekanism:ultimate_control_circuit'),
      item.of('mekanism:basic_logistical_transporter'), ('mekanism:advanced_logistical_transporter'), ('mekanism:elite_logistical_transporter'), ('mekanism:ultimate_logistical_transporter'), ('mekanism:basic_universal_cable'), ('mekanism:advanced_universal_cable'), ('mekanism:elite_universal_cable'), ('mekanism:ultimate_universal_cable'),('mekanism:basic_mechanical_pipe'), ('mekanism:advanced_mechanical_pipe'), ('mekanism:elite_mechanical_pipe'), ('mekanism:ultimate_mechanical_pipe')
      
   ])


})
//ajouter une description//
events.listen('jei.information', function (e) {
   e.add('mekanism:creative_fluid_tank', ['Can add every fluid to have the content infinite'])
   e.add('mekanism:creative_chemical_tank', ['Can add every gas to have the content infinite'])
})

//caché les fluid sur JEI//
onEvent('jei.hide.fluids', event => {
   event.hide('bigreactors:magentite')
   event.hide('bigreactors:blutonium')
   event.hide('bigreactors:rossinite')

})



