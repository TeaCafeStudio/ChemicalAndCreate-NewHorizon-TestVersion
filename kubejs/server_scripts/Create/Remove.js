//==================
// 删除机械动力配方
//==================
ServerEvents.recipes(event => {
	//精密构件
	event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
    //蒸汽引擎
    event.remove({ id: 'create_sa:steam_engine_recipe' })
    //陨石粉
    event.remove({ id: 'create:milling/compat/ae2/sky_stone_block' })
    //余烬面粉
    event.remove({ id: 'create:crushing/netherrack' })
})
