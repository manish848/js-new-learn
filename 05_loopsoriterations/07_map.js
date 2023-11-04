const mynums = [1,2,3,4,5,6,7,8,9]

// let synume = mynums.map((item) => (item+10)) // this also automatically return teh value so we need to also take care of this thing
// console.log(synume) // it will always return the value it is not same as the filter, so filter and the map are different , the filter will return only if a specific condistion is being satisfied, so we have t understand this thing ,and this is really very important
//  synume = mynums.map((item) => (item>4)) 
//  console.log(synume) // so it will always return the value this time a true and the false it returned, the filter is the same as the select in the ruby , it will only return the selected value but the map will always return the value depending on the condistions

 const seeuse = mynums.map((item) => (item*10)).map((item) => (item+1)).filter((item)=> (item>30))
 // this is called the chaining of the methods ,and we need to understand the chaining very importantly

 console.log(seeuse)


 // map is the same in ruby map