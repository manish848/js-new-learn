const balance = new Number(100); // this way we can get some function of the object also
// console.log(typeof balance) // this will return a object
// console.log(typeof(balance.toString()))
// console.log(typeof balance) 
// console.log(balance.toFixed(3)) // precision to a particular point

const otherNumber = 23.8966
// to precision always returns a string
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(1))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(5))

//to localestring , this is also good and it makes the bigger value as a easy redeable

const onnumber = 10000000000
// console.log(onnumber.toLocaleString()) // string
// console.log(onnumber.toLocaleString(`en-IN`)) 
console.log(Math)  // object // print on inspect and we will see many thimgs on that

// functions of the Math 

// console.log(Math.abs(-2))
// console.log(Math.round(2.3))
// console.log(Math.ceil(2.3))
// console.log(Math.floor(2.3)) 
// console.log(Math.min(1,2,3,4,5)) // minimum value in a array

//random in the Math javascript

console.log(Math.random());  // [0,1]
const min =10
const max =20
console.log(Math.floor(Math.random() *(max-min+1))+min)
