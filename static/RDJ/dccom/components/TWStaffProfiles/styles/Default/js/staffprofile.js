


		$(document).ready(function(){
			showProfiles();
			/*area, img {*cursor: pointer; display: block;}*/
			$("img+map>area").css("cursor","pointer");
		});

		

		function showProfiles(){

			if($(window).width() > 1024){

				$(".staffProfiles").width($(window).width());
			  	$(".staffProfiles").height( $(".staffProfiles").width() / 1920  * 1230);
			  	$('#Map').imageMapResize();

				$(".people").fadeOut(0);
			  	$(".team").fadeIn(100);

			  	$(".areaProfile").click(function(){

			  		var element = $(this).index();
					$( ".people:eq( "+element+" )" ).fadeIn(100).siblings(".people").fadeOut(100);
					$( ".instructions" ).fadeOut(0);
			  	});

			  	$(".closeProfile").click(function(){
			  		$(".people").fadeOut(0);
					$(".team").fadeIn(0);
			  	});

			  	$(".staffProfiles").removeClass("hidden");
				$(".staffProfilesMobile").addClass("hidden");
				/*
				$(".staffProfiles").width($(window).width());
			  	$(".staffProfiles").height( $(".staffProfiles").width() / 1920  * 1230);

			  	$(".people").fadeOut(0);
			  	$(".team").fadeIn(100);

				$(".mouse").mousemove(function(event) {

					var offset = $(this).offset();
					x = event.pageX - offset.left;

					var percentaje =  Math.round( ( (x + 25) / $(".mouse").width()) * 100 );
					var items = $(".people").length;

					if(percentaje >= 0 && percentaje <= 100){

						var step = Math.round(100/ $(".people").length);
						var element = Math.floor(percentaje/step) ;

						if(element < 1) element = 1;
						if(element > $(".people").length) element = $(".people").length;
						element--;
						var infoPos = Math.round( $(this).width() / items ) * element + offset.left;

						$(".percentaje").css( "width", percentaje+"%");

						$(".staffHover").css( "left", infoPos+"px");
						$( ".people:eq( "+element+" )" ).fadeIn(100).siblings(".people").fadeOut(100);
					}
				});
				*/


			} else {
				$(".staffProfiles").addClass("hidden");
				$(".staffProfilesMobile").removeClass("hidden");
				$(".people").show();
			}

		}
		$(window).resize(function(){
			showProfiles();
		});

/*
$(window).load(function() {
	//Staff Profiles
	$("ul.staffProfiles li").click(function(){
		//get contents
		var content = "";

		var formData = {
			"title": $(this).find(".staffInfo h3").text(),
			"subtitle": $(this).find(".staffInfo h4").text(),
			"body": $(this).find(".staffInfo p.description").text(),
			"website": $(this).find(".staffInfo p.website").text(),
			"phone": $(this).find(".staffInfo p.phone").text(),
			"email": $(this).find(".staffInfo p.email").text()
		};

		$.ajax({
			url: 'dccom/components/TWStaffProfiles/actions/index.cfm',
			type: 'POST',
			dataType: 'html',
			data: formData,
			success: function(reponsedata) {
				$.fancybox({
					'padding' : 0,
					'content': reponsedata
				});
			}
		});
	});
});



$(document).ready(function() {

	searchProfiles( $('#search').val(),  $('#position').val(), $('#location').val(), $('#letter').val(), 1 );


	$('#search').keyup( function(){
		searchProfiles( $('#search').val(),  $('#position').val(), $('#location').val() );
	});

	$('#position').change( function(){
		searchProfiles( $('#search').val(),  $('#position').val(), $('#location').val() );
	});

	$('#location').change( function(){
		searchProfiles( $('#search').val(),  $('#position').val(), $('#location').val() );
	});

});

function searchProfiles( name, position, location, letter, firstLoad ){

	name = name.toLowerCase();
	position = position.toLowerCase();
	location = location.toLowerCase();
	letter = letter === undefined ? '' : letter.toLowerCase();
	firstLoad =  firstLoad === undefined ? 0 : 1;

	if( name == "search...") name = "";

	$('.staffProfiles li').each( function(){
		var currName 	 = $(this).attr("data-search").toLowerCase();
		var currPosition = $(this).attr("data-position").toLowerCase();
		var currLocation = $(this).attr("data-location").toLowerCase();

		//var currLetter = currName.charAt(0);

		var currLetter = currName.split(' ');
		if( currLetter.length > 1 ){
			currLetter = currLetter[1].charAt(0);
		}else{
			currLetter = '';
		}
		//console.log(currLetter);

		var showN = 0;
		if( currName.length > 0 ){
			if( currName.search( name ) != -1 ){
				showN = 1;
			}
		}else{ showN = 1; }

		var showP = 0;
		if( currPosition.length > 0 ){
			if( currPosition.search( position ) != -1 ){
				showP = 1;
			}
		}else{showP = 1; }

		var showL = 0;
		if( currLocation.length > 0 ){
			if( currLocation.search( location ) != -1 ){
				showL = 1;
			}
		}else{showL = 1; }

		var showLetter = 0;
		if( letter.length > 0 ){
			if( currLetter == letter ){
				showLetter = 1;
			}
		}else{showLetter = 1; }

		//	console.log("P: "+ showP + " val: " + currPosition + "\n         N:" + showN + " val: " +currName  + "\n         L:" + showL + " val: " +currLocation   );
		if( showP == 1 && showN == 1 && showL == 1 && showLetter == 1){
			$(this).fadeIn(800)
		}else{
			$(this).fadeOut(800)
		}
	});

	//When seraching reset letter
	$('#letter').val('');

	if( firstLoad == 0 ){
		var newurl = "/meet-the-team/";
		if( name.length > 0 ){
			newurl += "q/"+ name +"/"
		}
		if( position.length > 0 ){
			newurl += "parea/"+ position +"/"
		}
		if( location.length > 0 ){
			newurl += "loc/"+ location +"/"
		}

		if( letter.length > 0 ){
			newurl += "letter/"+ letter +"/"
		}

		//upd url and push to history
		//?q=aaa&parea=Administrative+Law&loc=London
		window.history.pushState({}, "Meet the Team | RDJ Startups", newurl);
	}

}
*/