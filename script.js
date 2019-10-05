// GLOBAL VARIABLES

let navbar = document.querySelector('.navigation');

// DROPDOWN TRIGGER EVENT

document.querySelector('.dropdown-trigger').addEventListener('click', () => {
	navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
});

// WINDOW SCROLL EVENT

window.addEventListener('scroll', () => {
	let top = pageYOffset;
	let offsetTriggerHeight = top + (window.innerHeight * 0.5 )
	if ( top > navbarHeight ) {
		navbar.classList.remove('absolute');
		setTimeout(function(){
			navbar.classList.add('fixed');
		}, 300);
	} else {
		navbar.classList.remove('fixed');
		navbar.classList.add('absolute');
	}
});












