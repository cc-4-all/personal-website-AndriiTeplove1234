var img = document.getElementById("gallery-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var images = ['anime.jpg', 'cat.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg', 'selfie.jpg'];

var currentimage = 0;

function changeimage(e) {
if (e.target.id == "next" && currentimage !== images.length - 1) {
    currentimage = currentimage + 1;
}

if (e.target.id == "prev" && currentimage !==0) {
    currentimage = currentimage - 1;
}

img.setAttribute("src", "images/" + images[currentimage]);
}

prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);