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