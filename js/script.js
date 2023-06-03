console.log('JS OK')

//recupero gli elementi dal dom
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const innerGallery = document.querySelector('.gallery')
const prevImgGallery = document.querySelector('.prev-img')
//lista delle immagini da passare al 
const listImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Variabile di appoggio per gli elementi da montare 

let imgElement = '';

//*******/\ | Ciclo di montaggio degli element | \/*****//

for (let i = 0; i < listImg.length; i++){
    imgElement += `<img src = "${listImg[i]}" >`;
}

// inseriamo nel dom gli elementi montai
innerGallery.innerHTML = imgElement;


/********************* ! | CAROUSEL | ! *********************/

//selezione l'intero nodo di immagini
const images = document.querySelectorAll('.gallery img');

/*preparo la gestione delle immagini alla quale successivamente andrò a mettere la classe d-block
seleziono la immagine in posizione 0 per mostrarla immediatamente sulla pagine al caricamento */

let currentImg = 0;

// aggiungo la classe d-block alla immagini selezionata 

images[currentImg].classList.add('d-block');


/********************* ! | THUMBNAILS | ! *********************/

//Inserisco le thumbnails
prevImgGallery.innerHTML += imgElement;

// seleziono l'elemnto al quale devo applicare le classi

const thumbImg = document.querySelectorAll('.prev-img img');

let currentThumb = 0;

thumbImg[currentThumb].classList.add('border');


/********************* ! | BTN | ! *********************/


// Al click su next deve togliere la classe d-block alla immagine e aggiungerla alla img in posizione seguente incrementtando di 1//

nextBtn.addEventListener('click', function(){
    
    //Aggiungo controllo: se non ci sono più immagini stoppa l'incremento
    
    if (currentImg === images.length - 1 ) {
        return;
    }
    
    //rimuovo la classe dall'immagine
    images[currentImg].classList.remove('d-block');
    
    thumbImg[currentThumb].classList.remove('border');

    //INCREMENTO LA POSIZIONE 
    
    currentImg++;

    currentThumb++;
    
    //aggiungo la classe 
    images[currentImg].classList.add('d-block');
    
    thumbImg[currentThumb].classList.add('border');
});

// al click deve fare la stessa cosa di sopra ma decrementando la posizione du currentImg
prevBtn.addEventListener('click', function(){
    
    //Aggiungo controllo: se non ci sono più immagini stoppo
    
    if (currentImg === 0){
        return;
    }
    
    //rimuovo la classe dall'immagine
    images[currentImg].classList.remove('d-block');

    thumbImg[currentThumb].classList.remove('border');

    
    //INCREMENTO LA POSIZIONE 
    
    currentImg--;
    
    currentThumb--;

    //aggiungo la classe 
    images[currentImg].classList.add('d-block');

    thumbImg[currentThumb].classList.add('border');

    
});




