// closure is also a part of the scope and we need to understand that thing also

let a = 10
const b =20
var c = 30 // global scope



if(true){ // block scope
    let d = 10
    const e =10
    var c = a // this will not put any problem already defined and we are defining it once again 
}
// console.log(d) // let is not defined out of the scope or they are avaiable only one the scope where they arfe defined but the var are defined everywhere
//console.log(e) // same goes for the const they are also defined within the scope they arfe defined
console.log(c)

// scope is nothing it is just the  {}, this create a different and new scope

function one(){
    const username = "manish"
    two()
    function two() { // this is the basic of the closure and we can read more about this in upcomong videos
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) // now the website is not here
}

one()
//two() // also the two() is not applicable , this is not good

if(true){
    const username = "mkk"
    if(true){
        const website = "ckk"
        console.log(username+website)
    }
    //console.log(website) // error
}
//console.log(username)//error

// +++++++++++++ interesting +++++++++++


console.log(addone(5)) // this will not give the eror in js , we are calling the function before the definition
function addone(value){
    return value +1
}


// how to use the function as a variable ,  so there is one more method of defining a function in the javascript

//console.log(addtwo(5))// this will put an error in java as we are putting this a variable in the java
const addtwo = function(num){ // this is some tume called as a expression in the javascript and this si really good to understand.
    return num+2
}
console.log(addtwo(5))


// ++++++++++++ this is called hoisting read more about the hoisting and the concept ++++++++++  
