/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

const replaceAllOcurrencyBy = function (string, searchRegExp, replaceWith) {
  return string.replace(searchRegExp, replaceWith);
};

window.exercise02 = function () {
  const searchRegExp = /\d+/g;
  const replaceWith = "$";
  const result = replaceAllOcurrencyBy(
    "teste 1 de 2 string 3",
    searchRegExp,
    replaceWith
  );
  console.log("resultado ex2: " + result);
};
