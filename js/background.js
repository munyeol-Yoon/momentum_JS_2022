const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)]
/*
==nomad code==
const bgImage = document.createElement("img");

bgImage.src = `./img/${choseImage}`;

document.body.appendChild(bgImage);
*/
document.body.style.backgroundImage = "url('./img/"+choseImage+"')";

