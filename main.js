//take the input information from the HTML
//convert the letter to morse code on click
//return and print that information back to the html
let word;
//take the word presented and turn it into an array
export const getWord = (e) => {
  word = Array.from(e.target.value);
  let newWord = word.map(getLetter).join("");
  return output.innerHTML = newWord;
}

//find out which letter has been pressed and send that informatiom to info
export const getLetter = (message) => {
      if (message === "a") {
        return ".-";
      } else if (message === "b") {
        return "-..."
      } else if (message === "c") {
        return "-.-.";
      } else if (message === "d") {
        return "-..";
      } else if (message === "e") {
        return ".";
      } else if (message === "f") {
        return "..-.";
      } else if (message === "g") {
        return "--.";
      } else if (message === "h") {
        return "....";
      } else if (message === "i") {
        return "..";
      } else if (message === "j") {
        return ".---";
      } else if (message === "k") {
        return "-.-";
      } else if (message === "l") {
        return  ".-..";
      } else if (message === "m") {
        return  "--";
      } else if (message === "n") {
        return "-.";
      } else if (message === "o") {
        return  "---";
      } else if (message === "p") {
        return  ".--.";
      } else if (message === "q") {
        return "--.-";
      } else if (message === "r") {
        return ".-.";
      } else if (message === "s") {
        return "...";
      } else if (message === "t") {
        return "-";
      } else if (message === "u") {
        return "..-";
      } else if (message === "v") {
        return  "...-";
      } else if (message === "w") {
        return ".--";
      } else if (message === "x") {
        return "-..-";
      } else if (message === "y") {
        return "-.--";
      } else if (message === "z") {
        return "--..";
      } 
    } 

//take a word, and break it down, put it into an array and search through the letters
const input = document.getElementById("input").addEventListener("blur", getWord)
const button = document.getElementById("btn")
const output = document.getElementById("output")