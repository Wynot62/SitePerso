var cameleon=document.getElementById("lien1");
var crapaud=document.getElementById("lien2");
var gecko=document.getElementById("lien3");
var serpent=document.getElementById("lien4");




function placement(){
    for(i=0;i<4;i++){
        random=Math.floor(Math.random()*2000);
        test(i,random);
    }
}
function test(i,random){
    setTimeout(() => {
        document.querySelectorAll("#containt>a")[i].style.left=0;
    }, random);
}
window.onload=placement;