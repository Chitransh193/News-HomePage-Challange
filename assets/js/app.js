let menubtn = document.querySelector(".menu-btn");
let menuclosebtn = document.querySelector(".menu-close-btn");
let menulinks = document.querySelector(".menu-links");


menubtn.addEventListener("click", () => {
  menulinks.style.display = "block";
  menubtn.style.display = "none";
});


menuclosebtn.addEventListener("click",() => {
  menulinks.style.display = "none";
  menubtn.style.display = "block";
});