/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

export const replaceStringByObject = function (string, objReplace) {
  const tempObj = string.split("");
  for (let i = 0; i < tempObj.length; i++) {
    for (const key in objReplace) {
      if (tempObj[i] === key) tempObj[i] = objReplace[key];
    }
  }
  return String(tempObj).replace(/,/g, "");
};

window.exercise03 = function () {
  const naveTest = {
    4: "a",
    3: "e",
    1: "i",
    5: "s"
  };
  const result = replaceStringByObject("T35t3 d3 35t4g1o", naveTest);
  console.log("resultado ex3: " + result);
};
