// singleton
// using constructos
//Object.create   --------->    we will talk about this later after some time







// object literals// multiple instances
// in system this key is conmsiodered as a string, and this is really important to understand
// how to use a symbol in the object , this is really important to understand and take , so understand for this
const mysym = Symbol("key1")
const js_user = {
    name: "manish",
    [mysym]: "23",
    age: 22,
    location: "jaipur",
    is_Active: true,
    "full_name": "mkk" // this can not be accessed using the dot operator so for that i have to use there a string and that is really important
}
js_user.name
js_user.age
js_user["user"] // here i have to write it as a string as this is behind the tracks is consodered as a string
console.log(typeof js_user[mysym])

js_user["name"] = "mkk"
console.log(js_user)
// how to freeze a object so that no one can chnage the value of a object and this is really good
// Object.freeze(js_user)
// now this value have been freezed
js_user["name"] = "ckk" 
console.log(js_user)

// in javascript the funstions are also treated as simple variable and this is also very good to understand

js_user.greeting = function(){
    console.log("Hello Js User")
}
// js_user.greeting; // this is giving a return type and the function is not xceuted

// js_user.greeting()//funstion is executed

console.log(js_user.greeting) // this will be returned
console.log(js_user.greeting()) // we will talk about this undefined that one more call is done

js_user.greetingtwo = function(){ // to refer the properties inside a object we can write a this operator
    console.log(`dhek bhai teranaam hai ${this.name} teri umer hai ${this.age} or bata ke dhang hai`)
}

js_user.greetingtwo()