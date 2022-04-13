import css from "bootstrap/dist/css/bootstrap.min.css";
import ResepLogo from "../../assets/img/ResepLogo.png";

class navbarElement extends HTMLElement {
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
			<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			  <div class="container">
					<div class="row justify-content-start">
						<div class="col">
      			  <a class="navbar-brand" href="#"><img src="${ResepLogo}" alt="Logo" width="30" height="30" class=""></a>
      			</div>
			    <div class="col navbar-nav">
      		  <a class="nav-link active" href="#">Home</a>
      		</div>
			    <div class="col navbar-nav">
      		  <a class="nav-link" href="#">Artikel</a>
      		</div>
				</div>
			</nav>
		`;
	}
}

customElements.define("nav-bar", navbarElement);
