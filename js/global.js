$(function(){

	var nav = $("a", "nav"),
		userInfo = {
			technical : null,
			role : null,
			industry : null
		};

	nav.click(function(){
		var targetId = "#" + $(this).data("target"),
			tabs = $(".tab");

		nav.removeClass("active");
		$(this).addClass("active");
		
		tabs.removeClass("active");
		$(targetId).addClass("active");
	});

	$("#start").click(function(){
		$("#info").hide();
		$("#questions").show();
	});

	$(".button").click(function(event){
		event.preventDefault();
	});

});