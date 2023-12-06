console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // this is used to show the power in the javascript this is really important
console.log(2+2);

let str1 = "hello";
let str2 = "hello";


console.log(str1=="hello");
//so when we see a string it will strart converting from that particular point to a string, else it will be a number
//think about them once and you will find the solutions
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log(1+1+1+"2"); //32
// console.log(1+2+"3"+2); //332
// console.log("1"+2+2); //122
// console.log(1+null+1+"1"+2+2);//2122
console.log(null+1+1); //2
console.log(2+2+"1"+null);//41null
console.log(2+true+1); //4
console.log(2+true+1+"1"+true); //41true
console.log(2+true+1+undefined+1); // this will give a Nan , so hioghest to tghe nan ----->>>   this is really very important in the javascript
console.log(2+true+1+undefined+"1"); //Nan1
console.log("2"+true+1+undefined); 
console.log(3+ 4 * 5/2); // see the modular problem
//tc93.es/ecma   7. abstract operation 7.1.1 toptimitive

// string muttable or immutable in the javascript
let x = "que";

x[0] = 'x';
x[1] = 'r';
x[2] = 'e';
console.log(x); // this will not change the value as the string in the js are immutable if we do the using the index method or elese we can do the change
x = "Xre";
console.log(x);

x = "que";

console.log(x.slice(1)) // if we do not paas the second argument ino it , it will make the whole string
x = "x" + x.slice(1);
console.log(x); // this is how we can change one


//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
