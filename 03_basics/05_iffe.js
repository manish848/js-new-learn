// IIFE Imediatly invocked function Expression

 // some of the funstions are needed to be exectuted immediately , also the global does not pollute the thing , for that we need to define of the funstions that can immediately exectuted

 //        ()()    this is the expression for the iffe, in the first () write your function and in the second   will help us to run the project
// to remove the global scope pollution we use this
 (function chai(){
     console.log("DB Coonected") // named iffe
 })(); // we haqve to use here semicolon as this does not know where to end the iffe funstions , sso for that ee use this semicolon to tell him that


 ( ()=> {  console.log("DB AGAIN CONNECTED")})(); // we have to end this using this

 ( (name)=> {  console.log("DB AGAIN CONNECTED"+ name)})("manish Bhai"); 

 // named iffe
