// JavaScript Document

  // appending div to the body //
       
			  var $wrapper = $("<div class='wrap'></div>");
			  
			   var $photoViewer = $("<div class='photoview'></div>");
			   
			  var $image = $("<img class='pic'/>");

			  
			  var $arrow1 = $("<img class='arrow1' src='icon/arrows.svg'/>");
			  
			  
			  var $arrow2 = $("<img class='arrow2' src='icon/arrows-1.svg'/>");
			  
			  
			   var $textContainer = $("<div class='captionText'></div>");
			   
		  
			  var $para = $("<p></p>");
			  
			  
			  var $overlay = $("<div class='overlay'></div>");
			 
			  
			  var $main =  $(".pic-nav li a");
			  
			 
	 
	
	  
	  
	  
	  //**************************************aPpEnDiNg ***********************************//
	  
	   $photoViewer.append( $image );
	   
	   $photoViewer.append($arrow1).append( $arrow2 );
	   
	   $textContainer.append( $para );
	  
	  $wrapper.append( $photoViewer ).append( $textContainer );
	  
	  $overlay.append( $wrapper );
	   
		$("body").append( $overlay );
	  
	  
	 
	 
	  $overlay.hide();
	  
	  
	 
	 // iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy			//
	 
	 
				
				
				
				$main.click( function(e) {
					
					
				 e.preventDefault();
				 
				 
					 
					 var imageLoc = $(this).attr("href");
					   
					 $image.attr("src", imageLoc);
					 
					 
					   $overlay.show();

					 
					 var captionTex = $(this).children("img").attr("alt");
				   
					 $para.text( captionTex );
					 
					 

					 
					 
			  });
			   
		
	            
				   $main.click( function(e) {
					   
					   e.preventDefault();
  
						var removeLoc = $(this).attr("href");
						  
						  removeLoc.attr("src", removeLoc );
						  
						  $overlay.remove();
						  
						   var removeCaptionTex = $(this).children("img").attr("alt");
						   
						   $para.text( removeCaptionTex );
						   
						 
					 });
				     
					  
	 	
		    
	

	  
	 