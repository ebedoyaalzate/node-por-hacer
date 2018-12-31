const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Bandera para saber si se encuentra completado'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actializa el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', { descripcion })
    .command('listar', 'Lista las tareas', {
        completado: {
            alias: 'c',
            desc: 'Bandera para saber si se encuentra completado',
            type: 'boolean'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}