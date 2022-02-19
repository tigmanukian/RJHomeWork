// const incrementByOne = () => {
//     let num = 0;
//     return () =>{
//         num++;
//     }
//     return num;
// }
// const addOne = incrementByOne();

// const one = incrementByOne();
// const two = incrementByOne();
// const three = incrementByOne();
// const four = incrementByOne();

// console.log({one, two, three, four});

////////////////////////////////////////////////////////////////////////
// const useCountState = () => {
//     let count = 0;
//     return () => {
//         count++;
//     }
    
// }

// const {count, addone} = useCountState();

// addone();
// console.log(count);
// addone()
// console.log(count);


//////////////////////////////////////////////////////////////

// function logThis () {
//     console.log(this.name);
// }
// const user = {
//     name: "cool Name",
// }
// logThis.call(user);

// 




















// console.log("start");

// window.addEventListener("load", () => {
// console.log("hi");
// });

// console.log("end");

// custom props for functions
// const incrementByOne = () => {
// if (typeof incrementByOne.counter === "undefined") {
// incrementByOne.counter = 0;
// }

// incrementByOne.counter += 1;

// return incrementByOne.counter;
// };

// console.log("incrementByOne();", incrementByOne.length);

// const useCountState = () => {
// let count = 0;

// };

// const { count, addOne } = useCountState();

// addOne();
// console.log(count); // 1
// addOne();
// console.log(count); // 2
// function toggle(...args) {
// let index = 0;
// let value = args[0];

// return () => {
// if (index === args.length) {
// index = 0;
// }

// value = args[index++];

// return value;
// };
// }

// const onOff = toggle("slow", "medium", "fast", "crazy");

// console.log({
// first: onOff(), //
// second: onOff(), // off
// third: onOff(),
// forth: onOff(),
// 


// const makeArmy = () => {
//     let count = 0;
//     let fnArmy = [];
    
//     for (let i = 0; i < 10; i += 1) {
//     count += 1;
    
    // const fn = () => {
    // console.log(count);
    // };
    
    // fnArmy.push(fn);
    // }
    
    // return fnArmy;
    // };
    
    // const fnArmy = makeArmy();
    
    // fnArmy.forEach((el) => {
    // el();
    // }); 