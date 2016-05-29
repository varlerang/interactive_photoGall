// JavaScript Document

  // appending div to the body //
     
	  var $arrow1 = $("<img id='arrow1' src='icon/arrows.svg'/>" );
	  
	  var $arrow2 = $("<img id='arrow2' src='icon/arrows-1.svg'/>");
  
	  var $para = $("<p></p>");
  
     var $image = $("<img id='imgov'>");
	 
	  var $overlay = $("<div id='overlay'></div>");
	  
	  
	  
	  var $main =  $(".pic-nav li a");
	  
	 
	 
	
	  
	  
	  
	  //				 AdDiNg OvErLaY aNd iMaGe WiTh TeXt 			//
	  
	  
	  
	 
	
	  $overlay.append($image);
	  
	 $overlay.append($arrow1);
	 
	 $overlay.append($arrow2 );
	  
	  $overlay.append($para);
	  
	 $("body").append($overlay);
	 
	 
	  $overlay.hide();
	 
	 // iMaGe CliCk FuNcTiOn ShOwInG oVeRlAy			//
	 
	 
				$main.click( function(e) {
					
					 e.preventDefault();
					 
					 var imageLoc = $(this).attr("href");
					   
					 $image.attr("src", imageLoc);
					  
					 $overlay.show();
					  
					 var captionTex = $(this).children("img").attr("alt");
				   
					 $para.text(captionTex);
				  
			   });
			   
			   
			   // ************  rIgHt ClIcK aRrOw ******************** //
			   
			   
			   
			   
			     $arrow1.click( function(e) {
					 
					   e.preventDefault();
					 
				     var $nextImgLoc =  $image.next().attr("href");
					 
					  $image.attr("src" , $nextImgLoc );
				   
				    var nextCapTex =  $image.next().children("img").attr("alt");
					
					$para.text(nextCapTex);
					 
				 });
		    
		             
	
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //	
	
	 
	 
	 	
		    
	

	  
	 