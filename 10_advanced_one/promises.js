//  const promiseone  = new Promise(function(resolve, reject){
//     // do an async task
//     // db task , cyptography, network calls
//     setTimeout(function(){
//         console.log('Async task is done')
//         resolve() // now this is connected to the then() methosd so we need to understand this things correctly
//     },1000)
//  }) // promise take a callback alsways , callback means the function or the method that we poass inside the promise , so we need to take care of this concept rrally important

//  // cosnsumption
// // resolve is directly connected to the .then()
//  promiseone.then(function(){
//     console.log("promise consumed completed")
//  })

//  new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is going one')
//         resolve() // now this is connected to the then() methosd so we need to understand this things correctly
//     },1000)
//  }).then(function(){
//     console.log("promise consumed completed")
//  })

// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is going one')
//         resolve({name: "manish", email: "kulhari321@gmail.com"}) //the data that we paass here can be consumed by the .then function so this is really very important to understand so we need to take care of the fact
//     },1000)
// })
// promisethree.then(function(user){ // so the daat will come here so this we can understand , so this is really very important to understand
// console.log(user)
// })

function errorr(){
    return false;
}
// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = errorr()
//         if(error)
//         reject('Error: something went wrong')
//         else
//         resolve({name: "manish", email: "kulhari321@gmail.com"}) //the data that we paass here can be consumed by the .then function so this is really very important to understand so we need to take care of the fact
//     },1000)
// })
// // what is finally and this will always run it does not matter that what will happen so write that what happened in the finally this will always run
// promisefour
// .then((user)=>{ // so the daat will come here so this we can understand , so this is really very important to understand
// console.log(user)
// return user.name // this can be accssed inside the chaining of the then , so this is really a very important thing to understand that the then is using this and this is giving us the reult that is needed by us , so we need to understand here very important concepot is this one
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((result)=>{ // we can not write this at another place
// console.log(result)
// })
// .finally(()=>{
//     console.log("done guys")
// })


//You should use Promises only for asynchronous functions and nothing else. Do not abuse them as an error monad, that would be a waste of resources and their inherent asynchrony will make every­thing more cumbersome.

// When you have synchronous code, use try/catch for exception handling.

//begin   how this looks in the ruby
// # something which might raise an exception
// rescue SomeExceptionClass => some_variable
//   # code that deals with some exception
// rescue SomeOtherException => some_other_variable
//   # code that deals with some other exception
// else
//   # code that runs only if *no* exception was raised
// ensure
//   # ensure that this code always runs, no matter what
//   # does not change the final value of the block
// end

// this was catch mechanism what about the thro mechanism 


// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw new Error('Parameter is not a number!');
//     }
//   }
  
//   try {
//     getRectArea(3, 'A');
//   } catch (e) {
//     console.error(e);
//     // Expected output: Error: Parameter is not a number!
//   }


// python

// As a Python developer you can choose to throw an exception if a condition occurs.

// To throw (or raise) an exception, use the raise keyword.


// Ruby



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}// this is again really a very good thing. insetead of writing the 

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary') // the response is the first thing to be written even though the upper code will not be returing so we need to understand this using the notes, this is really a vaery cool thinmgs to understand
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
// we can send request using the request module, XMLHTTPRequest




//         https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API           https://developer.mozilla.org/en-US/docs/Web/API/Fetch
// 23456474867564543  interesting we have to check the status code differently in fetch as they are returned with the rewsponse code
//The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).
