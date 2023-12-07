// generate a rando color

const randomcolor = function(){
    const str = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++)
    {
        j = parseInt(Math.random()*16)
        color+=str[j];
    }
    return color
}



let changeme;

const startchangingcolor = function(){
changeme = setInterval(backgroundcolorr, 1000)

// const backgroundcolorr = function(){
//     document.body.style.backgroundColor = randomcolor()
// } // this will return error as this is mini hositing
function backgroundcolorr(){
    document.body.style.backgroundColor = randomcolor()
} 
};

const stopchangingcolor = function(){
  clearInterval(changeme)  
}

document.querySelector("#start").addEventListener("click", startchangingcolor) // we can also pass the handler to it
document.querySelector("#stop").addEventListener("click", stopchangingcolor)


