const visitorAge = Number(prompt('Сколько Вам лет?'));


if (visitorAge >= 12 && visitorAge < 18) {
  const hasPermission = confirm('У Вас есть разрешение от взрослых');
  if (hasPermission) {
  alert('Доступ разрешен с разрешением взрослых');
  } else {
  alert('Доступ запрещен без разрешения взрослых');
  }
} else if (visitorAge >=60 && visitorAge < 80) {
  const hasPermission2 = confirm('У Вас есть разрешение от детей');
  if (hasPermission2) {
  alert('Доступ разрешен с разрешением детей');
  } else {
      alert('Доступ запрещен без разрешения детей');
  }
} else if (visitorAge < 12 || visitorAge >= 80) {
    alert('Доступ запрещен')
} else {
    alert('Доступ разрешен');
}
