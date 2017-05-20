$(document).ready(function() {

	$(".navbar").css({"opacity":"0"});

	$(window).scroll(function () {
		var scrollPosition = $(window).scrollTop();
		// console.log(scrollPosition);

		if (scrollPosition > 50) {
			$(".navbar").css({"opacity":"1","transition":"all 400ms ease"});
		}else{
			$(".navbar").css({"opacity":"0","transition":"all 400ms ease"});			
		}

	});
});