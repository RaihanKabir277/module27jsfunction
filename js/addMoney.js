

document.getElementById('btn-add-money').addEventListener('click', function(event){

    event.preventDefault();

    const addMoney = getInputValueById('input-add-money');
    const pinNumber = getInputValueById('input-pin-number');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    
    if(pinNumber === 1234){
      
        const balance = getTextFieldById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add transaction history

        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;

        document.getElementById('trans-container').appendChild(p);

    }
    else{
        alert('Failed to add money');
    }
});