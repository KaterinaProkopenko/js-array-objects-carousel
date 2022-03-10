/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const animals = [
    {
        animal: 'cat',
        image: 'cat.jpg',
    },

    {
        animal: 'parrots',
        image: 'parrots.jpg'
    },

    {
        animal: 'fish',
        image: 'fish.jpg'
    },

    {
        animal: 'alpacas',
        image: 'alpacas.jpg'
    },

    {
        animal: 'eagle',
        image: 'eagle.jpg'
    },
];

let mainCarouselImages = [];

for (let i = 0 ; i < animals.length ; i++){
    console.log(animals[i].image);
    const imageOfAnimal = document.createElement('img');
    imageOfAnimal.src = `img/${animals[i].image}`;
    mainCarouselImages.push(imageOfAnimal);
    
        /* mainCarouselImages.push(`<img src="img/${animals[i].image}" class="active" alt="Picture of an animal">`); */
};

console.log(mainCarouselImages);

let mainCarouselContainer = document.querySelector('.my-carousel-images');

for(let i = 0; i < mainCarouselImages.length; i++) {
    console.log(mainCarouselImages[i]);
    mainCarouselContainer.appendChild(mainCarouselImages[i]);
}

mainCarouselImages[0].classList.add('active');

let activeElement = 0;

const buttonNext = document.querySelector('div.my-next');

buttonNext.addEventListener('click', function(){
    mainCarouselImages[activeElement].classList.remove('active');

    if (activeElement === mainCarouselImages.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    }

    mainCarouselImages[activeElement].classList.add('active');
});

const buttonPrevious = document.querySelector('div.my-previous');

buttonPrevious.addEventListener('click', function(){
    mainCarouselImages[activeElement].classList.remove('active');

    if (activeElement === 0){
        activeElement = mainCarouselImages.length - 1;
    } else {
        activeElement--;
    }

    mainCarouselImages[activeElement].classList.add('active');
})


