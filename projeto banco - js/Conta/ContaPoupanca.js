import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        // this._saldo = saldoInicial;
        // this._cliente = cliente;
        // this._agencia = agencia;
        super(saldoInicial, cliente, agencia);
    }

    // sacar(valor) {
    //     if (this._saldo >= valor) {
    //         this._saldo -= valor;
    //         return valor;
    //     }
    // }

    // depositar(valor) {
    //     if (valor <= 0) return;
    //     this._saldo += valor;
    // }

    // transferir(valor, contaDestino) {
    //     if (valor <= 0) return;
    //     const valorSacado = this.sacar(valor);
    //     contaDestino.depositar(valorSacado);
    // }
}
