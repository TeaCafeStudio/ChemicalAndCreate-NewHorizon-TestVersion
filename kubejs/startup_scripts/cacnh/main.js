//==================
//   CACNH 物品注册
//==================

StartupEvents.registry('item', event => {
	// 应力压印模板
	event.create('cacnh:circuit_processor_press')
		.displayName('应力压印模板')
		.texture('cacnh:item/circuit_processor_press')
		.maxStackSize(1)

	// 下界岩粉末
	event.create('cacnh:cinder_flour')
		.displayName('下界岩粉末')
		.texture('cacnh:item/cinder_flour_red')
})
