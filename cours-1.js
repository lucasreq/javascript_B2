/* function nomination(nom,prenom) {
    return nom + ' ' + prenom;
}

ex 1
let result = nomination("Jean-michel","Crapaud")
result = nomination('Paul','decul')
console.log(result)

function square(number) {
    return number * number;
}

let sqresult = square(78)
console.log(sqresult)

*/

/*
ex2
 let description1 = "il fallait travailler cet été"
let description2 = "Tu as le droit a une biere"
let description3 = "Tu peux payer ta tounée"
let descriptionull = "Tu as oublié ton portefeuille"

let user = {
    name : ["Lucas Requena"],
    budget : null,

    drink : function() {

        if (user.budget == null){
            console.log(`Bravo,${user.name},${descriptionull}. Voici le rappel de ton budget : ${user.budget}`);
        }
        if (user.budget > 0 && user.budget < 5){
            console.log(`Bravo,${user.name},${description1}. Voici le rappel de ton budget : ${user.budget}`);
        }
        if (user.budget == 5){
            console.log(`Bravo,${user.name},${description2}. Voici le rappel de ton budget : ${user.budget}`);
        }
        if (user.budget > 5){
            console.log(`Bravo,${user.name},${description3}. Voici le rappel de ton budget : ${user.budget}`);
        }
    }
}

const result = user.drink() */


/* 
ex3
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.map(function(x){
    if (x % 2 === 0){
        console.log("pair")
    }
    else {
        console.log("impair")
    }
}) */

/* EXO 4

function palindrome(truc){
    const tructab = truc.split('')
    const tructabrev = tructab.reverse()
    const tructabrevj = tructabrev.join('')

    if (truc === tructabrevj){
        console.log("It's a palindrome!!!!!! <3")
    }
    else{
        console.log("It's not a palindrome :'( :'( :'(")
    }

}

palindrome("poulet")
palindrome("kayak") */

function compare(tab1,tab2){
    let tab = []
    tab1.map(function(x){
        let check = tab1.includes(tab2)
        if (check == true){
            tab.push(x);
        }
    }
}

const tab1 = [1, 2, 3, 4, 8]
const tab2 = [2, 3, 4, 2, 1, 1]
