(function ($) {
	$(document).ready(function () {
		//SLIDER
		var swiper = new Swiper(".mySwiper", {
			loop: false,
			spaceBetween: 30,
			slidesPerView: 4,
			grabCursor: true,
		});
		var swiper_1 = new Swiper(".mySwiper-1", {
			loop: false,
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 170,
			grabCursor: true,
		});
		//MENU
		$('.nav-arrow').click(function(){
			if ($('.navigation-arrow__menu').hasClass('clicked-menu')) {
				$(".navigation-arrow__menu").removeClass('clicked-menu');
				$(".hidden-menu").css({ display: "none" });
				$(".navigation-arrow__menu-txt").css({ display: "none" });
			} else {
				$(".hidden-menu").addClass('active-menu');
				$(".hidden-menu").css({ display: "block" });
				$(".navigation-arrow__menu-txt").css({ display: "block" });
				$(".navigation-arrow__menu a").css({ display: "flex", maxWidth: "100%"  });
				$(".navigation-arrow__menu").addClass('clicked-menu');
			}
		});
		//FORM
		$('#button').on('click', function() {
			$('.form_box .rfield').each(function() {
				if ($(this).val() != '') {
					$(this).removeClass('empty_field');
					$(".error").removeClass('empty_field');
				} else {
					$(this).addClass('empty_field');
					$(".error").addClass('empty_field');
				}
			});
		});
		$('textarea').change(function() {
			if ($(this).val())
				$(this).addClass('has_value');
			else
				$(this).removeClass('has_value');
		});
		$('.rfield').click(function(){
			$(".dop-input span").css({ fontWeight: "bold", fontSize: "14px", lineHeight: "150%", color: "#A755ED",top: "2px" });
		});
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".rfield"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.rfield').change(function() {
					if ($(this).val())
						$(".dop-input span").css({ fontWeight: "bold", fontSize: "14px", lineHeight: "150%", color: "#A755ED",top: "2px" });
					else
						$(".dop-input span").css({ fontWeight: "normal", fontSize: "18px", lineHeight: "150%", color: "#263238",top: "15px" });
				});
			}
		});
		//POPUP
		$('.popup-content').magnificPopup({
			type: 'inline'
		});
		$('.popup-content_1').magnificPopup({
			type: 'inline'
		});
		$('.popup-content_2').magnificPopup({
			type: 'inline'
		});
	});
})(jQuery);