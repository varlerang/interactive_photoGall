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
			  
	          var $imageCache = [
			   
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
	   $photoViewer.append($arrow1).append( $arrow2 );
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

					 
					 var captionTex = $(this).children("img").attr("alt");
				   
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
		
		function getNxtImage() {
			
					
					  
			
					  
			
					 
					 
					 
					 
		}
		
		/***************************
		
		**********************************************************************************/
		
			
			$arrow1.click( function(e) {

                  e.preventDefault();
     				e.stopPropagation();
  
           
		       getNxtImage();
	  	


							  console.log( getNxtImage());
							  
							  
							   });
		
		
	
					  
	 	/************************************************************************************************************** */
		
		

		
		
		
		
		
		
		
		
	
		
		
		
		
	
	  
	 