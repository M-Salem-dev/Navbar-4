// window.alert("Hello")    //Test




$(function () {
	let scroll = $(document).scrollTop();
	let navHeight = $('.navbar').outerHeight();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();

		if (scrolled > navHeight) {
			$('.navbar').addClass('animate');
			$(".navbar").css("transform", "translate(0,60px)");


		} else {
			$('.navbar').removeClass('animate');
			// $('.navbar').removeClass('sticky');
			$(".navbar").css("transform", "translate(0,0px)");


		}

		if (scrolled > scroll) {
			$('.navbar').removeClass('sticky');
			$(".navbar").css("transform", "translate(0,60px)");

		} else {
			$('.navbar').addClass('sticky');
			$(".navbar").css("transform", "translate(0,0px)");

		}
		scroll = $(document).scrollTop();
	});
});


// let aboutOffsetTop = $("#about").offset().top;	// topبطول ب ال aboutده بيجيب المسافه م بين اول الموقع و ال offset

$(window).scroll(function () {	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop();

	if (wScroll > 100) {	// main-nav بتاع backgroundColorغير ال aboutOffsetTop ويوصل scroll انا كده بقول لم يعمل 
		$(".navbar").css("backgroundColor", "rgba(142, 119, 84,0.9)");
		// $(".navbar").css("transform", "rotateX(360deg)");
		// $(".navbar").css("transform", "translate(0,-100px)");

	}
	else {	// transparent ولم يطلع تاني اعمل 
		$(".navbar").css("backgroundColor", "transparent");
		// $(".navbar").css("transform", "rotateX(0deg)");

		// $(".navbar").css("transform", "translate(0px)");

	}
})
























