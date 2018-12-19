function dw(str) {
    document.write(str);
}

// variable pour chaque case "div" du morpion
var case1 = document.getElementById("one");
var case2 = document.getElementById("two");
var case3 = document.getElementById("three");
var case4 = document.getElementById("four");
var case5 = document.getElementById("five");
var case6 = document.getElementById("six");
var case7 = document.getElementById("sev");
var case8 = document.getElementById("hei");
var case9 = document.getElementById("nine");

//math random pour le mode coop 
var tour = Math.floor(Math.random() * 2);

// variable clicktime qui ++ à chaque tours au bout de 9 la partie sera terminé
var clicktime = 0;

//function pour faire disparaitre les buttons
function erasebutton() {
    document.getElementById("choixmode").style.display = "none";
}
//
//
//
//
//
//
//

//function pour le mode solo facile
function modesoloeasy() {
    erasebutton();
    
    //la fonction commence avec l'événement click
    document.getElementById("morpion").addEventListener('click', function (event) {
        var target = event.target;

        // si la cible de click contient un X ou un O alors il ne se passe rien donc nous ne pouvons pas cliquer sur une case déjà pleine
        if (document.getElementById(target.id).innerHTML == "X" || document.getElementById(target.id).innerHTML == "O") {

        }
        //Sinon il est possible de cliquer avec le clique gauche (button===0) afin de merde un X
        else {


            if (event.button === 0) {
                tour = 1;
                document.getElementById(target.id).innerHTML = "X";
                clicktime++
            }
            
        }
        //function permettante de déterminer le gagnant et de restaurer les cases
        videsoloeasy();
    });
}

//function qui permettra de déterminer le gagnant et de restaurer le jeu
function videsoloeasy() {
    //if comprenant toutes les combinaisont possible de victoire
    if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
        (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
        (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
        (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
        (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
        (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
        //si la condition est faite alors celui qui à le tour 1 donc le X gagne et inversement si le tour = 0
        if (tour == 1) {
            document.getElementById("result").innerHTML = 'Joueur X à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        else if (tour == 0) {

            document.getElementById("result").innerHTML = 'Joueur O à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        document.getElementById("result").style.display = "block";
        //les 3 prochaines ligne vont permettre de restaurer le jeu en vidant les cases
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
    }
    //Si il n'y a pas de gagnant et que toutes les cases sont pleine c'est alors une égalité qui survienne grace à la var clicktime
    // qui gagne +1 à chaque click (un morpion contient 9cases) 

    else if (clicktime == 9) {
        document.getElementById("result").innerHTML = 'Vous êtes tombé à égalité !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>';
        document.getElementById("result").style.display = "block";
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
    } else {
        //la function regarde apres chaque clique si le joueur à fait une action gagnante et si c'est pas le cas
        //c'est au bot de jouer donc la function boteasy et ensuite on refait la vérification de victoire
        boteasy();
        if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
            (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
            (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
            (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
            (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
            (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
            (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
            (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
            if (tour == 1) {
                document.getElementById("result").innerHTML = 'Joueur X à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
            }
            else if (tour == 0) {
                alert();
                document.getElementById("result").innerHTML = 'Joueur O à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
            }
            document.getElementById("result").style.display = "block";
            case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
            case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
            case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
        }
        else if (clicktime == 9) {
            document.getElementById("result").innerHTML = 'Vous êtes tombé à égalité !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>';
            document.getElementById("result").style.display = "block";
            case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
            case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
            case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
        }
    }
}
//
//
//
//
//
//
//
//
//
//
//
//

//function pour le mode solo hard
function modesolohard() {
    erasebutton();
    alert();
    if(tour==0){
        bothard();
    }
    
    //la fonction commence avec l'événement click
    document.getElementById("morpion").addEventListener('click', function (event) {
        var target = event.target;

        // si la cible de click contient un X ou un O alors il ne se passe rien donc nous ne pouvons pas cliquer sur une case déjà pleine
        if (document.getElementById(target.id).innerHTML == "X" || document.getElementById(target.id).innerHTML == "O") {

        }
        //Sinon il est possible de cliquer avec le clique gauche (button===0) afin de merde un X
        else {


            if (event.button === 0) {
                tour = 0;
                document.getElementById(target.id).innerHTML = "X";
                bothard();
                clicktime++
            }
            
        }
        //function permettante de déterminer le gagnant et de restaurer les cases
        videsolohard();
    });
}
//
//
//
//
////function qui permettra de déterminer le gagnant et de restaurer le jeu
function videsolohard() {
    //if comprenant toutes les combinaisont possible de victoire
    if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
        (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
        (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
        (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
        (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
        (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
        //si la condition est faite alors celui qui à le tour 1 donc le X gagne et inversement si le tour = 0
        if (tour == 1) {
            document.getElementById("result").innerHTML = 'Joueur X à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        else if (tour == 0) {

            document.getElementById("result").innerHTML = 'Joueur O à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        document.getElementById("result").style.display = "block";
        //les 3 prochaines ligne vont permettre de restaurer le jeu en vidant les cases
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
    }
    //Si il n'y a pas de gagnant et que toutes les cases sont pleine c'est alors une égalité qui survienne grace à la var clicktime
    // qui gagne +1 à chaque click (un morpion contient 9cases) 

    else if (clicktime == 9) {
        document.getElementById("result").innerHTML = 'Vous êtes tombé à égalité !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>';
        document.getElementById("result").style.display = "block";
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
     } else {
         //la function regarde apres chaque clique si le joueur à fait une action gagnante et si c'est pas le cas
         //c'est au bot de jouer donc la function boteasy et ensuite on refait la vérification de victoire
         bothard();
         if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
             (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
             (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
             (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
             (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
             (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
             (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
             (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
             if (tour == 1) {
                 document.getElementById("result").innerHTML = 'Joueur X à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
             }
             else if (tour == 0) {
                 alert();
                 document.getElementById("result").innerHTML = 'Joueur O à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
             }
             document.getElementById("result").style.display = "block";
             case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
             case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
             case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
         }
         else if (clicktime == 9) {
             document.getElementById("result").innerHTML = 'Vous êtes tombé à égalité !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>';
             document.getElementById("result").style.display = "block";
             case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
             case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
             case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
         }
     }
}
//
//
//
//
//function pour le mode coop
function modecoop() {

    erasebutton();

    document.getElementById("morpion").addEventListener('click', function (event) {
        var target = event.target;

        if (document.getElementById(target.id).innerHTML == "X" || document.getElementById(target.id).innerHTML == "O") {

        }
        else {
            //lorsqu'on cliquera la var tour passera à 1 afin de passer le tour au suivant
            if (tour == 0) {
                tour = 1;
                if (event.button === 0) {

                    document.getElementById(target.id).innerHTML = "X";
                    clicktime++
                }
            }
            else {
                tour = 0;
                if (event.button === 0) {
                    document.getElementById(target.id).innerHTML = "O";
                    clicktime++
                }
            }
            videcoop();
        }
    });


}
function videcoop() {
    //if comprenant toutes les combinaisont possible de victoire
    if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
        (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
        (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
        (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
        (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
        (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
        (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
        //si la condition est faite alors celui qui à le tour 1 donc le X gagne et inversement si le tour = 0
        if (tour == 1) {
            document.getElementById("result").innerHTML = 'Joueur X à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        else if (tour == 0) {
            alert();
            document.getElementById("result").innerHTML = 'Joueur O à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        document.getElementById("result").style.display = "block";
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
    }
    else if (clicktime == 9) {
        document.getElementById("result").innerHTML = 'Vous êtes tombé à égalité !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>';
        document.getElementById("result").style.display = "block";
        case1.innerHTML = "<div class='number'>1</div>"; case2.innerHTML = "<div class='number'>2</div>"; case3.innerHTML = "<div class='number'>3</div>";
        case4.innerHTML = "<div class='number'>4</div>"; case5.innerHTML = "<div class='number'>5</div>"; case6.innerHTML = "<div class='number'>6</div>";
        case7.innerHTML = "<div class='number'>7</div>"; case8.innerHTML = "<div class='number'>8</div>"; case9.innerHTML = "<div class='number'>9</div>";
    }
}

//function qui permettra de recommencer le jeu avec victoire ou defaite qui remettra le clicktime à 0 et rechargera la page
function recommencer() {
    document.getElementById("result").style.display = "none";
    clicktime = 0;
    location.reload();
}

//function pour le bot "facile"
function boteasy() {


    Tboteasy = 1
    console.log(Tboteasy);
    //le bot cherchera la première case disponible afin d'y mettre son O 
    //le if se repète 9x pour chaque case du morpion
    if (Tboteasy == 1) {
        if (document.getElementById("one").innerHTML == "X" || document.getElementById("one").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("one").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 2) {
        if (document.getElementById("two").innerHTML == "X" || document.getElementById("two").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("two").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 3) {
        if (document.getElementById("three").innerHTML == "X" || document.getElementById("three").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("three").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 4) {
        if (document.getElementById("four").innerHTML == "X" || document.getElementById("four").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("four").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 5) {
        if (document.getElementById("five").innerHTML == "X" || document.getElementById("five").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("five").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 6) {
        if (document.getElementById("six").innerHTML == "X" || document.getElementById("six").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("six").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 7) {
        if (document.getElementById("sev").innerHTML == "X" || document.getElementById("sev").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("sev").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 8) {
        if (document.getElementById("hei").innerHTML == "X" || document.getElementById("hei").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("hei").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
    if (Tboteasy == 9) {
        if (document.getElementById("nine").innerHTML == "X" || document.getElementById("nine").innerHTML == "O") {
            Tboteasy++
        }
        else {
            document.getElementById("nine").innerHTML = "O";
            clicktime++;
            tour = 0;
        }
    }
}
//
//
//
//
//
//
//
//function pour le bot intelligent

function bothard(){
    if(tour==0){
        botstrat1();
    }
}

//strat n°1
function botstrat1(){
    document.getElementById("sev").innerHTML = "O";

    if(document.getElementById("five").innerHTML == "X"){
        document.getElementById("nine").innerHTML = "O";
    }
    if(document.getElementById("hei").innerHTML == "X"){
        document.getElementById("two").innerHTML = "O";
    }
    if(document.getElementById("four").innerHTML == "X"){
        document.getElementById("six").innerHTML = "O";
    }
    if(document.getElementById("three").innerHTML == "X"){
        document.getElementById("one").innerHTML = "O";

    }
    tour=1;
    videsolohard();

}