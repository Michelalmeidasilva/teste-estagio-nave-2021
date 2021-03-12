/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

 */

const elementFormatter = ({ id, first_name, last_name, age }) => {
  return `id:${id}, nome:${first_name} ${last_name}, idade: ${age}\n`;
};

const searchPeopleByAge = function (conditionAge, arrayPeople) {
  var elementsBucket = "";
  for (let element of arrayPeople) {
    if (element.age < conditionAge) {
      elementsBucket += elementFormatter(element);
    }
  }
  return elementsBucket;
};

window.exercise08 = function () {
  const arrayPeople = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
  ];
  var conditionAge = 30;
  const result = searchPeopleByAge(conditionAge, arrayPeople);
  console.log("resultado ex8: \n" + result);
};
