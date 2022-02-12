document.getElementById('deposit-button').addEventListener('click', function(){
    //take input value from input field
    const depositAmount = getInput('deposit-input')
    if(depositAmount > 0){
         // set amount to the deposit container
        setInput(depositAmount, 'deposit-container')
        // balance update for deposit 
        balanceUpdate(depositAmount, true)
    }
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    //take input value from input field
    const withdrawAmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        // set amount to the deposit container
        setInput(withdrawAmount, 'withdraw-container')
        // balance update for withdraw
        balanceUpdate(withdrawAmount, false)
    }
})

function getCurrentBalance(){
    const balanceContainer = document.getElementById('balance-container');
    const previousBalance = parseFloat(balanceContainer.innerText)
    return previousBalance;
}

//get input function for deposit and withdraw
function getInput(input){
    const getInputElement = document.getElementById(input);
    const getInputValue = parseFloat(getInputElement.value);
    getInputElement.value = '';
    return getInputValue;
}

//set input function for deposit and withdraw
function setInput(inputAmount, container){
    const amountContainer = document.getElementById(container)
    const previousAmount = parseFloat(amountContainer.innerText);
    const totalAmount = previousAmount + inputAmount;
    amountContainer.innerText = totalAmount;
}

// balance update for deposit and withdraw
function balanceUpdate(inputAmount, isAddition){
    const balanceContainer = document.getElementById('balance-container');
    const previousBalance = parseFloat(balanceContainer.innerText)
    if(isAddition == true){
        const totalBalance = previousBalance + inputAmount;
        balanceContainer.innerText = totalBalance;
    }else{
        const totalBalance = previousBalance - inputAmount;
        balanceContainer.innerText = totalBalance;
    }
}