// need link for api
// document.ready function
// onclick function
// input user search info into api
// populate data
// set variable for user input
// fetch data


$(document).ready(function(){
    $('form').on("submit", (event)=>{
    event.preventDefault()
    const userInput = $('input[type="text"]').val()
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'

    }
    
    console.log(userInput)
    async function getPokeData(){
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${userInput}`)
        const data = await response.json()
        const image = data.id
        console.log(image)
        const name = data.name[0].toUpperCase() + data.name.slice(1);
        $('#pokeName').html(name);
        $('.pokeType').html(data.types[0].type.name);
        $('.pokeNumber').html(data.id);
        document.getElementById('pokepic').src = data.sprites.other["official-artwork"].front_default;

        const color = colors[data.types[0].type.name]

        $('.info').css("background-color", color)

        console.log(color)
 
        console.log(data);
    }

    getPokeData()
    })

})

// add images
// change color for types
