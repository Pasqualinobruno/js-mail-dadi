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
const email_verificate = document.querySelector('#email').value;
//console.log(email_verificate);
const list_email = ['nicola71@gmail.com', 'pasqualinomolosso@gmail.com', 'pippo11@gmail.com', 'paolo2000@gmail.com']

/* for (let i = 0; i < list_email.length; i++) { */
/*     const element = list_email[i]; */
/*     //console.log(element); */
/*      */
/* } */
document.querySelector('#verificate').addEventListener('click', function(){
   const approvate = email_verificate.includes(list_email);
 if(email_verificate === approvate) {
    alert('You can log')
 } else {
    alert("You aren't registrede")
 }
})