$(function(){

	// Navigation
	var nav = $("a", "nav"),
		steps = $(".step"),
		nextStep = $(".next-step"),
		user = {
			technical : null,
			role : null,
			industry : null
		},
		imgRootUrl = "img/filter/",
		videoRootUrl = "",
		filters = [{
			name : "filter name",
			file : "video-file",
			classList : ["technical", "marketing"]
		}, {
			name : "filter name",
			file : "video-file",
			classList : ["agency"]
		}],
		html = "",
		i = 0;

	
	// Populate filter list
	html += '<ul>';
		for (var i=0; i<filters.length; i++) {
			var imgUrl = imgRootUrl + filters[i].file + ".png",
				classList = "";

			for (var b=0; b<filters[i].classList.length; b++) {
				classList += " " + filters[i].classList[b];
			}

			//console.log(classList);

			html += '<li class="' + classList + '">';
			html += '<span class="name">' + filters[i].name + '</span>';
			html += '<img src="' + imgUrl + '" alt="' + filters[i].name + '" />';
			html += '</li>';
		}
	html += '</ul>';

	$("#filters").append(html);


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
	
	//--------------*NEW*----------------------------------How can we began the process of creating a filter's library page. //
	
	$(".button", ".question").click(function(){

		var questionParent = $(this).parent(".question"),
			questionType = $(this).data("question-type"),
			value = $(this).data("value");

		$(this).addClass("selected");

		$(".button", questionParent).not($(this)).removeClass("selected");
		
		if (questionParent.data("question-type") == "role") {
			user.role = value;
		} else if (questionParent.data("question-type") == "technical") {
			user.technical = value;
		} else if (questionParent.data("question-type") == "industry") {
			user.industry = value;
		}
		
		displayFiltersbutton();
	});
	/*
	$(".role").click(function(){
		
		$(this).addClass("selected");
		
		if($('.activebutton-role').length){
			$('.activebutton-role').not($(this)).removeClass('activebutton-role');
		}
		
		var roleId = $("#" + $(this).data("target"));
		
		user.role = roleId; //set the user's role
		
		displayFiltersbutton();
	});
	
	$(".industry").click(function(){
		
		$(this).addClass("selected");
		
		if($('.activebutton-ind').length){
			$('.activebutton-ind').not($(this)).removeClass('activebutton-ind');
		} 
		
		var industryId = $("#" + $(this).data("target"));
		
		user.industry = industryId; //set the user's industry
		
		displayFiltersbutton();
		  
	});
*/
	// This will check to see if all fields are selected and we can display the 'Show me Some Filters' button. 
	// To be called by display filters button!
	function checkifFull () {
		if (user.technical != null && user.role != null && user.industry != null){
			return true;
		} else {
			return false;
		}
	}
	
	function displayFiltersbutton(){ 
		if (checkifFull()){
			$("#showme").show();
		}
	}

});
