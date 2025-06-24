document.getElementById('Btn-Add-money').addEventListener('click', function(e){
 e.preventDefault();
//  get money and the pin number
const addMoney = document.getElementById('add-money').value;
const pinNumber = document.getElementById('input-pin-number').value;
if(pinNumber === '1234'){
    const balence = document.getElementById('balance').innerText;
    const addMoneyNumber = parseFloat(addMoney);
    const balenceNumber = parseFloat(balence);
    const newMoney = addMoneyNumber + balenceNumber;
    document.getElementById('balance').innerText = newMoney;
    document.getElementById('add-money').value = '';
    document.getElementById('input-pin-number').value = '';
}
else{
    alert('Failed to add money. Please try again later')
}
})