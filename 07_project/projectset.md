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

## solution 4

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```