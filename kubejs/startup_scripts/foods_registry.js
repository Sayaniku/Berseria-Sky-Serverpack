events.listen('item.registry', function (e) {

  //Ornium Apple
  e.create('ornium_apple').displayName('§dOrnium Apple').glow(true).food(foodConsumer => {
    foodConsumer.hunger(20)
    .saturation(1.0)
    .alwaysEdible()
    .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",4000,2,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",4000,2,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",4000,2,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",4000,2,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",4000,2,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",4000,2,false,false)

            });
  });
   //Lightium Apple
   e.create('lightium_apple').displayName('§3Lightium Apple').glow(true).food(foodConsumer => {
    foodConsumer.hunger(30)
    .saturation(1.2)
    .alwaysEdible()
    .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",4500,3,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",4500,3,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",4500,3,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",4500,3,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",4500,3,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",4500,3,false,false)

            });
  });
   //Tornium Apple
   e.create('tornium_apple').displayName('§7Tornium Apple').glow(true).food(foodConsumer => {
    foodConsumer.hunger(40)
    .saturation(1.5)
    .alwaysEdible()
    .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",5000,4,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",5000,4,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",5000,4,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",5000,4,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",5000,4,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",5000,4,false,false)

            });
  });
  //Ouranium Apple
  e.create('ouranium_apple').displayName('§2Ouranium Apple').glow(true).food(foodConsumer => {
    foodConsumer.hunger(50)
    .saturation(2.0)
    .alwaysEdible()
    .eaten(eatenEvent => {
            eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",6000,5,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",6000,5,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,5,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",6000,5,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",6000,5,false,false)
            eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",6000,5,false,false)

            });
  });

})