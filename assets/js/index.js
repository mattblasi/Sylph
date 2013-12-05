(function ($) {

    $(document).ready(function(){    
		
		// Manages Smooth Scrolling For Hashes.
		(function(){
	        $('a[href^=#]').on("click",function(){
	            var t= $(this.hash);
				t=t.length&&t||$('[name='+this.hash.slice(1)+']');
				if(t.length){
	                var tOffset=t.offset().top;
	                $('html,body').animate({scrollTop:tOffset});
	                return false;
	            }
	        });
        })();
        
        /* Show Images After Loaded */
        (function(){
        	$(document).imagesLoaded().done(function(){
        		$('img').css({'opacity':'1.0'});
        	});
        })();
        
        /* Parallax Cover Image */
        (function(){
        	setSize();
        	$(window).on('resize', function(){
        		setSize();
        	});
        	function setSize(){
        		var url = $('.blog-info').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
        		var bgImg = $('<img />');
        		bgImg.hide();
        		bgImg.bind('load', function()
        		{
        		    var height = $(this).height();
        		    $('.blog-info').css({'height':height*.15+'px'});
        		    $('.blog-info').attr('data-0','background-position:0px 0px').attr('data-end','background-position:0px -'+height/2+'px');
        		    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        		    } else {
	        		    skrollr.init({ 
	        		    	forceHeight: false,
	        		    	mobileCheck: function() {
	        		    		return false;
	        		    	}
	        		    });
        		    }
        		});
        		$('.blog-info').append(bgImg);
        		bgImg.attr('src', url);
        	}
        })();
        
		/* Video */
		(function(){
			$('.post-content > iframe').wrap('<div class="video" />');
			$('.post-excerpt > iframe').wrap('<div class="video" />');
			$('.video').fitVids();
		})();
        
        /* Turns Off Inactive Links */
        (function(){
        	$('.inactive').bind('click',function(e){e.preventDefault();});
        })();
		
		/* Site Wide Header Links */
		(function() {
			var link   = $('header nav a');
			var target = '';
			
			link.bind('click',function(e){
				if($(this).attr('href')=='#'){
					e.preventDefault();
					target = $(this).attr('data-block');
					$(this).parent().find('.hidden').removeClass('hidden');
					$(this).addClass('hidden');
					if(target!='close'){
						$('header section.show').slideUp().removeClass('show');
						$('#site-head .'+target).slideDown().addClass('show');
					} else {
						$('header section.show').slideUp().removeClass('show');
					}
				}
			});
		})();
		
		/* Twitter */
		(function(){
			var widgetID = '408185639436169217'
			if(widgetID!=''){
				twitterFetcher.fetch( widgetID, 'social-twitter-tweet', 1, true, false, false, '', false);
			}else{
				$('#social-twitter').remove();
			}
		})();

    });

}(jQuery));