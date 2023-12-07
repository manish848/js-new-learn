# project  releatd to dom

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project code

## solution 1

``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
  console.log(button)
   button.addEventListener('click', function(e){
     console.log(e)
     console.log(e.target)
    // if(e.target.id == 'grey')
     body.style.backgroundColor = e.target.id
   })
})

```

## solution2

```javascript

// the submit button by default sends the value to the server we also have to prevent those things to avoid such things

const form = document.querySelector('form')
// if we write here then the empty value will be provided here so we also need to avoid such things to make our code sweet and good

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results ')
    result.innerHTML = '';
    if(isNaN(height) || height<0|| height==0)
    result.innerHTML = 'Please provide valid height';
    else if(isNaN(weight) || weight ==0 || weight<0)
    result.innerHTML += 'Please provide valid weight';
    else {
        const bmi = weight/ ((height*height))*10000
        result.innerHTML = `<span>${bmi}<\span>`}
    })
```
## solution 3
``` javascript
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
```