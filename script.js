const mainImg = document.querySelector('.main-img')
const btn = document.querySelector('.rnd-btn')
const search = document.querySelector('.search')
const name = document.querySelector('#name')
const baseURL = 'https://superheroapi.com/api.php/1207214223466233'

search.addEventListener('click',findHero)

function findHero(e){
    let heroName = name.value
    // console.log(heroName)
    fetch(`${baseURL}/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        mainImg.innerHTML = `<img class="main-img" src="${json.results[0].image.url}">`
    })

}

btn.addEventListener('click',display)

function display(e){
    
    
    
    const superHero = (id) =>{
        fetch(`${baseURL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            mainImg.innerHTML = `<img class="main-img" src="${json.image.url}">`
            // console.log(`${json.image.url}`)
        })
    }
    
    const random = () =>{
        result = Math.floor(Math.random()*731) + 1
        return result
    }
    superHero(random())
}