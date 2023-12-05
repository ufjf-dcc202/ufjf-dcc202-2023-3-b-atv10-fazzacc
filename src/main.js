import { getJoao, getMaria, setMaria, setJoao, deJoaoParaMaria, deMariaParaJoao } from "../joaoEMaria.js";

// main.js
console.log('módulo main');

console.log('João tem ' , getJoao(), ' maçãs!');
console.log('Maria tem ' , getMaria(), ' maçãs!');

deJoaoParaMaria();

console.log('João tem ' , getJoao(), ' maçãs!');
console.log('Maria tem ' , getMaria(), ' maçãs!');