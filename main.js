import { translate } from "./translate.js";

//take the input information from the HTML
//convert the letter to morse code on click
//return and print that information back to the html

let info;
let word;

//take the word presented and turn it into an array
const getWord = (e) => {
  word = Array.from(e.target.value)
  return console.log(word);
}
//find out which letter has been pressed and send that informatio to info to store
const getTranslation = () => {
  for(let i = 0; i < word.length; i++){
    let message = word;{
      if (message === "a") {
        return info = ".-";
      } else if (message === "b") {
        return info = "-..."
      } else if (message === "c") {
        return info = "-.-.";
      } else if (message === "d") {
        return info = "-..";
      } else if (message === "e") {
        return info = ".";
      } else if (message === "f") {
        return info = "..-.";
      } else if (message === "g") {
        return info = "--.";
      } else if (message === "h") {
        return info = "....";
      } else if (message === "i") {
        return info = "..";
      } else if (message === "j") {
        return info = ".---";
      } else if (message === "k") {
        return info = "-.-";
      } else if (message === "l") {
        return info =  ".-..";
      } else if (message === "m") {
        return info = "--";
      } else if (message === "n") {
        return info = "-.";
      } else if (message === "o") {
        return info =  "---";
      } else if (message === "p") {
        return info = ".--.";
      } else if (message === "q") {
        return info = "--.-";
      } else if (message === "r") {
        return info = ".-.";
      } else if (message === "s") {
        return info = "...";
      } else if (message === "t") {
        return info = "-";
      } else if (message === "u") {
        return info = "..-";
      } else if (message === "v") {
        return info = "...-";
      } else if (message === "w") {
        return info = ".--";
      } else if (message === "x") {
        return info = "-..-";
      } else if (message === "y") {
        return info = "-.--";
      } else if (message === "z") {
        return info = "--..";
      }
    }
}
}



//take a word, and break it down, put it into an array and search through the letters
const input = document.getElementById("input").addEventListener("blur", getWord)
const button = document.getElementById("btn").addEventListener("click", getTranslation)
const output = document.getElementById("output")