let allComments = [];
let currentPage = 1;

function addComment(name, email, body) {
  const commentContainer = document.querySelector('.main__comments');

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${name} (${email})`;

  const bodyElement = document.createElement('p');
  bodyElement.textContent = `Comment: ${body}`;

  commentDiv.appendChild(authorElement);
  commentDiv.appendChild(bodyElement);

  commentContainer.appendChild(commentDiv);
}

function validateAndSubmit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  if (name === '' || email === '' || comment === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Проверка валидности email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (name && email && comment) {
    // Отправить комментарий на сервер (если необходимо)
    // Добавить комментарий в массив allComments
    allComments.push({
      name: name,
      email: email,
      body: comment
    });

    // Добавить комментарий на страницу
    addComment(name, email, comment);

    // Очистить поля формы
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
  } else {
    alert('Please fill in all fields.');
  }
}

function loadMoreComments() {
  document.querySelector('.main__loader').setAttribute('style', 'display: inline;');

  let startId, endId;

  // Псевдо-случайная фильтрация
  if (currentPage % 2 === 0) {
    startId = 200;
    endId = 1;
  } else {
    startId = 1;
    endId = 100;
  }

  fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${currentPage}&id_gte=${startId}&id_lte=${endId}`)
    .then(response => response.json())
    .then(data => {
      allComments = allComments.concat(data); // Сохраняем все комментарии

      // Очищаем и добавляем все комментарии
      document.querySelector('.main__comments').innerHTML = '';
      for (let item of allComments) {
        addComment(item.name, item.email, item.body);
      }

      document.querySelector('.main__loader').setAttribute('style', 'display: none;');
      document.querySelector('.fa').setAttribute('style', 'display: none;');
      currentPage++;
    })
    .catch((error) => {
      console.log(error);
      document.querySelector('.fa').setAttribute('style', 'display: inline;')
    });
}

loadMoreComments(); // Загрузить первую порцию комментариев при загрузке страницы
//ABOBA
