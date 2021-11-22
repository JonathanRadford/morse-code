export const translate = (message) => {
  if (message === "bonjour") {
    return "hello";
  } else if (message === "je m'appelle") {
    return "my name is";
  } else if (message === "oui") {
    return "yes";
  } else if (message === "non") {
    return "no";
  } else if (message === "au revoir") {
    return "goodbye";
  } else {
    return undefined;
  } 
} 


/*Create test cases for your 'translate' function: have at least 4 'valid' test cases, as well as invalid and undefined cases that check the string 'unavailable' is returned
*/