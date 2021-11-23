export const translate = (message) => {
  if (message == "a") {
    return ".-";
  } else if (message === "b") {
    return "-...";
  } else if (message === "c") {
    return "-.-.";
  } else if (message === "d") {
    return "-..";
  } else if (message === "e") {
    return ".";
  } else if (message === "f") {
    return "..-.";
  }else if (message === "g") {
    return "--.";
  }else if (message === "h") {
    return "....";
  }else if (message === "i") {
    return "..";
  }else if (message === "j") {
    return ".---";
  }else if (message === "k") {
    return "-.-";
  }else if (message === "l") {
    return ".-..";
  }else if (message === "m") {
    return "--";
  }else if (message === "n") {
    return "-.";
  }else if (message === "o") {
    return "---";
  }else if (message === "p") {
    return ".--.";
  }else if (message === "q") {
    return "--.-";
  }else if (message === "r") {
    return ".-.";
  }else if (message === "s") {
    return "...";
  }else if (message === "t") {
    return "-";
  }else if (message === "u") {
    return "..-";
  }else if (message === "v") {
    return "...-";
  }else if (message === "w") {
    return ".--";
  }else if (message === "x") {
    return "-..-";
  }else if (message === "y") {
    return "-.--";
  } else if (message === "z") {
    return "--..";
  }
} 

export const wordArr = () => {
    let word = Array.from("Hello")
    return word;
  }