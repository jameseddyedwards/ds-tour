$(function(){

	// Navigation
	var nav = $("a", "nav"),
		steps = $(".step");

	nav.click(function() {
		var targetId = $("#" + $(this).data("target")),
			tabs = $(".tab");

		nav.removeClass("active");
		$(this).addClass("active");
		
		tabs.removeClass("active");
		targetId.addClass("active");
	});


	// Start Click
	$("#start").click(function() {
		$("#info").hide();
		$("#questions").show();
	});

	steps.click(function() {
		var targetId = $("#" + $(this).data("target"));

		steps.removeClass("active");

		nav.removeClass("active");
		$(this).addClass("active");
		$("#info").hide();
		$("#questions").show();
	});

	$(".button").click(function(event){
		event.preventDefault();
	});

	$("#showme").click(function() {
		$("#questions").hide();
		$("#filters").show();
	});

});