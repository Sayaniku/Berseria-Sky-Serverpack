events.listen('recipes', function (e) {



    //Mv Wire/
    e.shaped(item.of('immersiveengineering:wirecoil_electrum', 4), ["LEL", "ESE", "LEL"], {
        E: '#forge:wires/electrum',
        L: 'immersiveengineering:wirecoil_copper',
        S: '#forge:rods/wooden'
    })

    //Steel Wire Deco//
    e.shaped(item.of('immersiveengineering:wirecoil_structure_steel', 4), [" E ", "ESE", " E "], {
        E: '#forge:wires/steel',
        S: '#forge:rods/wooden'
    })


   //Gold Spool//
   e.shaped(item.of('createaddition:gold_spool', 1), [" E ", "ESE", " E "], {
    E: '#forge:wires/electrum',
    S: 'createaddition:spool'
})
})