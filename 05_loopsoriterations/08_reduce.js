// reduce is a very important loop in the javascript , and we need to understand this that how does this this thing work

// reduce always return 

const mynums = [1,2,3]
const mytotal = mynums.reduce(function (acc,currval){
    return acc+currval
},6)
console.log(mytotal) // this is how we can do the thinng, when we use the function , sometime we can also use the arrow function

const mynums2 = mynums.reduce((acc,currval) =>acc+currval,6)
console.log(mynums2) 


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "ck course",
        price: 3999
    },
    {
        itemName: "cs course",
        price: 4999
    }
]

ans = shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(ans)