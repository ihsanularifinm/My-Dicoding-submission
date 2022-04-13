import "./resep-item.js";

class ResepList extends HTMLElement {
	set recipes(items) {
		this._items = items;
		this.render();
	}

	render() {
		this.innerHTML = "";
		this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4";
		this._items.forEach((item) => {
			const recipeItemElement = document.createElement("resep-item");
			recipeItemElement.recipe = item;
			this.appendChild(recipeItemElement);
		});
	}

	renderError(message) {
		this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
            }
        </style>`;
		this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`;
	}
}

customElements.define("resep-list", ResepList);
