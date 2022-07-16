const mainImg = document.querySelector('.main-img')
const btn = document.querySelector('.rnd')
const search = document.querySelector('.search')
const theName = document.querySelector('#name')
const baseURL = 'https://superheroapi.com/api.php/1207214223466233'

search.addEventListener('click', findHero)

const getHTML = (char) => {
    const name = `<h2>${char.name}</h2>`
    const stat = Object.keys(char.powerstats).map(stat => {
        return `<h4>${stat.toUpperCase()}: ${char.powerstats[stat]}</h4>`

    }).join('')
    const img = `<img class="main-img" src="${char.image.url}"></img>`
    mainImg.innerHTML = `${name}${img}${stat}`
}

function findHero(e) {
    let heroName = theName.value
    // console.log(heroName)
    fetch(`${baseURL}/search/${heroName}`)
        .then(response => response.json())
        .then(json => {
            const link = json.results[0]
            getHTML(link)
        })

}

btn.addEventListener('click', display)

function display(e) {
    const superHero = (id) => {
        fetch(`${baseURL}/${id}`)
            .then(response => response.json())
            .then(json => {
                getHTML(json)
            })
    }

    const random = () => {
        result = Math.floor(Math.random() * 731) + 1
        return result
    }
    superHero(random())
}