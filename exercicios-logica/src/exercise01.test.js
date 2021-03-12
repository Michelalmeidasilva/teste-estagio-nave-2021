import { compareBiggerString } from "./exercise01.js";

test("should return a string joao pessoa, is bigger than amazonas ", () => {
  const strA = "amazonas";
  const strB = "joao pessoa";
  const expectedResult = strB;
  expect(compareBiggerString(strA, strB)).toBe(expectedResult);
});

test("should return a string pelotas, is bigger than string recife ", () => {
  const strA = "pelotas";
  const strB = "recife";
  const expectedResult = strA;
  expect(compareBiggerString(strA, strB)).toBe(expectedResult);
});

test("should return  0, the String nave and evan has the equal length", () => {
  const strA = "nave";
  const strB = "evan";
  const expectedResult = 0;
  expect(compareBiggerString(strA, strB)).toBe(expectedResult);
});
