"use strict";
const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");

let total = 0;
// const vendingMachineButtons = document.querySelectorAll(".button");

colaButton.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
  console.dir(colaButton);
});

peanutsButton.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolateButton.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});

gummiesButton.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});

// vendingMachineButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const amount = button.getAttribute("data-amount");
//     total += amount;
//     total.textContent += parseInt(amount);
//     totalParagraph.textContent = `Total: $${totalCounter}.00`;
//   });
// });

// ---------------------------------------------------------------------

const moneyForm = document.querySelector(".money-form");
const moneyContainer = document.querySelector(".money-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const type = document.querySelector("#type").value;
  console.log(howMany, type);
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", type);
    newCoin.addEventListener("click", () => {
      newCoin.style.display = `none`;
      // newCoin.remove();
    });
    moneyContainer.append(newCoin);
  }
});

// ---------------------------------------------------------------------

const lightBulb = document.querySelector(".light-bulb");
const onSwitch = document.querySelector(".on");
const offSwitch = document.querySelector(".off");
const toggleSwitch = document.querySelector(".toggle");
const endSwitch = document.querySelector(".end");
const lightSwitches = document.querySelector(".switch");

onSwitch.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});
offSwitch.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleSwitch.addEventListener("click", () => {
  if (lightBulb.classList.contains("yellow")) {
    lightBulb.classList.remove("yellow");
  } else {
    lightBulb.classList.add("yellow");
  }
});

endSwitch.addEventListener("click", () => {
  lightBulb.remove();
  onSwitch.disabled;
  offSwitch.disabled;
  toggleSwitch.disabled;
  endSwitch.disabled;
});
