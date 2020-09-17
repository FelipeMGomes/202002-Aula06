import { Lampada } from "./lampada";

const lamp1: Lampada = new Lampada(true);

console.log('lampada 1: ' + lamp1.observar());

const lamp2: Lampada = new Lampada(false);

console.log('lampada 2: ' + lamp2.observar());



lamp1.desligar();
console.log('lampada 1: ' + lamp1.observar());



lamp2.ligar();
console.log('lampada 2: ' + lamp2.observar()); 