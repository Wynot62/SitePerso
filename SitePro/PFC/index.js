
function dw(str){
    document.write(str);
}
function dgbi(tag){
    return document.getElementById(tag);
}

zomb="url(zombie.png)";
robo="url(robot.png)";
monkey="url(Gorille.png)";
ninja="url(ninjas.jpg)";
pirate="url(pirate.png)";

var score=0;
var scoreia=0;
function pfc(a) {
    n = Math.floor(Math.random() * 5);
    if (a == 0) {
        if (n == 1) {
            
            dgbi("bot").style.backgroundImage = zomb;
            dgbi("choix").style.backgroundImage = robo;
            score++;
        }
        else if (n == 0) {
            dgbi("bot").style.backgroundImage = robo;
            dgbi("choix").style.backgroundImage = robo;
        }
        else if (n == 2) {
            dgbi("bot").style.backgroundImage = monkey;
            dgbi("choix").style.backgroundImage = robo;
            scoreia++;
        }
        else if (n==3){
            dgbi("bot").style.backgroundImage = ninja;
            dgbi("choix").style.backgroundImage = robo;
            score++;
        }
        else {
            dgbi("bot").style.backgroundImage=pirate;
            dgbi("choix").style.backgroundImage = robo;
            scoreia++;
        }
    }
    else if(a == 1) {

        if (n == 1) {
            dgbi("bot").style.backgroundImage = zomb;
            dgbi("choix").style.backgroundImage = zomb;
    
        }
        else if (n == 0) {
            
            dgbi("bot").style.backgroundImage = robo;
            dgbi("choix").style.backgroundImage = zomb;
            scoreia++;
        }
        else if (n == 2) {
            dgbi("bot").style.backgroundImage = monkey;
            dgbi("choix").style.backgroundImage = zomb;
            score++;
        }
        else if(n==3){
            
            dgbi("bot").style.backgroundImage = ninja;
            dgbi("choix").style.backgroundImage = zomb;
            scoreia++;
        }
        else{
            dgbi("bot").style.backgroundImage=pirate;
            dgbi("choix").style.backgroundImage = zomb;
            score++;
        }
    }
    else if(a==2){
        if (n == 1) {
            dgbi("bot").style.backgroundImage = zomb;
            dgbi("choix").style.backgroundImage = monkey;
            scoreia++;
        }
        else if (n == 0) {
            
            dgbi("bot").style.backgroundImage = robo;
            dgbi("choix").style.backgroundImage = monkey;
            score++;
        }
        else if (n == 2) {
            dgbi("bot").style.backgroundImage = monkey;
            dgbi("choix").style.backgroundImage = monkey;
        }
        else if (n==3){
            dgbi("bot").style.backgroundImage = ninja;
            dgbi("choix").style.backgroundImage = monkey;
            score++;
        }
        else{
            dgbi("bot").style.backgroundImage=pirate;
            dgbi("choix").style.backgroundImage = monkey;
            scoreia++;
        }
    }
    else if(a==3){
        if (n == 1) {
            dgbi("bot").style.backgroundImage = zomb;
            dgbi("choix").style.backgroundImage = ninja;
            score++;
        }
        else if (n == 0) {
            
            dgbi("bot").style.backgroundImage = robo;
            dgbi("choix").style.backgroundImage = ninja;
            scoreia++;
        }
        else if (n == 2) {
            dgbi("bot").style.backgroundImage = monkey;
            dgbi("choix").style.backgroundImage = ninja;
            scoreia++;
        }
        else if (n==3){
            dgbi("bot").style.backgroundImage = ninja;
            dgbi("choix").style.backgroundImage = ninja;
        }
        else{
            dgbi("bot").style.backgroundImage=pirate;
            dgbi("choix").style.backgroundImage = ninja;
            score++;
        }
    }
    else{
        if (n == 1) {
            dgbi("bot").style.backgroundImage = zomb;
            dgbi("choix").style.backgroundImage = pirate;
            scoreia++;
        }
        else if (n == 0) {
            
            dgbi("bot").style.backgroundImage = robo;
            dgbi("choix").style.backgroundImage = pirate;
            score++;
        }
        else if (n == 2) {
            dgbi("bot").style.backgroundImage = monkey;
            dgbi("choix").style.backgroundImage = pirate;
            score++;
        }
        else if (n==3){
            dgbi("bot").style.backgroundImage = ninja;
            dgbi("choix").style.backgroundImage = pirate;
            scoreia++;
        }
        else{
            dgbi("bot").style.backgroundImage=pirate;
            dgbi("choix").style.backgroundImage = pirate;
        }
    }
    
    dgbi("scoreblue").innerHTML=score;
    dgbi("scorered").innerHTML=scoreia;
    if(score==3){
        score=0;
        scoreia=0;
        alert("Vous avez gagné !!! d(o_o)b");
    }
    if(scoreia==3){
        scoreia=0;
        score=0;
        alert("Vous avez perdu !!! d(x_x)b");
    }
    dgbi("scoreblue").innerHTML=score;
    dgbi("scorered").innerHTML=scoreia;
}


