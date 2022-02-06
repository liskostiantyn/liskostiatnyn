let num1 = Number(prompt('Введіть число a.'));
let res1 = 'Число a ' + num1;
alert(res1);
let operator = prompt('Введіть оператор (/, +, *, -)');
let num2 = Number(prompt('Введіть число b'));
let res2 = 'Число b ' + num2;
alert(res2);
        
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '*':
        result = num1 * num2; 
	break;

    default:
	result = 'Некоректная операция';  
     
}

alert(result);

