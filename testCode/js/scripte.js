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
function toggle(...args) {
    let index = 0
    let value = args[0];
    return () => {
       if(index === args.length){
           index = 0;
       }
       value = args[index++];
        return value;

    }
};

const onOff = toggle('slow', 'medium', "fast");


 console.log({
    first: onOff(),
    second: onOff(),
    threed: onOff(),
    fourd: onOff()

})