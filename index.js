var i = 0;
var images = [
  "./assets/images/image1.jpeg","./assets/images/image3.jpg"
];

//changes the main image every 4s
function changeImage() {
  document.querySelector(".main-image").setAttribute("src", images[i]);

  i = (i + 1) % images.length; // Loops back to 0 when reaching the end

  setTimeout(changeImage, 4000); // Changes every 3 seconds
}

//hide adn shows the menu 
$("#button").on("click", function (e){
  e.stopPropagation(); 
  $("#menu").toggleClass("hidden");
})

$("body").on("click", function () {
  $("#menu").addClass("hidden");
})

//closes menu on scroll
function closeMenuScroll ( ){

  var screenPosition = window.pageYOffset;
  window.onscroll = function (){
    var currentPosition = window.pageYOffset;
    if ( currentPosition > screenPosition){
      $("#menu").addClass("hidden");
    }

    console.log("current "+ currentPosition);
    console.log( "screen " + screenPosition);

}

}
changeImage();
closeMenuScroll();

