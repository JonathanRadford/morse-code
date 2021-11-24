import { getLetter } from "./translate.js";
import { it, expect } from '@jest/globals';
//English to Morse Code


//it should translate A to .- 
it("should translate A to .-", () => {
    const result = getLetter("a");
    expect(result).toBe(".-");
})
//it should translate B to -... 
it("should translate B to -...", () => {
  const result = getLetter("b");
  expect(result).toBe("-...");
})
//it should translate C to -.-.
it("should translate C to -.-.", () => {
  const result = getLetter("c");
  expect(result).toBe("-.-.");
})
//it should translate D to -.. 
it("should translate D to -..", () => {
  const result = getLetter("d");
  expect(result).toBe("-..");
})
//it should translate E to . 
it("should translate E to .", () => {
  const result = getLetter("e");
  expect(result).toBe(".");
})
//it should translate F to ..-. 
it("should translate F to ..-.", () => {
  const result = getLetter("f");
  expect(result).toBe("..-.");
})
//it should translate G to --. 
it("should translate G to --.", () => {
  const result = getLetter("g");
  expect(result).toBe("--.");
})
//it should translate H to .... 
it("should translate H to ....", () => {
  const result = getLetter("h");
  expect(result).toBe("....");
})
//it should translate I to .. 
it("should translate I to ..", () => {
  const result = getLetter("i");
  expect(result).toBe("..");
})
//it should translate J to .---
it("should translate J to .---", () => {
  const result = getLetter("j");
  expect(result).toBe(".---");
})
//it should translate K to -.- 
it("should translate K to -.-", () => {
  const result = getLetter("k");
  expect(result).toBe("-.-");
})
//it should translate L to .-.. 
it("should translate L to .-..", () => {
  const result = getLetter("l");
  expect(result).toBe(".-..");
})
//it should translate M to --
it("should translate m to --", () => {
  const result = getLetter("m");
  expect(result).toBe("--");
})
//it should translate N to -.
it("should translate N to -.", () => {
  const result = getLetter("n");
  expect(result).toBe("-.");
})
//it should translate O to --- 
it("should translate O to ---", () => {
  const result = getLetter("o");
  expect(result).toBe("---");
})
//it should translate P to .--. 
it("should translate P to .--.", () => {
  const result = getLetter("p");
  expect(result).toBe(".--.");
})
//it should translate Q to --.- 
it("should translate Q to --.-", () => {
  const result = getLetter("q");
  expect(result).toBe("--.-");
})
//it should translate R to .-.
it("should translate R to .-.", () => {
  const result = getLetter("r");
  expect(result).toBe(".-.");
})
//it should translate S to ... 
it("should translate S to ...", () => {
  const result = getLetter("s");
  expect(result).toBe("...");
})
//it should translate T to - 
it("should translate T to -", () => {
  const result = getLetter("t");
  expect(result).toBe("-");
})
//it should translate U to ..- 
it("should translate U to ..-", () => {
  const result = getLetter("u");
  expect(result).toBe("..-");
})
//it should translate V to ...- 
it("should translate V to ...-", () => {
  const result = getLetter("v");
  expect(result).toBe("...-");
})
//it should translate W to .-- 
it("should translate W to .--", () => {
  const result = getLetter("w");
  expect(result).toBe(".--");
})
//it should translate X to -..-
it("should translate X to -..-", () => {
  const result = getLetter("x");
  expect(result).toBe("-..-");
})
//it should translate Y to -.--
it("should translate Y to -.--", () => {
  const result = getLetter("y");
  expect(result).toBe("-.--");
})
//it should translate Z to --..
it("should translate Y to --..", () => {
  const result = getLetter("z");
  expect(result).toBe("--..");
})

//need to take a input from the screen and break it into an array
it("should take a word and make the letters into an array, turn them into Morse code, bring it back together and print it", () => {
  const result = getWord("hello");
  expect(result).toBe("......-...-..---")
})

