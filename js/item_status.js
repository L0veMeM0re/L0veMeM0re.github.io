document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navigation__list li");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("mouseenter", function () {
      // Добавить класс при наведении
      menuItem.classList.add("active");
    });

    menuItem.addEventListener("mouseleave", function () {
      // Удалить класс при уходе мыши
      menuItem.classList.remove("active");
    });
  });
});
