const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${seconds}`;
 
}
getClock();
setInterval(getClock, 1000);

/* mdn 방법
const test = document.querySelector("h7#test");

function getTest(){
    const date = new Date();
    test.innerText = date.toLocaleTimeString("ko-KR");
}
getTest();
setInterval(getTest, 1000);
*/
