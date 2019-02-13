
setInterval(function(){
    document.getElementById("arrow").style.transform="translateY(50px)";
    setTimeout(() => {
        
    document.getElementById("arrow").style.transform="translateY(0px)";
    }, 1000);



}, 2000);