$(function(){

	$("a", "nav").click(function(){
		var targetId = "#" + $(this).data("target"),
			tabs = $(".tab");

		tabs.removeClass("active");
		$(targetId).addClass("active");
	});

});