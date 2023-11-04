const myobject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby", 
    swift: "swift"
}

// for in loop can work on the objects , but our for of loop will not work on this, this we have to take care diffrently ok bro , got it


// for(key in myobject)
// {
//     console.log(key)
// }

// for(key in myobject)
// {
//     console.log(key)
//     console.log(myobject[key])
// }

// for in loop on the array

langiuage = ["javascript", "c++", " ruby"]
for(key in langiuage)
{
    console.log(key) // this will only print the 0 , 1 , 2 ,3 so this is one of the big problem in our language that we have to take care, so remeber that for in loop always gives us the key not the value for that
    console.log(langiuage[key])

}

// map iteration will notr work here this is really important


