let navbar = document.querySelector('.navigation');
const navbarHeight = navbar.offsetHeight

document.querySelector('.dropdown-trigger').addEventListener('click', () => {
	navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
});

window.addEventListener('scroll', () => {
	let top = pageYOffset;
	console.log(top)
	console.log(navbar.offsetHeight)
	if ( top >= navbarHeight ) {
		navbar.classList.remove('absolute')
		setTimeout(function(){
			navbar.classList.add('fixed')
		}, 50);
	} else {
		navbar.classList.remove('fixed')
		navbar.classList.add('absolute')
	}
});












