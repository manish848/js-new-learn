const codin = ["js", "pyhton", "c++", "c", "java", "Ruby"]
// const values = codin.forEach((item)=>{
//     console.log(item)
// })
// console.log(values) // so this way it will no return anything so for this problem we need to take of the for each loop in a different way

const mynums = [1,2,3,4,5,6,7,8,9]
// const  newnums = mynums.filter((item)=> item>5) // filter always returen value // we do not write return as this implicit return , but if we use {}, then we have to write the explicit return key word so take of that man

// console.log(newnums)

// const  newnums1 = mynums.filter((item)=> {
//     return item>8}
//     ) 
//     console.log(newnums1)


    //do this using the for each loop

    const newnums3 = []
    const values = mynums.forEach((item)=>{
    if(item >5)
   newnums3.push(item)
})
console.log(newnums3)

/// filter is the same in the slect in ruby
