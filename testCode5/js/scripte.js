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
        //    #protectedField = 5;
        //    static getSomeStaticInfo(){
        //        console.log("hello", this)
        //    } 
// #method(){
//     console.log()
// }
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

///////////////////////////////////////////////////////// exersise 1 


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
//            return ` your parametr hrigt ${this.length, this.width}`
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



// function promiseFunction(){
//     return new Promise((res, rej) => {
//         setTimeout(() => res([1,2,3,4],200))
//     })
// }
// // let prom1 = promiseFunction();

// // console.log(prom1);

// async function some(){
//     let res = await promiseFunction();
//     console.log(res); 
// };
// some();

/////////////////////////////////////////////////////////   exercise 2


// class Employee {
//     constructor(id, firstName, lastName, positions, salary, workingHours) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.positions = positions;
//         this.salary = salary;
//         this.workingHours = workingHours;
//         this.dataClass = [];
//     }
//     get() {
//         return ` Id- ${this.id} firstName- ${this.firstName}  lastName- ${this.lastName}
//                  positions- ${this.positions}  salary-${this.salary} workingHours- ${this.workingHours}  `
//     }

//     set() {
//         if (this.id <= 20) {
//             return this.id;
//         } else {
//             return ` plise write your rigt id  `
//         }
//     }
//     getFullName() {
//         return ` FullName ${this.firstName[0].toUpperCase() + this.firstName.slice(1)} ${this.lastName[0].toUpperCase() + this.lastName.slice(1)}`
//     }
//     getAnnularSalary(){
//         return ` all salary within year ${this.salary * 12}`
//     }
//     raiseSalary(percent){
//         const raiseSalaryMuth = this.salary * percent / 100;
//         return raiseSalaryMuth
//     }
// }

// const data = new Employee(14, "tigran", "manukyan","junior", 100000, );


// console.log(data.set());
// console.log(data);
// console.log(data.getFullName());
// console.log(data.getAnnularSalary());
// console.log(data.raiseSalary(20));

////////////////////////////////////////////////////////////////   exercise 3

// class Auther {
//     constructor(name, email, gender) {
//         this.name = name;
//         this.email = email;
//         this.gender = gender;
//     };
//     get() {
//         return `All data ${this.name}  ${this.email} ${this.gender} `
//     }
//     set(value) {
//         if (value.split(' ').length === 1) {
//             return value
//         } else {
//             console.log(" you didn't enter proper value")
//         }
//     }
//     toStringData() {
//         return `all information how string ${this.name.toString()} - ${this.email.toString()} - ${this.gender.toString()} `
//     }
// };
// const auther1 = new Auther("Tigran", "tig.manukian@gmail.com", "gender")

// class Book extends Auther {
//     constructor(title, price, quantity) {
//         this.title = title;
//         this.price = price;
//         this.quantity = quantity
// Obj = [];
//     }
//     get() {
//         return `all ${this.title} ${this.email} ${this.gender}`
//     }
//     set(value) {
//         this.obj.push(value)
//     }
//     getProfit() {
//         const calculates = this.quantity * this.price;
//         return calculates;
//     }
//     toStringData() {
//         return `all information how string ${this.title.toString()} - ${this.email.toString()} - ${this.gender.toString()} `
//     }
// }

/////////////////////////////////////////////////////////////////

// class Account {
//     constructor(id, name, balance){
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }
//     get(){
//         return `all result ${this.id} ${this.name} ${this.balance}`;
//     }
//     set name(value){
//         if(value === value[0].toUpperCase() + value.slice(1)){
//             return value;
//         }else{
//             return `please write capital Letter your name`;
//         }
//     }
//     credit(amount){
//         const realBalans = this.balance + amount;
//         return realBalans;
//     }
//     debit(amount){
//         if(this.balance - amount < 0){
//             return `Amount exceeded balance.`;
//         }else{
//             return amount;
//         }
//     }
//     transferto( amount, anotherAccount){
//         if(this.balance - amount < 0){
//             return  `Amount exceeded balance`;
//             // console.log(`Amount exceeded balance`)
//         }else{ 
//             anotherAccount + amount;
//             let realBalans = this.balance - amount;
//             return  `your balans ${realBalans}` ;
//         }

//     }
//     identifyAccounts(accountFirst, accountSecond){
//         for (let i = 0; i <= accountFirst.length; i++){
//             if(accountFirst[i].toString() === accountSecond[i].toString()){
//                 return `to data are same please change your credit card`;
//             }else{
//                 return `it's two card are difrent `
//             }

//         }
//     }
// }

// const  count  =  new Account(5467, "tigran", 2500);

// // console.log(count.transferto(2400));
// console.log(count.identifyAccounts([31,"tigran", 566],[30,"tigran",566]));

///////////////////////////////////////////////////////////////

// class Person{
//     constructor(firstName, lastName, gender, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;

//     };
//     get(){
//         return `all data value ${this.firstName} ${this.lastName} 
//         ${this.gender} ${this.age}` ;
//     };
//     set(){
//         if(this.age <= 18){
//             return `you can't apply`;
//         }else{
//             return `writ needs data`;
//         };
//     }
//     toString(value){
//         if (value.split(' ').length === 1 ){
//             return  value;
//         }else{
//             return `onli write your name `
//         }
//     }

// }
// let arr = [];
// class Student extends Person{
//     constructor(arr , year, fee){ 
//        super(arr) 
//        this.year = year
//        this.fee = fee;
//     };
//     get(){
//         return `all data value ${this.year} ${this.fee} 
//         ${arr.join("-")}` ;
//     };
//     set(){
//         if(fee === 0){
//             return` you don't pay for your year`;
//         }else{
//             return `all ok `;
//         };
//     };
//     passExam(program, grade){
//         let year1 = 0;
//         if(grade >= 50 ){
//             year1 + 1 ;
//            return year1
//         }
//         return arr.push(year1);
//     }

// };

// // const hom = new Person('ww',45)
// const hom2 = new Student("thiuu")
// console.log(hom2.passExam("tiko",70));
// console.log(arr)

////////////////////////////////

function Clock({ template }) {
    let timer;
    function render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    this.stop = function () {
        clearInterval(timer);
    };
    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();
