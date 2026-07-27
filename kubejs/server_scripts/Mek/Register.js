ServerEvents.recipes(event =>{
    //陨石粉
    //陨石 粉碎机(工厂) -> 陨石粉 x2
    event.recipes.mekanism.crushing(
        Item.of('ae2:sky_dust', 2),
        Item.of('ae2:sky_stone_block')
    ).id('cacnh:mekanism/sky_dust_crushing')

    
})