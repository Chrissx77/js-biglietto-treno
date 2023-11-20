// TESTO
/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


// Istanziare due variabili tramite input (km, età)
const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));

//Tramite le variabili calcolare il prezzo del viaggio e l'eventuale sconto

let total;
let price = (userKm * 0.21).toFixed(2);

if (userAge >= 65) {

    let discount = ((price * 40) / 100).toFixed(2);
    total = (price - discount).toFixed(2);

    console.log("Età: ", userAge);
    console.log("Km: ", userKm);
    console.log("Il prezzo è: ", price, "$");
    console.log("Lo sconto (40%) è di: ", discount, "$");
    console.log("Il biglietto è: ", total, "$");
}
else if (userAge < 18) {
    let discount = ((price * 20) / 100).toFixed(2);
    total = (price - discount).toFixed(2);

    console.log("Età: ", userAge);
    console.log("Km: ", userKm);
    console.log("Il prezzo è: ", price, "$");
    console.log("Lo sconto (20%) è di: ", discount, "$");
    console.log("Il biglietto è: ", total, "$");
}

// else if(userAge === NULL){
//     total = 0;
//     console.log("Tariffa non valida: ", total, "$");
// }

else {
    total = price;

    console.log("Età: ", userAge);
    console.log("Km: ", userKm);
    console.log("Il prezzo è: ", total, "$");
}

//Mandare in out-put lo script
document.getElementById("my-id").innerHTML = "Il biglietto è: " + total + "$";

