//all spells
$('button.spell').click(function(){
	this.className
});
//fighter actions
$('button.fighter.attack').click(function(){
	spell = 0;
	attacker = character[getCharacterIndexByProperty("characterClass", fighter)];
});
$('button.fighter.showSpells').click(function(){
	attacker = 0;
	var spellsKnown = character[getCharacterIndexByProperty("characterClass", fighter)].spellsKnown;
	hideButtons();
	$("button.fighter.spell.back").fadeIn();
	for (i=0; i<spellsKnown.length; i++){
		$("button.fighter.spell."+spellsKnown[i]).fadeIn();
	}
});
//cleric actions
$('button.cleric.attack').click(function(){
	spell = 0;
	attacker = character[getCharacterIndexByProperty("characterClass", cleric)];
});
$('button.cleric.showSpells').click(function(){
	attacker = 0;
	hideButtons();
	$("button.cleric.spell").fadeIn();
});
//mage actions
$('button.mage.attack').click(function(){
	spell = 0;
	attacker = character[getCharacterIndexByProperty("characterClass", mage)];
});
$('button.mage.showSpells').click(function(){
	attacker = 0;
	var spellsKnown = character[getCharacterIndexByProperty("characterClass", mage)].spellsKnown;
	hideButtons();
	$("button.mage.spell.back").fadeIn();
	for (i=0; i<spellsKnown.length; i++){
		$("button.mage.spell."+spellsKnown[i]).fadeIn();
	}
});
//fighter spells
$('button.fighter.spell.back').click(function(){
	attacker = 0;
	hideButtons();
	$("button.fighter.action").fadeIn();
});
$('button.fighter.spell.strengthen').click(function(){
	attacker = 0;
	fighterStats.spells.strengthen();
});
$('button.fighter.spell.haste').click(function(){
	attacker = 0;
	fighterStats.spells.haste();
});
$('button.fighter.spell.harden').click(function(){
	attacker = 0;
	fighterStats.spells.harden();
});
$('button.fighter.spell.guard').click(function(){
	attacker = 0;
	fighterStats.spells.guard();
});
$('button.fighter.spell.ironFlesh').click(function(){
	attacker = 0;
	fighterStats.spells.ironFlesh();
});
$('button.fighter.spell.channel').click(function(){
	attacker = 0;
	fighterStats.spells.channel();
});
$('button.fighter.spell.focus').click(function(){
	attacker = 0;
	fighterStats.spells.focus();
});
//cleric spells
$('button.cleric.spell.back').click(function(){
	attacker = 0;
	hideButtons();
	$("button.cleric.action").fadeIn();
});
$('button.cleric.spell.mendWounds').click(function(){
	attacker = 0;
	clericStats.spells.mendWounds();
});
$('button.cleric.spell.bless').click(function(){
	attacker = 0;
	spell = clericStats.spells.bless;
});
$('button.cleric.spell.haste').click(function(){
	attacker = 0;
	spell = clericStats.spells.haste;
});
$('button.cleric.spell.strengthen').click(function(){
	attacker = 0;
	spell = clericStats.spells.strengthen;
});
$('button.cleric.spell.harden').click(function(){
	attacker = 0;
	spell = clericStats.spells.harden;
});
//mage spells
$('button.mage.spell.back').click(function(){
	attacker = 0;
	hideButtons();
	$("button.mage.action").fadeIn();
});
$('button.mage.spell.magicBlast').click(function(){
	attacker = 0;
	spell = mageStats.spells.magicBlast;
});
$('button.mage.spell.magicMissile').click(function(){
	attacker = 0;
	spell = mageStats.spells.magicMissile;
});
$('button.mage.spell.firball').click(function(){
	attacker = 0;
	spell = mageStats.spells.firball;
});
$('button.mage.spell.sleep').click(function(){
	attacker = 0;
	spell = mageStats.spells.sleep;
});
$('button.mage.spell.drain').click(function(){
	attacker = 0;
	spell = mageStats.spells.drain;
});
$('button.mage.spell.death').click(function(){
	attacker = 0;
	spell = mageStats.spells.death;
});
$('button.mage.spell.slow').click(function(){
	attacker = 0;
	spell = mageStats.spells.slow;
});
$('button.mage.spell.confuse').click(function(){
	attacker = 0;
	spell = mageStats.spells.confuse;
});
$('button.mage.spell.strengthen').click(function(){
	attacker = 0;
	mageStats.spells.strengthen();
});
$('button.mage.spell.haste').click(function(){
	attacker = 0;
	mageStats.spells.haste();
});
$('button.mage.spell.harden').click(function(){
	attacker = 0;
	mageStats.spells.harden();
});
