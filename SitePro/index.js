function ouverture() {
    document.getElementById("topaccueil").style.top = "-50vh";
  
    document.getElementById("bot").style.top = "100vh";
    setTimeout(function () {
        document.getElementById("topaccueil").style.display = "none";
        
        document.getElementById("bot").style.display = "none";
  
    }, 5000)
  }