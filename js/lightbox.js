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
			  
	         var $current;
	
	          var $nextImageLocation;
			  
	  
	  
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
				 
				 $current = $(this).parent();
				 
					   
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
			
			
			 
			  var $nxtImg = $current.next("li").children("img").attr("alt");
			  
			     $image.attr("src", $nxtImg ); 				
			  
			
			
			 
           		$image.show();
		   
		    			
				 
		
				 
				 
		    	 
		  
		      
		   
		   var $nextCapTex =  $current.next().children("img").attr("alt");
  
			
			$para.text( $nextCapTex );
			
			
		
		}
		
		
		/*************************************************************************************************************/
		
			
		
		
		$arrow1.click( function(e) {
			
			
			
			e.preventDefault();
			 
			
			 getNxtImage();
			 
				
		});
					  
	 	/************************************************************************************************************** */
		
		

		
		
		
		
		
		
		
		
		/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& aRrOw ClIcK RiGhT aRroW fUnCtIoN &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */
		
		/*
		
		function getPrevImage() {
			
		var	$preImg = $previous.children("img").prev();
		
		 var $preImgLoc = $previous.attr("href");
		 
		
		
		 $image.attr("src", $preImgLoc );
		 
		 
		 
		  var $preCapText = $previous.children("img").attr("alt");
		  
		  $para.text( $preCapText ); 	
			
			
		
			
			
			
		}
		
		*/
		
		/* ********************************************************************************************************** */
		
		
		$arrow2.click( function(e) {
			
			e.preventDefault();
			
			getPrevImage();
			
			
		});
		
		
		
		
		
	
	  
	 