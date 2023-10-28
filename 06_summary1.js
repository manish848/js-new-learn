// primitive --> these are call by value so when we pass then the cpopy is made and that copy is passed to you
// String, Number, boolean, null, undefined, symbol(uniq when we make them), BigInt 

// Most IMportant Js is dynamically typed language because all the types of the datatypes are being decided at the run time , in the statically tyoped langusge it is done during the compilation of the program



// non primitve or the reference type   // these divisons are done how they are store d in the memory , that is really important
// Array, objects, Functions


//symbol this always gives us something known as unique value , this always remains the uniqe

const a = Symbol("123");
const b = Symbol("123");
console.log(a === b); // this will be false as the symbol ensure ti be equal
// array
const heroes = ["12","23", "45"]
let time = {
    name: "manish",
    age: "1234",
}

const myfunstion = function(){
    console.log("HelloWorld");
}

console.log(typeof myfunstion); // all the non primitive have the data type of object
console.log(typeof heroes);
console.log(typeof time);


//https://262.ecma-international.org/5.1/#ec-11.4.3
