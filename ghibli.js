class GhibliAPI {
    constructor(baseURL = "https://ghibliapi.vercel.app/films/") {
        this.baseURL = baseURL
        this.OLDER_FILM_YEAR = 1986
    }

    async getFilms() {
        try {
            const result = await fetch(this.baseURL)

            if (!result.ok) {
                throw new Error("Hubo un error al recibir la información");
            }

            const data = result.json()

            return data
        } catch (error) {
            console.error(error)
        }
    }

    async getFilmsId() {
        const films = await this.getFilms()

        const filmsID = films.map((film) => {
            return film.id
        }) // [id1, id2, id3, id4, idN...]

        return filmsID
    }

    async getTitleAndYear() {
        const films = await this.getFilms() // [{}, {}...]

        const filmsTitleAndYear = films.map((film) => {
            return { title: film.title, year: film.release_date }
        }) // [{title: film1, year: film1}, {title: film2, year: film2}...]

        console.log(filmsTitleAndYear)
    }

    getTitlesAndDirectors() { }
    getTitleAndDescription() { }

    async byYear(year) {
        const yearIsNaN = isNaN(year) // true si es NaN y false ni no es NaN (not a number)

        if (yearIsNaN) {
            return console.log("Ingresa un número porfavor")
        }
        const films = await this.getFilms()
        
        if (year <= this.OLDER_FILM_YEAR) {
            // ejemplo de pelicula más antigua dinámica
            // const years = films.map(film => film.release_date) // [1986, 1988, 1988, 1989...]
            // console.log(Math.min(...years))
            return films
        }

        
        const filteredFilms = films.filter((film) => {
            if (film.release_date >= year) {
                return film
            }
        })
        
        return filteredFilms
    }
}

const ghibliClient = new GhibliAPI()

export default ghibliClient
