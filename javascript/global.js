var attacker, charTurn, chiefStats, goblinCount, goblinRoll, goblinStats, score, turnNumber;
var chief = 'chief';
var cleric = 'cleric';
var fighter = 'fighter';
var goblin = 'goblin';
var hero = "hero";
var mage = 'mage';
var monster = "monster";
var chiefRoll = undefined; //set by rollEnemies() in gameManager.js
var character = []; 
var daysSurvived = 0;
var goblinCount = 0; 
var score = 0;
var characters = [cleric, fighter, mage, goblin, chief];
var heroes = [cleric, fighter, mage];
var monsters = [goblin, chief];
