onEvent('cm_upgrades', event => {

    /* Upgrade Adv Smelter */

    //Basic Speed Upgrade//
    event.create(Item.of('thermal:machine_speed_augment'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.8)
    .mulInput("custommachinery:energy", 2)

    //Adv Speed Upgrade//
    event.create(Item.of('thermal_extra:advanced_machine_speed_augment'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.6)
    .mulInput("custommachinery:energy", 2.15)

    //Augment Upgrade Tier 1//
    event.create(Item.of('thermal:upgrade_augment_1'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.6)

    //Augment Upgrade Tier 2//
    event.create(Item.of('thermal:upgrade_augment_2'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.4)

    //Augment Upgrade Tier 3//
    event.create(Item.of('thermal:upgrade_augment_3'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.2)

    //Augment Upgrade Tier 4//
    event.create(Item.of('thermal_extra:dragon_integral_component'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.1)

})