export class Produto {

    private codigo: number;
    private descricao: string;
    private unid_Medida: string;
    private quant_Estoque: number = 0;


    constructor(codigo: number, descricao: string, unid_Medida: string, quant_Estoque: number = 0){
        
        this.codigo = codigo;
        this.descricao = descricao;
        this.unid_Medida = unid_Medida;
        this.quant_Estoque = quant_Estoque;        
    };

    public return_Estoque(): number {
        return this.quant_Estoque;
    }

    public implanta_Estoque(num_Itens: number): void {
        this.quant_Estoque += num_Itens;
        console.log('Quantidade de itens adicionada com sucesso!');
    }

    public baixa_Estoque(Num_Itens: number): boolean {

        if (Num_Itens != 0) {
            if (Num_Itens <= this.quant_Estoque) {

                this.quant_Estoque -= Num_Itens;

                console.log('Baixa Realizada com sucesso!');

                return true;
            }
            else {

                console.log('Baixa não realizada, número de itens é maior do que a quantidade em estoque.');

                return false;
            }
        }
        else
            console.log('Você não pode dar baixa em 0 itens');
    }

    public imprimeDados(): void {

        console.log(`Código: ${this.codigo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Unidade de medida: ${this.unid_Medida}`);
        console.log(`Quantidade em estoque: ${this.quant_Estoque}`);
        
    }
} 