const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)]

/*
==nomad code==
const bgImage = document.createElement("img");

bgImage.src = `./img/${choseImage}`;

document.body.appendChild(bgImage);
*/

document.body.style.backgroundImage = "url('./img/"+choseImage+"')";

if(choseImage === 1){
    document.getElementById('footer').style.backgroundColor = '#d6cfca';
    //#d6cfca
}else if(choseImage === 2){

}else if(choseImage === 3){

}else if(choseImage === 4){

}else if(choseImage === 5){

}else if(choseImage === 6){

}

