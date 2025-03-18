function menuShow() {
  let navBar = document.querySelector("#menu-itens");
  if (navBar.classList.contains("mobile")) {
    navBar.classList.remove("mobile");
    navBar.style.display='none';

    document.querySelector(".icon").src = "assets/img/icons/lista.png";
  } else {
    navBar.classList.add("mobile");
    navBar.style.display='flex';
    document.querySelector(".icon").src = "assets/img/icons/x.png";
  }
}
