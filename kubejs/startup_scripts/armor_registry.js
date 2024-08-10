// Listen to item registry event
onEvent('item.registry', event => {

  //Helmet//
  event.create('ornium_helmet').displayName('§dOrnium Helmet').type('helmet').tier('ornium').maxDamage(-1)
  event.create('lightium_helmet').displayName('§3Lightium Helmet').type('helmet').tier('lightium').maxDamage(-1)
  event.create('tornium_helmet').displayName('§7Tornium Helmet').type('helmet').tier('tornium').maxDamage(-1)
  event.create('ouranium_helmet').displayName('§2Ouranium Helmet').type('helmet').tier('ouranium').maxDamage(-1)

  //Chestplate//
  event.create('ornium_chestplate').displayName('§dOrnium Chestplate').type('chestplate').tier('ornium').maxDamage(-1)
  event.create('lightium_chestplate').displayName('§3Lightium Chestplate').type('chestplate').tier('lightium').maxDamage(-1)
  event.create('tornium_chestplate').displayName('§7Tornium Chestplate').type('chestplate').tier('tornium').maxDamage(-1)
  event.create('ouranium_chestplate').displayName('§2Ouranium Chestplate').type('chestplate').tier('ouranium').maxDamage(-1)

  //Legging//
  event.create('ornium_leggings').displayName('§dOrnium Leggings').type('leggings').tier('ornium').maxDamage(-1)
  event.create('lightium_leggings').displayName('§3Lightium Leggings').type('leggings').tier('lightium').maxDamage(-1)
  event.create('tornium_leggings').displayName('§7Tornium Leggings').type('leggings').tier('tornium').maxDamage(-1)
  event.create('ouranium_leggings').displayName('§2Ouranium Leggings').type('leggings').tier('ouranium').maxDamage(-1)

  //Boots//
  event.create('ornium_boots').displayName('§dOrnium Boots').type('boots').tier('ornium').maxDamage(-1)
  event.create('lightium_boots').displayName('§3Lightium Boots').type('boots').tier('lightium').maxDamage(-1)
  event.create('tornium_boots').displayName('§7Tornium Boots').type('boots').tier('tornium').maxDamage(-1)
  event.create('ouranium_boots').displayName('§2Ouranium Boots').type('boots').tier('ouranium').maxDamage(-1)

})








onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('ornium', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [7, 10, 12, 7]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.repairIngredient = 'kubejs:ornium_ingot'
    tier.toughness = 4.0
    tier.knockbackResistance = 0.0
  })
})
onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('lightium', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [9, 12, 14, 9]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.repairIngredient = 'kubejs:lightium_ingot'
    tier.toughness = 5.0
    tier.knockbackResistance = 0.5
  })
})
onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('tornium', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [12, 16, 20, 12]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.repairIngredient = 'kubejs:tornium_ingot'
    tier.toughness = 7.0
    tier.knockbackResistance = 0.6
  })
})
onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('ouranium', tier => {
    tier.durabilityMultiplier = -1
    tier.slotProtections = [30, 40, 50, 30]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_netherite'
    tier.repairIngredient = 'kubejs:ouranium_ingot'
    tier.toughness = 20.0
    tier.knockbackResistance = 1.0
  })
})