# Carousel di immagini

Creo un carousel di immagini in sequenza con due bottoni next e prev

- Prendo gli elementi dal dom
- Creo un array con i link delle immagini da passare al dom
- Creo una variabile di appoggio vuota da rimepire man mano ad ogni ciclo.
- Creo il ciclo per l'estrazione delle immagine dalla lista array e ad ogni ciclo monterà il template lideral per ogni immgine
    - Richiamo la variabile di appoggio, ad ogni ciclo avrà valore uguale ad i e monterà il template lideral
- Stampo sul dom la variabile di apoggio

#### CAROUSEL 
- Seleziono dal dom tutto l'intero gruppo di nodi inseriti precedentemente

Essendo che le immagini non sono visibili devo fare in modo che al caricamento della pagina sia visibile la prima immagine
- Creo la variabile di partenza con valore 0 che indica la aposizione del primo elemtno dentro l'array.
- Aggiungo la classe d-block al primo elemento nel dom 

<br>
<br>
<br>

- Creo il elemento in ascolto in incremento
    - Creo un controllo in modo che **SE** NON ci sono più immagini da mostrare non fa andare oltre
    - creo l'evento per rimuovere la classe d-none ad al elemto corrente (in questo caso sarà 0 e poi 1, 2 ecc...)
    - incremento di una posizione
    - aggiungo la classe d-block (all'immagine successiva)

<br>
<br>

- Creo il elemento in ascolto in decremento
    - Creo un controllo in modo che **SE** NON ci sono più immagini da mostrare non fa andare oltre
    - creo l'evento per rimuovere la classe d-block ad al elemto corrente
    - decremento di una posizione
    - aggiungo la classe d-block (all'immagine successiva)

<br>
<br>
<br>

### CREAZIONE DELLE THUMBNAILS

- Scrivo nel dom tutti gli elementi presenti nel array, questa volta devono essere una dietro l'altro senza riscriversi 
