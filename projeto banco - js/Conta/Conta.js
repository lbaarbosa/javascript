//A classe Conta é chamada de classe abstrata por não poder ser instanciada diretamente, apenas herdada
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, por se tratar de classe abstrata. Tente os tipos: Corrente ou Poupança!");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //o método sacar é chamada de abstrato por não poder ser herdado, sempre deve ser determinado nas classes-filha
    sacar() {
        // let taxa = 1;
        // this._sacar(valor, taxa)
        throw new Error("O método sacar é abstrato, determine o método especificamente dentro da classe-filha!");
    }

    //Esse é um método privado (utiliza-se underline) pois ele será utilizado em outras classes-filho
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, contaDestino) {
        if (valor <= 0) return;
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}