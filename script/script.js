'use strict';

const inputA = document.querySelector('.inputA')
const resultBtn = document.querySelector(".result-key")
const numKeys = document.querySelectorAll('.numKey')
const clearKey = document.querySelector(".ackey");
const operatorKeys = document.querySelectorAll('.operatorKey')
const themeBtn = document.querySelector('.theme');
const backIcon = document.querySelector('.backIcon')

backIcon.addEventListener('click', () => {
    inputA.value = inputA.value.slice(0, -1);
})

const Time = document.querySelector('.pp');


function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    Time.innerHTML = (h + ":" + m + ":" + s);;
}
setInterval(time,1000);







themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('lightmode')
})



operatorKeys.forEach((op) => {
    op.addEventListener('click', () => {
        inputA.value += op.textContent
    })
})


clearKey.addEventListener('click', () => {
    inputA.value = ""
})



numKeys.forEach((el) => {
    el.addEventListener('click', () => {
        inputA.value += el.textContent
    })
})


resultBtn.addEventListener("click", () => {
    inputA.value = eval(inputA.value)
})

