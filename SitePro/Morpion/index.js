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
var classnumber = document.getElementsByClassName("number");

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

//function pour le mode solo
function modesolo() {
    tour=Math.floor(Math.random()*2);
    videsolo();
    erasebutton();

    //la fonction commence avec l'événement click
    document.getElementById("morpion").addEventListener('click', function (event) {
        var target = event.target;

        // si la cible de click contient un X ou un O alors il ne se passe rien donc nous ne pouvons pas cliquer sur une case déjà pleine
        if (document.getElementById(target.id).innerHTML == "X" || document.getElementById(target.id).innerHTML == "O") {

        }
        //Sinon il est possible de cliquer avec le clique gauche (button===0) afin de mettre un X
        else {


            if (event.button === 0&&tour == 1) {
                console.log(tour);
                
                tour = 0;
                document.getElementById(target.id).innerHTML = "X";
                clicktime++
                //function permettante de déterminer le gagnant et de restaurer les cases
                videsolo();
            }

        }


    });
}

//function qui permettra de déterminer le gagnant et de restaurer le jeu
function videsolo() {
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
            document.getElementById("result").innerHTML = 'L\'IA à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
        }
        else if (tour == 0) {

            document.getElementById("result").innerHTML = 'Le joueur à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
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
        botsolo();
        if ((case1.innerHTML === case2.innerHTML && case2.innerHTML === case3.innerHTML) ||
            (case4.innerHTML === case5.innerHTML && case5.innerHTML === case6.innerHTML) ||
            (case7.innerHTML === case8.innerHTML && case8.innerHTML === case9.innerHTML) ||
            (case1.innerHTML === case4.innerHTML && case4.innerHTML === case7.innerHTML) ||
            (case2.innerHTML === case5.innerHTML && case5.innerHTML === case8.innerHTML) ||
            (case3.innerHTML === case6.innerHTML && case6.innerHTML === case9.innerHTML) ||
            (case1.innerHTML === case5.innerHTML && case5.innerHTML === case9.innerHTML) ||
            (case3.innerHTML === case5.innerHTML && case5.innerHTML === case7.innerHTML)) {
            if (tour == 1) {
                document.getElementById("result").innerHTML = 'L\'IA à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
            }
            else if (tour == 0) {

                document.getElementById("result").innerHTML = 'Le joueur à gagné la partie !!!!<hr><button onclick="recommencer()">RECOMMENCER</button>'
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


//
//
function botsolo() {
    
    rempauto();
    if (tour == 0) {
        if (case5.innerHTML == '<div class="number">5</div>') {
            case5.innerHTML = "O";
            clicktime++;
            tour=1;

        }
        else if (case5.innerHTML == "X" || case5.innerHTML == "O") {
            if (case1.innerHTML == '<div class="number">1</div>') {
                case1.innerHTML = "O";
                clicktime++;
                tour=1;
            }
            else if ((case1.innerHTML == "X" || case1.innerHTML == "O") && case3.innerHTML == '<div class="number">3</div>') {
                case3.innerHTML = "O";
                clicktime++;
                tour=1;

            }
            else if ((case3.innerHTML == "X" || case3.innerHTML == "O") && case9.innerHTML == '<div class="number">9</div>') {
                case9.innerHTML = "O";
                clicktime++;
                tour=1;

            }
            else if ((case9.innerHTML == "X" || case9.innerHTML == "O") && case7.innerHTML == '<div class="number">7</div>') {
                case7.innerHTML = "O";
                clicktime++;
                tour=1;
            }
            else if ((case7.innerHTML == "X" || case7.innerHTML == "O") && case4.innerHTML == '<div class="number">4</div>') {
                case4.innerHTML = "O";
                clicktime++;
                tour=1;
            }
            else if ((case4.innerHTML == "X" || case4.innerHTML == "O") && case2.innerHTML == '<div class="number">2</div>') {
                case2.innerHTML = "O";
                clicktime++;
                tour=1;
            }
            else if ((case2.innerHTML == "X" || case2.innerHTML == "O") && case6.innerHTML == '<div class="number">6</div>') {
                case6.innerHTML = "O";
                clicktime++;
                tour=1;
            }
            else if ((case6.innerHTML == "X" || case6.innerHTML == "O") && case8.innerHTML == '<div class="number">8</div>') {
                case8.innerHTML = "O";
                clicktime++;
                tour=1;
            }
        }


    }
}

function rempauto() {
    if ((case1.innerHTML == case2.innerHTML) &&
        case3.innerHTML == '<div class="number">3</div>') {
        case3.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case4.innerHTML == case5.innerHTML) &&
        case6.innerHTML == '<div class="number">6</div>') {
        case6.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case7.innerHTML == case8.innerHTML) &&
        case9.innerHTML == '<div class="number">9</div>') {
        case9.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case1.innerHTML == case4.innerHTML) &&
        case7.innerHTML == '<div class="number">7</div>') {
        case7.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case2.innerHTML == case5.innerHTML) &&
        case8.innerHTML == '<div class="number">8</div>') {
        case8.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case3.innerHTML == case6.innerHTML) &&
        case9.innerHTML == '<div class="number">9</div>') {
        case9.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case3.innerHTML == case2.innerHTML) &&
        case1.innerHTML == '<div class="number">1</div>') {
        case1.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case6.innerHTML == case5.innerHTML) &&
        case4.innerHTML == '<div class="number">4</div>') {
        case4.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case9.innerHTML == case8.innerHTML) &&
        case7.innerHTML == '<div class="number">7</div>') {
        case7.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case7.innerHTML == case4.innerHTML) &&
        case1.innerHTML == '<div class="number">1</div>') {
        case1.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case8.innerHTML == case5.innerHTML) &&
        case2.innerHTML == '<div class="number">2</div>') {
        case2.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case9.innerHTML == case6.innerHTML) &&
        case3.innerHTML == '<div class="number">3</div>') {
        case3.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case1.innerHTML == case5.innerHTML) &&
        case9.innerHTML == '<div class="number">9</div>') {
        case9.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case3.innerHTML == case5.innerHTML) &&
        case7.innerHTML == '<div class="number">7</div>') {
        case7.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case9.innerHTML == case5.innerHTML) &&
        case1.innerHTML == '<div class="number">1</div>') {
        case1.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case7.innerHTML == case5.innerHTML) &&
        case3.innerHTML == '<div class="number">3</div>') {
        case3.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case1.innerHTML == case3.innerHTML) &&
        case2.innerHTML == '<div class="number">2</div>') {
        case2.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case4.innerHTML == case6.innerHTML) &&
        case5.innerHTML == '<div class="number">5</div>') {
        case5.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case7.innerHTML == case9.innerHTML) &&
        case8.innerHTML == '<div class="number">8</div>') {
        case8.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case1.innerHTML == case7.innerHTML) &&
        case4.innerHTML == '<div class="number">4</div>') {
        case4.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case2.innerHTML == case8.innerHTML) &&
        case5.innerHTML == '<div class="number">5</div>') {
        case5.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case3.innerHTML == case9.innerHTML) &&
        case6.innerHTML == '<div class="number">6</div>') {
        case6.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case1.innerHTML == case9.innerHTML) &&
        case5.innerHTML == '<div class="number">5</div>') {
        case5.innerHTML = "O";
        tour = 1;
        clicktime++
    }
    else if ((case3.innerHTML == case7.innerHTML) &&
        case5.innerHTML == '<div class="number">5</div>') {
        case5.innerHTML = "O";
        tour = 1;
        clicktime++
    }

}