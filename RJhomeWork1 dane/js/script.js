
let screen = document.querySelector('.screen-text'),
    inputWrite = document.querySelector('.writePlase-text');

const   btnB = document.querySelector('.B'),
        btnI = document.querySelector(".I"),
        btnLine = document.querySelector('.line'),
        btnUnderLine = document.querySelector('.under-line'),
        btnAperCase = document.querySelector('.aperCase'),
        btnRed = document.querySelector('.red'),
        btnGreen = document.querySelector('.green');


inputWrite.addEventListener('input',function(){
    screen.innerHTML = inputWrite.value;
})

btnB.addEventListener('click', () =>{
    screen.style.fontSize = '40px';
})
btnI.addEventListener('click', () => {
    screen.innerHTML = ` <i>${inputWrite.value} </i>`;
})
btnLine.addEventListener('click',() =>{
    screen.style.textDecorationLine = 'line-through';
})
btnUnderLine.addEventListener('click', () =>{
    screen.innerHTML = `<u> ${inputWrite.value}</u> `
})
btnAperCase.addEventListener('click', () => {
    screen.style.textTransform = 'capitalize'; 
})
btnRed.addEventListener('click', () => {
    screen.style.color = "#db0909";
})
btnGreen.addEventListener('click', () => {
    screen.style.color = "#dbd809";
})