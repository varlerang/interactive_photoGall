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
			
					var $current = $main.parent("li").attr("href"); 
					
					$current.attr("href", href );
					
					 var $currentImage = $image.attr("href", $current );
					
					var $nextLocHref = $main.children("li").attr("href");
					
					 var $nextLocImage = $nextLocHref.attr("href", href );
					
					$image.attr("href" , $nextLocHref );
					
					
					
					
					
					var $currentSrc = $(" .pic_nav > img ").parent("img").attr("src");
					
					var $currentImgSrc =  $image.attr("src", $currentSrc );
					
					var $nextSrcLoc = $(" .pic_nav > img ").children("img").attr("src");
					
					 var $nextImgSrc = $image.attr("src", $nextSrcLoc );
					 
					
					 var $currentImgShow = $image.attr(  $currentImage , $currentSrc );
					 
					 var $nextImgShow = $image.attr( $nextLocImage, $nextImgSrc );
					 
					  $currentImgShow.hide();
					  
					  $nextImgShow.show();
					  
					  
			
					  
				
				  
				  	  
				 
				  
				  var capText = $(" .pic-nav img").attr("alt");
				
					$para.text("alt", capText);	
					
					  
					  
					  
					  
					  
				  
					
				
					
				 
			 
			
		 
				 
				  
			  
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
		
		

		
		
		
		
		
		
		
		
	
		
		
		
		
	
	  
	 