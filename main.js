/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano
*/


//controlla che sia nella lista di chi può accedere

//console.log(list_email);

/* for (let i = 0; i < list_email.length; i++) { */
/*     const element = list_email[i]; */
/*     console.log(element); */
/*     document.querySelector('#verificate').addEventListener('click', function(){ */
/*         if(email_verificate == element){ */
/*             alert('you can log') */
/*         } else { */
/*             alert('not') */
/*         } */
/*     }) */
/*      */
/*  */
/* } */
/*  */
document.querySelector('#verificate').addEventListener('click', function () {



    const email_verificate = document.querySelector('#email').value;
    console.log(email_verificate);
    const list_email = ['nicola71@gmail.com', 'pasqualinomolosso@gmail.com', 'pippo11@gmail.com',
    'paolo2000@gmail.com'];
    const approvate = list_email.includes(email_verificate);

    if (approvate == true) {
        alert('You can log');
    } else {
        alert("You aren't registrede");
    }



})



/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in
base a chi fa il punteggio più alto.
*/
/* function generateRandomInt(min , max) { */
/*     max = 6; */
/*     min = 1; */
/*  */
/*   return Math.floor((Math.random() * (max - min)) + 1); */
/*  */
/* } */
/*  */
document.querySelector('#dice').addEventListener('click', function () {
    const dice1 = document.querySelector('#dice-1').innerHTML = Math.floor((Math.random() * 6) + 1);
    const dice2 = document.querySelector('#dice-2').innerHTML = Math.floor((Math.random() * 6) + 1);


    if (dice1 > dice2) {

        document.querySelector('h3').innerHTML = "Il player 1 ha vinto!"
        
    } else if (dice1 < dice2) {

        document.querySelector('h3').innerHTML = "Il player 2 ha vinto!"
        
    } else {

        document.querySelector('h3').innerHTML = "Il risultato è pari!"

    }




})
Math.floor((Math.random() * 6) + 1);
