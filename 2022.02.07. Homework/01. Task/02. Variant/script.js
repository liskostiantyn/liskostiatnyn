const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorise = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let availableAtempts = 3;

    do {
        userLogin = prompt('Логин');
        if(!userLogin) {
            alert('Введите логин');
            continue;
        }

        userPassword = prompt('Пароль');
        if(!userPassword) {
            alert('Введите пароль');
            continue;
        }

        if(userPassword === PASSWORD && userLogin === LOGIN) {
            isAuthSuccess = true;
        } else {
            availableAtempts--;
            alert(`Данные не верны! Осталось попыток ${availableAtempts}`);
            
        }        
    } while(!isAuthSuccess && availableAtempts > 0)
    if (!availableAtempts) {
        console.log("XXX");
        return;
    }
            alert('Welcome');
    };
    authorise();

