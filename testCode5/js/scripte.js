// const obj = {
//     name: "tigran",
//     surname: "manukyan",

//     get fullName(){
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value){
//         if(value.split(" ") === 2){
//             [this.name, this.surname] = value.split(" ");
//         }else{
//             console.log("barev")
//         }
//     },
// };

// obj.fullName = "jane Doe"

// console.log(obj.fullName);

///////////////////////////////////////////////////////

// class Human {
//     count = 0;

//     constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     }

//     get fullName() {
//     return `${this.name} ${this.surname}`;
//     }

//     log() {
//     console.log(this.name);
//     }
//     }

//     const human1 = new Human("Eve", "SherLock");

//     setTimeout(human1.log, 200); 

/////////////////////////////////////////////////////////

// let user = {
//     name: "tigran",
//     surname: "manukyan"
// }

// Object.defineProperty(user, "name", {
//     value: "karen",
//     writable: true,
//     enumerable: true,
//     configurable: true,
// });
// console.log(user);
// user.name = "hammo";

// console.log(user);

// for(const key in user){
//     console.log(key);
// };
/////////////////////////////////////////////
// 
//////////////////////////////////////////////
// let obj = {
//     name: "tiko",
//     surname: "manukyan",

//     get fullName(){
//         return `${this.name} ${this.surname}`
//     } 
// };
// console.log(obj.fullName);
/////////////////////////////////////////

// let user = {
//     name: "Tigran",
//     surname: "Manukyan"
// };
// Object.defineProperty(user, "fullName", {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
//     set(value) {
//         [this.name, this.surname] = value.split(' ');
//     },
// });
// // Object.defineProperty(user, "fullName", {
// //     enumerable: false,

// // })
// user.fullName = "Karen Makaryan";

// console.log(user.name);
// console.log(user.surname);

////////////////////////////////////////////////////////////

// const multiply = (a,b) => a * b;
//  const square  = (n) => multiply(n,n);

//  const addTwo =(n) => n + 2;
//  const  pipe = (...fns) => {
//      return (x) => fns.reduce((acc, function1) => function1(acc), x);
//  }

//  const squareNumberAndAddTwo = pipe(square, addTwo);

//  console.log(squareNumberAndAddTwo(65));

//////////////////////////////////////////////////////////////

//  const function1 = (item) => item + 1;
//  const function2 = (bady) => bady * bady;

//  const  pipe = (op1, op2) => {
//      return (arg) => {
//         const res1 = op1(arg);
//         console.log(res1);
//         return op2(res1);
//      };
//  };

//  const function1AndFunction2 =  pipe(function1, function2);

// console.log(function1AndFunction2(6));

////////////////////////////////////////////////////////
// const carsObj = {
//     name: "BMW",
//     model: "therrd",
//      get fullName(){
//          return `${this.name} ${this.model}`
//      },
//      set fullName(value) {
//          if(value.split(' ').length === 2 ){
//          [this.name, this.model ] = value.split(' ');
//      }else{
//          console.log(" you didn't enter proper value")
//      }
// }
// }
// carsObj.fullName = "tigran manukaynb ";
// console.log(carsObj.fullName);


////////////////////////////////////////// construcktor function


//  function User (name){
//      this.name = name; 

//      return {name: "tiko"};
//  }

//  const user1 = new User('Adam');

// console.log(user1);
 
/////////////////////////////////////////////////      __porto__ prototype chain 
// let person ={
//     head: "true1", 
// }
// let human = {
//     teeth: 32,
// };

// let gwen = {
//     age: "12",
// };

// gwen.prototype = human;

// console.log(gwen);
// console.log(human);
// gwen.__proto__ = human;   
// human.__proto__ = person; 

// // gwen.teeth = 31;

// console.log(gwen);
// console.log(human);
// let headSplit = gwen.head.split(' ')

// // console.log(human.teeth);
// console.log(gwen.hasOwnProperty('human'));
// console.log(gwen.hasOwnProperty('age'));
// console.log(gwen.head);
// console.log(headSplit);

////////////////////////////////////////////////////////////
// let  animal = {
//     hasEyes: true,
// };

// function Human (name){
//     this.name = name;
// } 
// Human.prototype = animal;

// Human.count = 0;

// const human1 = new Human("Tigran");

// console.log(Human.prototype)
// console.log(human1.hasEyes);

// console.log(Human);

///////////////////////////////////////////////////

// function outLog ()  {
// console.log(this.name);
// };

// const user = {
//     name: "Tiko",
//     log: () => {
//         console.log(`${this.name}`);
//     }
// }
// user.log.apply(user);

/////////////////////////////////////////////////////

// var myObject = {
    //     foo: "bar",
    //     func: function(){
    //         var self = this;
    
    
    //         console.log("fun 1 = " + this.foo);
    //         console.log("fun 1 = " + self.foo);
    //         (function(){
    //             console.log("fun 1 = " + this.foo);
    //             console.log("fun 1 = " + self.foo);
    //         }());
    //     }
    // }
    // myObject.func();

////////////////////////////////////////////////////////////

// class Human{
    
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     get fullName(){
//         return `${this.name} ${this.surname}`;
//     }

//     log = () => {
//         console.log(this.name);
//     };
// };

// const human1 = new Human('Eve', "sherLock");

// setTimeout(human1.log,200);

// console.log(human1);



//////////////////////////////////////////////////////////

// class Animal {
//     // count = 0;
//     constructor(name){
//         this.name = name;
//     }
//     log(){
//         console.log(this.name);
//     }
// }
// class Mammal extends Animal {
//     constructor(name,age){
//         super(name);
//         this.age = age;
//     };
//     count = 0;
//     log(){
//         console.log(this.age);
//     }
// };
 
// const one = new Mammal("human", "1000");

// console.log(one);

// console.log(one.log());

/////////////////////////////////////////////////////////  tasc 1


// class Rectangle {
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     };
   
//     get(){
//         return ` all your parametr ${this.length} ${this.width}`;
//     };
//     set(){
//         if(this.length >= this.width){
//            return ` your parametr right ${this.length, this.width}`
//         }else{
//             return`length must be high ${this.length} `
//         }
//     };
//     toString(){
//         return `parameters: ${this.length} ${this.width}`
//     };
//     getPeremeter(){
//         return `you can use this parameter ${this.length + 200 } ${this.width + 100}}`
//     }
// }

// const one = new Rectangle(50,100);


// console.log(one.toString());
// console.log(one.set());
// console.log(one.getPeremeter());

///////////////////////////////////////////////////////        Promise  then

// const prom = new Promise ((resolve, reject) => {
//     let result = ["karen", "tiko","artak"];

//     setTimeout(() => {resolve(result)},100);
   
// });

// prom.then((argumnt) => {
//     // return argumnt;
//     console.log(argumnt);
// });


////////////////////////////////////////////////////////   Promise  then

// const prom = new Promise ((resolve, reject) => {
//     let result = ["karen", "tiko","artak"];

//     setTimeout(() => {reject(result)},100);
   
// });

// prom.then((argumnt) => {
    
//     console.log(argumnt , "resolve");
// }, (err) => {
//     console.log(err,"reject");
// }
// );

//////////////////////////////////////////// 


function promiseFunction(){
    return new Promise((res, rej) => {
        setTimeout(() => res([1,2,3,4],200))
    })
}
// let prom1 = promiseFunction();

// console.log(prom1);
 
async function some(){
    let res = await promiseFunction();
    console.log(res); 
};
some();