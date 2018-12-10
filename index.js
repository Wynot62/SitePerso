

function alea() {
    for (i = 0; i <= 24; i++) {
        b = Math.floor(Math.random() * 5000);
        moveimg(i, b)
    }
}
function moveimg(i, b) {
    setTimeout(() => {
        document.getElementsByTagName("img")[i].style.transform = "translateZ(1000px)";
    }, b)
}
window.onload = alea;

function cont() {
    setTimeout(() => {
        document.getElementById("container1").style.opacity = "0.8";
        document.getElementById("boutton").style.opacity = "0.8";
        
    }, 3250);
}

function bidon(p) {
    
    var cont1 = document.getElementById("container1");
    var cont2 = document.getElementById("container2");
    var cont3 = document.getElementById("container3");
    var cont4 = document.getElementById("container4");
    cont1.style.opacity = "0";
    cont2.style.opacity = "0";
    cont3.style.opacity = "0";
    cont4.style.opacity = "0";
    if (p == 1) {
        cont4.style.opacity = "0.8";
    }
    else if (p == 2) {
        cont2.style.opacity = "0.8";
    }
    else {
        cont3.style.opacity = "0.8";
    }
}