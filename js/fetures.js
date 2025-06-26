// show the cash out section
document.getElementById('btn-sho-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');

 // hidden the add money form
 document.getElementById('add-money-section').classList.add('hidden');
});
document.getElementById('btn-show-money').addEventListener('click', function(){
 document.getElementById('add-money-section').classList.remove('hidden');
 document.getElementById('cash-out-form').classList.add('hidden')
})