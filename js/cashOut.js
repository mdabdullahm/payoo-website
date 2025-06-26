// cash out js
document.getElementById('Cash-out-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const cashOutMoney = document.getElementById('cash-out').value;
    const cashOutPin = document.getElementById('cash-out-pin').value;
    if (cashOutPin === '1234') {
        alert('money is redcing')
        const balance = document.getElementById('balance').innerText;
        const cashoutNumber = parseFloat(balance);
        const balenceNum = parseFloat(cashOutMoney);
        const newBalance = cashoutNumber - balenceNum;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('cash-out').value = '';
        document.getElementById('cash-out-pin').value = '';
    }
    else {
        alert('Failed to cash Out. Please try again')
    }
})