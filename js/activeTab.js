document.addEventListener("DOMContentLoaded", function() {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);

  // Получаем все элементы навигации
  var navItems = document.querySelectorAll('.navigation__list li');

  // Перебираем элементы и добавляем класс active к текущей странице
  navItems.forEach(function(item) {
    var link = item.querySelector('a');
    var href = link.getAttribute('href');

    if (filename === href) {
      item.classList.add('active');
    }
  });
});
