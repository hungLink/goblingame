function startGame(){
	turnNumber = -1;
	$('.character').empty();
	$('.log').empty();
	character.splice(0, character.length);
	poopHeroes(heroes);
	rollEnemies(); 
	drawCharacters();
	updateScore(-score);
	updateDays();
	changeTurn();
}
$('body').on('click', '.character', function(){
	if (attacker) {
		var index = getCharacterIndexByProperty("id", $(this).attr("id"));
		attacker.attack(index);
		attacker = 0;
		changeTurn();
	}
	if (spell){
		var index = getCharacterIndexByProperty("id", $(this).attr("id"));
		spell(index);
		spell = 0;
		changeTurn()
	}
});
//AI is called here but held in characters.js
function showButtons(charTurn){
	switch(charTurn) {
		case fighter: $("button.fighter.action").fadeIn();
		break;
		case cleric: $("button.cleric.action").fadeIn();
		break;
		case mage: $("button.mage.action").fadeIn();
		break;
		case goblin: goblinTurn();
		break;
		case chief: chiefTurn();
		break;
		default:
		break;
	}
}
function checkLife(){
	for (i = 0; i<character.length; i++){
		if (character[i].hp <= 0) {
			character[i].death();
		}
	}
}
function hideButtons(){
	$("button").hide();
}
//called when attack button is pressed 
function selectAttacker(_turnNumber){	
	return character[_turnNumber];
}
function rollEnemies() {
	goblinRoll = Math.floor(Math.random() * goblinStats.chanceRange + goblinStats.chanceBase);
	if (Math.random() < chiefStats.chance/chiefStats.chanceRange) {
		chiefRoll = true;
	} else {
		chiefRoll = false;
	}
	poopGoblins(goblinRoll);
	if (chiefRoll) {poopChief();}
	drawCharacters();
}
function changeTurn(){
	checkLife();
	if(turnNumber == character.length-1){
		turnNumber = 0;
	}else{
		turnNumber++;
	}
	var currentHeroes = [];
	var currentEnemies = [];
	charTurn = character[turnNumber].characterClass;
	for (i=0; i<character.length; i++){
		if (character[i].characterClass == fighter || character[i].characterClass == cleric || character[i].characterClass == mage){
			currentHeroes.push(character[i].characterClass);
		}
		if (character[i].characterClass == goblin || character[i].characterClass == chief){
			currentEnemies.push(character[i].characterClass);
		}
	}
	hideButtons();
	if (character[turnNumber].isAsleep){
		character[turnNumber].sleepCounter--;
		if (character[turnNumber].sleepCounter == 0){
			character[turnNumber].isAsleep = false;
			$('.characterField #'+character[turnNumber].id).replaceWith('<img src="images/'+charTurn+'.png" class="character '+charTurn+'" id='+character[turnNumber].id+' />');
		}
		changeTurn();
		return;
	}
	if (currentHeroes.length == 0){
		alert("fucking fail");
		startGame();
	} else if (currentEnemies.length == 0){
		alert("good job");
		rollEnemies();
		daysSurvived++;
		updateDays();
		turnNumber = 0
		showButtons(charTurn);
	} else {showButtons(charTurn);}
}
function drawCharacters(){
	$('.characterField').empty();
	for (var i = 0; i<character.length; i++){
		$('.characterField').append('<img class="character '+character[i].characterClass+'" id="'+i+'" />');
		character[i].id = i;
	}
}
function getCharacterIndexByProperty(_property, _value){
	for (i = 0; i<character.length; i++){
		if (_value == character[i][_property]){
			return(i);
		}
	}
}
function selectRandomArrayIndex(arr){
	return(arr[Math.floor(Math.random()*arr.length)]);
}
function determineSpellsKnown(_class){
	var index = getCharacterIndexByProperty("characterClass", _class);
	var stats = window[_class+"Stats"]
	if (stats.spellsKnown == "all"){
		character[index].spellsKnown = stats.spellList
	}else{
		for (var i=0; stats.spellsKnown>i; i++){
			var randInd = Math.floor(Math.random()*fighterStats.spellList.length);
			var spell = stats.spellList[randInd];
			character[index].spellsKnown.push(spell);
		}
	}
}
function drawSpells(_class){
	var index = getCharacterIndexByProperty("characterClass", _class);
	var _spells = character[index].spellsKnown
	for (var i=0; i<_spells.length; i++){
		$('div.heroButtons').append('<button type="button" class="'+_class+' spell '+_spells[i]+'">'+_spells[i]+'</button>');
	}
}
function updateScore(scoreIncrease){
	score += scoreIncrease;
	$(".score").html("Score: "+score);
}
function updateDays(){
	$(".days").html("Days Survived: "+daysSurvived);
}
function log(string){
	$(".log").append("<p>"+string+"</p>");
	$('.log').scrollTop($('.log')[0].scrollHeight);
}
startGame();

