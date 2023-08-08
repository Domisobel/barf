"use strict";
//kalk od wapna
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-help");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");


const result = document.querySelector(".result");
const errorWeight = document.querySelector(".error-weight");
const errorPortion = document.querySelector(".error-portion");

//oblicz
btn.addEventListener("click", function () {
  const weight = document.querySelector(".weight").value;
  const portion = document.querySelector(".portion").value;
  const dawkowanie = (weight * portion) / 1000;
  if (weight <= 0 || isNaN(weight)) {
    errorWeight.textContent = "Nieprawidłowa waga posiłku";
  }
  if (portion <= 0 || isNaN(portion)) {
    errorPortion.textContent = "Nieprawidłowa waga suplementu";
  }
  if (portion > 0 && weight > 0) {
    result.textContent = `Dawka węglanu wapnia to ${dawkowanie}g.`;
  }
});
//wyczyść
clear.addEventListener("click", function () {
    const weight = document.querySelector(".weight").value = '';
    const portion = document.querySelector(".portion").value='';
  result.textContent = "";
  errorWeight.textContent = "";
  errorPortion.textContent = "";
});
//otwieranie
btnOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
//zamykanie
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
