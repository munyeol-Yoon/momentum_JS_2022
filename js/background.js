const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const random = Math.floor(Math.random() * images.length);

const choseImage = images[random];

/*
==nomad code==
const bgImage = document.createElement("img");

bgImage.src = `./img/${choseImage}`;

document.body.appendChild(bgImage);
*/

document.body.style.backgroundImage = "url('./img/"+choseImage+"')";


console.log(random);

if(random === 1){
    document.getElementById('footer').style.backgroundColor = "#d6cfca";
    //#d6cfca
    document.getElementById('footer').style.color = "black";
}else if(random === 2){
    document.getElementById('footer').style.backgroundColor = "#3660D5";
}else if(random === 3){
    document.getElementById('footer').style.backgroundColor = "#33OCD3";
}else if(random === 4){
    document.getElementById('footer').style.backgroundColor = "#5B9CCF";
    document.getElementById('footer').style.opacity = "0.5";
}else if(random === 5){
    document.getElementById('footer').style.backgroundColor = "#100C23";
}else if(random === 6){
    document.getElementById('footer').style.backgroundColor = "#100C23";
}else{
    document.getElementById('footer').style.backgroundColor = "#d6cfca";
    document.getElementById('footer').style.color = "black";
}

