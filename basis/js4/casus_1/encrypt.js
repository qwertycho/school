document.getElementById("inputVeld").addEventListener("keyup", werk)
document.getElementById("versleutel").addEventListener("click", selector);
document.getElementById("decrypt").addEventListener("click", selector);
document.getElementById("leeg").addEventListener("click", leeg);

const outPutVeld = document.getElementById("outputVeld");
const inPutVeld = document.getElementById("inputVeld");
const encrButton = document.getElementById("versleutel");
const decrButton = document.getElementById("decrypt");
let encrypt = true

// Dit is wel een bruh moment
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// wisseld tussen encrypten en decrypten. 
function selector(event) {
  if (event.target.id == "versleutel") {
    encrypt = true;
    encrButton.style.backgroundColor = "rgb(67, 145, 67)";
    decrButton.style.backgroundColor = "white";
  } else {
    encrypt = false;
    decrypt();
    encrButton.style.backgroundColor = "white";
    decrButton.style.backgroundColor = "rgb(67, 145, 67)";
  }
}

function werk() {
  try{
    let input = inPutVeld.value.toLowerCase()
    outPutVeld.value = ""
    for(let i = 0; i < input.length; i++){
      if (encrypt) {
        let index = letters.indexOf(input[i]);
        if (letters.indexOf(input[i]) != -1) {
          if (letters.indexOf(input) < 25) {
            outPutVeld.value += letters[index + 1];
          } else {
            outPutVeld.value += letters[0];
          }
        } else {
          outPutVeld.value += input[i];
        }
      }
    } 
  
} catch(err){
  window.alert(err)
}
}

function decrypt() {
  if (!encrypt) {
    // outputveld leegmaken
    outPutVeld.value = "";
    // input lezen en naar lowercase maken
    let input = document.getElementById("inputVeld").value.toLowerCase();
    //   door iedere char lopen in het inputveld
    for(let i = 0; i < input.length; i++){
      let inputChar = input[i];
      let index = letters.indexOf(inputChar);
      if (letters.indexOf(inputChar) != -1) {
        // Als de letter a is (0) word het teruggebracht naar z letters[25]
        if (letters.indexOf(inputChar) == 0) {
          outPutVeld.value += letters[25];
        } else if (letters.indexOf(inputChar) <= 25) {
          outPutVeld.value += letters[index - 1];
        } else {
          outPutVeld.value += letters[25];
        }
        //   Dit is voor tekens die niet in letters[] voorkomen
      } else {
        outPutVeld.value += input[i];
      }
    }
  }
}

function leeg(){
    outPutVeld.value = ""
    inPutVeld.value = ""
}