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

const mainCarouselImages = [];
const smallCarouselImages = [];
const typeOfAnimal = [];

createImg (mainCarouselImages, '.my-carousel-images', 'active');
createImg (smallCarouselImages, '.my-thumbnails', 'small-active');

let activeElement = 0;
let activeSmallElement = 0;
let activeTitleElement = 0;

const buttonNext = document.querySelector('div.my-next');

buttonNext.addEventListener('click', function(){
    mainCarouselImages[activeElement].classList.remove('active');
    smallCarouselImages[activeSmallElement].classList.remove('small-active');
    typeOfAnimal[activeTitleElement].classList.remove('active-title');

    if (activeElement === mainCarouselImages.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    };

    if (activeSmallElement === smallCarouselImages.length - 1){
        activeSmallElement = 0;
    } else {
        activeSmallElement++;
    };

    if(activeTitleElement === typeOfAnimal.length - 1){
        activeTitleElement = 0;
    } else {
        activeTitleElement++;
    };

    mainCarouselImages[activeElement].classList.add('active');
    smallCarouselImages[activeSmallElement].classList.add('small-active');
    typeOfAnimal[activeTitleElement].classList.add('active-title');
});

const buttonPrevious = document.querySelector('div.my-previous');

buttonPrevious.addEventListener('click', function(){
    mainCarouselImages[activeElement].classList.remove('active');
    smallCarouselImages[activeSmallElement].classList.remove('small-active');
    typeOfAnimal[activeTitleElement].classList.remove('active-title');

    if (activeElement === 0){
        activeElement = mainCarouselImages.length - 1;
    } else {
        activeElement--;
    };

    if (activeSmallElement === 0){
        activeSmallElement = smallCarouselImages.length - 1;
    } else {
        activeSmallElement--;
    };

    if(activeTitleElement === 0){
        activeTitleElement = typeOfAnimal.length - 1;
    } else {
        activeTitleElement--;
    };

    mainCarouselImages[activeElement].classList.add('active');
    smallCarouselImages[activeSmallElement].classList.add('small-active');
    typeOfAnimal[activeTitleElement].classList.add('active-title');
});

function createImg (array, container, myClass) {
    for (let i = 0 ; i < animals.length ; i++){
        const imageOfAnimal = document.createElement('img');
        imageOfAnimal.src = `img/${animals[i].image}`;
        array.push(imageOfAnimal);
    };
    const carouselContainer = document.querySelector(container);

    for (let i = 0; i < array.length; i++) {
        carouselContainer.appendChild(array[i]);
    };

    array[0].classList.add(myClass);
};

for (let i = 0 ; i < animals.length ; i++){
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    document.querySelector('.my-carousel-images').appendChild(textContainer);
    const title = document.createElement('h1');
    textContainer.appendChild(title);
    title.innerHTML = animals[i].animal;
    typeOfAnimal.push(title);
};

const carouselTitleContainer = document.querySelector('div.text-container');

for (let i = 0; i < typeOfAnimal.length; i++) {
    carouselTitleContainer.appendChild(typeOfAnimal[i]);
};

typeOfAnimal[0].classList.add('active-title');