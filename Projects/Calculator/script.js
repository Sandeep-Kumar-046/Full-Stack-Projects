const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");
let firstValue = 0;
let awaitingNextValue = false;
function addNumberValue(number)
{
  if(awaitingNextValue){
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  }
  else{
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
  }
}
inputBtns.forEach((inputBtn)=>{
  if(inputBtn.classList.length === 0)
  {
    inputBtn.addEventListener("click",()=>addNumberValue(inputBtn.value));
  }
});