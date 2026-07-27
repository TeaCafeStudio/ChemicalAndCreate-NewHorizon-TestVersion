//==================
// 注册机械动力配方
//==================
ServerEvents.recipes(event => {
 
    //精密构件'create:precision_mechanism'
    //序列组装：金板 -> 加装齿轮 加装大齿轮 加装铁弹簧 x3 -> 精密构件
    event.recipes.create.sequenced_assembly(
        [Item.of('create:precision_mechanism',2)],
        Item.of('create:golden_sheet'),
        [
            event.recipes.create.deploying(
                Item.of('create:incomplete_precision_mechanism'),
                [Item.of('create:incomplete_precision_mechanism'), Item.of('create:cogwheel')]
            ),
            event.recipes.create.deploying(
                Item.of('create:incomplete_precision_mechanism'),
                [Item.of('create:incomplete_precision_mechanism'), Item.of('create:large_cogwheel')]
            ),
            event.recipes.create.deploying(
                Item.of('create:incomplete_precision_mechanism'),
                [Item.of('create:incomplete_precision_mechanism'), Item.of('createvintageneoforged:iron_spring')]
            )
        ]
    )
    .transitionalItem(Item.of('create:incomplete_precision_mechanism'))
    .loops(5)
    .id('cacnh:create/precision_mechanism')
    
    //蒸汽引擎'create_sa:steam_engine'
    //序列组装：黄铜板 -> 冲压 -> 注水 -> 安装齿轮 -> 安装大齿轮 -> 安装铁弹簧 ->安装黄铜板 -> 蒸汽引擎
    const steamIncomplete = Item.of('create_sa:incomplete_steam_engine')
    const steamDeploy = part => event.recipes.create.deploying(
        steamIncomplete,
        [steamIncomplete, Item.of(part)]
    )

    event.recipes.create.sequenced_assembly(
        [Item.of('create_sa:steam_engine')],
        Item.of('create:brass_sheet'),
        [
            event.recipes.create.pressing(steamIncomplete, steamIncomplete),
            event.recipes.create.filling(steamIncomplete, [steamIncomplete, Fluid.of('minecraft:water', 500)]),
            steamDeploy('create:cogwheel'),
            steamDeploy('create:large_cogwheel'),
            steamDeploy('createvintageneoforged:iron_spring'),
            steamDeploy('create:brass_sheet')
        ]
    )
    .transitionalItem(steamIncomplete)
    .loops(1)
    .id('cacnh:create/steam_engine')

    //陨石粉'ae2:sky_dust'
    //粉碎轮 -> 陨石 -> 陨石粉x3
    event.recipes.create.crushing(
        [Item.of('ae2:sky_dust', 3)],
        Item.of('ae2:sky_stone_block')
    )
    .id('cacnh:create/sky_dust_crushing')

    //陨石粉'ae2:sky_dust'
    //石磨 -> 陨石 -> 陨石粉x2
    event.recipes.create.milling(
        [Item.of('ae2:sky_dust', 2)],
        Item.of('ae2:sky_stone_block')
    )
    .id('cacnh:create/sky_dust_milling')

    //下界岩粉末'cacnh:cinder_flour'
    //下界岩 -> 石磨 -> 下界岩粉末x2
    event.recipes.create.milling(
        [Item.of('cacnh:cinder_flour', 2)],
        Item.of('minecraft:netherrack')
    )
    .id('cacnh:create/cinder_flour_milling')

    .id('cacnh:create/cinder_flour_milling')

    //下界岩粉末'cacnh:cinder_flour'
    //粉碎轮 -> 下界岩 -> 下界岩粉末x2
    event.recipes.create.crushing(
        [Item.of('cacnh:cinder_flour', 2)],
        Item.of('minecraft:netherrack')
    )
    .id('cacnh:create/cinder_flour_crushing')

    //余烬面粉'cacnh:ash_flour'
    //混合搅拌:下界岩粉末 + 小麦面粉 -> 余烬面粉
    event.recipes.create.mixing(
        [Item.of('create:cinder_flour')],
        [Item.of('cacnh:cinder_flour'), Item.of('create:wheat_flour')]
    )
    .id('cacnh:create/ash_flour_mixing')

})