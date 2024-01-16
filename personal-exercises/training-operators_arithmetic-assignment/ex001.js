// Exercício de Aritmética Básica:

// Declare duas variáveis, a e b, atribua valores a elas.
// Calcule a soma, subtração, multiplicação e divisão de a e b.
// Atribua os resultados a novas variáveis.


const rl = require('readline-sync');

const n1 = 5; 
const n2 = 5; 

const sum = n1 + n2; 
const sub = n1 - n2; 
const mul = n1 * n2; 
const div = n1 / n2; 
const remainder = n1 % n2; 
const exp = n1 ** n2; 

console.log(`The sum between ${n1} and ${n2} is ${sum}`); 
console.log(`The subtraction between ${n1} and ${n2} is ${sub}`); 
console.log(`The multiplication between ${n1} and ${n2} is ${mul}`); 
console.log(`The division between ${n1} and ${n2} is ${div}`); 
console.log(`The division remainder between ${n1} and ${n2} is ${remainder}`); 
console.log(`The exponentiation between ${n1} and ${n2} is ${exp}`); 