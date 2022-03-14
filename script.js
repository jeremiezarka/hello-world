console.log('hello world')
//"hello world".log //automatique log

let uneVariable;
let unChffre = 42;
console.log(uneVariable);
console.log(unChffre);
unChffre = "Salut";
console.log(unChffre);

function mafonction(){
    console.log("l'intérieur de ma fonction.");
}
mafonction();

function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}

console.log(addition(1, 3));

let hd2wm143 =  ['Samuel', 'Clement', 'Rhyan'];

console.log(hd2wm143.toString());
console.log("Taille du tableau : "+hd2wm143.length);
hd2wm143.push('Julien');
console.log(hd2wm143);

for (let eleve of hd2wm143) {
    if(eleve === "Julien"){
        console.log("J'ai trouvé " + eleve);
    }


}