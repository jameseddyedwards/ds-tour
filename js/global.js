$(function(){

	// Navigation
	var nav = $("a", "nav"),
		steps = $(".step"),
		nextStep = $(".next-step"),
		user = {
			technicality : null,
			role : null,
			industry : null
		},
		videoRootUrl = "",
		filters = [{
			name : "filter name",
			file : "video-file",
			roles : ["list", "list"],
			technical : true,
			industries : ["list", "list"]
		}, {
			name : "filter name",
			file : "video-file",
			roles : ["list", "list"],
			technical : true,
			industries : ["list", "list"]
		}];

	console.log(filters);

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

	// Generic Step Function
	nextStep.click(function() {
		var nextStepId = $("#" + $(this).data("target"));

		steps.hide();
		nextStepId.show();
	});

	$(".button").click(function(event){
		event.preventDefault();
	});

});