const configBase = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        aias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imrime la tabla de multiplicar en cosola', configBase)
    .command('crear', 'crea un archivo con la tabla de multiplicar que se ingresa en consola', configBase)
    .help()
    .argv;


module.exports = {

    argv
}