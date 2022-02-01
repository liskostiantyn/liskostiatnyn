let num1 = Number(prompt('Введіть перше число.'));
let res1 = 'Перше число ' + num1;
alert(res1);
let num2 = Number(prompt('Введіть друге число'));
let res2 = 'Друге число ' + num2;
alert(res2);

if (num1 == num2) {
    alert('Перше і друге число рівні');
} else if (num1 < num2) {
    alert('Перше число менше за друге');
} else if (num1 > num2) {
    alert('Перше число більше за друге');
}