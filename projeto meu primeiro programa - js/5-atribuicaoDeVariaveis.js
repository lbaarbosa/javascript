console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Lucas";
//let nome = "Lucas"; Essa é a forma que permite variar a constante
const sobrenome = "Barbosa";
let ano = 2021;

//console.log(nome+" "+sobrenome); Outra forma de expressar o espaço entre dois itens
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
//Ao utilizar crases `` para definir linhas, é possível interpolar variáveis - ou seja, utilizar mais de uma variável

let contador = 0;
contador = contador +1;

nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade;
//Ao utilizar a declaração "let" torno a variável substituível
idade = 24;
//Ao utilizar o = estou atribuindo valor à variável
idade = idade+1;
//Por ter declarado com o termo "let", posso definir novo valor à variável
console.log(idade);
//O terminal retornará o novo valor da linha 21 - ao invés da linha 22, tendo em vista se tratar de variável que permite substituição