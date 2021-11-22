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


//find out which letter has been pressed and send that informatiom to info
const getLetter = () => {
  for(let i = 0; i < word.length; i++){
    let message = word[i];{
      if (message === "a") {
        return output.innerHTML = ".-";
      } else if (message === "b") {
        return output.innerHTML = "-..."
      } else if (message === "c") {
        return output.innerHTML = "-.-.";
      } else if (message === "d") {
        return output.innerHTML = "-..";
      } else if (message === "e") {
        return output.innerHTML = ".";
      } else if (message === "f") {
        return output.innerHTML ="..-.";
      } else if (message === "g") {
        return output.innerHTML = "--.";
      } else if (message === "h") {
        return output.innerHTML = "....";
      } else if (message === "i") {
        return output.innerHTML = "..";
      } else if (message === "j") {
        return output.innerHTML = ".---";
      } else if (message === "k") {
        return output.innerHTML = "-.-";
      } else if (message === "l") {
        return output.innerHTML =  ".-..";
      } else if (message === "m") {
        return output.innerHTML = "--";
      } else if (message === "n") {
        return output.innerHTML = "-.";
      } else if (message === "o") {
        return output.innerHTML =  "---";
      } else if (message === "p") {
        return output.innerHTML = ".--.";
      } else if (message === "q") {
        return output.innerHTML = "--.-";
      } else if (message === "r") {
        return output.innerHTML = ".-.";
      } else if (message === "s") {
        return output.innerHTML = "...";
      } else if (message === "t") {
        return output.innerHTML ="-";
      } else if (message === "u") {
        return output.innerHTML = "..-";
      } else if (message === "v") {
        return output.innerHTML = "...-";
      } else if (message === "w") {
        return output.innerHTML = ".--";
      } else if (message === "x") {
        return output.innerHTML = "-..-";
      } else if (message === "y") {
        return output.innerHTML = "-.--";
      } else if (message === "z") {
        return output.innerHTML = "--..";
      }
    } 
}
}

//take a word, and break it down, put it into an array and search through the letters
const input = document.getElementById("input").addEventListener("blur", getWord)
const button = document.getElementById("btn").addEventListener("click", getLetter)
const output = document.getElementById("output")