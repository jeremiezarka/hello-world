//Question 2

let phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens"
let phraseSansEspace = phrase.replace(/ /g, "");
let phraseTab = phraseSansEspace.split('');
let phraseTrier = phraseTab.sort();
console.log(phraseTrier.toString());

console.log(" ")

let phrase2 = "une phrase sans majuscule"
let motsTab = phrase2.split(' ');
let phraseConstruite = '';
for (let mot of motsTab) {
     let motModif = mot.charAt(0).toUpperCase()+mot.substring(1);
     phraseConstruite += motModif+" ";
}
console.log(phraseConstruite.toString());

console.log(" ")

let tirage = 0;
let nombreTab = [];
do {
    testNombre = true;
    nombreRandom = Math.floor(Math.random()*100)
    if (nombreTab.includes(nombreRandom)){
        testNombre = false;
    }
    if(testNombre == true){
        nombreTab.push(nombreRandom);
    }
    tirage++;
}while(nombreTab.length < 100)

console.log(nombreTab.toString());
console.log(tirage + " essais");

let dateDebut = new Date();

const TAILLE = 100
let tabDeBingo = new Array(TAILLE);
tabDeBingo.fill(false);//remplir tableau de faux

let compteur = 0;
let nbreEssai = 0;
let hasard;
do{
     hasard = Math.round(Math.random()*TAILLE);
    if(tabDeBingo[hasard] === false){
        tabDeBingo[hasard] = true;
        compteur++;
    }
    nbreEssai++;
}while(compteur < TAILLE)
console.log("Nombre d'essai : "+ nbreEssai)

let dateFin = new Date();

console.log(dateFin.getTime() - dateDebut.getTime());

console.log(" ");

/*for (let i = 1; i <= 100 ; i++) {
    if (i%5==0 && i%3==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Buzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
*/
let nombre =1;


