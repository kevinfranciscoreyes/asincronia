const getUser = async () => {
    const API_BASE = "https://randomuser.me/api/"

    const result = await fetch(API_BASE)
    const data = await result.json()

    return data.results[0]
}

const showUser = async () => {
    const data = await getUser()

    const userImg = document.getElementById("user-image")
    // ejemplo con queryselector imaginando que no pusimos un ID
    // const userImg2 = document.querySelector("section > header > img.userImg")
    const userName = document.getElementById("user-name")

    userImg.src = data.picture.large
    userName.textContent = `${data.name.title} ${data.name.first} ${data.name.last}`
}

showUser()