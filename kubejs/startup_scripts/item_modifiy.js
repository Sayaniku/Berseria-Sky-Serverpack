onEvent('block.modification', e => {
    e.modify(['cobblefordays:tier_1','cobblefordays:tier_2','cobblefordays:tier_3','cobblefordays:tier_4','cobblefordays:tier_5'], block => {
      block.material = "IRON"
    })
})