const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then( resp => {
//         console.log(resp);
//     })

// clima.getClima(40.750000, -74.000000)
//     .then( console.log )
//     .catch( console.log )

const getInfo = async( direccion ) => {


    try {
        
        const latLng = await lugar.getLugarLatLng( direccion );
        const actual = await clima.getClima(latLng.lat, latLng.lng);
        return `El clima de ${direccion} es ${actual}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then( console.log )
    .catch( console.log )