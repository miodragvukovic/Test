let navbar = document.querySelector('.navigation');
document.querySelector('.dropdown-trigger').addEventListener('click', function(){
	this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
	navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
});

window.addEventListener('scroll', function(){
	let top = pageYOffset;
	if ( top > navbar.offsetHeight ) {
		navbar.classList.remove('absolute')
		setTimeout(function(){
			navbar.classList.add('fixed')
		}, 300);
		
	} else {
		navbar.classList.remove('fixed')

		navbar.classList.add('absolute')
	}
});












