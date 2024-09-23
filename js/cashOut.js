

document.getElementById('btn-cash-out').addEventListener('click', function(event){

     event.defaultPrevented();
     const cashout = getInputValueById('input-cash-out');
     const pinNumber = getInputValueById('input-cash-pin-number');

     if(pinNumber === 1234){
        const balance = getTextFieldById('account-balance');

        if(cashout > balance){
         alert('you do not have enough money to cash out');
         return;
        }


        const newBalance = balance - cashout; 
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold">Cash Out</h4>
        <p>${cashout} withdraw. New Balance ${newBalance}</p>

        `
        document.getElementById('trans-container').appendChild(div);

     }
     else{
        alert('Failed to Cash out');
     }
})