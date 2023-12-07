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