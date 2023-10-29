const account_id= 123;
let name = "mkk";
var account_type = "savings"; // so we also not use var as it is for the block
balance = 125;
let state; // if we declare a varibale and we do not provide an initial value to it , so this will be a undefined in the javascript

// difference between the const , let , var and the nothing
//const will not change
//account_id = 2; // so this can not change as it is a const , and we can not change a const
name = "ckk";
account_type = "current";
balance = 123;
console.table([account_id, name, account_type, balance]);

//difference between the var and the let
/*
The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:

Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.
*/
function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }
 
  function nestedScopeTest() {
    if (true) {
      var functionVariable = 1;
      let blockVariable = 2;
  
      console.log(functionVariable); // will print 1
      console.log(blockVariable); // will print 2
  
      if (true) {
        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2
      }
    }
  
    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
  }
  // Global variables
var x = 1;
let y = 2;
console.log(this.x); // will print 1
console.log(this.y); // will print undefined

  
  