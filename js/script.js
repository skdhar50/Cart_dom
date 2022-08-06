/* Variables */
let cart = document.querySelector(".cart-list");
let btn = document.querySelectorAll(".product-list button");
let remove_btn = document.querySelector(".remove_btn");

for (el of btn) {
	el.addEventListener("click", (e) => {
		let li = document.createElement("li");
		let title = document.createElement("p");
		let price = document.createElement("p");
		let button = document.createElement("button");

		button.setAttribute(
			"class",
			"remove_btn px-2 py-2 md:px-4 md:py-2 bg-red-700 text-white hover:bg-red-800"
		);
		button.setAttribute("type", "button");
		button.appendChild(document.createTextNode("Remove"));

		title.appendChild(
			document.createTextNode(
				e.target.parentElement.getElementsByTagName("p")[0].innerText
			)
		);
		price.appendChild(
			document.createTextNode(
				e.target.parentElement.getElementsByTagName("p")[1].innerText
			)
		);

		li.setAttribute(
			"class",
			"flex flex-wrap items-center border border-gray-400 shadow-md p-4 text-sm md:text-xl justify-around"
		);
		li.setAttribute("id", Date.now());

		li.appendChild(title);
		li.appendChild(price);
		li.appendChild(button);

		cart.appendChild(li);
	});
}

cart.addEventListener("click", (e) => {
	if (e.target.hasAttribute("type")) {
		e.target.parentElement.remove();
	}
});
