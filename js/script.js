$(document).ready(function(){
    $("#hamb-icon").click(function(){
    $('#menuM').animate({width:'toggle'},300);
    });
    });

    $(document).ready(function(){
        $("#close").click(function(){
        $('#menuM').animate({width:'toggle'},300);
        });
        });


        //Get the button:
mybutton = document.getElementById("botonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// CUando el usuario hace click en la flecha, sube al inicio del documento.
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Codigo preloader

window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }