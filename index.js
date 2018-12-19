

function alea() {
    for (i = 0; i < 9; i++) {
        b = Math.floor(Math.random() * 3000);
        moveimg(i, b)
        
    }
}
function moveimg(i, b) {
    setTimeout(() => {
        
        document.getElementsByTagName("img")[i].style.transform = "translateZ(500px)";
        document.getElementsByTagName("img")[i].style.opacity = "0";
        setTimeout(() => {
            document.getElementsByTagName("img")[i].style.display = "none";
        }, 5000);
    }, b)
}

function cont() {
    setTimeout(() => {
        document.getElementById("container1").style.opacity = "0.8";
        document.getElementById("boutton").style.opacity = "0.8";
        
    }, 250);
}

function bidon(p) {
    
    var cont1 = document.getElementById("container1");
    var cont2 = document.getElementById("container2");
    var cont3 = document.getElementById("container3");
    var cont4 = document.getElementById("container4");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    if (p == 1) {
        cont4.style.opacity = "0.8";
        cont4.style.display="flex";
        
    }
    else if (p == 2) {
        cont2.style.opacity = "0.8";
        cont2.style.display="flex";
    }
    else {
        cont3.style.opacity = "0.8";
        cont3.style.display="flex";
    }
}