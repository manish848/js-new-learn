const codin = ["js", "pyhton", "c++", "c", "java", "Ruby"]
  
///    ------->>   intresting

/*
for each loop is a high order loop and we have to take of this things
 
*/

// for for each loop we have to pass one callback function now how this callback function works , this is really conceptual and we have to understand this concept really

// we do not pass the name to the callback function in the for each loop , this we have to remeber
// codin.forEach(function (item){
//     console.log(item)
// })

//using the arrow loops

// codin.forEach((item) => {console.log(item)})

function printme(item)
{
    console.log(item)
}

codin.forEach(printme) // we only pass the reference here not we call here so this we have to remeber here , this is really importsnt to understand

codin.forEach((item ,index, arr) =>{
    console.log(item, index,arr) // arr is the complete array in the js, that is paased to the foreach loop , and we have to understand this really important concept is this one
})

let mycodin = [
    {
     language: "javascript",
     language_file: "Js",
    },
    {
        language: "pyhton",
        language_file: "py",
    },
    {
        language: "c++",
        language_file: "cpp"
    }
]
mycodin.forEach( (item) => {
    console.log(item.language)
})
