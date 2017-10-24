

$(function() {

	window.sr = ScrollReveal();

	// Add class to <html> if ScrollReveal is supported
	// Note: this method is deprecated, and only works in version 3
	if (sr.isSupported()) {
		document.documentElement.classList.add('sr');
	}
	sr.reveal('.fooReveal');

	$("img.lazy").show().lazyload({
		effect : "fadeIn",
		threshold : 200,
		skip_invisible : false
	});
	$(function() {
		$("img.lazyed").lazyload({
			event : "sporty"
		});
	});
	$(window).bind("load", function() {
		var timeout = setTimeout(function() {
			$("img.lazyed").trigger("sporty")
		}, 0);
	});



	//banner slider
	$('.mainSlider').slick({
		infinite: true,
		lazyLoad: 'ondemand',
		fade: true,
		cssEase: 'linear',
		pauseOnHover: false,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	//blog slider
	$('.blogSlider').slick({
		infinite: true,
		lazyLoad: 'progressive',
		pauseOnHover: false,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('#testimonials').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 250,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('[data-toggle="offcanvas"]').click(function () {
		$(this).toggleClass('active');
		$('[data-toggle="canvas"]').toggleClass('active');
	});
	$('.mainNavList a').click(function () {
		$('[data-toggle="canvas"]').removeClass('active');
	});

	//show/hide main nav
	$( ".toggleMainNav" ).click(function() {
		$( ".mainNav" ).toggleClass( "open" );
	});

	//show/hide page nav
	$( ".togglePageNav" ).click(function() {
		$( ".sidebar" ).toggleClass( "open" );
	});

	//show/hide tabs
	$( ".toggleTabs" ).click(function() {
		$( ".tab-container" ).toggleClass( "open" );
	});
	$( ".etabs a" ).click(function() {
		$( ".tab-container" ).toggleClass( "open" );
	});

	//change appearange of sticky top nav bar
	// var shrinkHeader = 50;
	// $(window).scroll(function() {
	// 	var scroll = getCurrentScroll();
	// 	if ( scroll >= shrinkHeader ) {
	// 		$('.header.container').addClass('sticky');
	// 	}
	// 	else {
	// 		$('.header.container').removeClass('sticky');
	// 	}
	// });
	// function getCurrentScroll() {
	// 	return window.pageYOffset;
	// }



	//accordion
	// var allPanels = $('.accordion > div').hide();
	// $('.accordion > h3 > a').click(function() {
	// 	$this = $(this);
	// 	$target =  $this.parent().next().slideToggle();
	// 	$target.toggleClass('open');
	// 	$this.parent().toggleClass('open');
	// 	return false;
	// });


	// back to top
	if ($('#back-to-top').length) {
    	var scrollTrigger = 100, // px
    	backToTop = function () {
    		var scrollTop = $(window).scrollTop();
    		// if (scrollTop > scrollTrigger) {
	    	// 	$('#back-to-top').addClass('show');
	    	// } else {
	    	// 	$('#back-to-top').removeClass('show');
	    	// }
	    };
	    backToTop();
	    $(window).on('scroll', function () {
	    	backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	    	e.preventDefault();
	    	$('html,body').animate({
	    		scrollTop: 0
	    	}, 700);
	    });
	}
	//var menuH = $('.mainNav').height();
	$('li > a[href*=\\#]').click(function() {
		// if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		// 	var target = $(this.hash);
		// 	target = target.length ? target : $('[name=' + this.hash.slice(1) +']') ;
		// 	if (target.length) {
		// 		$('html,body').animate({
		// 			scrollTop: target.offset().top -menuH+1
		// 		}, 1000);
		// 		return false;
		// 	}
		// }
		var target = $(this).attr('href');
		var current = $(target);
		var menuH = 60;
		var offset = ( target == '#wrap' || target == '#' ? 0 : current.offset().top - menuH + 1);
		var top = $(document).scrollTop();
		var offseted = Math.abs(top-offset)/100;
		var speed = ((1/offseted*100)*(1.25*offseted))/100;
		TweenLite.to(window, speed, {scrollTo:{y: offset, x:0}, ease:Quint.easeInOut});
		return false;
	});

	if ($(".youtube").length > 0) {
		$(".youtube").each(function() {
	        // Based on the YouTube ID, we can easily find the thumbnail image
	        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

	        // Overlay the Play icon to make it look like a video player
	        $(this).append($('<div/>', {'class': 'play'}));

	        $(document).delegate('#'+this.id, 'click', function() {
	            // Create an iFrame with autoplay set to true
	            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
	            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

	            // The height and width of the iFrame should be the same as parent
	            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

	            // Replace the YouTube thumbnail with YouTube HTML5 Player
	            $(this).replaceWith(iframe);
	        });
	    });
	}
	var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

/*
	if ($('#home').length) {
		replace_links();
	}

	function replace_links(){

	    $( ".mainNavList li a" ).each(function( i ) {

			var href = $( this ).attr('href');

			if((href.match(/approach/g) || []).length){
				// $( this ).attr('href', "#");

			} else if((href.match(/blog/g) || []).length){
				$( this ).attr('href', "#ourBlog");

			} else if((href.match(/getting/g) || []).length){
				$( this ).attr('href', "#ourServices");

			} else if((href.match(/academy/g) || []).length){
				$( this ).attr('href', "#Startups");

			}

	  });

	}
*/
	if ($('.detailsWrapper').length > 0){
		$("#alert-wrapper").prependTo('.detailsWrapper');
	}
	/*
	if($("*:contains('RDJ Startups')").length > 0) {
		$(this).wrap('<strong></strong>');
		console.log("iei");
	}*/

});


// 	function scrollMenu() {

// 		setTimeout(function() {
// 			if (location.hash) {
// 				window.scrollTo(0, 0);
// 				var menuH = $("header").height();
// 				var offset = $(location.hash).offset().top-menuH+1;
// 				var top = $(document).scrollTop();
// 				var offseted = Math.abs(top-offset)/100;
// 				var speed = ((1/offseted*100)*(1.25*offseted))/100;
// 				TweenLite.to(window, speed, {scrollTo:{y: offset, x:0}, ease:Quint.easeInOut});
// 			}
// 		}, 1);

// 		$(document).on('click', '.mainNav ul li>a[href*=#]:not([href=#])', function() {

// 				var target = $(this).attr('href');
// 				var current = $(target);
// 				var menuH = $("header").height();
// 				var offset = ( target == '#content' || target == '#' ? 0 : current.offset().top - menuH + 1);
// 				var top = $(document).scrollTop();
// 				var offseted = Math.abs(top-offset)/100;
// 				var speed = ((1/offseted*100)*(1.25*offseted))/100;
// 				TweenLite.to(window, speed, {scrollTo:{y: offset, x:0}, ease:Quint.easeInOut});
// 				return false;
// 		});
// 	};
// $(document).ready(function(){

// 		scrollMenu();
// 	});

function closeCookiePolicy(){
	var url="index.cfm?action=cart_ajax_removeCookiePolicy";
	$.ajax({
		url: url,
		asynchronous:true,
		success:function(r){
			$("#stickycookiePolicy").fadeOut();
		}
	});
}



function background_image(){

    $( ".background-image" ).each(function( i ) {

      var img_src = $( this ).find('img').attr('src');

      //$( this ).find('img').css('opacity',0);
      $( this ).find('img').css('position','absolute');
      $( this ).find('img').css('top','1rem');
      $( this ).find('img').css('right','1rem');
      $( this ).find('img').css('left','1rem');
      $( this ).find('img').css('bottom','1rem');
      $( this ).find('img').css('z-index',-1);
      $( this ).find('img').css('margin', '2rem auto');

      $( this ).css('background-image', 'url('+img_src+')');
      $( this ).css('background-position', 'center center');
      $( this ).css('background-size', 'cover');
      if( $( this ).hasClass("margin-md") ){
      	$( this ).css('min-height', '150px');
      }
      $( this ).css('height', '100%');

  });

}



$( document ).ready(function() {
	background_image();

	//same height
    var byRow = $('body#our-approach');
	 $('.items-container').each(function() {
	    $(this).children('.item').matchHeight({
	        byRow: byRow
	    });
	});

	//Homepage Video
	scaleVideoContainer();

	if($('.video-container').length>0) {
	    initBannerVideoSize('.video-container .poster img');
	    initBannerVideoSize('.video-container .filter');
	    initBannerVideoSize('.video-container video');
	    var vid = document.getElementById("mainVideo");
		vid.muted = true;
	}



});

//Homepage Video part 2
function scaleVideoContainer() {

	videoAspectRatio = 920/1920;

	if($(window).width() > 1024){
		var height = $(window).width() * videoAspectRatio;
	    var unitHeight = parseInt(height) + 'px';
	} else {
		var unitHeight = '790px';
		if($(window).width() < 420){
    		var unitHeight = '350px';
    	}
	}

    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var videoWidth = 1920;
    var videoHeight = 920;
	var videoAspectRatio = videoHeight/videoWidth;

    // console.log(windowHeight);

    $(element).each(function(){

        $(this).width(windowWidth);

        if(windowWidth < 1024){

        	var url_image = $('.video-container .poster img').attr("src");
        	if(windowWidth < 420){
        		var url_image = $('.video-container .poster .mobileimg').attr("src");
        	}

            $('.video-container video').hide(); //hide the video on mobile

            $('.video-container .poster img').hide();
            $('.video-container').css(
            	{

            		"background-image":"url("+url_image+")",
            		"background-position": "center bottom",
            		"background-repeat": "no-repeat",
            		"background-size": "cover"
            	}
            );

        }
        else {
        	$(this).css({'margin-left' : '0'});
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
$(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
});
//END Homepage Video part 2

$( window ).resize(function() {
  background_image();
});
