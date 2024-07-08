document.addEventListener("DOMContentLoaded", () => {
	const burgerOpenButton = document.querySelector(".header__burger-button");
	const burgerCloseButton = document.querySelector(".header__close-burger-button");
	const navigation = document.querySelector(".navigation");

	burgerOpenButton.addEventListener("click", () => {
		if ( navigation.classList.contains("close-burger") ) {
			navigation.classList.add("open-burger");
			navigation.classList.remove("close-burger");
			burgerOpenButton.classList.add("_hidden");
			burgerCloseButton.classList.remove("_hidden");
		} 
	})

	burgerCloseButton.addEventListener("click", () => {
		if ( navigation.classList.contains("open-burger") ) {
			navigation.classList.remove("open-burger");
			navigation.classList.add("close-burger");
			burgerOpenButton.classList.remove("_hidden");
			burgerCloseButton.classList.add("_hidden");
		}
	})
})