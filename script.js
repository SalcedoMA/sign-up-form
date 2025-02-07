const inputs = document.querySelectorAll('input');
const form = document.querySelector('.form-container')
let currentInput;

for (let input of inputs) {
    input.addEventListener('keypress', (event) => {
        input.className = 'input';
        currentInput = input;
    });
}

form.addEventListener('click', event => {
    if ((currentInput.value === '') && (currentInput.required === false)) {
        currentInput.className = "";
    }
})
