let num1 = Number(prompt('Введіть число a.'));
let res1 = 'Число a ' + num1;
alert(res1);
let num2 = Number(prompt('Введіть число b'));
let res2 = 'Число b ' + num2;
alert(res2);
        
let operator = prompt('оператор (/, +, *, -)');
switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);   
     
}

