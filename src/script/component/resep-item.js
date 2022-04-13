import css from "bootstrap/dist/css/bootstrap.min.css";
import aos from "aos/dist/aos.css";

class ResepItem extends HTMLElement {
	set recipe(item) {
		this._item = item;
		if (this._item.strSource == null || this._item.strSource == "") {
			this._item.strSource = "Link resep tidak ditemukan";
		}
		this.render();
	}

	switchPage() {
		$("main").hide();
		$(".details").show();
	}

	render() {
		this.innerHTML = `
        <style>
			${css}
			${aos}
        </style>
        <div class="col mb-4">
            <div data-aos="zoom-in" data-aos-duration="1500">
                <div class="card  text-center" data-id="${this._item.id}">
                    <img class="card-img-top" src="${this._item.strMealThumb}" alt="${this._item.strMeal} id=cardimg" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate  pb-2">${this._item.strMeal}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"><span class="float-start"><i class="fa fa-utensils" aria-hidden="true"></i> ${this._item.strCategory}</span><span class="float-end"><i class="fa fa-map-pin" aria-hidden="true"></i>  ${this._item.strArea}</span></h6><br>
                        <p class="card-text mt-1">Untuk info mengenai resepnya, klik tombol dibawah ini.</p>
                        <a href="${this._item.strSource}" target="_blank" class="btn btn-primary">let's do it</a>
                    </div>
                </div>
            </div>
        </div>`;
	}
}

customElements.define("resep-item", ResepItem);
