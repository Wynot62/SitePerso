document.addEventListener("scroll",function(event){

    

    document.getElementById("plan1").style.transform="translate3d(0px,"+(-(window.pageYOffset*40/100)+"px,0px)");
    document.getElementById("plan2").style.transform="translate3d(0px,"+(-(window.pageYOffset*30/100)+"px,0px)");
    document.getElementById("plan3").style.transform="translate3d(0px,"+(-(window.pageYOffset*25/100)+"px,0px)");
    document.getElementById("plan4").style.transform="translate3d(0px,"+(-(window.pageYOffset*16/100)+"px,0px)");
    document.getElementById("plan5").style.transform="translate3d((0px,"+(-(window.pageYOffset*35/100)+"px,0px)");
    document.getElementById("plan6").style.transform="translate3d(0px,"+(-(window.pageYOffset*3/100)+"px,0px)");
    document.getElementById("plan7").style.transform="translate3d(0px,"+(-(window.pageYOffset*2/100)+"px,0px)");
    
    }
    
    )