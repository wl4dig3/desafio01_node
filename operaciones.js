const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => { 
    const registros = JSON.parse(fs.readFileSync('./citas.json', 'utf-8')); 
    const nuevoRegistro = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }

    registros.push(nuevoRegistro)
    fs.writeFileSync('./citas.json', JSON.stringify(registros))
    
};

const leer = () => {
  //mostrar por consola las citas de animales registrados  
  const registros = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'))
  console.log(registros)

  const registroJSON = JSON.parse(registros)
  for(const registro of registroJSON) {
    console.log(registro)
  }
};

module.exports = {
  registrar,
  leer
}; 