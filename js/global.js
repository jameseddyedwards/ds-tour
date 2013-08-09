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
		videoRootUrl = "video/",
		filters = [{
			name : "Geolocation-Filter",
			vfile : "video-file", //video file
			ifile : "map", //image file
			classList : ["technical", "marketing"]
		}, {
			name : "Monitor-Filter",
			vfile : "video-file",
			ifile : "monitor",
			classList : ["agency"]
		}],
		html = "",
		i = 0;


	// Populate filter list
	html += '<ul>';
		for (var i=0; i<filters.length; i++) {
			var imgUrl = imgRootUrl + filters[i].ifile + ".png",
			filterHTML = filters[i].name + ".html",
			classList = "";

			classList = filters[i].classList.join(" "),

			console.log(classList);

			html += '<li class="' + classList + '">';
			html += '<span class="name">' + filters[i].name + '</span>';
			html += '<a href="' + filterHTML + '">';
			html += '<img src="' + imgUrl + '"  alt="' + filters[i].name + '" height ="300" width="300"/>';
			html += '</a>';
			html += '</li>';
			
			
			
		}
	html += '</ul>';
	
	

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
	
	$("#switch1").click(function() {
    	$("#csdlcode").toggle();
    	$("#query").toggle(); //can we save the current query state in a cookie?
	});
	
	//Append the HTML once the user clicks the 'Show me some Filters' button.
	$("#showme").click(function() {
		$("#filters").append(html);
	});
	
	//Once the video finishes we will display the Marketo Form in place of it.
	$("video").bind("ended", function() {
   		$("#demo").hide();
   		$("#marketo").show();
   		$("#view").hide();
   		$("#new").show();
	});

	$("#again").click(function() {
		$("#demo").show();
   		$("#marketo").hide();
   		$("#view").show();
   		$("#new").hide();
	});
	
	

});
