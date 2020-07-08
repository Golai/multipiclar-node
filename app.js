// required
// const fs = require('fs');
// const fs = require('express'); // cuando en la documentacion oficial no existe no son nativos, son codigos que otras personas hicieron
// const fs = require('./fs');// cosas que nosotros creamos 


// let base = 6;
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base*i}\n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado exitosamente!`);
// });

/////////////////////// importar lo que esta en multiplicar.js

// const { crearArchivo } = require('./multiplicar/multiplicar')

// let base = '5';

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado ${archivo}`))
//     .catch(e => console.log(e));



///////////////////// recolectando la base por el path

// const { crearArchivo } = require('./multiplicar/multiplicar')

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado ${archivo}`))
//     .catch(e => console.log(e));

//////////////////usar YARGS

const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

// let argv2 = process.argv;

// console.log('Limite:', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado ${archivo}`))
//     .catch(e => console.log(e));