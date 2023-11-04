// comparison operator
/*
<,>,<=, !=, ===, == (returns always in the true and false)
=== al;ways check the type also of the two varibale but the == does not do that
*/

// if(2=="2") // this will be executed as this never compares the type of them it will convert the one into the another ,and thus we will get the naswer, but not in the ===
// {
//     console.log("mkk")
// }

// if(2==="2") // strict equal  , also we can use  !== 
// {
//     console.log("mkk2")
// }
// else{
//     console.log("mkk3")
// } 

score = 200
if(score>100)
{
    const power = "fly"
    var cower = "not fly"
    console.log(`user power ${power}`)
    console.log(`user power ${cower}`)
}
//console.log(`user power ${power}`) // this will be error as the scope proble
console.log(`user power ${cower}`) // this will not show any error so you need to understamnd this fact always

const balance =1000 

if(balance > 500) console.log("true") ;// this is how we can also this if statement , this is reallly importasnt to understand // implicit scope and it will undestand , but we have to add the semicolon
if(balance > 500) console.log("true") ,
console.log("truetrue");  // this is how we can write this is really good we can use one more comma , and that scope will keep going

// else if is again good things in the javascript , and we can use it same as the c++ , so we use the else if

const userloggedin = true
const debitcard = true 
const loggedinfromgoogle = true
const loggedinfromemail = false

if(userloggedin && debitcard && 2===2){
console.log("true")
}

if(loggedinfromemail || loggedinfromgoogle)
{
    console.log("true")
}








