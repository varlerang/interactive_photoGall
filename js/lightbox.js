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
			var $nextImage = $(".pic-nav li ");
			
		   
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
	
	
	 /* iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy			*/
   
   
			  
			  
			  
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
				   
		   });
			 
	  
	  /* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */	   
			 
		  /********************** cLiCk FuNcTiOn ThAt GeTs RiD Of OvErLaY ************* */
	  
		$overlay.click( function(e) {
			
			e.preventDefault();
			
			$overlay.hide();
			
		});
			   
					   
	  /******************************************************************************/
	  
	  /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& aRrOw ClIcK LeFt ArRoW FuNcTiOn $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
	  
  
				  
			  
	  /***************************
	   
	  **********************************************************************************/
	  
	function getNxtImg() {
		
		 
		
		
		
		 var $currentLoc = $(".pic-nav li a").children().removeClass(" selected ");
		 
  			var $currentImg = $currentLoc.attr("href");
			
			     $image.attr("src", $currentLoc );
			
			      var $currentCapText = $(" .pic-nav li a ").siblings("img");
				  
				    $currentCapText.attr("alt");
				 
				$para.text( $currentCapText);
				
				
            	
		     var $nextLoc = $(" .pic-nav li a ").children().addClass( "selected" );
			 
			 var $nextImg =	$nextLoc.attr("href");
				
				$image.attr( "src", $nextImg );
				
				var $nextCapText = $(" .pic-nav li a").siblings( "img" );
				
				$para.text( $nextCapText );
				
				$overlay.show();
	  	 
	}
					 
		  $arrow1.click( function(e) {

		  e.preventDefault();
			e.stopPropagation();
		
		    console.log( getNxtImg() );
		   
					 });
			
					
	  /************************************************************************************************************** */
	  
	  

	  
  /**
	  function getNextImage() {
  imageParent = $(thisImage).parent().next();
  if(imageParent.length!=0){
  thisImage = $(imageParent).children("a");
	// imageLocation = $(thisImage).attr("href");
	// $image.attr("src", imageLocation);
  }
	  
	  **/
	  
	  
	  
  
	  
	  
	  
	  
  
	
   