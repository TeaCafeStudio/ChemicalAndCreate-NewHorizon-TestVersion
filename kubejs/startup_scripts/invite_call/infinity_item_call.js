StartupEvents.registry('item', event => {
    
//==================================
//           金属块无限
//==================================

    //熔融铁
    event.create('cacnh:iron_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('minecraft:iron_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');

})