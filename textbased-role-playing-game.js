/**
 * Created by esattahaibis on 2015-11-28.
 */

/* Create variables for game */
var flagReplay; /* flag for keeping replay data */
var flagPlayerDead; /* flag of player shows player is alive or dead */
var flagCthulhuDead; /* flag of cthulhu show cthulhu is alive or dead */
var playerHealth; /* variable for player's health */
var cthulhuHealth; /* variable for cthulhu's health */
var playerType; /* variable for player type ( Warrior or Mage ) */
var playerName; /* container that stores player name */
var attackType; /* container that stores which attack type player chose */
var damage; /* container that stores damage */

/**/
function WarriorAttackOne() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}

}
/**/
function WarriorAttackTwo() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}
}
/**/
function WarriorAttackThree() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}
}
/**/
function MageAttackOne() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}
}
/**/
function MageAttackTwo() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}
}
/**/
function MageAttackThree() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 30) {
		/* do lover damage */
	}else if(attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else {
		/* do high damage */
	}
}
/**/
function CthulhuAttack() {
	var attackChance;
	attackChance = Math.floor(Math.random() * 100);
	if (attackChance < 10) {
	/* don't do any damage */
	} else if ( attackChance >= 10 && attackChance < 30 ) {
		/* do low damage */
	} else if (attackChance >= 30 && attackChance < 70) {
		/* do medium damage */
	} else if (attackChance >= 70 && attackChance < 90) {
		/* do high damage */
	} else {
		/* kill instantly */
	}
}

do {
	/* Initialize variables with their default values*/
	flagReplay = false;
	flagPlayer = false;
	flagCthulhu = false;
	playerHealth = 100;
	cthulhuHealth = 100;
	damage = 0;
	/*------------------------------------------------------------------------------*/

	alert("Welcome to /*Insert game name*/.");
	playerName = prompt("Before anything else please type your name:","Player One");
	playerType = prompt("Please Choose your class (Warrior / Mage):").toLowerCase();
	while ( playerType != "warrior" && playerType != "mage") {
		playerType = prompt("Unknown Class. Please choose again (Warrior / Mage):").toLowerCase();
	}
	/* Path for warrior */
	if (playerType == "warrior") {
		alert("/*General story line to introduce the game to player*/");
		do {
			attackType = Number(prompt("/*Player chooses an attack type (attack 1, 2, 3)*/"));
			while (attackType != 1 && attackType != 2 && attackType != 3) {
				attackType = Number( prompt("Unknown attack type. Please choose valid attack type ( attack 1, 2, 3 ):") );
			}
			switch ( attackType ) {
				case 1:
					damage = WarriorAttackOne();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 2:
					damage = WarriorAttackTwo();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 3:
					damage = WarriorAttackThree();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to false */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
			}
			if (flagCthulhuDead == true) {
				alert("You Defeated Cthulhu. You glorious bastard.");
				break;
			} else {
				alert("You dealt " + damage + " damage to Cthulhu. Cthulhu's remaining health is " + cthulhuHealth + ".");
			}
			/* Cthulhu's turn to attack */
			damage = CthulhuAttack();
			if (damage == 100) {
				alert("Cthulhu killed you with one shot.");
				flagPlayerDead = true;
			} else {
				playerHealth -= damage;
				if (playerHealth <= 0) {
					alert("Cthulhu dealt " + damage + " damage. You are dead");
					flagPlayerDead = true;
				}
				else {
					alert("Cthulhu dealt " + damage + " damage. Your remaining health is " + playerHealth + ".");
				}
			}
		}while (flagPlayer != true);
	}
	/* Path for Mage */
	else {
		alert("/*General story line to introduce the game to player*/");
		do {
			attackType = Number(prompt("/*Player chooses an attack type (attack 1, 2, 3)*/"));
			while (attackType != 1 && attackType != 2 && attackType != 3) {
				attackType = Number( prompt("Unknown attack type. Please choose valid attack type ( attack 1, 2, 3 ):") );
			}
			switch ( attackType ) {
				case 1:
					damage = MageAttackOne();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 2:
					damage = MageAttackTwo();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
				case 3:
					damage = MageAttackThree();
					cthulhuHealth -= damage;
					/* control Cthulhu is alive if it's dead set the flag to true */
					if (cthulhuHealth <= 0) {
						flagCthulhuDead = true;
					}
					break;
			}
			/* Control Cthulhu is dead if it's dead finish the loop*/
			if (flagCthulhuDead == true) {
				alert("You Defeated Cthulhu. You glorious bastard.");
				break;
			} else {
				alert("You dealt " + damage + " damage to Cthulhu. Cthulhu's remaining health is " + cthulhuHealth + ".");
			}
			/*-------------------------------------------------------*/
			/* Cthulhu's turn to attack */
			damage = CthulhuAttack();
			if (damage == 100) {
				alert("Cthulhu killed you with one shot.");
				flagPlayerDead = true;
			} else {
				playerHealth -= damage;
				if (playerHealth <= 0) {
					alert("Cthulhu dealt " + damage + " damage. You are dead");
					flagPlayerDead = true;
				}
				else {
					alert("Cthulhu dealt " + damage + " damage. Your remaining health is " + playerHealth + ".");
				}
			}
		}while (flagPlayer != true);
	}
	/* Confirm player wants to play again or not */
	flagReplay = window.confirm("Do you wish to play again?");
}while (flagReplay == true);
alert("Thanks for playing /*insert game name*/. See you later.");