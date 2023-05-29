const burgerMenu = document.querySelector(".burger__menu ");
const navMenu = document.querySelector(".nav__menu");

burgerMenu.addEventListener("click", function () {
	if (!this.classList.contains("active")) {
		this.classList.add("active");
		navMenu.classList.add("nav__menu__active");
	} else {
		this.classList.remove("active");
		navMenu.classList.remove("nav__menu__active");
	}
});

// burgerMenu.addEventListener("click", function () {
// 	if (!this.matches(".active")) {
// 		this.setAttribute("class", "burger__menu hoveredicon active");
// 		navMenu.setAttribute("class", "nav__menu nav__menu__active");
// 	} else {
// 		this.setAttribute("class", "burger__menu hoveredicon");
// 		navMenu.setAttribute("class", "nav__menu");
// 	}
// });