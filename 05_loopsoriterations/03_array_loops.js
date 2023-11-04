// for of loop in the javas
const array = [1,2,3,4,44]

for(const i of array)
{
  console.log(i)  
}

const s = "greetings"
for(const greet of s)
{
    console.log(greet)  
    // we can use the break and the continue in this also , they are also really good to understand
  }

  //Maps in the javascript

  const map = new Map()

// what is the map in the javascript ===>>>

/*
key value ,and the unique values will be there in the map, and it keep the order
*/

map.set("IN", "INDIA")
map.set("usa", "america")
map.set("frc", "France")
map.set("IN", "INDIA") // it will not go inside it , so this is really good in the javascript
// console.log(map)

for(const key of map)
{
    console.log(key)
}

for(const [key,value] of map)
{
    console.log(key)
    console.log(value)
} 


const game ={
    "game1":"NFS",
    "game2":"cFS"
}

// for(let key of game)
// {
//     console.log(key)
// }  // it says that we can not iterate on the object in thai way so we need to find the another way to iterate on thia






