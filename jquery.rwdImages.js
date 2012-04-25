/*
* rwdImages jQuery plugin v1.0
*
* Allows responsive content images using the redux spacer technique (http://mattstow.com/experiment/responsive-images-redux/responsive-images-redux-jquery-plugin.html) to be shared and saved
*
* Copyright (c) 2012 Matt Stow
* http://mattstow.com
* Licensed under the MIT license
*/
(function($) {
	$.fn.rwdImages = function() {
		var ltie9 = $.browser.msie && parseInt($.browser.version) <= 8 ? true : false;
		if ($(this).length > 0 && !ltie9) {
			var that = this, bi = 'background-image', src = /(url\("?)(.*?)("?\))/gi;
			$(that).each(function() {
				$(this)
					.wrap('<span style="display: inline-block; max-width: 100%; position: relative;" />')
					.clone()
					.removeClass($(that).attr('class'))
					.addClass('rwd-swap')
					.css({
						height: '100%',
						left: 0,
						opacity: 0,
						position: 'absolute',
						top: 0,
						width: '100%'
					})
					.appendTo($(this).parent())
					.attr('src', $(this).css(bi).replace(src, '$2'));
			});
			$(window).resize(function() {
				$('img.rwd-swap').each(function() {
					$(this)
						.attr('src', $(this).prev().css(bi).replace(src, '$2'));
				});
			});
		}
	}
})(jQuery);