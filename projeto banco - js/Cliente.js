export class Cliente {

    // //As propriedades de uma classe, por padrão, devem ser definidas dentro do próprio "constructor"
    //nome;
    //_cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true;
    }
}