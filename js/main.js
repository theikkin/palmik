$(document).ready(function(){
        
		//md_corners();// jquery corner plugin more info @ http://woork.blogspot.com/2009/08/css3-rounded-corners-for-every-browser.html
		md_dropdown();// jquery dropdown menu can be used with th easing lib @ http://gsgd.co.uk/sandbox/jquery/easing/	
		md_lightbox();// jquery lightbox plugin (prettyphoto) info @ http://www.no-margin-for-errors.com/projects/prettyPhoto-jquery-lightbox-clone/
		md_slider_thumbs();// slider(thumbs) see more about this jQuery plugin at http://malsup.com/jquery/cycle/
        md_slider();// slider see more about this jQuery plugin at http://malsup.com/jquery/cycle/
		md_slider_big();// big slider see more about this jQuery plugin at http://malsup.com/jquery/cycle/
	    md_switch_view();// jQuery switch portfolio more info about this @ http://designm.ag/tutorials/jquery-display-switch/
        md_pngfix();//pngfix, supersleight the jQuery version more info @ http://allinthehead.com/retro/338/supersleight-jquery-plugin 
});
       // Because this will not work proper in IE i have set this function offline, trying to fix this but there's little hope :(
	   /* 
	   function md_corners() {
		var setting_menu = {
		  tl: { radius: 0 },
		  tr: { radius: 0 },
		  bl: { radius: 5 },
		  br: { radius: 5 },
		  antiAlias: true
		}
		var setting = {
		  tl: { radius: 5 },
		  tr: { radius: 5 },
		  bl: { radius: 5 },
		  br: { radius: 5 },
		  antiAlias: true
		}
		curvyCorners(setting_menu, "#menu ul");
		curvyCorners(setting, "#content, #footer, .fields input, .fields textarea, .search input");
	    }
        */
		function md_dropdown(){
			$("ul.dropdown li").hover(function(){
				jQuery(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown(400, "easeInOutQuart");
			}, function(){
				$('ul:first',this).css('visibility', 'hidden');
			});
		}

		function md_lightbox(){
			$("a[rel^='prettyPhoto']").prettyPhoto();
		}
		
		function md_slider_thumbs(){
			$('#slider-thumbs-slide').cycle({
				fx:      'scrollHorz',// see more options at http://malsup.com/jquery/cycle/options.html
				timeout:  0, // time of the rotation
				speed:   800,
				prev:    'a#slider-thumbs-ctrls-btn-left',
				next:    'a#slider-thumbs-ctrls-btn-right'		
			});
		}
		
		function md_slider(){
			$('#slider-holder').cycle({
				fx:     'scrollHorz',// see more options at http://malsup.com/jquery/cycle/options.html
				timeout: 0,
				speed:   800
			});
		}

        function md_slider_big(){
			$('#slider-big-img').cycle({
				fx:      'scrollHorz',// see more options at http://malsup.com/jquery/cycle/options.html
				timeout:  8000, // time of the rotation
				speed:   1000,
				prev:    '#prevbtn',
                next:    '#nextbtn',
                pager:  '.slider-big-ctrls-in',
                pagerAnchorBuilder: pagerFactory
	        });
			function pagerFactory(idx, slide) {
				var s = idx > 2 ? ' style="display:none"' : '';
				return '<li'+s+'><a href="javascript:void(null);" class="slider-indi"></a></li>';
			 };
		}
		
		function md_switch_view(){
			$("a.switch_thumb").toggle(function(){
				$(this).addClass("swap");
				$("ul.display").fadeOut("fast", function() {
					$(this).fadeIn("fast").removeClass("display").addClass("thumb_view");
				});
			}, function () {
				$(this).removeClass("swap");
				$("ul.thumb_view").fadeOut("fast", function() {
					$(this).fadeIn("fast").addClass("display").removeClass("thumb_view");
				});
			}); 
		}
		
		function md_pngfix(){
	    	$('#logo, #index-heading, #sidebar-heading, #content-left-300, #content-mid-300, #content-right-300, #about-heading,           																																																																																																				               #portfolio-heading, #blog-heading, #contact-heading').supersleight();
		}
		
		//                             //
		// Do not change this location //
		//                             //
		
		// goto slide(thumbs)
		// code = <a href="javascript:gotoslide(0);">
		// first slide = 0, second slide = 1
		
		function gotoslide(ID) {
			$('#slider-holder').cycle(ID); 
			
		}
		
		
		