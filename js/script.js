/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function() {
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		});

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});

});


document.getElementById('myVideo').playbackRate = 0.5;
document.querySelector('.video-pause').addEventListener("click", function(){
	if( this.classList.contains('playing') ) {
		document.getElementById('myVideo').pause()
		this.classList.add('paused')
		this.classList.remove('playing')
	} else {
		document.getElementById('myVideo').play()
		this.classList.add('playing')
		this.classList.remove('paused')
	}
})
document.querySelector('.video-hide').addEventListener("click", function(){
	if( this.classList.contains('showing') ) {
		document.getElementById('myVideo').style.display = 'none';
		this.classList.add('hiding')
		this.classList.remove('showing')
	} else {
		document.getElementById('myVideo').style.display = 'block';
		this.classList.add('showing')
		this.classList.remove('hiding')
	}
})