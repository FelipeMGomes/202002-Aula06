export class Lampada {

    private status: boolean;

    constructor(status: boolean){ 
        this.status = status;
    }

    public ligar(): void {this.status = true;};
    public desligar(): void {this.status = false;};
    
    public observar(): string {

        let Condicao: string = '';

        this.status ? Condicao = 'Ligado' : Condicao = 'Desligado';

        return Condicao;
    }
}