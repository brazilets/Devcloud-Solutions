const swiperProject = new Swiper('#swiper-project', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 150,
	autoHeight: true,
	autoplay: {
		delay: 10000,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperProcess = new Swiper('#swiper-process', {
	loop: true,
	direction: "vertical",
	slidesPerView: 1,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});