// GLOBAL VARIABLES

let navbar = document.querySelector('.navigation');
const navbarHeight = navbar.offsetHeight;

// CONDITION FOR NAVBAR SHOWING ON PAGE LOAD

if ( pageYOffset > navbarHeight ) {
	navbar.classList.add('fixed');
}

// DROPDOWN TRIGGER EVENT

document.querySelector('.dropdown-trigger').addEventListener('click', () => {
	navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
	if ( pageYOffset > navbarHeight )
		navbar.classList.add('fixed');
});

// WINDOW SCROLL EVENT

window.addEventListener('scroll', () => {
	let top = pageYOffset;
	if ( !navbar.classList.contains('active') ) {
		if ( top >= navbarHeight ) {
			navbar.classList.remove('absolute');
			setTimeout(function(){
				navbar.classList.add('fixed');
			}, 300);
		} else if ( top == 0 ) {
			navbar.classList.add('absolute');
			setTimeout(function(){
				navbar.classList.remove('fixed');
			}, 300);
		}
	}
});












