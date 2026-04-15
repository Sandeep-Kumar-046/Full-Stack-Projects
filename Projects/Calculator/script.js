const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");
let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;
const calculate = {
  "+" : (firstNumber,secondNumber) => firstNumber + secondNumber,
  "-" : (firstNumber,secondNumber) => firstNumber - secondNumber,
  "*" : (firstNumber,secondNumber) => firstNumber * secondNumber,
  "/" : (firstNumber,secondNumber) => firstNumber / secondNumber,
  "=" : (firstNumber,secondNumber) => secondNumber
};
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
function useOperator(operator)
{
  // Prevent multiple operators
  // Show console.log() that multiple operators are being added
  // Also assumes if the user did not added another opertor and straghtaway a new value was added new value will be assigned to the display assuming a NEW CALCULATION FROM BEGINNING
  const currentValue = Number(calculatorDisplay.textContent);
  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  }
  // Ready for next value, store operator
  awaitingNextValue = true;
  operatorValue = operator;
}
inputBtns.forEach((inputBtn)=>{
  if(inputBtn.classList.length === 0)
  {
    inputBtn.addEventListener("click",()=>addNumberValue(inputBtn.value));
  }
  else if(inputBtn.classList.contains("operator"))
  {
    inputBtn.addEventListener("click",()=>useOperator(inputBtn.value));
  }
});