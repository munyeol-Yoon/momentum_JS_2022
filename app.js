const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");


const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault();
    console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `안녕! ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

function onLogOutClick(){
    localStorage.removeItem(USERNAME_KEY);
}

logoutForm.addEventListener("click", onLogOutClick);
