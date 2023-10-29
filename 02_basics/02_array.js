const marvelhero = ["Thor", "Ironman", "captianAmnerica"]
const dchero = ["superman", "batman", "flash"]
// marvelhero.push(dchero) // array inside array will become
// console.log(marvelhero) 
// console.log(marvelhero[3][1]) 
// const newhero = marvelhero.concat(dchero) // this does not change the array original
// console.log(marvelhero) 
// console.log(newhero) 


// spread 

const newarray = [...marvelhero, ...dchero]
console.log(newarray) 

const another_array = [1,2, 3, 4 ,5, [6 , 7, [8, 9, [10]]]]
const another_array_new = another_array.flat(2) // it only solved it to one depth , so 
// we need to provide the deptah also we can write infinity to avoid any of the situtation , that will also be good

console.log(another_array_new) 

console.log(Array.isArray("Manish")) 
// convert the array
console.log(Array.isArray(Array.from("manish")));
const newnewarray = Array.from("manish") // and array with all the char element will be there in that consition
console.log(newnewarray)
const newnewarray3 = Array.from({name: "manish",
 age: 16, 
height: 173,}) // it is empty array , we have to pass keys and the value that we will se later
// and array with all the char element will be there in that consition
console.log(newnewarray3)
//Array.from can make a completely new array and we can get the values form that



// read about Array.of
let mkk =1
let ckk = -11;
let lkk = 0;
let newarrar4 = Array.of(mkk,ckk,lkk)
//newarray = Array.of(mkk,ckk,lkk) // we can not assign a new value to a constant , that we need to take care we can change the values in the array but we can not reassign the value ot it
console.log(newarrar4)

 


