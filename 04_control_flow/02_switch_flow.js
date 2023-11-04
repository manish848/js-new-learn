// switch is always the good thing to take care, and we can do this , thsi is relly gfood to do

// switch(key){
//     case value:
//         break;
//     default:
//         break;
// } // this is the standard method to write this

const month =3
switch (month) {
    case 1:
        console.log("january")
        break; // we have to use this break because as the c++ , once the switch is matched , if we do not write the break it will start writin each of the coniditon thius we have ti understand and we have to tak of this thing, this is really good, except default it will write
        
    case 2:
        console.log("Febraury")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("january")
        break;  // we can do this using shift option down arraw, the same thisng will be lcopied as many time as we want to do
    default:
        console.log("any month")
        break;
}



