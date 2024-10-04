document.getElementById('donate-btn-noakhali')
.addEventListener('click', function(){
   
    const donateMoney = getInputFieldValueById('input-money-noakhali');
    const addMoney = getTextFieldValueById('add-balance');
    const balanceMoney = getTextFieldValueById('balance-amount');

    
  if(donateMoney <0 || isNaN(donateMoney)){
    alert('failed to donate');
  }
  else{
    const balance = parseFloat(addMoney + donateMoney);
    document.getElementById('add-balance').innerText = balance;
    
    const newBalance = parseFloat(balanceMoney - donateMoney);
    document.getElementById('balance-amount').innerText = newBalance;
 
  }

})