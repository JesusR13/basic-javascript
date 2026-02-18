"use strict";

function getCounter() {
  return parseInt(document.getElementById("counter").textContent, 10);
}

function setCounter(n) {
  document.getElementById("counter").textContent = n;
}

function tickUp() {
  setCounter(getCounter() + 1);
}

function tickDown() {
  setCounter(getCounter() - 1);
}

function runForLoop() {
  const n = getCounter();
  const out = [];
  for (let i = 0; i <= n; i++) out.push(i);
  document.getElementById("forLoopResult").textContent = out.join(" ");
}

function showOddNumbers() {
  const n = getCounter();
  const out = [];
  for (let i = 1; i <= n; i += 2) out.push(i);
  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

function addMultiplesToArray() {
  const n = getCounter();
  const arr = [];
  for (let v = Math.floor(n / 5) * 5; v >= 5; v -= 5) arr.push(v);
  console.log(arr);
}

function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value,
  };
  console.log(car);
}

function loadCar(which) {
  let car;
  if (which === 1) car = carObject1;
  else if (which === 2) car = carObject2;
  else car = carObject3;

  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(which) {
  const p = document.getElementById("styleParagraph");
  if (which === 1) p.style.color = "red";
  else if (which === 2) p.style.color = "green";
  else p.style.color = "blue";
}