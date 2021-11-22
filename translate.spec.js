import { translate } from "./translate.js";
import { it, expect } from '@jest/globals';
//English to Morse Code
//it should translate A to .- 
it("should translate A to .-", () => {
    const result = translate("a");
    expect(result).toBe(".-");
})
//it should translate B to -... 
it("should translate B to -...", () => {
  const result = translate("b");
  expect(result).toBe("-...");
})
//it should translate C to -.-.
it("should translate C to -.-.", () => {
  const result = translate("c");
  expect(result).toBe("-.-.");
})
//it should translate D to -.. 
it("should translate D to -..", () => {
  const result = translate("d");
  expect(result).toBe("-..");
})
//it should translate E to . 
it("should translate E to .", () => {
  const result = translate("e");
  expect(result).toBe(".");
})
//it should translate F to ..-. 
it("should translate F to ..-.", () => {
  const result = translate("f");
  expect(result).toBe("..-.");
})
//it should translate G to --. 
it("should translate G to --.", () => {
  const result = translate("g");
  expect(result).toBe("--.");
})
//it should translate H to .... 
it("should translate H to ....", () => {
  const result = translate("h");
  expect(result).toBe("....");
})
//it should translate I to .. 
it("should translate I to ..", () => {
  const result = translate("i");
  expect(result).toBe("..");
})
//it should translate J to .---
it("should translate J to .---", () => {
  const result = translate("j");
  expect(result).toBe(".---");
})
//it should translate K to -.- 
it("should translate K to -.-", () => {
  const result = translate("k");
  expect(result).toBe("-.-");
})
//it should translate L to .-.. 
it("should translate L to .-..", () => {
  const result = translate("l");
  expect(result).toBe(".-..");
})
//it should translate M to --
it("should translate m to --", () => {
  const result = translate("m");
  expect(result).toBe("--");
})
//it should translate N to -.
it("should translate N to -.", () => {
  const result = translate("n");
  expect(result).toBe("-.");
})
//it should translate O to --- 
it("should translate O to ---", () => {
  const result = translate("o");
  expect(result).toBe("---");
})
//it should translate P to .--. 
it("should translate P to .--.", () => {
  const result = translate("p");
  expect(result).toBe(".--.");
})
//it should translate Q to --.- 
it("should translate Q to --.-", () => {
  const result = translate("q");
  expect(result).toBe("--.-");
})
//it should translate R to .-.
it("should translate R to .-.", () => {
  const result = translate("r");
  expect(result).toBe(".-.");
})
//it should translate S to ... 
it("should translate S to ...", () => {
  const result = translate("s");
  expect(result).toBe("...");
})
//it should translate T to - 
it("should translate T to -", () => {
  const result = translate("t");
  expect(result).toBe("-");
})
//it should translate U to ..- 
it("should translate U to ..-", () => {
  const result = translate("u");
  expect(result).toBe("..-");
})
//it should translate V to ...- 
it("should translate V to ...-", () => {
  const result = translate("v");
  expect(result).toBe("...-");
})
//it should translate W to .-- 
it("should translate W to .--", () => {
  const result = translate("w");
  expect(result).toBe(".--");
})
//it should translate X to -..-
it("should translate X to -..-", () => {
  const result = translate("x");
  expect(result).toBe("-..-");
})
//it should translate Y to -.--
it("should translate Y to -.--", () => {
  const result = translate("y");
  expect(result).toBe("-.--");
})
//it should translate Z to --..
it("should translate Y to --..", () => {
  const result = translate("z");
  expect(result).toBe("--..");
})

