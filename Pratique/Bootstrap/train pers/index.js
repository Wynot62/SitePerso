
function activnav(){

    if(document.getElementById("navopen").style.display=="none"){
    document.getElementById("navopen").style.display="block";
    document.getElementById("buttonnav").style.transform="rotateZ(90deg)";
    
    }
    else{
        
        document.getElementById("navopen").style.display="none";
        document.getElementById("buttonnav").style.transform="rotateZ(0deg)";
    }

}
var scro=0;
document.addEventListener("wheel",function(e){
    const delta=Math.sign(event.wheelDelta);

    if(delta==1){
    if(e.target.classList.contains("test")){
        // console.log(e);
        scro+=100;
        document.getElementById("first-list").style.marginLeft=-scro+"px";
        
    }
}
else{
    if(e.target.classList.contains("test")){
    scro-=100;
    document.getElementById("first-list").style.marginLeft=-scro+"px";
}
}
})