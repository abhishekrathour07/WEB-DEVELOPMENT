import generateName from 'sillyname';
import  superheroes from 'superheroes'

var sillyName = generateName();
let hero =  superheroes();

console.log(`Hello i'm your ${sillyName}`);
console.log(`Hello i'm your ${hero}`);