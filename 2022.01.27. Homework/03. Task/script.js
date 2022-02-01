const MIN_AGE = 12;
const visitorAge = Number(prompt('Сколько Вам лет?'));
const hasPermission = confirm('У Вас есть разрешение от взрослых');

if (visitorAge >= MIN_AGE && visitorAge < 18 && hasPermission) {
    alert('Доступ разрешен с разрешением');
} else if (visitorAge < MIN_AGE) {
    alert('Доступ запрещен');
} else if (visitorAge > 18 && visitorAge < 60) {
    alert('Доступ разрешен полностью');
} else if (visitorAge > 60 && visitorAge < 80 && hasPermission) {
    alert('Доступ разрешен с разрешением');
} else if (visitorAge > 80) {
    alert('Доступ запрещен');
}
