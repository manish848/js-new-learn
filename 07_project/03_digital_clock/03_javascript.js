const watch = document.getElementById('clock')
    const newdate = new Date()   // this return the new date
console.log(newdate.toLocaleTimeString())
// but we want to return this function each time so that we can get the current date and the current time

 // we can work on the cron job, this can work but we do not want to run on it

 // event constroller in the javascript
// this takes the two argumennts one is the function \and opne is the time in milliseconds
 setInterval(function(){
    const newdate = new Date()   // this return the new date
watch.innerHTML = newdate.toLocaleTimeString()
 }, 1000)

 