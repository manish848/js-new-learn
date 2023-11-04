// es6 in 2015 and many features in the js

 // this tells us more about the current context in the js

 //java is a oop language , c++ is a oop languyage but js is prototype language

 const user = {
    name: "manish",
    age: 23,

    welcomemessage: function(){
        console.log(`${this.name} bhai teri age ho gayi hai ${this.age} or dhek ab tu mera kamal`)
        console.log(this) // this will print the current object, so completye object will be printed in this scene, reference will be given in the function
    }
 }

//  user.welcomemessage()
//  user.name = "sam"
 user.welcomemessage()

console.log(this) // this will right now print a {}, this will happen only in the node but not on the website inspect

//if we do this in the inspect the window object will be printed bewcause in the browser the global object is the window and we need to take care of this, ion node envirnment this global object is the empty object, some of the functions in the window object are like click nad form submit, really important


// one way to define the function
function chai(){iuh8j
    const username = "manish"
    console.log(this) // now this will print a lot of stuff, try to print this man
    console.log(this.username) // this will be undefined as the this can have acceass to the object variable and not the others, so we need to remeber this things very impoirtantly and we need to tak ecare of this

}

// another way to define the functiomn

const chai1 = function(){
        const username = "manish"
        console.log(this) // now this will print a lot of stuff, try to print this man
        console.log(this.username) // this will be undefined as the this can have acceass to the object variable and not the others, so we need to remeber this things very impoirtantly and we need to tak ecare of this
    
    }

//third method to define the function in the javascript is the arrow function , and this is really important to solve 
 


//      ======>>>>>>          arrow functions are really good to understand , adn we can solve some of the problesm using the arrow functions

const chai2 = () =>{
        const username = "manish"
        // console.log(username)
        console.log(this) // this wala this will not print a lot of stuff because this is now a arrow function and this will only print a single {} here
        // console.log(this.username) // this will be undefined as the this can have acceass to the object variable and not the others, so we need to remeber this things very impoirtantly and we need to tak ecare of this
    
    }

    chai()
    chai1()
    chai2()

    /*   


    () =>{}
    we can put this in a variable too
    const addtwo () =>{}


    */

    // implicit return function

    const addtwo =(num1, num2) => num1+num2
    const addtwo1 =(num1, num2) => (num1+num2)

    const addtwo2 =(num1, num2) => ({name: "mkk"})
    console.log(addtwo(3,7))
    console.log(addtwo2(3,7))


