const PASSWORD = "1q2w3e";
const LOGIN = "ADMIN";

let attemptsLeft = 3;
let i=1;
let userPassword;

while (i <= attemptsLeft) {
 
  let userLogin = prompt('Login');
  if(!userLogin) {
    alert('Enter your login');
    continue;
  }

  let userPassword = prompt('Paswword:');
  if(!userPassword) {
    alert('Enter your password');
    continue;
  }

  for (; i <= attemptsLeft ;) {
    if (PASSWORD === userPassword && LOGIN === userLogin) {
      alert('Welcome!');
      break;
    } 
    else if (i < attemptsLeft) {
      alert(`Wrong password, you have ${attemptsLeft - i} attempt(s) left`);
      break;
    } else {
      alert('You do not have any attempts left, your account is blocked!');
      break;
    }
  }
  i += 1;
}