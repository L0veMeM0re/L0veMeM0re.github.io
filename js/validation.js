// Ваша функция для удаления лишних пробелов
function removeExtraSpaces(sentence) {
  // Заменяем все последовательности пробелов (включая пробелы в начале и конце строки) на один пробел
  return sentence.replace(/\s+/g, ' ').trim();

}

const form = document.querySelector('.main__todo-form');
const loginInput = form.querySelector('.main__todo-input');
console.log(loginInput)

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();

  // Получаем значение поля логина
  const login = loginInput.value;

  // Применяем функцию для удаления лишних пробелов
  const cleanedLogin = removeExtraSpaces(login);


  // Проверяем, что поле не пустое и соответствует длине
  if (!cleanedLogin || cleanedLogin.length < 2 || cleanedLogin.length > 20) {
    alert('Логин должен содержать от 2 до 20 символов');
    return;
  }

  if (loginInput.trim().length === 0) {
    console.log('Вы ввели пустую строку.');
  }

  // Проверяем, что логин не состоит только из пробелов
  if (!cleanedLogin.replace(/\s/g, '').length) {
    alert('Логин не может состоять только из пробелов');
    return;
  }

  // Если всё в порядке, отправляем форму
  form.submit();
});
