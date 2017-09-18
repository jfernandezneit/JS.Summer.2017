/*
 * Please put your name here
 * Name:
*/


/** Points: 10
 * Write JavaScript code that creates a JavaScript object 
 * with properties for first and last name as well as student id. 
 * For the values, use your own name and student id.
 * first and last must be a type of string
 * id must be a type of number
 * 
 * @return {object} JSON
 */
function studentInfo() {
    let result = {};
    
    result.first = "Joel";
    result.last = "Fernandez";
    result.id = 005011648;
    
    return result;
    
}


/** Points: 10
 * Given the html <div id="main"><p class="yourname"></p></div> 
 * put your name in the paragragh and return your name.
 * 
 * @return {String} Your Name
 */
function insertNameIntoDom(){
    let input = document.querySelector('.yourname')
    
    input.innerHTML = "Joel Fernandez";
    
    return "Joel Fernandez";
}


/** Points: 20
 * Create a loop that will populate an array with random numbers.
 * The array size should be a random number between 10 and 20.
 * 
 * @return {array}
 */
function randomArray(){
    let array = [];
    let size = Math.random() * (20-10) + 10;
    let fill = Math.random() * (10000 - 0)+0;
    
    array.size = size;
    
    for(let index = 0; index < array.size; index ++)
    {
        array[index] += fill; 
    }
    
    return array;
    
}


/** Points: 20
 * The function returns the string repeated the number of times specified.
 * @param {String} str 
 * @param {Number} times 
 * 
 * @return {String} strRepeated
 */
function stringRepeat(str, times) {
    let strin = "";
    let time = times;
    
    for(let index = 0; index < time; index ++)
    {
        strin += str; 
    }
    
    return strin;
  
}


/** Points: 20
 * Given the html <input type="text" name="email" />
 * The function will check the value of a field.  
 * If it is empty add the class "error" to the field
 * if it is not empty remove the class error from the field.
 * 
 * @return {VOID}
 */
function validateInputField() {
    let inp = document.querySelector('input');
    
    if (inp.value === '')
    {
        inp.classList.add('error')
    }
    else
    {
        inp.classList.remove('error');
    }
     
}


/** Points: 20
 * Given the html <div id="main"><p class="yourname"></p></div>
 * When the div is clicked on 
 * the style property color is changed to red 
 * 
 * @return {VOID}
 */
function colorClickRed() {
    let div = document.getElementById('main');
    
    div.addEventListener('click',function(){
        div.style = "color: red;";
    })
}


/** Points: 10
 * Check an array matrix of 4x4 to return the largest number found.
 * example of the array
 * [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]]
 * and 
 * [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]]
 * 
 * @param {Array} arr 
 * 
 * @return {Number} largest
 */
function largestNumberOfFourArrays(arr){
    var result = 0;

    for (let index = 0; index < arr.length; index++)
    {

        for (let i = 0; i < arr.length; i++)
        {
            let value = arr[index][i];

            if (value > result)
            {
                result = value;
            }
        }
    }

    return result;
    
}
