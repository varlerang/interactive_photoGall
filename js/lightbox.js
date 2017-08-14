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
	 $photoViewer.append($arrow1);
	 $photoViewer.append( $arrow2 );
	 $textContainer.append( $para );
	 $wrapper.append( $photoViewer ).append( $textContainer );
	 $overlay.append( $wrapper );
	 $("body").append( $overlay );
	 $overlay.hide();
	 
	 /***************************************************************/
	
	
	 var $allImages = $("#allImages").children("li");
	  var $currentImageIndex = 0;
				  
	
	
	 /* iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy WiTh Pic		*/
   
   			  
  $main.click( function(e) {
				  
   e.preventDefault();
			  
	   var $img = $(this).attr("href");	   
        var currentImg = $(this).parent("li");
	    $image.attr("src", $img);
		$overlay.show();
		$(this).addClass(" selected ");
					 
		var captionTex = $(this).children("img").attr("alt");
		$(this).addClass(" selected");
				 
		$para.text( captionTex );
		
		   
		
  });
			 
 /*  ________________________________________________________________________ */	  
			  

 /********************** cLiCk FuNcTiOn ThAt GeTs RiD Of OvErLaY ************* */
	  
		$overlay.click( function(e) {
	   
	    e.preventDefault();
			
	    $overlay.hide();
			
		});
			   
			// left arrow //
			
		$arrow1.click( function(e) {
			
			e.preventDefault();
			e.stopPropagation();
			
			
		
			
		});
					   
	  /******************************************************************************/
	    
		
	  
     /* Function that gets the current image */
		
	
	   
	  
	 /********************************************************************************/
	  
	  
	   function getNextImage() {
		   
		   
		   
		   
		   
	   }

	  
 
	  
	  
  
	  
	  
	  
	  
  
	
   