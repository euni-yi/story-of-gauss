// Script.js

// html elements
let calcBtn = document.getElementById("calc-btn")
let sumOut = document.getElementById("sum-out")
let output = document.getElementById("n-out")



// add event listner
 calcBtn.addEventListener("click", calcSum);

// Event function
function calcSum(){
   // input
   let total = 100*101/2
   //    let input = +document.getElementById("inp").value;
   //   //process
   //    let total = 0;
   //    for(let n = 1;n<=input; n++){
   //    total = total+n;
   //  }
   //Ouutput the total
   sumOut.innerHTML=total;
   output.innerHTML=input;
}