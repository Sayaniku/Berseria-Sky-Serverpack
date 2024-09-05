onEvent('cm_upgrades', e => {

    /* Upgrade Adv Smelter */

    //Basic Speed Upgrade//
    e.create(Item.of('thermal:machine_speed_augment'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.8)
    .mulInput("custommachinery:energy", 2)

    //Adv Speed Upgrade//
    e.create(Item.of('thermal_extra:advanced_machine_speed_augment'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.7)
    .mulInput("custommachinery:energy", 2.15)

    //Augment Upgrade Tier 1//
    e.create(Item.of('thermal:upgrade_augment_1'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.8)

    //Augment Upgrade Tier 2//
    e.create(Item.of('thermal:upgrade_augment_2'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.7)

    //Augment Upgrade Tier 3//
    e.create(Item.of('thermal:upgrade_augment_3'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.6)

    //Augment Upgrade Tier 4//
    e.create(Item.of('thermal_extra:dragon_integral_component'), 1)
    .machine("berseria_sky:advanced_machine_smelter")
    .mulInput("custommachinery:speed", 0.5)

    /* Moon Collector */

    //Speed Upgrade 1//
    e.create(Item.of('berseria_sky:moon_speed_1'), 1)
    .machine("berseria_sky:moon_collector")
    .mulInput("custommachinery:speed", 0.7)
    .tooltip('§cSpeeds the process by 30 ticks')


    //Speed Upgrade 2//
    e.create(Item.of('berseria_sky:moon_speed_2'), 1)
    .machine("berseria_sky:moon_collector")
    .mulInput("custommachinery:speed", 0.3)
    .tooltip('§cSpeeds the process by 70 ticks')

    /* Sun Collector */

    //Speed Upgrade 1//
    e.create(Item.of('berseria_sky:sun_speed_1'), 1)
    .machine("berseria_sky:sun_collector")
    .mulInput("custommachinery:speed", 0.7)
    .tooltip('§cSpeeds the process by 30 ticks')

    //Speed Upgrade 2//
    e.create(Item.of('berseria_sky:sun_speed_2'), 1)
    .machine("berseria_sky:sun_collector")
    .mulInput("custommachinery:speed", 0.3)
    .tooltip('§cSpeeds the process by 70 ticks')


})