/*Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.*/

/*Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let caroselloEl = document.querySelector('.box');
let titleElement = document.querySelector(".title")
let descriptionElement =document.querySelector(".description")

let Attiva = 0

images.forEach((element,i) =>{
    //creo elemento dom per appendere gli elementi
    const slideMarkup = `<img class="${i === Attiva ? 'active' : ''}" src="./assets/${element.image}" alt="">`
    caroselloEl.insertAdjacentHTML('beforeend', slideMarkup);
    //console.log(slideMarkup);
    let titleMarkup = `<h1 class="${i === Attiva ? 'active' : ''}">${element.title}</h1>`
    titleElement.insertAdjacentHTML("beforeend", titleMarkup)
    //console.log(titleElement);
    let descriptionMarkup = `<p class="${i === Attiva ? 'active' : ''}">${element.text}</p>`
    descriptionElement.insertAdjacentHTML("beforeend", descriptionMarkup)
})

/*Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.*/


const btnNext =document.querySelector('.next');

const btnback =document.querySelector('.back');


//evento click btnNext

btnNext.addEventListener('click',function() {
    console.log('next');

    //seleziona tutte le immagini nel markup con lo scopo di trovare quella attiva
    const slides = document.querySelectorAll('.box > img');
    const titles = document.querySelectorAll(".title > h1")
    const descrtiption = document.querySelectorAll(".description > p")

    //console.log(carosello[Attiva]);  //visualizzo l'immagine attualmente attiva
    const slideattiva = slides[Attiva] 
    const activeTitle = titles[Attiva]
    const activeDescrtiption = descrtiption[Attiva]

    //tolgo la classe attiva
    slideattiva.classList.remove('active')
    activeTitle.classList.remove("active")
    activeDescrtiption.classList.remove("active")

    //incremento Attiva
    Attiva++  //Attiva = Attiva + 1

    //seleziono la seconda immagine
    const nextSlide = slides[Attiva]
    const nextTitle = titles[Attiva]
    const nextDescription = descrtiption[Attiva]

    //applico la classe attiva
    nextSlide.classList.add('active')
    nextTitle.classList.add("active")
    nextDescription.classList.add("active")
})


//evento click btnback

btnback.addEventListener('click',function() {
    console.log('back');

    //seleziona tutte le immagini nel markup con lo scopo di trovare quella attiva
    const slides = document.querySelectorAll('.box > img');
    const titles = document.querySelectorAll(".title > h1")
    const descrtiption = document.querySelectorAll(".description > p")

    //console.log(carosello[Attiva]);  //visualizzo l'immagine attualmente attiva
    const slideattiva = slides[Attiva] 
    const activeTitle = titles[Attiva]
    const activeDescrtiption = descrtiption[Attiva]

    //tolgo la classe attiva
    slideattiva.classList.remove('active')
    activeTitle.classList.remove("active")
    activeDescrtiption.classList.remove("active")

    //incremento Attiva
    Attiva--  //Attiva = Attiva + 1

    //seleziono la seconda immagine
    const nextSlide = slides[Attiva]
    const nextTitle = titles[Attiva]
    const nextDescription = descrtiption[Attiva]

    //applico la classe attiva
    nextSlide.classList.add('active')
    nextTitle.classList.add("active")
    nextDescription.classList.add("active")
})