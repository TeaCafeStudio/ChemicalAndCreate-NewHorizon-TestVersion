const MekKey$ = Java.loadClass("me.ramidzkh.mekae2.ae2.MekanismKey")
const Chem$ = Java.loadClass("mekanism.common.registries.MekanismChemicals")

StartupEvents.registry('item', event => {
    //乙烯
    event.create('cacnh:ethene_cell', 'custom_infinity_cell')
         .texture('cacnh:item/eae_icall/chemicla_call')
	 .type(() => MekKey$.of(Chem$.ETHENE.get().getStack(1000)))
	 .cellModel('cacnh:block/icall_diver/infinity_chemical_cell')
     //氧气
    event.create('cacnh:oxygen_cell', 'custom_infinity_cell')
         .texture('cacnh:item/eae_icall/chemicla_call')
	 .type(() => MekKey$.of(Chem$.OXYGEN.get().getStack(1000)))
	 .cellModel('cacnh:block/icall_diver/infinity_chemical_cell')
     //裂变燃料
    event.create('cacnh:fission_fuel_cell', 'custom_infinity_cell')
         .texture('cacnh:item/eae_icall/chemicla_call')
	 .type(() => MekKey$.of(Chem$.FISSILE_FUEL.get().getStack(1000)))
	 .cellModel('cacnh:block/icall_diver/infinity_chemical_cell')
     //氢气
    event.create('cacnh:hydrogen_cell', 'custom_infinity_cell')
         .texture('cacnh:item/eae_icall/chemicla_call')
	 .type(() => MekKey$.of(Chem$.HYDROGEN.get().getStack(1000)))
	 .cellModel('cacnh:block/icall_diver/infinity_chemical_cell')
     
})