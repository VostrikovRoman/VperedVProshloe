var $page = $('html, body'); 
    $('a[href*="#"]').click(function() { 
        $page.animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 400); return false; });

window.onload = function() {
    let preloader = document.getElementById('preloader'); 
    preloader.classList.add('hide-preloader'); 
    setInterval(function() { 
        preloader.classList.add('preloader-hidden');
    }, 990); 
}

window.scrollBy({

    top: 666,

    behavior: 'smooth'

});




document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');



	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /20) + window.scrollY;
		scrollItems.forEach (el => {
			let  scrollOffset = el.offsetTop + (el.offsetHeight / 4) ;
			if (windowCenter >= scrollOffset) {
				el.classList.add('on');
			} else  {el.classList.remove('on');}
			
		});
	};
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});	
});

