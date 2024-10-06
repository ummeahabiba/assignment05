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
function getHistoryTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = textValue;
    return textNumber;
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


