"use strict";

let age;
let score = 83;

let new_score = {score :23}; // this is of the object type

console.log(typeof score)
console.log(typeof new_score)
console.log(new_score) 

let new_age = "33"
let valueinnumber = Number(new_age)
console.log(valueinnumber )
console.log(typeof (valueinnumber))

console.log("manish")
console.log("okkkkbhai")



new_age = "33abc"
valueinnumber = Number(new_age) // this will return a Nan and the type of function will also return a nuymber when we pass the Nan into it , this is how ot works , this is really good and amazing
console.log(valueinnumber)
console.log(typeof (valueinnumber))


new_age = null
valueinnumber = Number(new_age) // but if we pass a null into it it will convert it into the zero , again this is another good thing
console.log(valueinnumber)
console.log(typeof (valueinnumber))
console.log("manish")

new_age = null
valueinnumber = String(new_age) // but if we pass a null into it it will convert it into the zero , again this is another good thing// it will make it "null"
console.log(valueinnumber)
console.log(typeof (valueinnumber))


new_age = valueinnumber
valueinnumber = Number(new_age) // now the "NULL" string will be converted into the Nan
console.log(valueinnumber)
console.log(typeof (valueinnumber))

console.log("okkkkbhai")
new_age = undefined
console.log(typeof (new_age))
valueinnumber = Number(new_age) //undefined will become the Nan
console.log(valueinnumber)
console.log(typeof (valueinnumber))

new_age = undefined
console.log(typeof (new_age))
valueinnumber = String(new_age) //it will convert it to the "undefined"
console.log(valueinnumber)
console.log(typeof (valueinnumber))

new_age = true
console.log(typeof (new_age))
valueinnumber = Number(new_age) // true will be converted to the one
console.log(valueinnumber)
console.log(typeof (valueinnumber))

new_age = true
console.log(typeof (new_age))
valueinnumber = String(new_age) // it will convert it to the "true"
console.log(valueinnumber)
console.log(typeof (valueinnumber))


new_age = false
console.log(typeof (new_age))
valueinnumber = Number(new_age) // it will convert it to the zero
console.log(valueinnumber)
console.log(typeof (valueinnumber))


//sumarry for the conversion to the numbers
// "33" => 33
// true => 1
// false => 0
// null => 0
// undefined => Nan // type number
// "33abs" => Nan


console.log("okkkkbhai")
new_age = 1
console.log(typeof (new_age))
 valueinnumber = Boolean(new_age) // true will be converted to the one
console.log(valueinnumber)
console.log(typeof (valueinnumber))

new_age = null


console.log("bhai")
console.log(typeof (new_age)) // type of the null is always the object , this thing is really good that type of the null is object we need to learn it very seriously
valueinnumber = Boolean(new_age) // null will be converted to the false
console.log(valueinnumber)
console.log(typeof (valueinnumber))

new_age =   undefined
console.log(typeof (new_age))
valueinnumber = Boolean(new_age) // undefined will be conveteed to the flase
console.log(valueinnumber)
console.log(typeof (valueinnumber))



// conersion to the boolena
// "" =>false
// "mkk" => true
// undefined => false
// null => false