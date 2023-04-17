// priority: 0

console.info('Forcing pokeball lids to show')

onEvent('jei.add.items', event => {
	// Show items in JEI here
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"poke_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"ancient_great_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"ancient_heavy_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"ancient_poke_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"ancient_ultra_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"dive_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"dusk_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"fast_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"friend_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"gigaton_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"great_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"heal_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"heavy_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"jet_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"leaden_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"level_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"love_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"lure_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"luxury_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"moon_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"nest_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"net_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"premier_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"quick_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"repeat_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"safari_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"sport_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"timer_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"ultra_ball"}'))
	event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"wing_ball"}'))
	
    //Déjà in-game
	//event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"feather_ball"}'))
   
    //Pas de texture ni de craft associé
    // event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"master_ball"}'))
    // event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"origin_ball"}'))
	// event.add(Item.of('pixelmon:poke_ball_lid', '{PokeBallID:"park_ball"}'))
})
