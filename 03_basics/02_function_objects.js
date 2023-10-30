function calculate(val1, val2,...num){ // rest operator, and this is really good
    let sum =0;
    for(let i=0;i<num.length;i++){ // first two will be given to the val1, and the val2
        sum = sum+num[i]
    }
  console.log(num) // it will print a complete array
  return sum
} 
console.log(calculate(200,300,400, 500,600))
// Rest operator , the rest operastor looks exactly same as of the spread operator , the main difference here is this m, that when we use this in the parametrs that we do not know all the elements in the


function handleobject(usero){
    console.log(`${usero.name} or bhai teri umer hai ${usero.age}`)
}
handleobject({name:"mkk", age: 23})

function handlea(array){
    console.log(array[1])
}
handlea([200,3000,234223213])