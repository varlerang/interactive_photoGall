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
			  
	          var imageCache = [
			   
			   "img/thumb-img/01.jpg",
			   "img/thumb-img/02.jpg",
			   "img/thumb-img/03.jpg",
			   "img/thumb-img/04.jpg",
			   "img/thumb-img/05.jpg",
			   "img/thumb-img/06.jpg",
			   "img/thumb-img/07.jpg",
			   "img/thumb-img/08.jpg",
			   "img/thumb-img/09.jpg",
			   "img/thumb-img/10.jpg",
			   "img/thumb-img/11.jpg",
			   "img/thumb-img/12.jpg"	
			   
			   	];
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
				 
    
					
					 $(this).parent("li").index();
					   
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
		
		function getNxtImage( $img ) {
			
			
			
			   $currentImg = $(this).addClass(" selected");
			   
				  $currentImg.attr("alt");
				  
				 imageCache.length;
				
				// go through the imageCache and look for the matching src path of $currentImg and $currentCaption//
				
				if ( imageCache.hasOwnProperty( "src" ) == $currentImg ) {
					 
					 $currentImg.removeClass( " selected ");
					  
					if (  imageCache[src] == $currentImg  >= 0 ) {
					
					
					
						if ( imageCache.inArray( $currentImg )  >= 0 ) {
							
							console.log( $currentImg );

						}
					
					 
					
					}
					 	
				
				}
				
		}
		/***************************
		 
		**********************************************************************************/
		
			
			$arrow1.click( function(e) {

                  e.preventDefault();
     				e.stopPropagation();
  
           
		       getNxtImage();
	  	


							  
							  
							  
							   });
		
		
	
					  
	 	/************************************************************************************************************** */
		
		

		
		
		
		
		
		
		
		
	
		
		
		
		
	
	  
	 