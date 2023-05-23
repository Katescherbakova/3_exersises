let num1 = prompt("Введіть перший номер:");
let num2 = prompt("Введіть другий номер:");

num1 = parseFloat(num1) || 0;
num2 = parseFloat(num2) || 0;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

alert(`
    Сума: ${sum}
    Різниця: ${difference}
    Добуток: ${product}
    Частка: ${quotient}
`);
