var img = document.getELementById("gallery-img");
var prev = document.getELementById("prev");
var next = document.getELementById("next");

var images = ["image_2.jpg"];

function changeimage(e) {
if (e.target.id == "next" && currentimage !== imagens.length - 1) {
    currentimage = currentimage + 1;
}

if (e.target.id == "prev" && currentimage !==0) {
    currentimage = currentimage - 1;
}

img.setAttrlistener("src", "images/" + images[currentimage]);
}

prev.addevntlister("click", changeimage);
next.addevntlister("chick", changeimage);