let changeBg = () => {
    let body = document.querySelector('body')
    let switchButton= document.getElementById('switchButton')

    body.classList.toggle('dark')

    switchButton.classList.toggle('bi-toggle2-on');
    switchButton.classList.toggle('bi-toggle2-off');
}

let container = document.getElementById('container')

const tigers = [
        {
           img: './imagens/tiger.jpg',
           h2 : 'O tigre',
           p: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro é a maior espécie de felino do mundo junto com o leão'
        },
        {
            img: './imagens/chita.jpg',
            h2 : 'A chita',
            p: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro é a maior espécie de felino do mundo junto com o leão'
         },
         {
            img: './imagens/jaguar.jpg',
            h2 : 'O Jaguar',
            p: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro é a maior espécie de felino do mundo junto com o leão'
         },
         {
            img: './imagens/leon.jpg',
            h2 : 'O Leão',
            p: 'O leão [feminino: leoa] é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae.'
         },
         {
            img: './imagens/leopardo.jpg',
            h2 : 'O Leopardo',
            p: 'O leopardo é uma espécie de felídeo nativo da África e da Ásia. É, com o tigre, o leão, o leopardo-das-neves e a onça-pintada, um dos cinco grandes felinos do gênero Panthera.'
         },
         {
            img: './imagens/pantera-negra.jpg',
            h2 : 'A Pantera Negra',
            p: 'Panthera é um gênero de felinos que inclui animais como o tigre, o leão, a onça, o leopardo e o leopardo das neves.'
         }
    ]

    for(let tiger of tigers) {

        container.innerHTML += `
    <div class="card-animals">
        <h2 class="dark item">${tiger.h2}</h2>
        <img src="${tiger.img}">
        <p class="dark item">${tiger.p}</p>
    </div>
        `
    }


