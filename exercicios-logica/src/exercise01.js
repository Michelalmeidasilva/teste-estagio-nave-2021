/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/
const isEqualLength = function (strA, strB) {
  return strA.length === strB.length ? true : false;
};

export const compareBiggerString = function (strA, strB) {
  if (isEqualLength(strA, strB)) return 0;
  return strA.length > strB.length ? strA : strB;
};

window.exercise01 = function () {
  const stringA = prompt("Digite o valor da primeira String");
  const stringB = prompt("Digite o valor da segunda String");
  let result = "";
  if (isEqualLength(stringA, stringB)) {
    result = "resultado ex1: Strings de mesmo tamanho";
  } else {
    result =
      "resultado ex1: A maior String é: " +
      compareBiggerString(stringA, stringB);
  }
  console.log(result);
};
