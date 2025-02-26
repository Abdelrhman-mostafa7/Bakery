window.onscroll = function () {
    let navbar = document.querySelector(".navbar");
    let logo = document.getElementById("navbar-logo");

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("transparent");
      logo.src = "./imge/bakery-color.png";
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("scrolled");
      logo.src = "./imge/bakery-light-1.png";
    }
  };