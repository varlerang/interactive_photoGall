// JavaScript Document

  // appending div to the body //
       
	   $(function() {
		   
	   
			  var $wrapper = $("<div class='wrap'></div>");
			  
			   var $photoViewer = $("<div class='photoview'></div>");
			   
			  var $image = $("<img class='pic'/>");

			  
			  var $arrow1 = $("<img class='arrow1' src='icon/arrows.svg'/>");
			  
			  
			  var $arrow2 = $("<img class='arrow2' src='icon/arrows-1.svg'/>");
			  
			  
			   var $textContainer = $("<div class='captionText'></div>");
			   
		  
			  var $para = $("<p></p>");
			  
			  
			  var $overlay = $("<div class='overlay'></div>");
			 
			  
			  var $main =  $(".pic-nav li a");
			  
			  
	         var $current;
	
	  
	  
	  
	  //**************************************aPpEnDiNg ***********************************//
	  
	   $photoViewer.append( $image );
	   
	   $photoViewer.append($arrow1).append( $arrow2 );
	   
	   $textContainer.append( $para );
	  
	  $wrapper.append( $photoViewer ).append( $textContainer );
	  
	  $overlay.append( $wrapper );
	   
		$("body").append( $overlay );
	  
	  
	 
	 
	  $overlay.hide();
	  
	  
	  
	  
	  
	  /***************************************************************/
	  
	  
	  
	 
	 // iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy			//
	 
	 
				
				
				
				$main.click( function(e) {
					
					
				 e.preventDefault();
				 
				    
				 
				 var imageLoc = $(this).attr("href");
				 
				 $current = $(this).parent();
					   
			     $image.attr("src", imageLoc);
					 
				 $overlay.show();

					 
					 var captionTex = $(this).children("img").attr("alt");
				   
					 $para.text( captionTex );
					 
			 });
			   
			   
			   
			   
			   
			   
			   
			   
		/********************** cLiCk FuNcTiOn ThAt GeTs RiD Of OvErLaY ************* */
		
	      $overlay.click( function(e) {
			  
			  e.preventDefault();
			  
			  $overlay.hide();
			  
		  });
				 
						 
		/******************************************************************************/
		
		
		
		$arrow1.click( function(e) {
			
			e.preventDefault();
			 
           
				
							
		var $nxtImg = $current.next();
		
		 var $nextSrc = $nxtImg.children("img").attr("src");
		 
		   
			
		 var $nextLocation = $main.attr("href", $nextSrc );
		 
			
		   
			  
			var $nextImg =  $(".pic-nav li ").children("img").attr("src", $nextLocation );

				$image.attr("src", $nextImg );
				

             var $nextCapTex =  $(".pic-nav li").children("img").attr("alt");
  
			
			
			
			  var $nextText = $para.text( $nextCapTex );
			    
				 $image.attr("alt", $nextText );
			
			$current = $nxtImg;
			   
			
			
		});
					  
	 	
		    
});

	  
	 