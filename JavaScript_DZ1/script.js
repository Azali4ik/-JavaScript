const celsius =document.querySelector(`.celsius`);
const button =document.querySelector(`.button`);
const value =document.querySelector(`.value`);

function convert () {
    const fahrenheit = celsius.value * 9/5  + 32;
    value.textContent = `${fahrenheit} F`;
}
button.addEventListener("click", convert)