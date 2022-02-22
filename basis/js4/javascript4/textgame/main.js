"use strict"
// succes met deze code lezel lo;. Ik had echt geen zin in comments.
const endboss = {
    hp: 1000,
    damage: 10,
    crit: 5,
};

const player = {
    hp: 500,
    damage: 5,
    crit: 10,
    heal: 0,
    fighting: false,
};

document.getElementById("attack").addEventListener("click", attack)
document.getElementById("evade").addEventListener("click", evade)
document.getElementById("train").addEventListener("click", train)
document.getElementById("heal").addEventListener("click", heal)
document.getElementById("walk").addEventListener("click", walk)
let statusBar = document.getElementById("status");
let textArea = document.getElementById("text");

let gameStatus = []
let playerStatus = []

function random(damage, crit){
    let chance = Math.floor(Math.random() * 100)
    if(chance <= crit ){
        return (damage * 2)
    } else{
        return damage
    }
}

function attack() {
  try {
    if (player.fighting) {
      let attackDamage = random(player.damage, player.crit);
      console.log(attackDamage);
      endboss.hp += -attackDamage;
      player.heal = 0

      check();
      evade();
      statusUpdate(`Player dealt ${attackDamage} damage.`)
    }
    statusUpdate()
  } catch (err) {
    console.trace();
    console.log(err);
  }
}

function evade(){
    player.hp += player.heal;
    if(player.heal > 0){
        player.heal += -1;
    } else{
        player.heal = 0;
    }
    statusUpdate(`Player evaded attack.`)
}

function train() {
  try {
    if (!player.fighting) {
      player.crit += 0.5;
      player.damage += 1;
      statusUpdate(`Player now has ${player.damage} damage and ${player.crit}% chance critical chance.`)
    }
  } catch (err) {
    console.trace();
    console.log(err);
  }
}

function heal(){
    try{
        player.heal += 20;
        player.hp += 20;
        check()
    } catch(err){
        console.trace();
        console.log(err);
    }
    statusUpdate(`Player has used heal`)

}

function walk() {
  try {
    let chance = Math.floor(Math.random() * 4);
    if (chance <= 1) {
      player.fighting = true;
      statusUpdate(`Player has met the endboss!`);
    } else {
      statusUpdate(`Nothing happend`);
    }
  } catch (err) {
    console.trace();
    console.log(err);
  }
}

function statusUpdate(gameUpdate) {
  try {
    playerStatus = "player status = " + JSON.stringify(player);
    statusBar.innerHTML = playerStatus;
    if(gameUpdate){
        // textArea.innerHTML += "<p>"
        // textArea.prepend(gameUpdate)
        const element = document.createElement("p");
        const node = document.createTextNode(gameUpdate);
        element.appendChild(node);

        textArea.prepend(element);
    }
  } catch (err) {
    console.log(err);
    console.trace();
  }
}

function check(){
    try{
        if(endboss.hp > 0){
            let attackDamage = random(endboss.damage, endboss.crit);
            console.log(attackDamage);
            player.hp += -attackDamage;
        } else{
            statusUpdate(`Player had defeated the endboss!`)

        }

        if(player.hp < 1){
            statusUpdate(`Player had died! `)
        }
        statusUpdate()
    }catch(err){
        console.trace()
        console.log(err)
    }
}