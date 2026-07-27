//==================
//    AE2配方添加
//==================

ServerEvents.recipes(event => {
    //样板供应器
    event.shaped('ae2:pattern_provider',[
        "abc",
        "def",
        "ghi"
    ],{
        a:'createmetallurgy:obdurium_sheet',
        b:'ae2:crafting_card',
        c:'createmetallurgy:obdurium_sheet',
        d:'createmetallurgy:obdurium_sheet',
        e:'ae2:interface',
        f:'createmetallurgy:obdurium_sheet',
        g:'ae2:formation_core',
        h:'createmetallurgy:obdurium_sheet',
        i:'ae2:annihilation_core',
    }).id('cacnh:ae2/pattern_provider')

    //安山应力电路板：安山合金 + 应力压印模板 -> 应力电路板
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'cacnh:circuit_processor_press' },
            middle: { item: 'create:andesite_alloy' }
        },
        mode: 'inscribe',
        result: {
            id: 'appliedcreate:stress_circuit_board'
        }
    }).id('cacnh:ae2/inscriber/stress_circuit_board')

    //黄铜应力电路板：黄铜板 + 应力压印模板 -> 高级应力电路板
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: { item: 'cacnh:circuit_processor_press' },
            middle: { item: 'create:brass_sheet' }
        },
        mode: 'inscribe',
        result: {
            id: 'appliedcreate:advanced_stress_circuit_board'
        }
    }).id('cacnh:ae2/inscriber/advanced_stress_circuit_board')

    //应力压印模板
    //NeoECO集成装配站: 安山合金块 + 黄铜块 + Tag:ae2:knife + 齿轮x16 + 大齿轮x16 + 1000mb熔岩(能量消耗100kAE=200kFE) -> 应力压印模板
    event.recipes.neoecoae.integrated_working_station()
        .require('create:andesite_alloy_block')
        .require('create:brass_block')
        .require('2x#ae2:knife')
        .require('16xcreate:cogwheel')
        .require('16xcreate:large_cogwheel')
        .requireFluid(Fluid.of('minecraft:lava', 1000))
        .itemOutput('cacnh:circuit_processor_press')
        .fluidOutput(Fluid.of('minecraft:water', 500))
        .energy(200000)
        .id('cacnh:ae2/integrated_working_station/circuit_processor_press')
    
    //安山应力处理器批量压印
    //AELT过载处理工厂: 安山合金块x4 + 余烬面粉x36 + 硅块x4 + 闪电消耗:1高压 (能量消耗200kAE=400kFE) -> 安山应力处理器x36
    event.custom({
        "type": "ae2lt:overload_processing",
        "priority": 0,
        "inputs": [
            {"ingredient":{"item": "create:andesite_alloy_block"},"count": 4},
            {"ingredient":{"item": "create:cinder_flour"},"count": 36},
            {"ingredient":{"tag": "c:storage_blocks/silicon" },"count": 4}
        ],
        "results": [{"id": "appliedcreate:stress_processor","count": 36}],
        "totalEnergy": 400000,
        "lightningCost": 1,
        "lightningTier": "high_voltage"
    })
    .id('cacnh:ae2lt/overload_processing/andesite_stress_processor') 
    //黄铜应力处理器批量压印
    //AELT过载处理工厂: 黄铜块x4 + 余烬面粉x36 + 硅块x4 + 闪电消耗:1高压 (能量消耗200kAE=400kFE) -> 黄铜应力处理器x36
    event.custom({
        "type": "ae2lt:overload_processing",
        "priority": 0,
        "inputs": [
            {"ingredient":{"item": "create:brass_block"},"count": 4},
            {"ingredient":{"item": "create:cinder_flour"},"count": 36},
            {"ingredient":{"tag": "c:storage_blocks/silicon" },"count": 4}
        ],
        "results": [{"id": "appliedcreate:advanced_stress_processor","count": 36}],
        "totalEnergy": 400000,
        "lightningCost": 1,
        "lightningTier": "high_voltage"
    })
    .id('cacnh:ae2lt/overload_processing/brass_stress_processor') 
})