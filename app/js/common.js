(function ($) {
	$(document).ready(function () {
		var swiper = new Swiper(".mySwiper", {
			loop: false,
			spaceBetween: 30,
			slidesPerView: 4,
			grabCursor: true,
		});
		$('input').change(function() {
			if ($(this).val())
				$(this).addClass('has_value');
			else
				$(this).removeClass('has_value');
		});
		$('textarea').change(function() {
			if ($(this).val())
				$(this).addClass('has_value');
			else
				$(this).removeClass('has_value');
		});

		$('.nav-arrow').click(function(){
			if ($('.navigation-arrow__menu').hasClass('clicked-menu')) {
				$(".navigation-arrow__menu").removeClass('clicked-menu');
				$(".hidden-menu").css({ display: "none" });
			} else {
				$(".hidden-menu").addClass('active-menu');
				$(".hidden-menu").css({ display: "block" });
				$(".navigation-arrow__menu").addClass('clicked-menu');
			}
		});
		
	});
})(jQuery);