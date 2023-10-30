const TinderUser = {}
TinderUser.id = "123"
TinderUser.name = "ckk"
TinderUser.isLoggedIn = true

const regularuser = {
     email: "123@123.com",
     full_name: {
        userFullname: {
            first_name: "mkk",
            last_name: "papa",
        }
     },
}
console.log(regularuser.full_name.userFullname.first_name)
// option chaiming is alos done this is basically kind of the protection what if we are going inside
// and there is not waht we are trying to serach
console.log(regularuser.full_name?.userFullname?.mkk_name)

//combimimg

const obj1 = {1: "1", 2: "2"}
const obj2 =  {3: "1", 2: "2"}

const obj3 = {obj1, obj2} // in this the object and the object ill come so we need to remove such thing

// console.log(obj3)

// const obj4 = Object.assign(obj1, obj2) // this method is really good to understand// beacuse of this the valuthe obj1 woill chnage, sbecause the assigne works in such a way that it put all  the following value in the fisrt object that we wrote of 
// so because of this method the obj1 == obj4,   the fisrt is our target ----->   this is really important
const obj5 = Object.assign({},obj1, obj2) // this method can also be used for the making an array og the object pr use spread method fir that ourpose also , that is also really good

// console.log(obj4)
// console.log(obj1)
console.log(obj5) // only the uniq key will come into it

// how to convert and array to the object, this is really good to learn , and we should know this properlly

//but the spread object is the one that is used the most to be, so thisw is used the most

const obj6 = {...obj1, ...obj2, ...obj5} // as the keys always should be uniq , so only the unioq value will come into it , this is really good to remeber
console.log(obj6)

// when the data comes from the database it will be an array of objects , so how we do this
const data = [
    {
        name: "mkk",
        another_name: "ckk"
    },
    {
        name: "lkk",
        another_name: "kkk"
    }
]
console.log(data[0].name) 

// how to get the keys and the values this is really good to solve

console.log(Object.keys(TinderUser)) //the Object.keys() , will always return an array , and this is rellly exciting and good
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser)) //array inside array

// soem time we need to ask that a particular key is there or not and how this works
console.log(TinderUser.hasOwnProperty("name")) // true and false

/*   what is destructuring and how this works */

const course = {
    name: "mkk",
    price: 1232,
    instructos: "mkk"
}

//one way is to do the bracket method but some time we do not use that method also we try to use some other method in that condition

const {instructos: lkk} = course.instructos // we can give one name by our self also that how does that works, so this one is also really good to understand

// eralier the response of the api used to be a xml file , but now this comes in a json file , and that is relly good to understand that how how does it comes

const mkk = {
    "name": "mkk",
    "price": 23,
    "haan": 25
} // this is a json