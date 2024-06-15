
const { registrar, leer } = require('./operaciones');

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2); 
// const argumegntos = process.argv;
// console.log('ARGUMENTIS', argumentos);
// console.log('que es?', stringify(registrar));

if (operacion === 'registrar') {
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Esta vaina no se encuentra');
}