document.getElementById('deposit-button').addEventListener('click', function(){
    //take input value from input field
    const depositAmount = getInput('deposit-input')
    // set amount to the deposit container
    setInput(depositAmount, 'deposit-container')
    /* const depositContainer = document.getElementById('deposit-container')
    const previousDepositAmount = parseFloat(depositContainer.innerText);
    const totalAmount = previousDepositAmount + depositAmount;
    depositContainer.innerText = totalAmount; */
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    //take input value from input field
    const withdrawAmount = getInput('withdraw-input')
    // set amount to the deposit container
    setInput(withdrawAmount, 'withdraw-container')
})

//get input function for deposit and withdraw
function getInput(input){
    const getInputElement = document.getElementById(input);
    const getInputValue = parseFloat(getInputElement.value);
    getInputElement.value = '';
    return getInputValue;
}

//set input function for deposit and withdraw
function setInput(depositAmount, container){
    const depositContainer = document.getElementById(container)
    const previousDepositAmount = parseFloat(depositContainer.innerText);
    const totalAmount = previousDepositAmount + depositAmount;
    depositContainer.innerText = totalAmount;
}