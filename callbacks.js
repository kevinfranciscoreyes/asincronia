function procesarEntradaUsuario(funcionCallback) {
    const edadUsuario = prompt('Porfavor, ingresa tu edad')
    funcionCallback(edadUsuario)
}

function foo() {
    console.log('Soy una funcion callback')
}

function imprimirEdad(edad) {
    console.log(`el usuario tiene ${edad} años`)
}

function filtrarAcceso(edad) {
    if (edad >= 18) {
        console.log('puedes pasar')
        return
    }

    console.log('No puedes pasar')
}

// procesarEntradaUsuario(foo)

const mascotas = ['Agustin', 'Eduardo', 'Isabella', 'Popa', 'Titan']


const saludoMascotas = mascotas.map(function(mascota, indice, arreglo){
    return `hola ${mascota} ${indice}`
})

console.log(saludoMascotas)