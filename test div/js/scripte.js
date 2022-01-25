const nameDiv = document.querySelectorAll('.name');

let numeberArr = [14,15,28,19,57]



for(let i = 0; i < numeberArr.length; i++){
    
    nameDiv[i].innerHTML = numeberArr[i]

}

const nameInput = document.querySelector('[name = "email"]');

nameInput.addEventListener('invalid',(e) => {
    e.target.setCustomValidity('Please enter your name.');
})