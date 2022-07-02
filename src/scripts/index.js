import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

// console.log('Hello Coders! :)');
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
toggleButton.addEventListener('click', () => {
	toggleButton.classList.toggle('open');
	navbarLinks.classList.toggle('active');
});
