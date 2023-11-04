const useremail = "mkk"
if(useremail)
{
    console.log("true")
}
else{
    console.log("false")
} 

// if empty string then it will coniderd false, if it is underined it is considerd as the flase, but if it is a array of empty than it will be conidered as a false


// truty and false value

//falsy  =------>>  
/*
0, -0, null ,undefined, NaN , 0n, "", false
*/

//truthy  =------>>  
/*
"0", "false" , " ",[], {}, function(){} ==> so even the empty function is a truthy value
*/

const array  = []
const obj = {}


if(array.length===0)
{
    console.log("Array is Empty")
}
if(Object.keys(obj).length===0) // how to check that object is empty or not
{
    console.log("Object is Empty")
}

// flase == 0   true
//false == ""   true

// "" == 0   true 

// logical operators in the javascripter

// ------------>>>>>>>   Nullish  coalecsing Operator(??): null  undefined

let val1;
val1= 5??10

val1 = null ?? 10   // this works in such a way that it will assign the null if no valuew is obtained else it will asssign that value in the val1, so this is how this operator works

val1  = null ?? 10 ?? 15 // so the first value found will set up the value

// terniary operator in the java script

val1 = 10==10 ? "mkk" : "ckk"
console.log(val1)
