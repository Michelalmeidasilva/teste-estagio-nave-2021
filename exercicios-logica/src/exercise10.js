/* E10
Para o seguinte exercício, considere os array de objetos.

const movies = [
  { id: 1, name: "Joker" },
  { id: 2, name: "Parasite" },
  { id: 3, name: "Avengers" },
  { id: 4, name: "Her" }
];
const actors = [
  { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
  { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
  { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
  { id: 4, name: "Scarlett Johansson", movie_ids: [3] }
];

Faça uma função que receba 2 parâmetros: um array de movies e um array de actors.
 A função deve retornar um array de movies, onde cada movie possui a propriedade actors, que sera um array com os nomes dos atores. Por ex:

[
	{
		id: 99,
		name: 'Lorem Ipsum',
		actors: ['John Doe', 'Jane Doe']
	}
]
 */

const searchActorsInMovies = function (movieId, actors) {
  var names = [];
  actors.forEach((actor) => {
    actor.movie_ids.forEach((value) => {
      if (value === movieId) {
        names.push(actor.name);
      }
    });
  });
  return names;
};

const createNewRelation = (movie, arrayActors) => {
  var element = {};
  element.id = movie.id;
  element.name = movie.name;
  element.actors = searchActorsInMovies(movie.id, arrayActors);
  return element;
};

const createNewArray = (movies, arrayActors) => {
  var newArrayMovies = [];
  for (const movie of movies) {
    newArrayMovies.push(createNewRelation(movie, arrayActors));
  }
  return newArrayMovies;
};

window.exercise10 = function () {
  const movies = [
    { id: 1, name: "Joker" },
    { id: 2, name: "Parasite" },
    { id: 3, name: "Avengers" },
    { id: 4, name: "Her" }
  ];
  const actors = [
    { id: 1, name: "Cho Yeo-jeong", movie_ids: [2] },
    { id: 2, name: "Robert Downey Jr.", movie_ids: [3] },
    { id: 3, name: "Joaquin Phoenix", movie_ids: [1, 4] },
    { id: 4, name: "Scarlett Johansson", movie_ids: [3] }
  ];
  var array = createNewArray(movies, actors);
  console.log("resultado ex10: ");
  console.log(array);
};
