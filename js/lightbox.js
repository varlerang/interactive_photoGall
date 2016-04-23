// JavaScript Document

  // appending div to the body //
     
	  var $arrow1 = $("<img id='arow1' src='icon/arrows.svg'/>" );
	  
	  var $arrow2 = $("<img id='arow2' src='icon/arrows-1.svg'/>");
  
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
					 
				     var $nextImgLoc =  $(this).attr("href");
					 
					  $image.next().children("img").attr("src" , $nextImgLoc );
				   
				    var nextCapTex =  $main.next().children("img").attr("alt");
					
					$para.text(nextCapTex);
					 
				 });
		    
		             
	
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //	
	
	 
	 
	 	 $arrow1.hover( function() {
			  
			$arrow1.toggle();
	
			 
		 });
		 
		 
		 $arrow2.hover( function() {
			  
			   $arrow2.toggle();
			 
		 });
		 
		 
		 
		 
		 
		 
		 
		  
		 $image.click( function() {
			 
			 $overlay.hide(); 
			 
		 });
		
		    
	

	  
	 