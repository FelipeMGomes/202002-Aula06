import { Produto } from "./produto";

class UsaProduto{

    public produto: Produto = new Produto(1, 'Alicate', 'un');

    constructor() {
        this.produto.imprimeDados();
        this.produto.baixa_Estoque(0);
        this.produto.baixa_Estoque(200);
        this.produto.implanta_Estoque(55);
        this.produto.baixa_Estoque(50);
        this.produto.imprimeDados();
     };
}

const teste: UsaProduto = new UsaProduto();