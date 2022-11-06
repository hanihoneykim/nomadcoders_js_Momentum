const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpg",
    "img4.jpg",
    "img5.png",
    "img6.jpg",
    "img7.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`
document.querySelector("body").style = `background:url('img/${chosenImage}')`;

document.body.appendChild(bgImage);