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
			var $img;
		   
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
	
	
	 /* iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy WiTh Pic		*/
   
   			  
  $main.click( function(e) {
				  
   e.preventDefault();
			   
				  
	    var imageLoc = $(this).attr("href");	   
        var currentImg = $(this).parent("li");
	    $image.attr("src", imageLoc);
		$overlay.show();
		$(this).addClass(" selected ");
					 
		var captionTex = $(this).children("img").attr("alt");
		$(this).addClass(" selected");
				 
		$para.text( captionTex );
		
		getCurrentImage( this );		   
		
  });
			 
 /*  ________________________________________________________________________ */	  
			  

 /********************** cLiCk FuNcTiOn ThAt GeTs RiD Of OvErLaY ************* */
	  
		$overlay.click( function(e) {
	   
	    e.preventDefault();
			
	    $overlay.hide();
			
		});
			   
			
			
		$arrow1.click( function(e) {
			
			e.preventDefault();
			
			e.stopPropagation();
			
			
			getNxtImg();
			
			$image.show();
			
			
		});
					   
	  /******************************************************************************/
	    
	  
     /* Function that gets the current image */
		
		function getCurrentImage( currentImg ) {
			
		   $img = $(currentImg).children("a");                                // get the image that the user clicked on.
			var imgLocation = $( $img ).attr("href");					// gets the href/src value of the link the user clicked upon.
			$image.attr("src", imgLocation );								// update the $image with the href which would be the src for the image.
			
		}
			  
	   
	  
	 /********************************************************************************/
	  
	    function getNxtImg() {
			
		 var nextImgParent = $( $img ).parent().next();
		   var nextImage =   $( nextImgParent ).children("a");
		    var nextLocation = $(nextImage).attr("href");      		 		  // get the image location and set the image src to the href image location.
			$image.attr("src", nextLocation );        							// set the src of the image to the next href
			getCurrentImage( nextImgParent ); 
			
		}
		
			
			
			
		
	  

	  
 
	  
	  
  
	  
	  
	  
	  
  
	
   