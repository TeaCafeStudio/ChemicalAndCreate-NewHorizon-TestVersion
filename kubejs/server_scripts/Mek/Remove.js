//==================
//  Mekanism配方移除
//==================

ServerEvents.recipes(e => {
    //原陨石粉配方
    e.remove({"id":"mekanism:compat/ae2/sky_stone_to_dust"})
})