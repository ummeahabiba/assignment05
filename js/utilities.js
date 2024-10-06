// redirect to home page

function redirectToPageIndex(){
    window.location.href = '/index.html'; 
}

// redirect to blog page

function redirectToPageBlog(){
    window.location.href = '/blog.html'; 
}

// common function 

// for id
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// for text
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
//for history text
// for class
// function getInputFieldValueByClass(className){
//     const getValue = document.querySelector(className).value;
//     const getNumber = parseFloat(getValue);
//     return getNumber;
// }
// function getHistoryTextFieldValueByIdNoakhali(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = textValue;
//     return textNumber;
// }

// function getHistoryTextFieldValueByIdFeni(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = textValue;
//     return textNumber;
// }

// function getHistoryTextFieldValueByIdProtest(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = textValue;
//     return textNumber;
// }
function getInputFieldValueByClass(className) {
    const inputElement = document.querySelector(`.${className}`);
    if (!inputElement) return 0;
    const getValue = inputElement.value;
    const getNumber = parseFloat(getValue);
    return isNaN(getNumber) ? 0 : getNumber;
}

function getHistoryTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    return textValue;
}
function appendHistory(containerId, amount, title) {
    const historyContainer = document.getElementById(containerId);
    if (!historyContainer) return;
    
    const p = document.createElement('p');
    p.innerText = `${amount} TK ${title} at the time: ${new Date().toLocaleTimeString()} and Date: ${new Date().toLocaleDateString()}`;
    historyContainer.appendChild(p);
}

// button function
function swapButtonColors(button1, button2) {
    if (button1.classList.contains('bg-slate-300')) {
        button1.classList.replace('bg-slate-300', 'bg-lime-500');
        button2.classList.replace('bg-lime-500', 'bg-slate-300');
    } 
    else {
        button1.classList.replace('bg-lime-500', 'bg-slate-300');
        button2.classList.replace('bg-slate-300', 'bg-lime-500');
    }
}


