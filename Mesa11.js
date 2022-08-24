var filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"]
var animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

for (var i = 0; i < filmes.length; i++) {
  filmes[i] = filmes[i].toUpperCase();
};

console.log(filmes);

var arrayJunto = null;
function juntarArray(filmes, animacao) {
  for (var i = 0; i < animacao.length; i++) {
    filmes.push(animacao[i].toUpperCase());
  }
  return arrayJunto = filmes;
};
juntarArray(filmes, animacao);
console.log(arrayJunto);

let tiraJogo = arrayJunto.pop();
console.log(tiraJogo);
console.log(arrayJunto);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparar(asiaScores, euroScores) {
  let resultadoCompara = [];
  for (var i = 0; i < euroScores.length; i++) {
    resultadoCompara[i] = asiaScores[i] === euroScores[i];
  };
  return resultadoCompara
}
console.log(comparar(asiaScores, euroScores));

