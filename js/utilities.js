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

// for class
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}