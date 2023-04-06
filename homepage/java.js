
window.onload = function() {
    let preloader = document.getElementById('preloader'); 
    preloader.classList.add('hide-preloader'); 
    setInterval(function() { 
        preloader.classList.add('preloader-hidden');
    }, 990); 
}


$(document).ready(function () {
	$('.scroll_menu').click(function (event) {
		$('.events, .scroll_menu, .event_img, .vk_events, .title_event, .event_text, .down, .down_down, .footer').toggleClass('active');
	});
});







document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');



	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /400) + window.scrollY;
		scrollItems.forEach (el => {
			let  scrollOffset = el.offsetTop + (el.offsetHeight /4) ;
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
