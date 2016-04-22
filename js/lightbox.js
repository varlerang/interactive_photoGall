// JavaScript Document

  // appending div to the body //
     
	  var $arrow1 = $("<img src='icon/arrows.svg/>' ");
	  
	  var $arrow2 = $("<img src='icon/arrows-1.svg/>' ");
  
	  var $para = $("<p></p>");
  
     var $image = $("<img>");
	 
	  var $overlay = $("<div id='overlay'></div>");
	  
	
	  
	  
	  
	  //				 AdDiNg OvErLaY aNd iMaGe WiTh TeXt 			//
	  
	  
	  
	 
	
	  $overlay.append($image);
	  
	 $overlay.append($arrow1);
	 
	 $overlay.append($arrow2);
	  
	  $overlay.append($para);
	  
	 $("body").append($overlay);
	 
	 
	 // iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy			//
	 
	 
	  $(".pic-nav li a").click( function(e) {
		  
		   e.preventDefault();
		   
		   var imageLoc = $(this).attr("href");
		     
			
		
		    $image.attr("src", imageLoc);
			
			
			$overlay.show();
			
			
			
			 var captionTex = $(this).children("img").attr("alt");
		
			 $para.text(captionTex);
			 
		
		
			 
			  
		
	 });
		  
		 $image.click( function() {
			 
			 $overlay.hide(); 
			 
		 });
		
		    
		  

	  
	 