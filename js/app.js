(function($){

	$(function(){

		var slider1, slider2;

		slider1 = $("#carousel").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: 3000

			// "singleItem:true" is a shortcut for:
			// items : 1, 
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false
		});

		// slider2 = $("#productsCarousel").owlCarousel({
 
  //     autoPlay: 3000, //Set AutoPlay to 3 seconds
  //     items : 4,
  //     itemsDesktop : [1199,3],
  //     itemsDesktopSmall : [979,3],
  //     navigation : true
 
  // 	});

	});

})(jQuery);



