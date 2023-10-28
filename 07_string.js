let name = "manish"
let new_name = new String("mkk") //i can use some funstion on it
const repoCount = 50

// console.log(name + +" Kumar" +repoCount)

// now to avoid this we can use the string interpolation
console.log(`Hello my name is ${new_name.toUpperCase()} and my repo count is now ${repoCount}`)


let new_name1 = new_name
new_name = "ckk" // this will also not change the value 

console.log(new_name)
console.log(new_name1)

console.log(name[0])
console.log(name.length) 
// this toUpperCase and the toLowerCase does not chnage the original string , that we always
// have to remeber to take care
console.log(name.charAt(2)) 
console.log(name.indexOf('m')) 


new_name = "manish-kumar-kulhari"

let new_string1 = new_name.substring(2,3)  // we give one start and one end index at this place and the last one is not included , this we hjave to always take care
console.log(new_string1)
new_string1 = new_name.split('-',2)
console.log(new_string1)
 // trim
 //replace
 //includes
 //  

 //read about these two string methods also


