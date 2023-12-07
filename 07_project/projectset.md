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