const display = document.querySelector('[data-display]');
const reset = document.querySelector('[data-reset]');

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#result').textContent = count;
});

function increase() {
    count++;
    document.querySelector('#result').textContent = count;
}

function decrease() {
    count--;
    document.querySelector('#result').textContent = count;
}