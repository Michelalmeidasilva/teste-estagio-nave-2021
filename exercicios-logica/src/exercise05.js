/* E5
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima uma mensagem de saudação com o nome completo para cada um dos objetos.

Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
...

*/

const greetPerson = function (person) {
  return `Olá, ${person.first_name} ${person.last_name}!`;
};

window.exercise05 = function () {
  const arrayPeople = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
  ];
  console.log("resultado ex5: ");
  arrayPeople.forEach((element) => {
    console.log(greetPerson(element));
  });
};
