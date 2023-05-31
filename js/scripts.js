$(document).ready(function () {

	$(".menu_trigger").click(function () {
		if($('.menu').hasClass('open')) {
			$(".menu, .menu_trigger").removeClass("open");
			$("body").removeClass("hideoverflow");
		}
		else {
			$(".menu, .menu_trigger").addClass("open");
			$("body").addClass("hideoverflow");
		}
		$(".menu .hasSub").removeClass('open');
	});

	$('.menu .hasSub > a').click(function (e) {
		e.preventDefault();
		$(this).parent('li.hasSub').toggleClass("open");
	});

	$(".acc span").click(function () {
		$(this).parent().toggleClass("closed");
	});

	$(".close_covid").click(function(e){
		var popup = $(this).parents(".covid");
		var path = popup.data('cookiePath') || '/';
		var days = popup.data('expiry') || 0;
		var popupId = popup.data('id');
		popup.remove();
		var expires;
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	        expires = "";
	    }
	    document.cookie = encodeURIComponent('noticeShown') + "=" + encodeURIComponent(popupId) + expires + "; path=" + path;
	    $(window).resize();
	});

	$(".back2top").click(function (e) {
		e.preventDefault();
		window.scrollTo(0, 0);
	});

	$("#showMap").click(function () {
		$(".map").addClass("open");
		$("#showMap").addClass("active");
		$("#showList").removeClass("active");
		$("body").removeClass("scroll-down");
		$("body").addClass("scroll-up fixed");
	});
	$("#showList").click(function () {
		$(".map").removeClass("open");
		$("#showList").addClass("active");
		$("#showMap").removeClass("active");
		$("body").removeClass("scroll-up fixed");
	});

	$(".filters, .filters_close span").click(function () {
		$(".acc_search").toggleClass("open");
	});

	$(".show_all_butt").click(function(e){
		e.preventDefault();
		$(this).parents("section").addClass("showall");
	});

	$("a.search").click(function () {
		$(".header_search").toggleClass("show");
	});

	$(".close_header_search").click(function () {
		$(".header_search").toggleClass("show");
	});

	$('.category').on('mouseenter', function(e){
		$(this).addClass('no-hover');
		$(this).height($(this).height());
		$(this).removeClass('no-hover');
	});
	$('.category').on('mouseleave', function(e){
		$(this).height('auto');
	});
});

$(document).ready(function () {
	const $iq = $(".iznajmljivac_quicklinks");
	if($iq.length == 0) {
		return;
	}
	const $iqw = $(".iznajmljivac_quicklinks_wrap");
	const $b = $("body");

	function scrollHandler() {
		var b = $iqw[0].getBoundingClientRect();
		if (b.top + b.height >= window.innerHeight && window.innerHeight > 300) {
			$b.addClass("pull_quicklinks");
		} else {
			$b.removeClass("pull_quicklinks");
		}
	}

	function resizeHanlder() {
		$iqw.height($iq.outerHeight());
		scrollHandler();
	}

	 resizeHanlder();

	$(window).scroll(function() {
		scrollHandler();
	});

	var animationTimeout = null;
	$(window).on('resize orientationchange', function() {
		resizeHanlder();
		if(animationTimeout) {
			clearTimeout(animationTimeout);
		}
		animationTimeout = setTimeout(() => {
			animationTimeout = null;
			resizeHanlder();
		}, 400);
	});
});

$(document).ready(function () {
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = null;

	$(window).on("scroll", () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			body.classList.remove(scrollUp);
			return;
		}
		if(lastScroll === null) {
			// initial
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		else if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
			// down
			body.classList.remove(scrollUp);
			body.classList.add(scrollDown);
		} else if (currentScroll < lastScroll && !body.classList.contains(scrollUp)) {
			// up
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);
		}
		lastScroll = currentScroll;
	}).scroll();
});



$(document).ready(function(){
	$('.hero_owl').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		dots:true,
		nav:false,
		animateOut: 'fadeOut',
		items:1
	});

	$('.gallery_slider .owl-carousel').each(function(){
		if($(this).find('a.item').length < 2) {
			return;
		}
		$(this).owlCarousel({
			items:1,
			loop:true,
			nav:true,
			margin:24,
			responsive:{
				0:{
					stagePadding: function() {
						var padding = ($(body).width() - $('#wrap-size').width())/2;
						if(padding < 0) {
							padding = 0;
						}
						return padding;
					},
					margin:8,
					nav:false
				},
				767:{
					stagePadding: function() {
						var padding = ($(body).width() - $('#wrap-size').width())/2;
						if(padding < 0) {
							padding = 0;
						}
						return padding;
					},
					margin:8,
				},
				1000:{
					stagePadding: 200
				},
				1450:{
					stagePadding: 300
				},
				1800:{
					stagePadding: 400
				}
			}
		});
	});

	function injectCountOwl2(event) {
		if(event.page.count == 0) {
			return;
		}
		var element2 = event.target;
		var dots2 = $(element2).find('.owl-nav');
		var page2 = event.page.index;
		var pagesTotal = event.page.count;
		page2++;
		dots2.find('.img_counter').remove();
		dots2.append('<div class="img_counter"><span>' + page2 + ' / ' + pagesTotal + '</span></div>');
	}


	$('.slider4 .owl-carousel').owlCarousel({
		items:4,
		loop:false,
		nav:true,
		margin:24,
		stagePadding: function() {
			var padding = ($(body).width() - $('#wrap-size').width())/2;
			if(padding < 0) {
				padding = 0;
			}
			return padding;
		},
		responsive:{
			0:{
				items:1,
				nav:false,
				margin:16,
				stagePadding: 100
			},
			600:{
				items:2,
				margin:16,
				stagePadding: 100
			},
			950:{
				items:4
			},
			1300:{
				items:4
			}
		},
		onRefreshed: function (event) {
			if(event.page.count == 0) {
				var target = $(event.target);
				window.setTimeout(function() { target.trigger('refresh.owl.carousel'); }, 50);
				return;
			}
			injectCountOwl2(event);
		},
		onResized: injectCountOwl2,
		onChanged: injectCountOwl2
	});



	$('.gallery_slider').on('click', 'a', function(e) {
		e.preventDefault();
		var $gallery = $(this).parents('.gallery_slider');
		var index = 0;
		var url = $(this).attr('href');
		var items = [];
		var i = 0;
		$gallery.find('a.item').each(function () {
			var $item = $(this);
			if($item.parent().hasClass('cloned')){
				return;
			}
			var src = $item.attr('href');
			var title = $item.data('title') || '';
			var item = {src: src, title: title};
			if($item.hasClass('video')) {
				item.type = 'iframe';
 			}
			items.push(item);
			if(url == src) {
				index = i;
			}
			i++;
		});

		$.magnificPopup.open({
		  items: items,
		  type: 'image',
		  tLoading: 'Loading image #%curr%...',
		  mainClass: 'mfp-img-mobile',
		  gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [1,2] // Will preload 1 - before current, and 2 after the current image
		  },
		  image: {
			  markup: '<div class="mfp-figure">'+
	            '<div class="mfp-close"></div>'+
	            '<div class="mfp-img"></div>'+
	            '<div class="mfp-bottom-bar">'+
	              '<div class="mfp-title"></div>'+
	            '</div>'+
	          '</div>'
		  },
		  iframe: {
			  markup: '<div>'+
			    '<div class="mfp-close"></div>'+
			    '<div class="mfp-iframe-scaler">'+
	            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
	          '</div></div>',
		  }
		}, index);
	});

	$('.map-iframe').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-img-mobile',
		iframe: {
		  	markup: '<div>'+
				    '<div class="mfp-close"></div>'+
				    '<div class="mfp-iframe-scaler">'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          	'</div></div>',
	  	}
	});
});

$(function () {
    /**accesibility css toggler*/
    function createCookie(name, value, days) {
	    var expires;
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	        expires = "";
	    }
	    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
	}

	function readCookie(name) {
	    var nameEQ = encodeURIComponent(name) + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) === ' ')
	            c = c.substring(1, c.length);
	        if (c.indexOf(nameEQ) === 0)
	            return decodeURIComponent(c.substring(nameEQ.length, c.length));
	    }
	    return null;
	}

	function enableAccessability() {
		$('link.accessibility').prop('disabled', false);
		$('a[target]').each(function(){
			var $this = $(this);
			$this.data('target', $this.attr('target'));
			$this.attr('target', '');
		});
	}

	function disableAccessability() {
		$('link.accessibility').prop('disabled', true);
		$('a[target=""], a:not([target])').each(function(){
			var $this = $(this);
			$this.attr('target', $this.data('target'));
		});
	}

	if(readCookie('accessibleCSS') == 'true'){
		enableAccessability();
	}
	$('a.accessibility').on('click', function(){
		var enabled = ! $('link.accessibility').prop('disabled');
		createCookie('accessibleCSS', !enabled, 365);
		if(enabled) {
			disableAccessability();
		}
		else {
			enableAccessability();
		}
		return false;
	});

});
$(function () {
	$('#search-input-mobile, #search-input').on('input', function() {
	     $('#search-input-mobile, #search-input').not(this).val($(this).val());
	});
});