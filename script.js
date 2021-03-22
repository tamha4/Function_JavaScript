let globalDamage = 0;
let myDamage = document.querySelector(".dDamage");
let winner = document.querySelector(".winner");
function Dragon(damage, attack) {
  if (globalDamage < 10) {
    if (attack === "fire") {
      damage--;
      globalDamage = globalDamage + damage;
      myDamage.innerHTML = globalDamage;
    } else if (attack == "ice") {
      damage++;
      globalDamage = globalDamage + damage;
      myDamage.innerHTML = globalDamage;
    } else {
      globalDamage = globalDamage + damage;
      myDamage.innerHTML = globalDamage;
    }
  } else {
    winner.textContent = "You win";
  }
}

let fire = document.body.querySelector(".fire");
let ice = document.body.querySelector(".ice");
let poision = document.body.querySelector(".poision");

fire.addEventListener("click", function () {
  Dragon(3, "fire");
});
ice.addEventListener("click", function () {
  Dragon(1, "ice");
});
poision.addEventListener("click", function () {
  Dragon(4, "poision");
});