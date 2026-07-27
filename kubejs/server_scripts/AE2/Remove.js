//==================
//    AE2配方移除
//==================

ServerEvents.recipes(event => {
    //移除样板供应器配方
    event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    //移除原有应力电路板配方（安山 / 黄铜）
    event.remove({ output: 'appliedcreate:stress_circuit_board' })
    event.remove({ output: 'appliedcreate:advanced_stress_circuit_board' })

})
