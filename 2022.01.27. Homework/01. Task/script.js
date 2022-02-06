const num1 = Number(prompt('Введіть перше число.'));
const res1 = 'Перше число ' + num1;
alert(res1);
const num2 = Number(prompt('Введіть друге число'));
const res2 = 'Друге число ' + num2;
alert(res2);

if (num1 == num2) {
    alert(`Перше число ${num1} і друге число ${num2} рівні`);
} else if (num1 < num2) {
    alert(`Перше число ${num1} менше за друге число ${num2}`);
} else if (num1 > num2) {
    alert(`Перше число ${num1} більше за друге число ${num2}`);
}