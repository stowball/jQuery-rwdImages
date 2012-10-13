/*
* rwdImages jQuery plugin v1.1
*
* Allows responsive content images using the redux spacer technique (http://mattstow.com/experiment/responsive-images-redux/responsive-images-redux-jquery-plugin.html) to be shared and saved
*
* Copyright (c) 2012 Matt Stow
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
	$.fn.rwdImages = function() {
		var $that = $(this),
			ltie9 = $.browser.msie && parseInt($.browser.version) <= 8 ? true : false;
			
		if ($that.length > 0 && !ltie9) {
			var backgroundImage = 'background-image',
				src = /(url\("?)(.*?)("?\))/gi,
				attrSrc = 'src',
				swap = 'rwd-swap';
			$that.each(function() {
				var $this = $(this);
				$this
					.wrap('<span style="display: inline-block; max-width: 100%; position: relative;" />')
					.clone()
					.removeClass($that.attr('class'))
					.addClass(swap)
					.css({
						height: '100%',
						left: 0,
						opacity: 0,
						position: 'absolute',
						top: 0,
						width: '100%'
					})
					.appendTo($this.parent())
					.attr(attrSrc, $this.css(backgroundImage).replace(src, '$2'));
			});
			$(window).resize(function() {
				$('img.' + swap).each(function() {
					var $this = $(this);
					$this.attr(attrSrc, $this.prev().css(backgroundImage).replace(src, '$2'));
				});
			});
		}
		return this;
	}
})(jQuery);