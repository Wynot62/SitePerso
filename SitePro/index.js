var nav=document.getElementById("nav");


document.addEventListener("scroll", function(){
    
    if(window.pageYOffset>50){
       
    nav.style.height="15vh";
    nav.style.backgroundImage="url(backgroundnav.png)";
    nav.style.marginTop="10vh";
    document.getElementById("scroll").style.display="none";
    menu.style.marginTop="0";
    
    }
    if(window.pageYOffset==0){
        nav.style.height="85vh";
        nav.style.width="100%";
        nav.style.position="static";
        nav.style.opacity="1";
        nav.style.marginTop="0vh";
        
        nav.style.borderTopRightRadius="0%";
        nav.style.borderBottomRightRadius="0%";
        nav.style.backgroundImage="url(thumb-1920-994139.jpg)";
        document.getElementById("scroll").style.display="flex";
        menu.style.marginTop="10vh";
    }
    console.log(window.pageYOffset);
});

var arrow=document.getElementById("arrow");

setInterval(() => {
    arrow.style.marginTop="20px";
    setTimeout(() => {
        arrow.style.marginTop="0px";
    },500);
    
}, 1000);

