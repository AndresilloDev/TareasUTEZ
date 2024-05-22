const images = ["IMG/ALO.png", "IMG/HAM.png", "IMG/LEC.png", "IMG/VER.png", "IMG/SAI.png", "IMG/PER.png", "IMG/RUS.png", "IMG/NOR.png", "IMG/OCO.png", "IMG/PIA.png"];
let index = 0;
let imageElement = document.getElementById("image");
var back = document.getElementById("backButton");
var next = document.getElementById("nextButton");

const showImage = (index) => {
    imageElement.src = images[index];
};

const previousImage = () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
};

const nextImage = () => {
    index = (index + 1) % images.length;
    showImage(index);
};
back.addEventListener("click", previousImage);
next.addEventListener("click", nextImage);

showImage(index);