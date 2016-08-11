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
			
			       
				   
			    
					 
					 var $currentImgHref = $(".pic-nav li a").parent("li");
					 
					    $currentImgHref.attr("href");
				 
				    var $nxtLoc = $(".pic-nav li a").children("li").next();
					
					      $currentImgHref.attr("href", $nxtLoc );
						  
						  $image.attr("href", $currentImgHref );
				   
				    var $currentImgSrc = $(".pic-nav > img").parent();
					
					  $currentImgSrc.attr("src");
					  
					  var $nxtImgSrc = $(".pic-nav > img").children("img").next();
				 
				   	  $image.attr("src", $nxtImgSrc );
					  
					  
		     var $nextCapTex = $nxtImgSrc.attr("alt");
             
			     
			
			$para.text( $nextCapTex );
			
			$image.attr("alt", $para);
			
		  $overlay.show();
				 
				  
			  
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
		
		

		
		
		
		
		
		
		
		
	
		
		
		
		
	
	  
	 