// JavaScript Document

  // appending div to the body //
      var $ArrowContainer1 = $("div class='arrowContainer1'></div>");
	  
	  var $ArrowContainer2 = $("div class='arrowContainer2'></div>");

	  var $arrow1 = $("<img class='arrow1' src='icon/arrows.svg'/>" );
	  
	  var $arrow2 = $("<img class='arrow2' src='icon/arrows-1.svg'/>");
  
	  var $para = $("<p></p>");
  
     var $image = $("<img class='picture'/>");
	 
	 var $overlay = $("<div class='overlay'></div>");
	  
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
			   
		
	 
	 	
		    
	

	  
	 