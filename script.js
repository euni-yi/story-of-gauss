// Script.js

// html elements
let calcBtn = document.getElementById("calc-btn")
let sumOut = document.getElementById("sum-out")

// add event listner
calcBtn.addEventListener("click", calcSum);

// Event function
function calcSum(){
    // sum integers 1 to 10-0
    let total = 0;
   for(let n = 1;n<=100; n++){
    total = total+n
   }
//    Ouutput the total
   sumOut.innerHTML =total;
}