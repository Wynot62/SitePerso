


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});





var i = 0;

addEventListener("wheel", function (event) {

if(window.innerWidth>800){
  var window_height = window.innerHeight;

  var window_top_pos = window.pageYOffset;

  var window_bottom_pos = (window_top_pos + window_height);






  document.querySelectorAll("section").forEach(div => {

    var element_height = div.clientHeight;

    var element_top_pos = div.offsetTop;

    var element_bottom_pos = (element_height + element_top_pos);



    if (element_top_pos + 300 > window_bottom_pos) {
      div.style.opacity = "0";
    }
    else {
      div.style.opacity = "1";
    }

    if (element_bottom_pos - 300 < window_top_pos) {
      div.style.opacity = "0";
    }
  
  })
}})
function clicktop(){
  for(ind=1;ind>4;ind++){
  document.getElementsByTagName("section")[ind].style.opacity="0";
}

  document.getElementById("top").style.opacity="1";
}

function clickaffiche(a){
  if(a==1){
    document.getElementById("Blockpresentation").style.opacity="1";
  }
  else if(a==2){
    document.getElementById("BlockCompetences").style.opacity="1";
  }
  else if(a==3){
    document.getElementById("BlockPortfolio").style.opacity="1";
  }

}