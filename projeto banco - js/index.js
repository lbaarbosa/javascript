//O comando para criar um "package.json" pelo terminal é "npm init"
//Essa é a sintaxe para importar classes de outros arquivos

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Objetos criados a partir das classes
const cliente1 = new Cliente("Ricardo", 11122233344, 11223);
//cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233344;

const cliente2 = new Cliente("Alice", 55566677788, 44556);
//cliente2.nome = "Alice";
//cliente2.cpf = 55566677788;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
//const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
//contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);
//const contaCorrenteAlice = new ContaCorrente(1002, cliente2);
//contaCorrenteAlice.agencia = 1002;
//contaCorrenteAlice.cliente = cliente2;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(250, contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log("O número de contas em nosso banco é:", ContaCorrente.numeroDeContas);
const contaPoupancaRicardo = new ContaPoupanca(500, cliente1, 1001);
//const contaPoupancaRicardo = new ContaPoupanca(500, cliente1, 1001);

//const contaRicardo = new Conta(500, cliente1, 1001);
console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);

const diretor = new Diretor('Rodrigo', 10000, 11122233344);
diretor.cadastrarSenha("12345");

const gerente = new Gerente('Ricardo', 5000, 55566677788);
gerente.cadastrarSenha("54321");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "54321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, "11223");


console.log(gerenteEstaLogado, diretorEstaLogado, cliente1EstaLogado);