import ghibliClient from './ghibli.js'

const btnGetMoviesId = document.getElementById("getMoviesId")
const btnGetMoviesTitleYear = document.getElementById("getMoviesTitleYear")
const btnGetMoviesByYear = document.getElementById("getMoviesByYear")

btnGetMoviesId.addEventListener('click', async () => {
    const result = await ghibliClient.getFilmsId()
    console.log(result)
})

btnGetMoviesTitleYear.addEventListener('click', async () => {
    const result = await ghibliClient.getTitleAndYear()
    console.log(result)
})

btnGetMoviesByYear.addEventListener('click', async () => {
    const yearQuery = prompt("¿De qué año quieres las peliculas? ej: 1999")
    const result = await ghibliClient.byYear(yearQuery)
    console.log(result)
})