import Carro from "./carro";

const Ferrari: Carro = new Carro('Ferrari', 'California', 'TOP1D232', 0, 320);

for (let i = 0; i <= Ferrari.velocidade_Max / 10; i++) {
    Ferrari.acelerar(10);
}

console.log(`O tempo necessário para frear a nave totalmente é de ${Ferrari.frear()} segundos`);

Ferrari.imprimirDados();