function greetingUser() {
    const name = prompt('Как Вас зовут?');
    const age = Number(prompt('Сколько Вам лет?'));
    
    if (age > 30) {
        alert('Здраствуйте ' + name);
    } else {
        alert('Привет ' + name);
    }
}

greetingUser()