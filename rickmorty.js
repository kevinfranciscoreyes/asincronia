const API_BASE = "https://rickandmortyapi.com/api";

let cachePersonajes = null;

const getCharacters = async () => {
    if (cachePersonajes !== null) {
        console.log("⚡ Datos cargados desde la memoria local (Petición evitada)");
        return cachePersonajes;
    }

    console.log("🌐 Petición real hecha al servidor de la API...");
    const ENDPOINT = "/character/1,2,3,4,5,6,7,8,9,10";
    const result = await fetch(API_BASE + ENDPOINT);
    const data = await result.json();

    cachePersonajes = data;
    return data;
};

const showCharacters = async () => {
    const characters = await getCharacters();
    const charactersElement = document.getElementById("characters");

    charactersElement.innerHTML = "";

    characters.forEach(character => {
        charactersElement.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text"><strong>ID:</strong> ${character.id}</p>
                    <p class="card-text"><strong>Especie:</strong> ${character.species}</p>
                </div>
            </div>
        </div>
        `;
    });
};

const showGroupedCharacters = async () => {
    const characters = await getCharacters();
    const agrupacionElement = document.getElementById("agrupacion");

    const group = Object.groupBy(characters, (character) => character.species);

    agrupacionElement.innerHTML = "<h3>2. Agrupación por especie:</h3>";

    for (const especie in group) {
        agrupacionElement.innerHTML += `<h5 class="mt-3 text-primary">${especie}</h5>`;

        let listaOrdenada = "<ol class='list-group list-group-numbered'>";
        group[especie].forEach(character => {
            listaOrdenada += `<li class='list-group-item'>${character.name} (ID: ${character.id})</li>`;
        });
        listaOrdenada += "</ol>";

        agrupacionElement.innerHTML += listaOrdenada;
    }
};

const showFichaCharacter = async () => {
    const characters = await getCharacters();
    const fichaElement = document.getElementById("ficha");

    const personaje = characters[0];

    fichaElement.innerHTML = `
        <h3>3. Ficha de personaje:</h3>
        <div class="card" style="width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-success">${personaje.name}</h5>
                <p class="card-text"><strong>ID:</strong> ${personaje.id}</p>
                <p class="card-text"><strong>Especie:</strong> ${personaje.species}</p>
            </div>
        </div>
    `;
};

document.getElementById("btn-mostrar").addEventListener("click", showCharacters);
document.getElementById("btn-agrupar").addEventListener("click", showGroupedCharacters);
document.getElementById("btn-ficha").addEventListener("click", showFichaCharacter);