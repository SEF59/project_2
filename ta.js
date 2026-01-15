let hunger = 70;
let sleep = 70;
let fun = 70;
 
const hungerBar = document.querySelector(".fill.hunger");
const sleepBar = document.querySelector(".fill.sleep");
const funBar = document.querySelector(".fill.fun");
const message = document.getElementById("message");
const bear = document.querySelector(".bear");
const input = document.getElementById("command");
const button = document.getElementById("send");
 
function updateBars() {
  hungerBar.style.width = hunger + "%";
  sleepBar.style.width = sleep + "%";
  funBar.style.width = fun + "%";

  hungerBar.classList.toggle("low", hunger < 30);
  sleepBar.classList.toggle("low", sleep < 30);
  funBar.classList.toggle("low", fun < 30);

  // BEER EXPRESSIE
  bear.classList.remove("happy", "tired");

  if (sleep < 30) {
    bear.classList.add("tired");
    message.textContent = "Ik ben zo moe 😴";
  } 
  else if (sleep > 70) {
    bear.classList.add("happy");
    message.textContent = "Ik voel me super energiek! 😄";
  }
  else if (hunger < 30) {
    message.textContent = "Ik heb honger 😭";
  }
  else if (fun < 30) {
    message.textContent = "Ik wil spelen 🎮";
  }
}

 
button.onclick = () => {
  const cmd = input.value.toLowerCase();
 
  if (cmd === "voeden") {
    hunger = Math.min(100, hunger + 15);
    message.textContent = "Dankjewel voor het eten! 🍔";
  }
  else if (cmd === "slapen") {
    sleep = Math.min(100, sleep + 15);
    message.textContent = "Zzz... lekker slapen 😴";
  }
  else if (cmd === "spelen") {
    fun = Math.min(100, fun + 15);
    message.textContent = "Dit is leuk!! 🎉";
  }
  else {
    message.textContent = "Dat snap ik niet 🤔";
  }
 
  input.value = "";
  updateBars();
};
 
// stats gaan langzaam omlaag
setInterval(() => {
  hunger = Math.max(0, hunger - 1);
  sleep = Math.max(0, sleep - 0.7);
  fun = Math.max(0, fun - 0.8);
  updateBars();
}, 1500);
 
updateBars();





