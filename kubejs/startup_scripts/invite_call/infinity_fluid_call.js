StartupEvents.registry('item', event => {
//==================================
//           熔融金属无限
//==================================

    //熔融铁
    event.create('cacnh:molten_iron_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_iron')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //熔融金
    event.create('cacnh:molten_gold_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_gold')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //熔融铜
    event.create('cacnh:molten_copper_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_copper')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //熔融锌
    event.create('cacnh:molten_zinc_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_zinc')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //熔融黄铜
    event.create('cacnh:molten_brass_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_brass')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融钨
    event.create('cacnh:molten_tungsten_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_tungsten')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融钢
    event.create('cacnh:molten_steel_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_steel')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融下界合金
    event.create('cacnh:molten_netherite_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_netherite')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //熔融铝
    event.create('cacnh:molten_aluminum_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_aluminum')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融铅
    event.create('cacnh:molten_lead_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_lead')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融镍
    event.create('cacnh:molten_nickel_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_nickel')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融锇
    event.create('cacnh:molten_osmium_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_osmium')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融银
    event.create('cacnh:molten_silver_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_silver')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell'); 
     //熔融锡
    event.create('cacnh:molten_tin_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_tin')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融锂
    event.create('cacnh:molten_lithium_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_lithium')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融顽金
    event.create('cacnh:molten_obdurium_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_obdurium')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融琥珀金
    event.create('cacnh:molten_electrum_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_electrum')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融青铜
    event.create('cacnh:molten_bronze_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_bronze')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //熔融虚空钢
    event.create('cacnh:molten_void_steel_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('createmetallurgy:molten_void_steel')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');

//==================================
//          其他流体无限
//==================================

    //熔岩
    event.create('cacnh:lava_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('minecraft:lava')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
    //液态硫酸
    event.create('cacnh:sulfuric_acid_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('mekanism:sulfuric_acid')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
     //液态经验
    event.create('cacnh:experience_icell', 'custom_infinity_cell')
	 .texture('cacnh:item/eae_icall/fluid_call')
	 .fluidType('create_enchantment_industry:experience')
	 .cellModel('cacnh:block/icall_diver/infinity_fluid_cell');
})