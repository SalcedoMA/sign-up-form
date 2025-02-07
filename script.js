const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const formDiv = document.querySelector('.form-container');
const signupButton = document.querySelector('#signup-button');
let currentInput;

for (let input of inputs) {
    input.addEventListener('keypress', (event) => {
        input.className = 'input';
        currentInput = input;
    });
}

formDiv.addEventListener('click', event => {
    if ((currentInput.value === '') && (currentInput.required === false)) {
        currentInput.className = "";
    }
})

signupButton.addEventListener('click', event => {
    if (form.checkValidity() === true) {
        alert('Imagine I know how to submit this form ;)')
        event.preventDefault()
    }
})

