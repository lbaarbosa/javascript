//Essa é a sintaxe para exportar classes de outros arquivos

import { Conta } from "./Conta.js";

//O comando "extends" dispensa as linhas de código que forem semelhantes entre classes - ou seja, essa classe herdará as linhas que forem suprimidas
export class ContaCorrente extends Conta {
    // //Ao definir um atributo da classe como "static", você torna esse atributo igual para todos os objetos criados
    static numeroDeContas = 0;
    //agencia;
    //_cliente;

    //O assessor "set" atribui que a propriedade de uma classe seja vinculada a instância de uma classe - através do "instanceof"
    //A sintaxe do assessor sempre é pública, por isso não há underline antes do termo "cliente"
    // set cliente(novoValor){
    //     if(novoValor instanceof Cliente){
    //         this._cliente = novoValor;
    //     }
    // }

    // //O assessor "get" não atribui como o "set", mas apenas dá a visualização - neste caso, o retorno do campo "_cliente" privado
    // get cliente(){
    //     return this._cliente;
    // }

    // //_saldo = 0;
    // //#saldo - proposta de campos privados a ser implementada no JS (https://github.com/tc39/proposal-class-fields#private-fields)

    // //Definir apenas o assessor "get" torna um atributo "somente leitura"
    // get saldo(){
    //     return this._saldo;
    // }

    constructor(cliente, agencia) {
        // //Atributos herdados da classe conta por conta do comando "extends"
        // this._saldo = 0;
        // this._cliente = cliente;
        // this.agencia = agencia;
        //Por se tratar de um atributo do tipo "static", o termo "this." perde a função, visto que este não é um atributo diferente para cada objeto
        //O comando "super" é uma referência à classe-pai, neste caso, a sintaxe "super(parâmetros)" é uma referência ao construtor da classe Conta
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // //Essa é a sintaxe para criar métodos (comportamentos) da classe
    // sacar(valor){
    //     if(this._saldo >= valor){
    //         //O termo "this." indica que a propriedade após o ponto - neste caso, ._saldo, será relacionada ao objeto que for criado, por exemplo, contaCorrenteRicardo._saldo (o "this.", portanto, é um termo genérico para o objeto dentro do comportamento criado)
    //         this._saldo -= valor;
    //         //O comando "return" ao final do método entrega um valor após o comportamento - neste caso, o próprio valor do saque
    //         //Além disso, este comando também interrompe a execução do método após sua inserção
    //         return valor;
    //     }
    // }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

    // depositar(valor){
    //     if(valor<=0) return;
    //     //Aqui, o "return" foi utilizado como "early return", visto que ele interrompe a execução do método caso o valor do depósito seja menor que 0
    //     this._saldo += valor;
    // }

    // // //Essa é a maneira tradicional de escrever o código, utilizando as chaves que são dispensadas em caso de "early return", como visto acima
    // // depositar(valor){
    // //     if(valor<=0) {
    // //         return;
    // //     }
    // //     this._saldo += valor;
    // // }

    // transferir(valor, contaDestino){
    //     if(valor<=0) return;
    //     const valorSacado = this.sacar(valor);
    //     contaDestino.depositar(valorSacado);
    // }
}