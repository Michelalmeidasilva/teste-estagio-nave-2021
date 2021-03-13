import 'regenerator-runtime/runtime'
/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

const fetchData = function (url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getAddress = async (cep) => {
  const url = "https://viacep.com.br/ws/" + cep + "/json";
  let jsonData = await fetchData(url);
  if (jsonData != null)
    return `${jsonData.logradouro}, ${jsonData.complemento}, ${jsonData.localidade}, ${jsonData.uf}`;
  else return "Falha ao buscar o endereço";
};

window.exercise04 = function () {
  const cepMyHouse = "96408-850";
  const cepNave = "96020700";
  getAddress(cepMyHouse).then((endereco) => {
    console.log("resultado ex4: " + endereco);
  });
};
