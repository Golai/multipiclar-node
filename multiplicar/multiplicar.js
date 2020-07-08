const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {


    console.log("===================".green);
    console.log(`taba del ${base}`.green);
    console.log("===================".green);

    if (!Number(base)) {
        console.log(`El valor introducido ${base} no es un numero`);
        return;
    } else {
        if (!Number(limite)) {
            console.log(`El valor introducido ${limite} no es un numero`);
            return;
        }
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) { //para revisar si es un numero
            reject(`el valor introducido ${base} no es un numero `);
            return;
        } else {
            if (!Number(limite)) {
                reject(`el valor introducido ${limite} no es un numero `);
                return;
            }
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}