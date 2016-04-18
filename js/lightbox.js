// JavaScript Document

  // appending div to the body //
  
   
	  
  
     var $image = $("<img>");
	 
	  
  
     var $overlay = $('<div id="overlay"></div>');
	
	  $overlay.append($image);
	  
	 $("body").append($overlay);
	 
	 
	  $(".pic-nav li ").click( function(e) {
		  
		   e.preventDefault();
		   
		   var loc = $(this).attr("src");
		   
		    $image.attr("src", loc);
			
			$overlay.show();
		  
		  
	  });
		  
		  
		  
		  
		  
		  
		  

	  
	 