let mydate = new Date()
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());

console.log(typeof mydate); // this is of the object type 
console.log(typeof mydate.toJSON()); // streing
console.log( typeof mydate.toLocaleDateString()); // string

//months in the javascript always atrats form zero , and we need to always learn this and remeber this

let newdate = (new Date(2023, 0 ,23))
console.log(newdate.toISOString())
console.log(newdate.toString())

let mycreatedate = new Date("01-14-2023")

// timestamps in the javascript

//the timestamp is being calculated in miliseconds derom the firsdt jan of the 1970 , and when we put the value in the timestamp this is being published to us

let mydate1 =  Date.now()
console.log(mydate1) // this is always a number 
console.log(mycreatedate.getTime()) // getTime() function is really good this gives us the value on the milliseconds, so always try to remeber this thing this is really very important

let newdate2 = new Date()
// now if we want to extract the day , time and anything then how we should procedd for that , that is really very very important

console.log(newdate2.getDay())

// toLocaleString this method is really good and we can acheive the many good solutions using this problem ,so understand this , this is really good

// we can get the any object type for the string

newdate2.toLocaleString('default',{
    weekdate: "long",
})