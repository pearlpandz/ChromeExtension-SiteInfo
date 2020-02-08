// flipkart
function getInputValues() {
    var json = {};
    var inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        json[input.name ? input.name : input.placeholder] = input.value
    })

    var textareas = document.querySelectorAll('textarea')
    textareas.forEach(textarea => {
        json[textarea.name ? textarea.name : textarea.placeholder] = textarea.value
    })

    alert(JSON.stringify(json));
}


const buttons = document.querySelectorAll('button');
const classname = buttons.length > 1 ? buttons[buttons.length - 1].className : buttons.className;
let bton;
if (classname) {
    bton = document.getElementsByClassName(classname)[0];
} else {
    bton = document.querySelector('button')
}

if (bton) {
    bton.addEventListener('click', function () {
        getInputValues();
    });
}

