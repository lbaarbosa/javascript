console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
let passagemComprada = false;
//A alteração de "const" para "let" desta variável se deu pela necessidade de alteração pela condicional abaixo, permitindo, portanto, a alteração dessa
const destino = "Curitiba";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}

console.log("O destino selecionado está disponível!", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!");
}else {
    console.log("Algo deu errado, tente novamente.")
}
