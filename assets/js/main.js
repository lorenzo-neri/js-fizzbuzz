/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

- per i multipli di 3 stampi “Fizz” al posto del numero
- e per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/


//BONUS 1:
//Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

const containerEl = document.createElement('div');
const bodyEl = document.querySelector('body');
const titleEl = document.createElement('h1');
const ulEl = document.createElement('ul');

bodyEl.append(titleEl);
bodyEl.append(containerEl);
titleEl.append('FizzBuzzDOM');
containerEl.append(ulEl);

//BONUS 2:
//Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. 

containerEl.classList.add('container');
bodyEl.classList.add('text-center', 'bg-primary');
titleEl.classList.add('text-light');

ulEl.classList.add('d-flex');
ulEl.classList.add('flex-wrap');
ulEl.classList.add('list-unstyled');



//stampo in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    const liEL = document.createElement('li');
    ulEl.append(liEL);

    liEL.classList.add('d-flex');
    liEL.classList.add('align-items-center');
    liEL.classList.add('m-2');
    liEL.classList.add('justify-content-center')

    //per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        liEL.append('FizzBuzz');
        liEL.classList.add('text-bg-danger');

        //per i multipli di 3 stampo “Fizz” al posto del numero
    } else if (i % 3 === 0) {
        console.log('Fizz');
        liEL.append('Fizz');
        liEL.classList.add('text-bg-success');

        //per i multipli di 5 stampo “Buzz”
    } else if (i % 5 === 0) {
        console.log('Buzz');
        liEL.append('Buzz');
        liEL.classList.add('text-bg-warning');

    } else {
        console.log(i);
        liEL.append(i);
        liEL.classList.add('text-bg-info');

    }

}





