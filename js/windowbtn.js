const startbtn = document.querySelector(".footer__btntodo:first-child i");
const startmenu = document.querySelector(".hiddenstartmenu");

function buttonCliked(){
    startmenu.classList.toggle('hidemenu');
}

startbtn.addEventListener('click', buttonCliked);

