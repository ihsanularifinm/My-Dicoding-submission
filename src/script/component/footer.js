import css from "bootstrap/dist/css/bootstrap.min.css";

class footerElement extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
			<style>
					${css}
			</style>
			<div class=" align-items-center py-3 bg-secondary mt-5">
				<p class="text-center pt-2">&#169; 2022, Muhammad Ihsanul Arifin</p>
			</div>
		`;
	}
}

customElements.define("foot-er", footerElement);
