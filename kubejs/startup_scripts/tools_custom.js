onEvent('item.registry', event => {
         
    //Pickaxe//
    event.create('ornium_pickaxe').displayName('§dOrnium Pickaxe').type('pickaxe').tier('ornium').maxDamage(-1).miningSpeed(30.0)
    event.create('lightium_pickaxe').displayName('§3Lightium Pickaxe').type('pickaxe').tier('lightium').maxDamage(-1).miningSpeed(35.0)
    event.create('tornium_pickaxe').displayName('§7Tornium Pickaxe').type('pickaxe').tier('tornium').maxDamage(-1).miningSpeed(50.0)
    event.create('ouranium_pickaxe').displayName('§2Ouranium Pickaxe').type('pickaxe').tier('ouranium').maxDamage(-1).miningSpeed(100.0)

    //Sword//        
    event.create('ornium_sword').displayName('§dOrnium Sword').type('sword').tier('ornium').maxDamage(-1).attackSpeed(40.0)
    event.create('lightium_sword').displayName('§3Lightium Sword').type('sword').tier('lightium').maxDamage(-1).attackSpeed(45.0)
    event.create('tornium_sword').displayName('§7Tornium Sword').type('sword').tier('tornium').maxDamage(-1).attackSpeed(60.0)
    event.create('ouranium_sword').displayName('§2Ouranium Sword').type('sword').tier('ouranium').maxDamage(-1).attackSpeed(120.0)

    //Axe//
    event.create('ornium_axe').displayName('§dOrnium Axe').type('axe').tier('ornium').maxDamage(-1).miningSpeed(30.0)
    event.create('lightium_axe').displayName('§3Lightium Axe').type('axe').tier('lightium').maxDamage(-1).miningSpeed(35.0)
    event.create('tornium_axe').displayName('§7Tornium Axe').type('axe').tier('tornium').maxDamage(-1).miningSpeed(50.0)
    event.create('ouranium_axe').displayName('§2Ouranium Axe').type('axe').tier('ouranium').maxDamage(-1).miningSpeed(50.0)

    //Shovel//
    event.create('ornium_shovel').displayName('§dOrnium Shovel').type('shovel').tier('ornium').maxDamage(-1).miningSpeed(30.0)
    event.create('lightium_shovel').displayName('§3Lightium Shovel').type('shovel').tier('lightium').maxDamage(-1).miningSpeed(35.0)
    event.create('tornium_shovel').displayName('§7Tornium Shovel').type('shovel').tier('tornium').maxDamage(-1).miningSpeed(50.0)
    event.create('ouranium_shovel').displayName('§2Ouranium Shovel').type('shovel').tier('ouranium').maxDamage(-1).miningSpeed(100.0)

    //Hoe//
    event.create('ornium_hoe').displayName('§dOrnium Hoe').type('hoe').tier('ornium').maxDamage(-1).miningSpeed(30.0)
    event.create('lightium_hoe').displayName('§3Lightium Hoe').type('hoe').tier('lightium').maxDamage(-1).miningSpeed(35.0)
    event.create('tornium_hoe').displayName('§7Tornium Hoe').type('hoe').tier('tornium').maxDamage(-1).miningSpeed(50.0)
    event.create('ouranium_hoe').displayName('§2Ouranium Hoe').type('hoe').tier('ouranium').maxDamage(-1).miningSpeed(1000.0)

})

onEvent('item.registry.tool_tiers', event => {
    event.add('ornium', tier => {
      tier.uses = -1
      tier.speed = 40.0
      tier.attackDamageBonus = 30.0
      tier.level = 5
      tier.enchantmentValue = 10
      tier.repairIngredient = 'kubejs:ornium_ingot'
    })
})
onEvent('item.registry.tool_tiers', event => {
  event.add('lightium', tier => {
    tier.uses = -1
    tier.speed = 50.0
    tier.attackDamageBonus = 40.0
    tier.level = 5
    tier.enchantmentValue = 15
    tier.repairIngredient = 'kubejs:lightium_ingot'
  })
})
onEvent('item.registry.tool_tiers', event => {
  event.add('tornium', tier => {
    tier.uses = -1
    tier.speed = 80.0
    tier.attackDamageBonus = 50.0
    tier.level = 5
    tier.enchantmentValue = 20
    tier.repairIngredient = 'kubejs:lightium_ingot'
  })
})
onEvent('item.registry.tool_tiers', event => {
  event.add('ouranium', tier => {
    tier.uses = -1
    tier.speed = 160.0
    tier.attackDamageBonus = 100.0
    tier.level = 5
    tier.enchantmentValue = 30
    tier.repairIngredient = 'kubejs:ouranium_ingot'
  })
})