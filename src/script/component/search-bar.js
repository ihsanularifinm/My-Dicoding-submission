import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#searchElement").value;
	}

	render() {
		this.innerHTML = `
        <style>
            ${css}
        </style>
        <div class="d-flex">
            <input class="form-control me-2" placeholder="Mau cari resep apa?"  id="searchElement" type="search">
            <button class="btn btn-outline-success" id="searchButtonElement" type="submit">Search</button>
        </div>`;

		this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-bar", SearchBar);
