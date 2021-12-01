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
	});
})(jQuery);