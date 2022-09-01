function alrt() {
    alert("Still under construction!")
  }
  function bigbutton(x){
    x.style.height="80px"
    x.style.width="90px"
  }
  function smallbutton(x){
    x.style.height="60px"
  }
  let loader = document.getElementById("preloader");
window.addEventListener("load", function(){loader.style.display="none"})
