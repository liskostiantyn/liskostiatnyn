const isValidPassword = (password) =>
    password.toLowerCase() !== password &&
    password.toUpperCase() !== password &&
    password.length >= 6;

const formatUserData = (data) =>
    data[0].toUpperCase() + data.slice(1).toLowerCase();

const getUserData = () => {
    let userName;
    let userSurname;
    let userPassword;

    do {
        userName = prompt("Name?");
        userSurname = prompt("Surname?");
        userPassword = prompt("Password?");
} while (!userName || !userSurname || !isValidPassword(userPassword));

const formattedName = formatUserData(userName);
const formattedSurname = formatUserData(userSurname);
alert(`Hello ${formattedName} ${formattedSurname}`);

};

getUserData();
console.log(getUserData);

