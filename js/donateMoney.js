// Donate for Flood at Noakhali, Section
document.getElementById('donate-btn-noakhali')
.addEventListener('click', function(){
   
    const donateMoney = getInputFieldValueById('input-money-noakhali');
    const addMoney = getTextFieldValueById('add-balance-noakhali');
    const balanceMoney = getTextFieldValueById('balance-amount');

    
  if(donateMoney <0 || isNaN(donateMoney)){
    alert('failed to donate');
  }
  else{
    alert('you have donated for humankind successfully');
    
    const balance = parseFloat(addMoney + donateMoney);
    document.getElementById('add-balance-noakhali').innerText = balance;
  }

  if(balanceMoney < donateMoney){
    alert('We are happy to receive your donation, but if we accept the money, our balance will show as negative.So donate less than 5500')
    const staticBalance = parseFloat(addMoney);
    document.getElementById('add-balance-noakhali').innerText = staticBalance;
  }
  else{
    const newBalance = parseFloat(balanceMoney - donateMoney);
    document.getElementById('balance-amount').innerText = newBalance;
    
  }

})

// Donate for Flood at Feni, Section
document.getElementById('donate-btn-feni')
.addEventListener('click', function(){
   
    const donateMoney = getInputFieldValueById('input-money-feni');
    const addMoney = getTextFieldValueById('add-balance-feni');
    const balanceMoney = getTextFieldValueById('balance-amount');

    
  if(donateMoney <0 || isNaN(donateMoney)){
    alert('failed to donate');
  }
  else{
    alert('you have donated for humankind successfully');
    
    const balance = parseFloat(addMoney + donateMoney);
    document.getElementById('add-balance-feni').innerText = balance;
  }

  if(balanceMoney < donateMoney){
    alert('We are happy to receive your donation, but if we accept the money, our balance will show as negative.So donate less than 5500')
    const staticBalance = parseFloat(addMoney);
    document.getElementById('add-balance-feni').innerText = staticBalance;
  }
  else{
    const newBalance = parseFloat(balanceMoney - donateMoney);
    document.getElementById('balance-amount').innerText = newBalance;
    
  }

})

// Donate for protest, Section
document.getElementById('donate-btn-protest')
.addEventListener('click', function(){
   
    const donateMoney = getInputFieldValueById('input-money-protest');
    const addMoney = getTextFieldValueById('add-balance-protest');
    const balanceMoney = getTextFieldValueById('balance-amount');

    
  if(donateMoney <0 || isNaN(donateMoney)){
    alert('failed to donate');
  }
  else{
    alert('you have donated for humankind successfully');
    
    const balance = parseFloat(addMoney + donateMoney);
    document.getElementById('add-balance-protest').innerText = balance;
  }

  if(balanceMoney < donateMoney){
    alert('We are happy to receive your donation, but if we accept the money, our balance will show as negative.So donate less than 5500')
    const staticBalance = parseFloat(addMoney);
    document.getElementById('add-balance-protest').innerText = staticBalance;
  }
  else{
    const newBalance = parseFloat(balanceMoney - donateMoney);
    document.getElementById('balance-amount').innerText = newBalance;
    
  }

})

// history section functionallity

// swap button
const historyTab = document.getElementById('history-btn');
const donationTab = document.getElementById('donation-btn');

historyTab.addEventListener('click', function() {
  swapButtonColors(historyTab, donationTab);
  
});

donationTab.addEventListener('click', function() {
  swapButtonColors(donationTab, historyTab);
});


document.getElementById('history-btn')
        .addEventListener('click', function(){
          const donateMoneyNoakhali = getInputFieldValueById('input-money-noakhali');
          const noakhaliTitle = getHistoryTextFieldValueById('title-noakhali');
          
          const donateMoneyFeni = getInputFieldValueById('input-money-feni');
          const feniTitle = getHistoryTextFieldValueById('title-feni');
          
          const donateMoneyProtest = getInputFieldValueById('input-money-protest');
          const protestTitle = getHistoryTextFieldValueById('title-protest');
         
document.getElementById('show-history-section').classList.remove('hidden');
document.getElementById('donation-btn').addEventListener('click', function(){
  document.getElementById('show-history-section').classList.add('hidden');
})

          const n = document.createElement('n');
          n.innerText = `${donateMoneyNoakhali} TK ${noakhaliTitle} at the time : ${new Date().toLocaleTimeString()} and Date : ${new Date().toLocaleDateString()}`;
          document.getElementById('history-container-noakhali').appendChild(n);
        
          const f = document.createElement('f');
          f.innerText = `${donateMoneyFeni} TK ${feniTitle} at the time : ${new Date().toLocaleTimeString()} and Date : ${new Date().toLocaleDateString()}`;
          document.getElementById('history-container-feni').appendChild(f);
        
          const p = document.createElement('p');
          p.innerText = `${donateMoneyProtest} TK ${protestTitle} at the time : ${new Date().toLocaleTimeString()} and Date : ${new Date().toLocaleDateString()}`;
          document.getElementById('history-container-protest').appendChild(p);
        });

