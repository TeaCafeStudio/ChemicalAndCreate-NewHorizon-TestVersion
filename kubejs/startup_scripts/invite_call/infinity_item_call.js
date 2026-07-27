StartupEvents.registry('item', event => {
    
//==================================
//           金属块无限
//==================================

    //铁块
    event.create('cacnh:iron_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('minecraft:iron_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //金块
    event.create('cacnh:gold_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('minecraft:gold_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //铜块
    event.create('cacnh:copper_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('minecraft:copper_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //锌块
    event.create('cacnh:zinc_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('create:zinc_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //黄铜块
    event.create('cacnh:brass_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('create:brass_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //钨块
    event.create('cacnh:tungsten_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('createmetallurgy:tungsten_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //钢块
    event.create('cacnh:steel_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('createmetallurgy:steel_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //下界合金块
    event.create('cacnh:netherite_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('minecraft:netherite_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //铝块
    event.create('cacnh:aluminum_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('neoecoae:aluminum_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //铅块
    event.create('cacnh:lead_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('mekanism:block_lead')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //镍锭
    event.create('cacnh:nickel_ingot_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('moremekanismprocessing:nickel_ingot')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //锇块
    event.create('cacnh:osmium_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('mekanism:block_osmium')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //银锭
    event.create('cacnh:silver_ingot_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('moremekanismprocessing:silver_ingot')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //锡块
    event.create('cacnh:tin_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('mekanism:block_tin')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //锂锭
    event.create('cacnh:lithium_ingot_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('moremekanismprocessing:lithium_ingot')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //顽金块
    event.create('cacnh:obdurium_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('createmetallurgy:obdurium_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //琥珀金块
    event.create('cacnh:electrum_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('createaddition:electrum_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //青铜块
    event.create('cacnh:bronze_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('mekanism:block_bronze')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');
    //虚空钢块
    event.create('cacnh:void_steel_block_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/item_call')
	 .itemType('createutilities:void_steel_block')
	 .cellModel('cacnh:block/icall_diver/infinity_item_cell');

})