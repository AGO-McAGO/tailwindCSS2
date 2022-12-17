
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", (e) => { // when clicked on ..
  if (menu.classList.contains("hidden")) { // .. if the "menu" contains the "hidden" class ..
    menu.classList.remove("hidden"); // .. then remove it, inorder to dispay the navigation menu.
  } else {
    menu.classList.add("hidden"); // add the class, to the menu, to hide the navigation items.
  }
  
});