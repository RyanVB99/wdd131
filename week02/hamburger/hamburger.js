const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.class.toggle('show');
	hamButton.classList.toggle('show');
});