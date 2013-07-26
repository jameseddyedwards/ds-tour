$(function(){

	var nav = $("a", "nav");

	nav.click(function(){
		var targetId = "#" + $(this).data("target"),
			tabs = $(".tab");

		nav.removeClass("active");
		$(this).addClass("active");
		
		tabs.removeClass("active");
		$(targetId).addClass("active");
	});

});