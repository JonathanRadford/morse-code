//take the input information from the HTML
//convert the letter to morse code on click
//return and print that information back to the html
//take the word presented and turn it into an array
import { getLetter } from "./translate.js";

//take a word, and break it down into an Array, map through the letters to convert into morsecode via the getLetter function then returns the array as a string
let newWord = "";
const getWord = (e) => {
  let word = Array.from(e.target.value.toLowerCase());
  newWord = word.map(getLetter).join("");
  return newWord;
};

//returns the translation to the output
const getTranslation = () => {
  const input = newWord;
  return (output.innerHTML = input);
};

const handleReset = () => {
  location.reload();
};

const input = document
  .getElementById("input")
  .addEventListener("blur", getWord);
const submitButton = document
  .getElementById("btn-primary")
  .addEventListener("click", getTranslation);
const resetButton = document
  .getElementById("btn-secondary")
  .addEventListener("click", handleReset);
const output = document.getElementById("output");
