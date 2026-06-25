async function showMovies() {
    const result = await fetch('https://swapi.info/api/films')
    const data = await result.json()

    data.forEach((movie) => {
        console.log(movie.title)
    })
}

showMovies()