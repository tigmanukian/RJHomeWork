// const  arr = [1, 2, 3, 4, 9, ];

// const counter = {};

// for(let i = 0; i < arr.length; i += 1){
//     for(let j = i + 1; j < arr.length; j +=1){
//         counter[arr[i]]
//     }
// }


///////////////////////
// let a = Promise.resolve(1);
// let b = Promise.resolve(2);
// let c = Promise.resolve(3);

// let d = Promise.reject("error");
// let b = Promise.all([a, b, d]);
//  Promise.all([a, b, c]).then((res)=> {
//     console.log(res);
// })

// Promise.all([a, b, d]).then((res)=> {
//         console.log(res);
//     });

// let k = Promise.all([a, b, d]);

///////////////////////////////
 
// Promise.resolve("some value").then(res =>
//     console.log(1)).then(res =>
//     console.log(2)).then(res => 
//     console.log(3)).then(res => 
//     console.log(4));
// Promise.resolve("some other value").then(res =>
//         console.log(5)).then(res =>
//         console.log(6)).then(res => 
//         console.log(7)).then(res => 
//         console.log(8));


////////////////////////////////////

function foo(){
    fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
	"method": "GET",
	"headers": {
        "content-type": 'application/json',
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "67652df343msh304337993bd67bbp1c8ca7jsn86c750981df4"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}