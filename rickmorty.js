const API_BASE = "https://rickandmortyapi.com/api"

const getCharacters = async () => {
    const ENDPOINT = "/character/1,2,3,4,5,6,7,8,9,10,11,12"
    // https://rickandmortyapi.com/api/character/1,2,3,4,5...
    const result = await fetch(API_BASE + ENDPOINT)
    const data = await result.json()

    return data
}


const showCharacters = async () => {
    const characters = await getCharacters()
    const charactersElement = document.getElementById("characters")


    characters.forEach(character => {
        charactersElement.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.location.name}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
            `
    })
}

const groupedCharacters = async () => {
    const characters = await getCharacters()

    const group = Object.groupBy(characters, ({ location: { name } }) => name)

    for (const locationName in group) {
        console.log(locationName, group[locationName])
    }
}

groupedCharacters()
showCharacters()