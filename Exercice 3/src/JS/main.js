let classeCoding19 = [];

let add = (prenom, phrase) => {
    classeCoding19.push(prenom);
    console.log(phrase);
    console.log(classeCoding19);
}

let del = (prenom, phrase) => {
    classeCoding19.splice(classeCoding19.indexOf(prenom), 1);
    console.log(phrase);
    console.log(classeCoding19);
}


for (i = 43; i <= 59; i++) {
    if (i == 43) {
        add("Fanny", "Fanny arrive à 8h43");
        
    }
    else if (i == 44) {
        add("Chris", "Chris rentre en classe à 8h44");

    }
    else if (i == 45) {
        add("Nasila", "Nasila rejoint la classe" );
        add("Stan", "Stan débarque");
        add("Mouna", "Mouna débarque en y");
        add("Jean", "Jean débarque en z");
    }
    else if (i == 51) {
        del("Stan", "Stan part et ne reviennent pas");
        del("Jean", "Jean part et ne reviennent pas");
    }
    else if (i == 55) {
        add("Ali", "Ali rentre en classe chantonnant");
        add("Agim", "Agim rentre en classe vénère");
    }
    else if (i == 56) {
        add("Antoine", "Antoine rentre en classe");
        del("Antoine", "Antoine redescend à l'accueil");
    }
    else if (i == 59) {
        add("Yassine", "Yassine arrive avec sa petite plante");
    }
}

for (i = 0; i <= 30; i++) {
    if (i == 0) {
        add("Seiffedin", "Seiffedin rentre dans la pièce");
        add("Haroune", "Haroune observe tout le monde");
    }
    else if (i == 3) {
        add("Elvis", "Elvis rentre dans la place");
        add("Ilias D.", "Ilias D. rentre dans la place");
        add("Ilias E.", "Ilias E. rentre dans la place");
    }
    else if (i == 4) {
        add ("Kevin", "Kevin rentre avec sa tasse de thé");
    }
    else if (i == 5) {
        add("Van Hoa", "Van Hoa rentre avec 5min de retard");
        add("Nathan", "Nathan rentre aussi avec 5min de retard");
        del("Fanny" , "Fanny est fâchée");
    }
    else if (i == 10) {
        add("Adil", "Adil rentre avec sa tasse de café");
    }
    else if (i == 20) {
        add("Fanny", "Fanny rentre en classe");
    }
    else if (i == 30) {
        add("Lira", "Lira rentre dans la classe sans faire de bruit mais on le crame quand même");
    }
}



