var nbr = prompt("entrer un nombre");

while(nbr==""){
    nbr = prompt("entre un nombre");
}



var unite =["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
var dixaine=[" ","dix","vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingts","quatre-vingt-dix"]
var centaine =[" ","cent","deux-cent","trois-cent","quatre-cent","cinq-cent","six-cent","sept-cent","huit-cent","neuf-cent"];

if(nbr.length==1){
   

    document.getElementById("resultat").innerHTML=unite[nbr];
    
}
else if(nbr.length==2){
    var Diz = nbr.substring(0,1);
    var Unit = nbr.substring(1,2);

    if(Diz==1){
        document.getElementById("resultat").innerHTML=unite[nbr];
    }
    else if(Unit==0){
        document.getElementById("resultat").innerHTML=dixaine[Diz];
    }
    else if(Diz==7||Diz==9){
       
        document.getElementById("resultat").innerHTML=dixaine[Diz-1]+"-"+unite[1*Unit+10];
    }
     else{
    document.getElementById("resultat").innerHTML=dixaine[Diz]+"-"+unite[Unit];
    }
}
else if(nbr.length==3){
    var Cent = nbr.substring(0,1);
    var Diz = nbr.substring(1,2);
    var Unit = nbr.substring(2,3);
    if(Diz==1){
        document.getElementById("resultat").innerHTML=centaine[Cent]+"-"+unite[(nbr-Cent*100)];
    }
    else if(Diz==7||Diz==9){
        
        document.getElementById("resultat").innerHTML=centaine[Cent]+" "+dixaine[Diz-1]+"-"+unite[1*Unit+10];
    }
    else{
    document.getElementById("resultat").innerHTML=centaine[Cent]+"-"+dixaine[Diz]+"-"+unite[Unit];
    }
}
