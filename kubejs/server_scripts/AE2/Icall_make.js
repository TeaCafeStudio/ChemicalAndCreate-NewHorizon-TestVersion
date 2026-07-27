ServerEvents.recipes(event => {
	const baseComponent ='ae2:cell_component_16k'

	// 默认注液循环次数：8192；极难获取的条目降为 4096。
	const hardLoops = new Set([
		'cacnh:molten_netherite_icell',
		'cacnh:molten_obdurium_icell',
		'cacnh:molten_void_steel_icell'
	])

	const recipes = [
		{ output: 'cacnh:molten_iron_icell', fluid: 'createmetallurgy:molten_iron' },
		{ output: 'cacnh:molten_gold_icell', fluid: 'createmetallurgy:molten_gold' },
		{ output: 'cacnh:molten_copper_icell', fluid: 'createmetallurgy:molten_copper' },
		{ output: 'cacnh:molten_zinc_icell', fluid: 'createmetallurgy:molten_zinc' },
		{ output: 'cacnh:molten_brass_icell', fluid: 'createmetallurgy:molten_brass' },
		{ output: 'cacnh:molten_tungsten_icell', fluid: 'createmetallurgy:molten_tungsten' },
		{ output: 'cacnh:molten_steel_icell', fluid: 'createmetallurgy:molten_steel' },
		{ output: 'cacnh:molten_netherite_icell', fluid: 'createmetallurgy:molten_netherite' },
		{ output: 'cacnh:molten_aluminum_icell', fluid: 'createmetallurgy:molten_aluminum' },
		{ output: 'cacnh:molten_lead_icell', fluid: 'createmetallurgy:molten_lead' },
		{ output: 'cacnh:molten_nickel_icell', fluid: 'createmetallurgy:molten_nickel' },
		{ output: 'cacnh:molten_osmium_icell', fluid: 'createmetallurgy:molten_osmium' },
		{ output: 'cacnh:molten_silver_icell', fluid: 'createmetallurgy:molten_silver' },
		{ output: 'cacnh:molten_tin_icell', fluid: 'createmetallurgy:molten_tin' },
		{ output: 'cacnh:molten_lithium_icell', fluid: 'createmetallurgy:molten_lithium' },
		{ output: 'cacnh:molten_obdurium_icell', fluid: 'createmetallurgy:molten_obdurium' },
		{ output: 'cacnh:molten_electrum_icell', fluid: 'createmetallurgy:molten_electrum' },
		{ output: 'cacnh:molten_bronze_icell', fluid: 'createmetallurgy:molten_bronze' },
		{ output: 'cacnh:molten_void_steel_icell', fluid: 'createmetallurgy:molten_void_steel' },
		{ output: 'cacnh:lava_icell', fluid: 'minecraft:lava' },
		{ output: 'cacnh:sulfuric_acid_icell', fluid: 'mekanism:sulfuric_acid' },
		{ output: 'cacnh:experience_icell', fluid: 'create_enchantment_industry:experience' }
	]

	recipes.forEach(r => {
		const loops = hardLoops.has(r.output) ? 4096 : 8192

		event.recipes.create.sequenced_assembly(
			[Item.of(r.output)],
			Item.of(baseComponent),
			[
				event.recipes.create.filling(
					Item.of(baseComponent),
					[Item.of(baseComponent), Fluid.of(r.fluid, 1000)]
				)
			]
		)
		.transitionalItem(Item.of(baseComponent))
		.loops(loops)
		.id(`cacnh:icell_make/${r.output.split(':')[1]}`)
	})
})
//==================================
//          真空压缩配方
//==================================

ServerEvents.recipes(event => {
	const vacuumRecipes = [
		{ input: 'cacnh:molten_iron_icell', output: 'cacnh:iron_block_icell' },
		{ input: 'cacnh:molten_gold_icell', output: 'cacnh:gold_block_icell' },
		{ input: 'cacnh:molten_copper_icell', output: 'cacnh:copper_block_icell' },
		{ input: 'cacnh:molten_zinc_icell', output: 'cacnh:zinc_block_icell' },
		{ input: 'cacnh:molten_brass_icell', output: 'cacnh:brass_block_icell' },
		{ input: 'cacnh:molten_tungsten_icell', output: 'cacnh:tungsten_block_icell' },
		{ input: 'cacnh:molten_steel_icell', output: 'cacnh:steel_block_icell' },
		{ input: 'cacnh:molten_netherite_icell', output: 'cacnh:netherite_block_icell' },
		{ input: 'cacnh:molten_aluminum_icell', output: 'cacnh:aluminum_block_icell' },
		{ input: 'cacnh:molten_lead_icell', output: 'cacnh:lead_block_icell' },
		{ input: 'cacnh:molten_nickel_icell', output: 'cacnh:nickel_ingot_icell' },
		{ input: 'cacnh:molten_osmium_icell', output: 'cacnh:osmium_block_icell' },
		{ input: 'cacnh:molten_silver_icell', output: 'cacnh:silver_ingot_icell' },
		{ input: 'cacnh:molten_tin_icell', output: 'cacnh:tin_block_icell' },
		{ input: 'cacnh:molten_lithium_icell', output: 'cacnh:lithium_ingot_icell' },
		{ input: 'cacnh:molten_obdurium_icell', output: 'cacnh:obdurium_block_icell' },
		{ input: 'cacnh:molten_electrum_icell', output: 'cacnh:electrum_block_icell' },
		{ input: 'cacnh:molten_bronze_icell', output: 'cacnh:bronze_block_icell' },
		{ input: 'cacnh:molten_void_steel_icell', output: 'cacnh:void_steel_block_icell' }
	]

	vacuumRecipes.forEach(r => {
		event.recipes.createvintageneoforged
			.vacuumizing(r.output, r.input)
			.processingTime(2500)
			.id(`cacnh:icell_make/vacuum_${r.output.split(':')[1]}`)
	})
})
