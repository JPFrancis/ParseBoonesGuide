$(document).ready(function() {
	$('#sign-up-popup').animate({"z-index": "-1"}, 100);
	$('#log-in-popup').animate({"z-index": "-1"}, 100);
	var shadowed = false;
	$('.top-banner ul li:first-child').click(function(){
		$('#shadow').css("z-index", "4");
		$('#shadow').animate({"opacity": "0.7"}, 200, function(){shadowed=true;});
		$('#log-in-popup').animate({"z-index": "5"}, 2);
		$('#log-in-popup').animate({"opacity": "1"}, 200);
	});
	$('.top-banner ul li:nth-child(2)').click(function(){
		$('#shadow').css("z-index", "4");
		$('#shadow').animate({"opacity": "0.7"}, 200, function(){shadowed=true;});
		$('#sign-up-popup').animate({"z-index": "5"}, 2);
		$('#sign-up-popup').animate({"opacity": "1"}, 200);
	});	
	$('body').click(function(e){
		if(e.target.id == "shadow"){
					$('#shadow').animate({"opacity": "0"}, 200, function(){
					$('#shadow').css("z-index", "-3");
					shadowed= false;
				});
				$('#sign-up-popup').animate({"opacity": "0"}, 100);
				$('#log-in-popup').animate({"opacity": "0"}, 100);
				$('#sign-up-popup').animate({"z-index": "0"}, 100);
				$('#log-in-popup').animate({"z-index": "0"}, 100);
		}
	});
	$('#sign-up').click(function() {
		$('#sign-up-popup').animate({"opacity": "1"}, 50);
		$('#log-in-popup').animate({"opacity": "0"}, 50);
		$('#sign-up-popup').animate({"z-index": "5"}, 2);
		$('#log-in-popup').animate({"z-index": "0"}, 100);
	});
	$('#log-in').click(function() {
		$('#sign-up-popup').animate({"opacity": "0"}, 50);
		$('#log-in-popup').animate({"opacity": "1"}, 50);
		$('#log-in-popup').animate({"z-index": "5"}, 2);
		$('#sign-up-popup').animate({"z-index": "0"}, 100);
	});
	var howItWorks = false;
	$('#how-it-works-button').click(function(){
		$('body').animate({"margin-top": "610px"}, 600);
		howItWorks=true;
	});
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    // Do something
	    if(howItWorks && scroll >=610){
	    	$('body').animate({"margin-top": "0px"}, 0);
	    	howItWorks=false;
	    	window.scroll(0,0);
	    }
	});
	
	var x = document.getElementById("activity-form");
	x.addEventListener("focusin", myFocusFunction);
	
	function myFocusFunction() {
	    document.getElementById("search-dropdown").style.display = "block"; 
	}
	

	var Sailing=false;
	var FlyFishing=false;
	var Surfing=false;
	var Painting=false;
	
	$('#option-sail').click(function(){
		document.getElementById("search-dropdown").style.display = "none"; 
		$("#activity-form").val("Sailing");
		Sailing = true;
		FlyFishing=false;
		Surfing=false;
		Painting=false;
		
	});
	
	$('#option-fish').click(function(){
		document.getElementById("search-dropdown").style.display = "none"; 
		$("#activity-form").val("Fly Fishing");
		Sailing = false;
		FlyFishing=true;
		Surfing=false;
		Painting=false;
		
	});
	
	$('#option-surf').click(function(){
		document.getElementById("search-dropdown").style.display = "none"; 
		$("#activity-form").val("Surfing");
		Sailing = false;
		FlyFishing=false;
		Surfing=true;
		Painting=false;
		
	});
	
	$('#option-paint').click(function(){
		document.getElementById("search-dropdown").style.display = "none"; 
		$("#activity-form").val("Painting");
		Sailing = false;
		FlyFishing=false;
		Surfing=false;
		Painting=true;
		
	});
	
	$(".search-button").click(function(){
		if(Sailing){
			window.location.href = "Sailing.html";
		}
		else if(FlyFishing){
			window.location.href = "FlyFishing.html";
		}
		else if(Surfing){
			window.location.href = "Surfing.html";
		}
		else if(Painting){
			window.location.href = "Painting.html";
		}
	});
});