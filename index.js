import { getName } from "./getName.js";
import { getPhoto } from "./getPhoto.js";
import { getNutrInfo } from "./getNutrInfo.js";

//DOM elements
const nutrientHeader = document.getElementById("nutrients");
const fruitSelect = document.getElementById("fruitSelect");
const searchBtn = document.getElementById("searchBtn");

//event handler 

searchBtn.addEventListener("click", (e) => {
  getPhoto(e);
  getNutrInfo(e);
});

//event handler
fruitSelect.addEventListener("change", (e) => {
  getPhoto(e);
  getNutrInfo(e);
});

window.addEventListener("load", () => {
  nutrientHeader.innerText = "";
  getName();
});
