function ouverture() {
    document.getElementById("top").style.top = "-50vh";
    document.getElementById("Welcome").style.top = "0";
    document.getElementById("Welcome").style.transform = "translateX(-50%)translateY(-100%)";
    document.getElementById("bot").style.top = "100vh";
    setTimeout(function () {
        document.getElementById("top").style.display = "none";
        document.getElementById("Welcome").style.display = "none";
        document.getElementById("bot").style.display = "none";

    }, 5000)
}
c1 = document.getElementById("left");
c1b = document.getElementById("leftback");
c2 = document.getElementById("topright");
c2b = document.getElementById("topBback");
c3 = document.getElementById("botright");
c3b = document.getElementById("botBback");
document.addEventListener("click", function (event) {
    if (event.target == document.getElementById("leftfront")) {
        c1.style.transform = "rotateY(180deg)";

        c2.style.transform = "rotateY(0deg)";

        c3.style.transform = "rotateY(0deg)";

    }
    else if (event.target == document.getElementById("topRfront")) {
        c1.style.transform = "rotateY(0deg)";

        c2.style.transform = "rotateY(180deg)";

        c3.style.transform = "rotateY(0deg)";

    }
    else if (event.target == document.getElementById("botRfront")) {
        c1.style.transform = "rotateY(0deg)";

        c2.style.transform = "rotateY(0deg)";

        c3.style.transform = "rotateY(180deg)";
    }
})

function displa(){
    document.getElementById("container").style.display="flex";

}