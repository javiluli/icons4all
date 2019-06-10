const main_nav = document.getElementById("main_nav");
const menu_icon = document.getElementById("menu_icon");
const menu_icon_X = document.getElementById("menu_icon_X");

menu_icon.addEventListener("click", () => {
  main_nav.classList.add("show_menu");
});

menu_icon_X.addEventListener("click", () => {
  main_nav.classList.remove("show_menu");
});
