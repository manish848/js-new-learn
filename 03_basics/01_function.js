function saymyname(){
//scope
console.log("Hello World")
}
saymyname // refeence
saymyname() // execution of the functi

// function addnumber(number1, number2){ // when the function is defined than what we put in braces is called parameters
//       console.log(number1, number2)
// }

function addnumber(number1, number2){ // when the function is defined than what we put in braces is called parameters
     let result = number1+number2
     return result;
}

let result = addnumber(3,4) // this is called arguments

// we need to understand the scope in the javascript because some times the variables are only having the scope of the function and some time they are having the scope of the whole elements

// function loginUserMessage(username){
//     //  if(username === undefined){
//     //     
//     //  }
//          if(!username){ // it will handle the undefined and the ""
//             return `paas the value man` 
//      } 
//      return `${username} just logged in`
    
    
// }

/// --->   how to give some default value to it , that is again really important

function loginUserMessage(username="sam"){
     return `${username} just logged in`
    
    
}

console.log(loginUserMessage("mkk")) // if we do not pass the name indefined just logged in will be printed
console.log(loginUserMessage()) 

/*   most most important

int the javascripot the "" and the undefined are considered the false value so we can directily use these values also*/