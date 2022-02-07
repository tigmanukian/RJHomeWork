// const nameDiv = document.querySelectorAll('.name');

// let numeberArr = [14,15,28,19,57]



// for(let i = 0; i < numeberArr.length; i++){
    
//     nameDiv[i].innerHTML = numeberArr[i]

// }

// const nameInput = document.querySelector('[name = "email"]');

// nameInput.addEventListener('invalid',(e) => {
//     e.target.setCustomValidity('Please enter your name.');
// })

// let  arr = [1,5,8,7];

// for(let i = 0; i <= 3; i++ ){
//     let counter = 0 ;
//     function tiko (item,arr1){
//         counter =+  arr1[i];
//         console.log(counter);
//     }
   
// }

// tiko(arr)

const btn = document.getElementById("btn");
const   div1 = document.getElementById('div1'),
        inp = document.querySelector('input'),
        inp2 =document.getElementById('div2');


let  dataArr =[];

const butt =  (event) => {
    if (inp.value === "tiko"){
        div1.innerHTML = "tikodj"
    }
    
}
butt("tiko")
btn.addEventListener('click', butt);
btn.addEventListener('click', () =>{
    dataArr.push(inp.value);
 
});

btn.addEventListener("click", setTim);

function setTim(){
    let d;
    
    setTimeout(() => {
        let  prom = prompt('',' barev');
        if(d === undefined){
            
            prom;
            
        }
        console.log(prom)
        if(prom === null){
            prompt('',' barev')
        }else{
            console.log("all the okay ");
        }
       
    }, 1000);
    
  
}



console.log(dataArr);
