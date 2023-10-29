const myarray = [1,1,2,4,"manish"];
//mdn in the array
// collection of multipe item , resiable, miox of the elements can also be there this is how the array can be in the javascript

//arrays are not associative , so the array elements can not be accessed using the arbitrary strings, we need to take care of this

console.log(myarray[0]); // zero based index

/*   Most Important 
array copy operation int the js create a shallow copy, 
all standard copy operation in the js with any of the js object makes a 
shallow copy instead of making a deep copy of the elements
*/

/*  Shallow copy ===>  same reference is being provided to the copy that was of the source object , so 
in the shallow copy of the condition if we try tio chaneg the value of the copy with that
the original source will also chamge this does not happen with the case of the deep copy
*/

const myarr2 = new Array( 1, 2,3 ,4)
// object --->    prototype then there is one more prototype so just need to take care of this point this will dicussed after some time
// array methods


// myarr2.push(5);
// console.log(myarr2)
// myarr2.pop()
// console.log(myarr2)
// myarr2.unshift(0) // this zero is being added at the initial point of the array but not good memory
// console.log(myarr2)

// myarr2.shift()
// console.log(myarr2) // the first element will be deleted in this case


console.log(myarr2.includes(1))
console.log(myarr2.includes(6)) // this is really good and we need to take care of this
console.log(myarr2.indexOf(1))
console.log(myarr2.indexOf(6)) // this will return a -1 and we need to tak ecare why this is returining a -1 

const newarr = myarr2.join() // make a string read it

////////---------->>>> learn more about the const and how does this const really works that is really imnportant to take care and how we are going to take care of that

////   slice and Splice method in the javascript

console.log("A ", myarr2)
let mynewarray = myarr2.slice(0,2) // first second inculde, 3 not included
console.log(mynewarray)
console.log("B",myarr2)

let mynewarray2 = myarr2.splice(0,2)
console.log(mynewarray2)
console.log("C",myarr2)
 /*  so the difference between the slice and the slice is that, the splice manipulate teh original array
 and the slice does not manipulatye the original array , so this is the one difference thast we need to take care and thiosone is really good to take care
 */
