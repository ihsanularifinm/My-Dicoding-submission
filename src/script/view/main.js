import "../component/search-bar.js";
import "../component/resep-list.js";
import ResepLogo from "../../assets/img/ResepLogo.png";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const recipeListElement = document.querySelector("resep-list");
	const loaderElement = document.querySelector("#loader-text");
	document.querySelector("#Logo").src = ResepLogo;

	const onButtonSearchClicked = () => {
		searchRecipes(searchElement.value);
	};

	const searchRecipes = async (keyword) => {
		loaderElement.style.display = "block";

		try {
			const result = await DataSource.searchRecipes(keyword);
			renderResult(result);
		} catch (message) {
			fallbackResult(message);
		}
	};

	const renderResult = (recipes) => {
		loaderElement.style.display = "none";
		recipeListElement.recipes = recipes;
	};

	const fallbackResult = (message) => {
		loaderElement.style.display = "none";
		recipeListElement.renderError(message);
	};

	searchRecipes("");

	searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
