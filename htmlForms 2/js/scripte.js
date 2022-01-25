
const filed = document.getElementById('email'),
    error = document.getElementById('error'),
    btn = document.getElementById('show'),
    password = document.getElementById('password'),
    bthnSubmit = document.querySelector('.bthnSubmit'),
    allInput = document.querySelectorAll('input');

email.addEventListener('invalid', (e) => {
    if (e.target.validity.valueMissing) {
        error.innerText = e.target.validationMessage;
    }
})
btn.addEventListener('click', (e) => {
    if (e.target.textContent === "hide") {
        password.type = "password";
        e.target.textContent = "show";
    } else {
        password.type = "text";
        e.target.textContent = "hide"
    }
})
let informationObj;

bthnSubmit.addEventListener('click', (e) => {
    let valueArr = [];
    for (let i = 0; i < allInput.length; i++) {
        valueArr[i] = allInput[i].value;
    }
    
   let dataObj = {
       name: valueArr[0],
       email:valueArr[1],
       password: valueArr[2]
   }
    
    console.log(dataObj);
})



