let input = window.document.querySelector('#num')
let button = window.document.querySelector('#btnGenerate')
let div = window.document.querySelector('#wrapper')




button.addEventListener('click', generateArray)

function generateArray() {
    let initiator = parseInt(input.value, 10);

    let items = [] 
    let str = ' '
    let cntr = 0
    let total = 0
   

    str += '<table border="1">';

    for (let row = 0; row < initiator; row++) {
        items[row] = [];
        str += '<tr>'

        for (let column = 0; column < initiator; column++) {
            items[row][column] = randomNumber(1, 100);
            let value = items[row][column]
            
            total += value

          

            if (value % 3 === 0) {

                str += '<td class = "red">' + items[row][column] + '</td>';

            } else if (value % 2 === 0) {
                str += '<td class = "blue">' + items[row][column] + '</td>';
            } else {
                str += '<td>' + items[row][column] + '</td>';
            }
            cntr++


        }

        str += '</tr>'

    }
    str += '</table>';
    let average = (total / cntr)
    console.log(average)
    str += 'Average is: ' + average

    div.innerHTML = str

}
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}









/*function randomNumber (min, max) {
 
 return Math.floor (Math.random() * (max - min + 1)) + min;
 
 }*/

