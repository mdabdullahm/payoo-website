document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    // get phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
     if(phoneNumber === '5' && pinNumber === '1236'){
        alert('your login')
        window.location.href = '/home.html'
     }
     else{
      alert('wrong phone number or pin. ')
     }
})