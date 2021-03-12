/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */
const searchPeopleByAge = function (conditionAge, arrayPeople) {
  for (let element of arrayPeople) {
    if (element.age < conditionAge) {
      return element.first_name + "," + element.last_name + "," + element.age;
    }
  }
  return "Nenhum resultado foi encontrado";
};

window.exercise07 = function () {
  var conditionAge = 25;
  const arrayPeople = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
  ];
  const result = searchPeopleByAge(conditionAge, arrayPeople);
  console.log("resultado ex7: " + result);
};
