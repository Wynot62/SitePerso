//tableau

var personnes = ['Marc','Paul','Veronique',[1,2,3]];
var personnes2 = new Array('Marc','Paul','Veronique');
console.log(personnes[1]) //cela affichera 'Paul' dans la console
console.log(personnes.length); // affichera le nombre d'éléments dans le tableau dans la console
personnes[1]='Julie'; //modifiera l'élément de là deuxième case
personnes[3][2] //affichera la 3e case du tableau qui est dans la 4eme case du tableau principal
delete personnes[2];
personnes.splice(3,2,3);//le premier chiffre sert à pointer le case du tableau,
                        //le deuxieme dit combien de case il faut supprimer
                        //le troisieme ajoute un nouvel élément à la place


personnes.forEach(func01);
function func01(param){
    console.log(param.toUpperCase());
}


var people = personnes2.concat(personnes); //fusionne les deux tableaux

// compare tableau
var res;
var tab1 = [19,72,33,5,66,2,14,9,10];
var tab2 = [19,72,33,15,16,8,17,39,50];
var tab3 = [19,72,33,15,16,8,39,50];
var tab4 = [19,72,33,5,66,2,14,9,10];

function fcompare(tab1,tab2){
    
    if (tab1.length != tab2.length){
       return false
    }
    else{
        for(i=0;i<tab1.length;i++){
            if (tab1[i]!=tab2[i]){
                return false
                
            }
        }
        return true
    }
}

function ntm(a,b){
    if(a<b){return -1}
    else if(a>b){return 1}
    else{return 0}
}
function sort(t1){
    document.write('non trié:<br>'+t1+"<br><br>");
    t1.sort(ntm);
    document.write('trié:<br>'+t1+'<br><br>');
}