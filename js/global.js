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
	
	//--------------*NEW*----------------------------------How can we began the process of creating a filter's library page. //
	
	$(".technical").click(function(){
		
		$(this).addClass("activebutton-tech");
		
		if($('.activebutton-tech').length){
			$('.activebutton-tech').not($(this)).removeClass('activebutton-tech');
		} 
		
		var technicalityId = $("#" + $(this).data("target"));
		
		user.technicality = technicalityId; //set the user's technicality
		
		displayFiltersbutton();
	});
	
	$(".role").click(function(){
		
		$(this).addClass("activebutton-role");
		
		if($('.activebutton-role').length){
			$('.activebutton-role').not($(this)).removeClass('activebutton-role');
		}
		
		var roleId = $("#" + $(this).data("target"));
		
		user.role = roleId; //set the user's role
		
		displayFiltersbutton();
	});
	
	$(".industry").click(function(){
		
		$(this).addClass("activebutton-ind");
		
		if($('.activebutton-ind').length){
			$('.activebutton-ind').not($(this)).removeClass('activebutton-ind');
		} 
		
		var industryId = $("#" + $(this).data("target"));
		
		user.industry = industryId; //set the user's industry
		
		displayFiltersbutton();
		  
	});
	
	function checkifFull(){ //This will check to see if all fields are selected and we can display the 'Show me Some Filters' button. 
							//To be called by display filters button!
		var flag = false;
		
		if(user.technicality != null && user.role != null && user.industry != null){
			flag = true;
		}
		
		return flag; 
	}
	
	function displayFiltersbutton(){ 
		if(checkifFull() == true){
			$("#showme").show();
		}
		
		return;
	}

});
