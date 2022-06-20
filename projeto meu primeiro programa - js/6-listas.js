console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);
//O comando ".push" adiciona itens a uma lista que foi criada
console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
//O comando ".splice" deleta itens da lista = (x,y) onde "x" é a posição da exclusão e "y" é o número de itens que serão deletados a partir da posição "x"
//A contagem de itens da posição começa em 0, não em 1 - neste caso, a posição 0 representa o primeiro item
console.log(listaDeDestinos);


console.log(listaDeDestinos[1]);
//Colchetes definem apenas uma posição específica da lista - neste caso, a posição 1 representa o segundo item