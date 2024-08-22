document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const counter = document.getElementById('counter');
    let count = 0;

    button.addEventListener('click', () => {
        count += 1;
        counter.textContent = count;
    });
});
