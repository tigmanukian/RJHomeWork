// const incrementByOne = () => {
//     if (typeof incrementByOne.counter === "undefined") {
//         incrementByOne.counter = 0;
//     }
//     incrementByOne.counter += 1;
//     return incrementByOne.counter;

// };

///////////////////////////////////////////////////////////

// const incrementByOne  = () => {
//     let  count = 0;

//     return () => {
//         count++;

//         return count;
//     }
// }

// const addOneStep = incrementByOne();

// const one = addOneStep();
// const two = addOneStep();
// const three = addOneStep();
// const four = addOneStep();


// console.log({ one, two,} )

/////////////////////////////////////////////////////
// const userCountState = () => {
//     let count = 0;


// };

// console.log(userCountState.langth);


// const {count, addOne } = userCountState();

// addOne();
// console.log(count);
// addOne();
// console.log(count);

////////////////////////////////////////////////
// function logThis(starter){
//     console.log(starter + this.name);
// }

// const thisChange = {
//     name : "tiko",
// }

// logThis.call(thisChange,"list  ");


/////////////////////////////////////////////////////////

// function logThis (starter,args,year) {
//     console.log( this.name +"/" + args +"/" +  starter +"/" + year   );
// }

// const user = {
//     name: "tikgran",
//     // yer: 15,
// }

// logThis.apply(user, ["this is ",' this ',15],);
// logThis.call(user, ["this is ",' this ',15],);

/////////////////////////////////////////////////

// const binding =  {
//     firstName: "Tiko",
//     lastName: "Manukyan",
//     fullName: function (){
//         return this.firstName + " " + this.lastName
//     }
// };
// const changeFullName = {
//     firstName: "Kamo",
//     lastName: "bagdasaryan"
// };

// let full = binding.fullName.bind(changeFullName);

// full();
// console.log(full());
///////////////////////////////////////////////////////////////////

// function toggle(arg1, arg2) {
//     let value ;

//     return () => {
//         if (value === arg1) {
//             value = arg2;
//         } else if(value === undefined){
//             value = arg2;
//         }else{
//             value  = arg1;
//         }

//         return value;
//     }
// };

// const onOff = toggle('on', 'off');


// console.log(onOff());
// console.log(onOff());
// console.log(onOff());
// console.log(onOff());


// console.log({
//     first: onOff(),
//     second: onOff()
// })
/////////////////////////////////////////////////

// function toggle(...args) {
//     let index = 0
//     let value = args[0];
//     return () => {
//        if(index === args.length){
//            index = 0;
//        }
//        value = args[index++];
//         return value;

//     }
// };

// const onOff = toggle('slow', 'medium', "fast");


//  console.log({
//     first: onOff(),
//     second: onOff(),
//     threed: onOff(),
//     fourd: onOff()

// })

///////////////////////////////////////////////////////////////

// const makeArmy = () => {
//     let count = 0;
//     let fnArmy = [];
//     for(let i = 0; i < 10; i += 1){

//         const fn = () => {
//             count += 1;
//             console.log(count);
//         };

//         fnArmy.push(fn);
//     }
//     console.log("count", count);

//     return fnArmy;
// };
// const fnArmy = makeArmy();

// fnArmy.forEach((el) => {
//     el();
// })

/////////////////////////////////////////////////  recursion function 

// const fn = (a) => {
//     if(a <= 0){
//         return a;
//     }

//     console.log(a);
//     return fn(a - 1);
// }
// fn(5 );

//////////////////////////////////////////////////

// const sumTo = (number) => {
//     let sum = 0;
//     if( number <= 0){

//         return sum;
//     }
//     sum += number;


// }
// console.log(sumTo(5));


// const sumTo = (number) => {

//     if (number === 1) {
//         return 1;
//     };

//     return number + sumTo(number - 1);
// }

//  const addOne = () => {
//      let count = 0;
//      return () => {
//          count++;
//          return count;
//      }
//  }

//  const addOneFun  = addOne();

//  const one = addOneFun();
//  const two = addOneFun();
//  console.log({one, two});
//////////////////////////////////////////////////////// pipe 
//  const multiply = (a,b) => a * b;

//  const square  = (n) => multiply(n,n);

//  const addTwo =(n) => n + 2;
//  const  pipe = (...fns) => {
//      return (x) => fns.reduce((acc, function1) => function1(acc), x);
//  }

//  const squareNumberAndAddTwo = pipe(square, addTwo);

//  console.log(squareNumberAndAddTwo(5));

// const arr = [1, 2, 3,undefined,5];

// arr.forEach((el) =>{

//     const div = document.createElement('div');
//     // div.textContent = el;
//     div.innerHTML = `<h1>${el}</h1>`

//     document.body.append(div)
// })

//////////////////////////////////////////////////////////////////////

// function renderLoading(loading) {
//     const div = document.createElement('div');
//     div.id = "loading";
//     div.textContent = "...loading";
//     div.style.fontSize = "40px"
//     if (loading) {
//         document.body.append(div);
//     };
//     if (!loading && document.getElementById('loading')) {
//         document.body.removeChild(document.getElementById('loading'));
//     }
// }
// // renderLoading(loading);
// const user = "i am user";
// const loading = true;

// renderLoading(loading);

// try {
//     if (!user) {
//         throw new Error('user is not found')
//     }
//     const div = document.createElement('div');
//     div.textContent = "user has found";
//     document.body.append(div);
// } catch (err) {
//     const div = document.createElement('div');
//     div.textContent = err.message;
//     document.body.append(div);
// } finally {
//     renderLoading(false);
// }

//////////////////////////////////////////////////////////////////////////

// console.log("starst");

// new Promise(resolve => {
//     console.log("resolve");
   
//     resolve(() => {
//         console.log("inside resolve");
//         return "done";
//     })
// }).then((res) => {
//     console.log(res());
// })
// console.log("end");

//////////////////////////////////////////////

