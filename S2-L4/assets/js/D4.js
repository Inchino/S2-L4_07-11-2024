/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    return l1 * l2;
}
console.log(area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2){
    sum = num1+num2;
    if(num1 === num2){
        return sum * 3;
    }else{
        return sum;
    }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const c = 19;
let sub = 0;

function crazyDiff(num4, c){
    sub = Math.abs(num4 - c);
    if(num4 > c){
        return sub * 3;
    }else return sub;
}
console.log(crazyDiff(20, c));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n >= 20 && n <= 100 || n === 400){
        return true;
    }else{
        return false;
    }
}
console.log(boundary(450));    

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string){
    if(string.indexOf('EPICODE' === 'EPICODE')){
        return string;
    }else{
        return string + 'EPICODE';
    }
}
console.log(epify('EPICODER'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num6){
    if(num6 % 3 === 0 || num6 % 7 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(check3and7(19));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


function reverseString(string) {
    let nwString = string.split('');
    let revString = nwString.reverse();
    return revString.join('');
  }
  
  console.log(reverseString("Alessandro"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string){
    let myString = string.split(' ');
    for (let i=0; i< myString.lenght; i++ ){
      myString = myString[i].charAt(0).toUpperCase()+ myString[i].slice(1); 
    }
    return myString.join(' ');
}
console.log(upperFirst('facciamo una preghiera tutti insieme'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string){
    return string.slice(1 , -1);
}
console.log(cutString('facciamo una preghiera tutti insieme'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let casualnum = [];
    for(let i=0; i<n; i++){
        casualnum.push(Math.floor(Math.random()) * 11);
    }
    return casualnum;
}
console.log(giveMeRandom(13));
