console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
const passagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     //Caso o comprador seja maior de idade, a compra será realizada
//     console.log("Comprador maior de idade, compra realizada!");
//     listaDeDestinos.splice(1, 1);
// } else if(estaAcompanhado) {
//     //Caso o comprador seja menor de idade, nova condição será verificada - neste caso, companhia para o menor de idade "estaAcompanhado"
//     console.log("Comprador menor de idade acompanhado, compra realizada!");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador menor de idade não acompanhado, compra não realizada.");
// }
// //Os termos "if" e "else" são condicionais e significam, respectivamente, "se" e "senão" - neste caso, a condição era a constante "idadeComprador"
// //O atalho Alt + Shift + F realiza um indentação automática que pode ser útil em alguns casos
// // console.log(idadeComprador > 18);
// // console.log(idadeComprador < 18);
// // console.log(idadeComprador >= 18);
// // console.log(idadeComprador <= 18);
// // console.log(idadeComprador == 18);
// //Quando utilizado apenas um "=", realiza-se a atribuição ao termo - por exemplo, "const idadeComprador = 18"

if(idadeComprador >=18 || estaAcompanhado ==true){
//O operador || indica a expressão "ou" - "or" em inglês 
    console.log("Comprador ou acompanhante maior de idade, compra realizada!");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Comprador menor de idade não acompanhado, compra não realizada.");
}

console.log("Embarque: \n");
//O comando "\n" indica quebra de linha dentro do conteúdo exibido
if(idadeComprador >=18 && passagemComprada == true){
//O operador && indica a expressão "e" - "and" em inglês 
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar.");
}

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

