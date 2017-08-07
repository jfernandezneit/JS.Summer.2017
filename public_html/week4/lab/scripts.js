let input =  window.document.querySelector('#num')
let button = window.document.querySelector('#btnGenerate')
let div = window.document.querySelector('#wrapper')


button.addEventListener('click', generateArray)

function generateArray () {
    div.innerHTML = input.value
}




//parseInt(input,10);

/*if (input / 3 ===0)
{
    background.color = 'red'
    
}
else if (input / 2 === 0)
{
    background.color = 'blue'
}*/

/*function randomNumber (min, max) {

           return Math.floor (Math.random() * (max - min + 1)) + min;

}*/

