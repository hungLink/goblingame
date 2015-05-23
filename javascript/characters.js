var clericStats = {
	atkBase: -10,
	atkRange: 5,
	conBase: 1,
	conRange: 5,
	defBase: 100,
	defRange: 0,
	hpBase: 3,
	hpRange: 6,
	missChanceBase: .1,
	mpBase: 3,
	mpRange: 6,
	speedBase: 2,
	speedRange: 0,
	spellsKnown: "all",
	spellList: ["bless", "harden", "haste", "mendWounds", "strengthen"],
	spells: {
		mendWounds: function(){
			if(character[turnNumber].mp < clericStats.spellStats.mendWounds.cost){
				log("not enough MP");
				return;
			} else {
				character[turnNumber].updateAllies();
				for (i = 0; i<clericStats.spellStats.mendWounds.iterations; i++){
					for (i=0; i<character[turnNumber].availableAllies.length; i++){
						var allyIndex = character[turnNumber].availableAllies[i];
						character[turnNumber].attack(allyIndex);
					}
				}
				changeTurn();
			}
		},
		bless: function(targetIndex){
			if(character[turnNumber].mp < clericStats.spellStats.bless.cost){
				log("not enough MP");
				return;
			} else { character[targetIndex].missChance -= clericStats.spellStats.bless.power;
				log("The "+character[targetIndex].characterClass+"'s miss chance lowered by "+clericStats.spellStats.bless.power);
			}
		},
		haste: function(targetIndex) {
			if(character[turnNumber].mp < clericStats.spellStats.haste.cost){
				log("not enough MP");
				return;
			} else { character[targetIndex].speed += clericStats.spellStats.haste.power;
				log("The "+character[targetIndex].characterClass+"'s speed rose by "+clericStats.spellStats.haste.power);
			}
		},
		strengthen: function(targetIndex) {
			if(character[turnNumber].mp < clericStats.spellStats.strengthen.cost){
				log("not enough MP");
				return;
			} else { character[targetIndex].atk += clericStats.spellStats.strengthen.power;
				log("The "+character[targetIndex].characterClass+"'s atk rose by "+clericStats.spellStats.strengthen.power);
			}
		},
		harden: function(targetIndex) {
			if(character[turnNumber].mp < clericStats.spellStats.harden.cost){
				log("not enough MP");
				return;
			} else { character[targetIndex].con += clericStats.spellStats.harden.power;
				log("The "+character[targetIndex].characterClass+"'s con rose by "+clericStats.spellStats.harden.power);
			}
		},
	},
	spellStats: {
		mendWounds: {cost: 1, iterations: 2},
		bless: {cost:1, power: .25},
		haste: {cost: 1, power: 2},
		strengthen: {cost: 1, power: 4},
		harden: {cost: 1, power: 4},
	},
};
var fighterStats = {
	atkBase: 100,
	atkRange: 0,
	conBase: 1,
	conRange: 5,
	defBase: 100,
	defRange: 0,
	hpBase: 3,
	hpRange: 6,
	mpBase: 1,
	mpRange: 1,
	missChanceBase: .1,
	speedBase: 2000,
	speedRange: 0,
	spellsKnown: 3,
	spellList: ["strengthen", "haste", "harden", "guard", "ironFlesh", "channel", "focus"],
	spells: {
		strengthen: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.strengthen.cost){
				log("not enough MP");
				return;
			} else { 
				character[turnNumber].atk += fighterStats.spellStats.strengthen.power;
				log("The fighter's attack rose by "+fighterStats.spellStats.strengthen.power+"!")
				changeTurn();
			}
		},
		haste: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.haste.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].speed += fighterStats.spellStats.haste.power; 
				log("The fighter's speed rose by "+fighterStats.spellStats.haste.power+"!")
				changeTurn()
			}
		},
		harden: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.harden.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].con += fighterStats.spellStats.harden.power; 
				log("The fighter's constitution rose by "+fighterStats.spellStats.harden.power+"!")
				changeTurn()
			}
		},
		guard: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.guard.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].def += fighterStats.spellStats.guard.power; 
				log("The fighter's defense rose by "+fighterStats.spellStats.guard.power+"!")
				changeTurn()
				}
		},
		ironFlesh: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.ironFlesh.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].hp += fighterStats.spellStats.ironFlesh.power; 
				log("The fighter's HP rose by "+fighterStats.spellStats.ironFlesh.power+"!")
				changeTurn()
			}
		},
		channel: function(){
			if(character[turnNumber].mp < fighterStats.spellStats.channel.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].mp += fighterStats.spellStats.channel.power; 
				log("The fighter's MP rose by "+fighterStats.spellStats.channel.power+"!")
				changeTurn()
			}
		},
		focus:  function(){
			if(character[turnNumber].mp < fighterStats.spellStats.focus.cost){
				log("not enough MP");
				return;
			} else { character[turnNumber].missChance -= fighterStats.spellStats.focus.power; 
				log("The fighter's miss chance dropped by "+fighterStats.spellStats.focus.power+"!")
				changeTurn()
			}
		},
	},
	spellStats: {
		strengthen: {cost: 1, power: 1},
		haste: {cost: 1, power: 1},
		harden: {cost: 1, power: 1},
		guard: {cost: 1, power: 1},
		ironFlesh: {cost: 1, power: 1},
		channel: {cost: 1, power: 1},
		focus: {cost: 1, power: .1},
	},
};
var mageStats = {
	atkBase: 100,
	atkRange: 0,
	conBase: 1,
	conRange: 5,
	defBase: 100,
	defRange: 0,
	hpBase: 3,
	hpRange: 6,
	mpBase: 0,
	mpRange: 0,
	missChanceBase: .10,
	speedBase: 2,
	speedRange: 0,
	spellsKnown: 5,
	spellList: ["magicBlast", "confuse", "death", "drain", "firball", "harden", "haste", "magicMissile", "sleep", "slow", "strengthen"],
	spells:	{
		magicBlast: function(targetIndex){
			var damage = character[turnNumber].atk*mageStats.spellStats.magicBlast.power-character[targetIndex].con;
			character[targetIndex].hpLoss(damage);
			log("The mage cast magic blast on the "+character[targetIndex].characterClass+" and inflicted " +damage+" damage!");
		},
		magicMissile: function(targetIndex){
			var totalDamage = 0;
			var iterations = mageStats.spellStats.magicMissile.iterations;
			for (i = 0; i< iterations; i++){
				var damage = character[turnNumber].atk*mageStats.spellStats.magicMissile.power-character[targetIndex].con;
				character[targetIndex].hpLoss(damage);
				totalDamage += damage;
			}
			log("The mage fired "+iterations+" magic missiles at the "+character[targetIndex].characterClass+" and inflicted " +totalDamage+" damage!");
		},
		firball: function(targetIndex){
			var message1, message2, message3;
			if (character[targetIndex].type == hero){
				character[turnNumber].updateAllies();
				if (character[targetIndex+1].type == hero){
					var splash = character[turnNumber].atk*mageStats.spellStats.firball.splash-character[targetIndex+1].con;
					message3 = character[targetIndex+1].characterClass+" took "+splash+" splash damage!";
					character[targetIndex+1].hpLoss(splash);
				}
				var damage = character[turnNumber].atk*mageStats.spellStats.firball.power-character[targetIndex].con;
				message1 = "The "+charTurn+" cast Firball at the "+character[targetIndex].characterClass+" and they took took "+damage+" damage!";
				character[targetIndex].hpLoss(damage);
				if (character[targetIndex-1].type == hero){
					var splash = character[turnNumber].atk*mageStats.spellStats.firball.splash-character[targetIndex-1].con;
					message2 = character[targetIndex-1].characterClass+" took "+splash+" splash damage!";
					character[targetIndex-1].hpLoss(splash);
				}
			}
			if (character[targetIndex].type == monster){
				character[turnNumber].updateTargets();
				if (character[targetIndex+1].type == monster){
					var splash = character[turnNumber].atk*mageStats.spellStats.firball.splash-character[targetIndex+1].con;
					message3 = character[targetIndex+1].characterClass+" took "+splash+" splash damage!";
					character[targetIndex+1].hpLoss(splash);
				}
				var damage = character[turnNumber].atk*mageStats.spellStats.firball.power-character[targetIndex].con;
				message1 = "The "+charTurn+" cast Firball at the "+character[targetIndex].characterClass+" and they took took "+damage+" damage!";
				character[targetIndex].hpLoss(damage);
				if (character[targetIndex-1].type == monster){
					var splash = character[turnNumber].atk*mageStats.spellStats.firball.splash-character[targetIndex-1].con;
					message2 = character[targetIndex-1].characterClass+" took "+splash+" splash damage!";
					character[targetIndex-1].hpLoss(splash);
				}
			}
			log(message1);
			log(message2);
			log(message3);
		},
		sleep: function(targetIndex){
			character[targetIndex].sleepCounter = mageStats.spellStats.sleep.rounds
			character[targetIndex].switchStatus("asleep");
		},
		drain: function(targetIndex){
			var damage = mageStats.spellStats.drain.power-character[targetIndex].con;
			var lifeGain = -character[turnNumber].con-mageStats.spellStats.drain.lifeGain;
			character[targetIndex].hpLoss(damage);
			character[turnNumber].hpLoss(lifeGain);
			log(charTurn+" drained the essence from the "+character[targetIndex].characterClass+" dealing "+damage+" and gaining "+-lifeGain+" life!")
		},
		death: function(targetIndex){
			if (Math.random()<mageStats.spellStats.death.chance){
				character[targetIndex].death();
				log(charTurn+" destroyed the "+character[targetIndex].characterClass);
			}
		},
		slow: function(targetIndex){
			character[targetIndex].speed = 0;
			log("Mage used slow. . .  It's super effective");
		},
		confuse: function(targetIndex){
			character[targetIndex].switchStatus("confused");
			character[targetIndex].confusedCounter = mageStats.spellStats.confuse.rounds;
			log("The mage cast confuse on the "+character[targetIndex].characterClass+" and it totally worked, bro.");
		},
		strengthen: function(targetIndex){
			character[turnNumber].updateAllies();
			for (i=0; i < character[turnNumber].availableAllies.length; i++){
				character[i].atk += mageStats.spellStats.strengthen.power;
				log("Your party's atk rises!");
				changeTurn();
			}
		},
		haste: function(targetIndex){
			character[turnNumber].updateAllies();
			for (i=0; i < character[turnNumber].availableAllies.length; i++){
				character[i].speed += mageStats.spellStats.haste.power;
				log("Your party's speed rises!");
				changeTurn();
			}
		},
		harden: function(targetIndex){
			character[turnNumber].updateAllies();
			for (i=0; i < character[turnNumber].availableAllies.length; i++){
				character[i].con += mageStats.spellStats.harden.power;
				log("Your party's con rises!");
				changeTurn();
			}
		},
	},
	spellStats: {
		magicBlast: {cost: 0, power: 5},
		magicMissile: {cost: 0, iterations: 3, power: 1,},
		firball: {cost: 0, power: 0, splash: 0,},
		sleep: {cost: 0, rounds: 2,},
		drain: {cost: 0, power: 4, lifeGain: 2},
		death: {chance: .5, cost: 0},
		confuse: {cost: 0, rounds: 2,},
		strengthen: {cost: 0, power: 2},
		haste: {cost: 0, power: 2},
		harden: {cost: 0, power: 2},
	},
}
var goblinStats = {
	atkBase: 0,
	atkRange: 0,
	chanceBase: 1,
	chanceRange: 5,
	conBase: 1,
	conRange: 5,
	defBase: 0,
	defRange: 0,
	hpBase: 3,
	hpRange: 6,
	missChance: 5,
	score: 1,
	speedBase: 1,
	speedRange: 1
};
var chiefStats = {
	atkBase: 0,
	atkBuff: 10,
	atkRange: 0,
	chance: 2,
	chanceRange: 2,
	conBase: 1,
	conBuff: 10,
	conRange: 5,
	defBase: 0,
	defBuff: 10,
	defRange: 0,
	hpBase: 3,
	hpRange: 6,
	missChance: 5,
	score: 5,
	speedBase: 1,
	speedBuff: 1,
	speedRange: 1,
	lobChanceNumerator: 1,
	lobChanceDenominator: 1,
};
//"valid" values defined for heroes here
function poopHeroes(heroes){
	character.push(generateCharacter(cleric));
	character.push(generateCharacter(fighter));
	character.push(generateCharacter(mage));
	for (i=0; i<heroes.length; i++){
		var _class = heroes[i];
		var index = getCharacterIndexByProperty("characterClass", _class);
		character[index].validTargets = monsters;
		character[index].validAllies = heroes;
		character[index].validCharacters = characters;
		character[index].type = hero;
		determineSpellsKnown(_class);
		drawSpells(_class);
		if (_class==cleric){
			character[index].swing = function (iterations, _index, damage) {
				var totalDamage = 0; 
				var misses = 0;
				var targetName = character[_index].characterClass;
				for (iterations; iterations > 0; iterations--) {
					if (character[_index].status != 'dead') {
						if (Math.random()>this.missChance) {
							character[_index].hpLoss(damage)
							totalDamage += damage;
						}else{misses += 1};
					}else {return;}
					log("The "+this.characterClass+" healed the "+targetName+" "+iterations+" time(s), missed "+misses+" time(s) and healed "+-totalDamage+" HP!");
				}
			}
		}
	}
}
//goblin death() method and "valid" values redefined here
function poopGoblins(amt) {
	for (i = 0; i < amt; i++, goblinCount++) {
		character.push(generateCharacter(goblin));
	}
	//death() method and "valid" values redefined here
	for (i = 0; i < character.length; i++){
		if (character[i].characterClass == goblin){
			character[i].type = monster;
			character[i].validTargets = heroes;
			character[i].validAllies = monsters;
			character[i].validCharacters = characters;
			character[i].death = function(){
				this.status = 'dead';
				$('#' + this.id).replaceWith('<img src="images/dead.png" class="dead" id=' + this.id + ' />');
				this.index = getCharacterIndexByProperty("id", this.id);
				if (this.index <= turnNumber){turnNumber--;}
				character.splice(this.index, 1);
				updateScore(goblinStats.score);
			}
		}
	}
}
//chief methods and "valid" values (re)defined here
function poopChief(){
	character.push(generateCharacter(chief));
	goblinBuff();
	var index = character.length-1;
	character[index].type = monster;
	character[index].validTargets = heroes;
	character[index].validAllies = monsters;
	character[index].validCharacters = characters;
	character[index].death = function (){
		this.status = 'dead';
		$('#' + this.id).replaceWith('<img src="images/dead.png" class="dead" id=' + this.id + ' />');
		this.index = getCharacterIndexByProperty("id", this.id);
		if (this.index <= turnNumber){turnNumber--;};
		goblinDebuff();
		updateScore(chiefStats.score);
		character.splice(this.index, 1);
	}
	character[index].lob = function(){
		this.updateTargets();
		this.updateAllies();
		for (i=0;i<this.availableAllies.length;i++){
			if (character[this.availableAllies[i]].characterClass == chief){this.availableAllies.splice(i,1)}
		}
		var targetIndex = selectRandomArrayIndex(this.availableTargets);
		var lobAllyIndex = selectRandomArrayIndex(this.availableAllies);
		//compares stats and calls hpLoss() against target
		character[targetIndex].hpLoss((character[lobAllyIndex].atk + character[lobAllyIndex].hp + this.atk) - character[targetIndex].def);
		character[lobAllyIndex].death();
		log("lobbed a gobby");
		updateScore(-goblinStats.score);
	}
}
function goblinTurn(){
	character[turnNumber].updateTargets();
	if (character[turnNumber].availableTargets.length != 0) {
		var targetIndex = selectRandomArrayIndex(character[turnNumber].availableTargets);
	}
	if (targetIndex != undefined){
		character[turnNumber].attack(targetIndex);
		targetIndex = undefined
	}
	changeTurn();
}
function chiefTurn(){
	character[turnNumber].updateTargets();
	character[turnNumber].updateAllies();
	var lobChance = chiefStats.lobChanceNumerator/chiefStats.lobChanceDenominator;
	if (character[turnNumber].availableTargets.length != 0) {
		var targetIndex = selectRandomArrayIndex(character[turnNumber].availableTargets);
	}
	if (targetIndex != undefined){
		character[turnNumber].attack(targetIndex);
		targetIndex = undefined
	}
	character[turnNumber].updateTargets();
	if (Math.random() < lobChance && character[turnNumber].availableAllies.length > 1) {character[turnNumber].lob()}
	changeTurn();
}
function goblinBuff(){
	var availableGoblins = [];
	for (i=0; i<character.length; i++){
		if (character[i].characterClass == goblin){availableGoblins.push(i)}
	}
	for (i=0; i<availableGoblins.length; i++){
		_goblin = availableGoblins[i];
		character[_goblin].atk += chiefStats.atkBuff;
		character[_goblin].con += chiefStats.conBuff;
		character[_goblin].def += chiefStats.defBuff;
		character[_goblin].speed += chiefStats.speedBuff;
	}
}
function goblinDebuff(){
	var availableGoblins = [];
	for (i=0; i<character.length; i++){
		if (character[i].characterClass == goblin){availableGoblins.push(i)}
	}
	for (i=0; i<availableGoblins.length; i++){
		_goblin = availableGoblins[i];
		character[_goblin].atk -= chiefStats.atkBuff;
		character[_goblin].con -= chiefStats.conBuff;
		character[_goblin].def -= chiefStats.defBuff;
		character[_goblin].speed -= chiefStats.speedBuff;
	}
}
function generateCharacter(characterClass) {
	return {
		atk: Math.floor(Math.random() * window[characterClass+"Stats"].atkRange + window[characterClass+"Stats"].atkBase),
		con: Math.floor(Math.random() * window[characterClass+"Stats"].conRange + window[characterClass+"Stats"].conBase),
		def: Math.floor(Math.random() * window[characterClass+"Stats"].defRange + window[characterClass+"Stats"].defBase),
		hp: Math.floor(Math.random() * window[characterClass+"Stats"].hpRange + window[characterClass+"Stats"].hpBase),
		mp: Math.floor(Math.random() * window[characterClass+"Stats"].mpRange + window[characterClass+"Stats"].mpBase),
		missChance: window[characterClass+"Stats"].missChanceBase,
		characterClass: characterClass,
		id: undefined, //gameManager assigns value
		index: undefined, //death method assigns value
		isAsleep: false,
		isConfused: false,
		sleepCounter: 0,
		confusedCounter: 0,
		speed: Math.floor(Math.random() * eval(characterClass + 'Stats').speedRange + eval(characterClass + 'Stats').speedBase),
		spellsKnown: [],
		type: undefined, //poop assigns value
		validTargets: undefined, //poop assigns value
		validAllies: undefined, //poop assigns value
		validCharacters: undefined, //poop assigns value
		availableTargets: [],
		availableAllies: [],
		availableCharacters: [],
		updateTargets: function(){
			this.availableTargets = [];
			for (i = 0; i<character.length; i++){
				for (var j = 0; j < this.validTargets.length; j++){
					if (character[i].characterClass == this.validTargets[j]){
						var index = getCharacterIndexByProperty("id", character[i].id)
						this.availableTargets.push(index);
					}
				}
			}
		},
		updateAllies: function(){
			this.availableAllies = [];
			for (i = 0; i<character.length; i++){
				for (var j = 0; j < this.validAllies.length; j++){
					if (character[i].characterClass == this.validAllies[j]){
						var index = getCharacterIndexByProperty("id", character[i].id)
						this.availableAllies.push(index);
					}
				}
			}
		},
		updateCharacters: function(){
			this.availableCharacters = [];
			for (i = 0; i<character.length; i++){
				for (var j = 0; j < this.validCharacters.length; j++){
					if (character[i].characterClass == this.validCharacters[j]){
						var index = getCharacterIndexByProperty("id", character[i].id)
						this.availableCharacters.push(index);
					}
				}
			}
		},
		switchStatus: function(status){
			switch (status)  {
				case "asleep":
					this.isAsleep = true;
					if (this.isConfused) {$('.characterField #'+this.id).replaceWith('<img class="character '+this.characterClass+' asleep confused" id=' +this.id+ ' />');}
					else {$('.characterField #'+this.id).replaceWith('<img class="character '+this.characterClass+' asleep" id=' +this.id+ ' />');}
				break;
				case "confused":
					this.isConfused = true;
					if (this.isAsleep) {$('.characterField #'+this.id).replaceWith('<img class="character '+this.characterClass+' asleep confused" id=' +this.id+ ' />');}
					else {$('.characterField #'+this.id).replaceWith('<img class="character '+this.characterClass+' confused" id=' +this.id+ ' />');}
				default:
				break;
			}
		},
		hpLoss: function (damage) {
			this.hp -= damage;
		},
		//if changed change them in poopGoblins and poopChief as well
		death: function () {
			this.status = 'dead';
			$('.characterField #' + this.id).replaceWith('<img class="'+this.characterClass+' dead" id=' + this.id + ' />');
			this.index = getCharacterIndexByProperty("id", this.id);
			if (this.index <= turnNumber){turnNumber--;}
			character.splice(this.index, 1);
		},
		//if changed change in the poopHeroes method for the cleric
		swing: function (iterations, index, damage) {
			var totalDamage = 0; 
			var misses = 0;
			var targetName = character[index].characterClass;
			for (i=0; i <= iterations; i++) {
				if (character[index].status != 'dead') {
					if (Math.random()>this.missChance) {
						character[index].hpLoss(damage)
						totalDamage += damage;
					}else{misses += 1};
				}else {return;}
			}
			log("The "+this.characterClass+" attacked the "+targetName+" "+iterations+" time(s), missed "+misses+" time(s) and dealt "+totalDamage+" damage!");
		},
		attack: function (index) {
			if (this.isConfused) {index = Math.floor(Math.random()*character.length)}
			var damage = this.atk - character[index].def;
			var targetName = character[index].characterClass;
			if (character[index].speed < this.speed) {
				var iterations = Math.floor(this.speed / character[index].speed);
				this.swing(iterations, index, damage);
			}
			else {
				this.swing(1, index, damage);
			}
		}
	}
}

