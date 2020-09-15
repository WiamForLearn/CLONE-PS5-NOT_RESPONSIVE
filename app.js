const navbar = document.querySelector(".fixed-nav");
console.log(navbar);

function stickyNav() {
  let H = window.scrollY;
  console.log(H);
  if (H <= navbar.scrollHeight) {
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
  }
}
window.addEventListener("scroll", stickyNav);
