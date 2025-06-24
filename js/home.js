// add money to the account
document.getElementById('Btn-Add-money').addEventListener('click', function(e){
    e.preventDefault();
    // get to the  money account
    const addMoneyInput = document.getElementById('add-money').value;
    const addMoneyAnput = parseFloat(addMoneyInput);
    // git the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    if(pinNumberInput === '1234'){
        alert('ag money to the your accountddin')
        const balance = document.getElementById('balance').innerText;
        const currentBalence = parseFloat(balance);
        const newBalance = currentBalence + addMoneyAnput;
        // console.log(newBalance)
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('add-money').value = '';
        document.getElementById('input-pin-number').value = '';
    }
    else{
        alert('Failed to the money! Please try again.')
    }
})