var i = 0;
var images = [
  "./assets/images/image1.jpeg","./assets/images/image3.jpg"
];

function changeImage() {
  document.querySelector(".main-image").setAttribute("src", images[i]);

  i = (i + 1) % images.length; // Loops back to 0 when reaching the end

  setTimeout(changeImage, 4000); // Changes every 3 seconds
}

changeImage();

$("#button").on("click", function (){
  $("#menu").toggleClass("hidden flex")
})
