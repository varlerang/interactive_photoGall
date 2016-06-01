// JavaScript Document

  // appending div to the body //
       
      var $wrapper = $("<div class='wrap'></div>");
	  
      var $arrowContainer1 = $("<div class='arrowContainer1'></div>");
	  
	  var $arrowContainer2 = $("<div class='arrowContainer2'></div>");

	  var $arrow1 = $("<img class='arrow1' src='icon/arrows.svg'/>" );
	  
	  var $arrow2 = $("<img class='arrow2' src='icon/arrows-1.svg'/>");
	  
	  
	  
	  var $textContainer = $("<div class='captionText'></div>");
  
	  var $para = $("<p></p>");
	  
	  
	  
	  var $imgContainer = $("<div class='imageCon'></div>");
  
     var $image = $("<img class='pic'/>");
	 
	 
	 
	 var $overlay = $("<div class='overlay'></div>");
	  
	  var $main =  $(".pic-nav li a");
	  
	 
	 
	
	  
	  
	  
	  //				 AdDiNg OvErLaY aNd iMaGe WiTh TeXt 			//
	  
	  
	  
	
	    $imgContainer.append( $image);
	  
	  
	   $arrowContainer1.append( $arrow1 );
	   
	   $arrowContainer2.append( $arrow2 );
	  
	
	
	    $textContainer.append($para);
		
	 
	  
	   $wrapper.append( $imgContainer).append( $arrowContainer1 ).append( $arrowContainer2).append($textContainer);
	   
	   $overlay.append( $wrapper );
	  
	 $("body").append($overlay);
	 
	 
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
			   
		
	 
	 	
		    
	

	  
	 