$("#button2").on("click", function (){
  $("#menu2").toggleClass("hidden flex")
})

$("body").on("click", function () {
  $("#menu2").addClass("hidden");
})

function closeMenuScroll ( ){

  var screenPosition = window.pageYOffset;
  window.onscroll = function (){
    var currentPosition = window.pageYOffset;
    if ( currentPosition > screenPosition){
      $("#menu2").addClass("hidden");
    }
    console.log("current "+ currentPosition);
    console.log( "screen " + screenPosition);

  }

}

closeMenuScroll();