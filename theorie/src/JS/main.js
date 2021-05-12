let maFct = () => {
    // code ...
}
maFct();


let saluer = () => {
    return "Hey !";
}
console.log(saluer());


let saluer2 = () => {
    console.log("Hey !");
}
saluer2();

// un paramètre permet de rendre une fonctoin dynamique et malléable. elle crée un "trou" qui sera remplie par la valeur passée comme argument de la fonction de lors de son initialisation.
let saluer3 = (nomUser, nomUser2) => {
    return `Bonjour ${nomUser} et ${nomUser2} !`
}

console.log(saluer3("Fanny", "Agim"));
console.log(saluer3("Chris", "Yassine"));