function prepararCafé() {
    const promesa = new Promise((resolve, reject) => {
        console.log('Se está preparando el café...')

        setTimeout(() => {
            resolve('¡El café está listo para tomar!')
        }, 2000)
    })

    return promesa
}

function lavarRopa() {
    const promesa = new Promise((resolve, reject) => {
        console.log('Se está lavando la ropa...')

        setTimeout(() => {
            resolve('¡Ropa Lista!')
        }, 500)
    })

    return promesa
}

function rutinaMañanaPromesasSecuencial() {
    console.log('Me despierto')
    console.log('Bajo las escaleras')
    console.log('Prendo la maquina de café')

    prepararCafé()
        .then((valor) => {
            console.log(valor, 'Primer Then') // valor: café listo
            return lavarRopa()
        })
        .then((valor) => {
            console.log(valor, 'Segundo Then') // valor: ropa lista
        })
        .catch((error) => {
            console.log(error, 'ESte es eL CATCH')
        })

    console.log('Hola')

}

function rutinaMañanaPromesasParalelas() {
    console.log('Me despierto')
    console.log('Bajo las escaleras')
    console.log('Prendo la maquina de café')

    Promise.all([prepararCafé(), lavarRopa()])
        .then((resultados) => {
            console.log(resultados[0])
            console.log(resultados[1])
        })
        .finally(() => {
            console.log('Terminé todo... me voy a mirmir denuevo')
        })

    console.log('Hola')

}

// Async y await es azúcar sintáctico para la ejecución de Promesas
// es exactamente ejecutar una promesa, pero con una sintaxis similar 
// a lo que sería una programación sincrónica
async function rutinaMañanaAsyncAwait() {
    try {
        console.log('Me despierto')
        console.log('Bajo las escaleras')
        console.log('Prendo la maquina de café')

        const resLavarRopa = await lavarRopa()
        const resPrepCafe = await prepararCafé()

        console.log(resLavarRopa)
        console.log(resPrepCafe)
    } catch (error) {
        console.log('Hubo un error:' + error.message)
    } finally {
        console.log('Terminé de hacer todo')
    }
}

rutinaMañanaAsyncAwait()