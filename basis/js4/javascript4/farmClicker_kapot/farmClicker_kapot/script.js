"use strict";
// global variables
const myContent = document.getElementById("content");
let gold = null;
let animals = {};
// global functions
function addGold(goldToAdd) {
  try {
    console.trace();
    if (gold == null) { 
      gold = goldToAdd;
      let goldCounter = document.createElement("h2");
      goldCounter.id = "goldCounter";
      goldCounter.innerHTML = "Gold: " + gold;
      myContent.appendChild(goldCounter);
    } else {
      gold += goldToAdd;
      document.getElementById("goldCounter").innerHTML = "Gold: " + gold;
    }
    // check for events on current gold level
    checkGold();
  } catch (err) {
    console.trace();
    window.alert(err)
  }
}

function checkGold() {
  try{
  if (gold >= 50 && document.getElementById("goatBuyButton") == null) {
    let buttonBar = document.createElement("div");
    buttonBar.id = "buttonBar";

    let buyButton = document.createElement("button");
    buyButton.id = "goatBuyButton";
    buyButton.innerHTML = "Buy Goat (50g)";
    buyButton.addEventListener("click", ()=>buyAnimal("goat"));

    myContent.appendChild(buttonBar);
    buttonBar.appendChild(buyButton);
  }

  if (gold >= 90 && document.getElementById("pigBuyButton") == null) {
    let buttonBar = document.getElementById("buttonBar");

    let buyButton = document.createElement("button");
    buyButton.id = "pigBuyButton";
    buyButton.innerHTML = "Buy Pig (90g)";
    buyButton.addEventListener("click", ()=>buyAnimal("pig"));

    buttonBar.appendChild(buyButton);
  }

  if (gold >= 120 && document.getElementById("cowBuyButton") == null) {
    let buttonBar = document.getElementById("buttonBar");

    let buyButton = document.createElement("button");
    buyButton.id = "cowBuyButton";
    buyButton.innerHTML = "Buy Cow (120g)";
    buyButton.addEventListener("click", ()=>buyAnimal("cow"));

    buttonBar.appendChild(buyButton);
  }
  if (gold >= 200 && document.getElementById("kipBuyButton") == null) {
    let buttonBar = document.getElementById("buttonBar");

    let buyButton = document.createElement("button");
    buyButton.id = "kipBuyButton";
    buyButton.innerHTML = "Buy chicken (200g)";
    buyButton.addEventListener("click", ()=>buyAnimal("kip"));

    buttonBar.appendChild(buyButton);
  }
}
  catch(err){
    console.trace();
    window.alert(err)
  }
}

function buyAnimal(animal) {
  try{
  let itemBar = document.getElementById('itemBar');
  if (itemBar == null) {
    itemBar = document.createElement("div");
    itemBar.id != "itemBar";
    myContent.appendChild(itemBar);
  }

  switch (animal) {
    case "kip":
      if (gold >= 200) {
        addGold(-200);
        if (animals.kippen == null) {
          animals.kippen = 1;
          let myElement = document.createElement("div");
          myElement.id = "kip";
          myElement.innerHTML = "Chicken Quantity: " + animals.kippen;
          itemBar.appendChild(myElement);
        } else {
          animals.kippen += 1;
          document.getElementById("kip").innerHTML = "Chicken Quantity: " + animals.kippen;
        }
      }
      break;
    case "goat":
      if (gold >= 50) {
        addGold(-50);
        if (animals.goats == null) {
          animals.goats = 1;
          let myElement = document.createElement("div");
          myElement.id = "goats";
          myElement.innerHTML = "Goat Quantity: " + animals.goats;
          itemBar.appendChild(myElement);
        } else {
          animals.goats += 1;
          document.getElementById("goats").innerHTML = "Goat Quantity: " + animals.goats;
        }
      }
      break;
    case "pig":
      if (gold >= 90) {
        addGold(-90);
        if (animals.pigs == null) {
          animals.pigs = 1;
          let myElement = document.createElement("div");
          myElement.id = "pigs";
          myElement.innerHTML = "Pig Quantity: " + animals.pigs;
          itemBar.appendChild(myElement);
        } else {
          animals.pigs += 1;
          document.getElementById("pigs").innerHTML = "Pig Quantity: " + animals.pigs;
        }
      }
      break;
    case "cow":
      if (gold >= 120) {
        addGold(-120);
        if (animals.cows == null) {
          animals.cows = 1;
          let myElement = document.createElement("div");
          myElement.id = "cows";
          myElement.innerHTML = "Cow Quantity: " + animals.cows;
          itemBar.appendChild(myElement);
        } else {
          animals.cows += 1;
          document.getElementById("cows").innerHTML = "Cow Quantity: " + animals.cows;
        }
      }
      break;
    default:
      console.log("geen dier gevonden");
  }
} catch(err){
  console.trace();
  window.alert(err)
}
}

function passiveGold() {
  try {
    let goldToAdd = 0;
    if (animals.goats > 0) {
      goldToAdd += animals.goats * 5; //50=>5 10=>1
    }
    if (animals.pigs > 0) {
      goldToAdd += animals.pigs * 10; //90=>10  9=>1
    }
    if (animals.cows > 0) {
      goldToAdd += animals.cows * 15; //120=>15 8=>1
    }
    if (animals.kippen > 0) {
      goldToAdd += animals.kippen * 25;
    }
    addGold(goldToAdd);
  } catch (err) {
    console.trace();
    window.alert(err);
  }
}

// add elements
function addGoldButton() {
  let myButton = document.createElement("button");
  myButton.addEventListener("click", () => addGold(1)); // add one
  myButton.innerHTML = "Add Gold!";
  myContent.appendChild(myButton);
}

// start application
addGoldButton();
setInterval(passiveGold, 5000);
