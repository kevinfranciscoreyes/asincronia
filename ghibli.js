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

            const data = await result.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async getFilmsId() {
        const films = await this.getFilms()
        const filmsID = films.map((film) => film.id)
        return filmsID
    }

    async getTitleAndYear() {
        const films = await this.getFilms()
        const filmsTitleAndYear = films.map((film) => {
            return { title: film.title, year: film.release_date }
        })
        return filmsTitleAndYear
    }

    async byYear(year) {
        const yearIsNaN = isNaN(year)

        if (yearIsNaN) {
            console.log("Ingresa un número porfavor")
            return []
        }
        
        const films = await this.getFilms()
        
        if (year <= this.OLDER_FILM_YEAR) {
            return films
        }

        const filteredFilms = films.filter((film) => film.release_date >= year)
        return filteredFilms
    }
}

const ghibliClient = new GhibliAPI()
export default ghibliClient