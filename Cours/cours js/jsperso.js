
function butt(o){
    document.getElementById("fuck").addEventListener("mousedown", function(event){
    if (event.button ==2){
        document.getElementById("fuck").style= "background-image: url('LogoWN.jpg');width:100%;height:52vw;";
    }
    else {
        document.getElementById("fuck").style= "background-image: url('icones.jpg');width:100%;height:52vw;";
    }
    document.getElementById("fuck").id="test";
    }
    )}