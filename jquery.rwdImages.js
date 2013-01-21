/*
* rwdImages jQuery plugin v1.2
*
* Allows responsive content images using the redux spacer technique (http://mattstow.com/experiment/responsive-images-redux/responsive-images-redux-jquery-plugin.html) to be shared and saved
*
* Copyright (c) 2012 Matt Stow
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
	$.fn.rwdImages = function(options) {
		var settings = $.extend({
			display: 'inline-block',
			zindex: false
		}, options);
		
		var $that = $(this),
			ltie9 = $.browser.msie && parseInt($.browser.version) <= 8 ? true : false,
			css = 'display: ' + settings.display + '; max-width: 100%; position: relative;';
			
		if (settings.zindex)
			css += ' z-index: ' + settings.zindex + ';';
			
		if ($that.length > 0 && !ltie9) {
			var backgroundImage = 'background-image',
				src = /(url\("?)(.*?)("?\))/gi,
				attrSrc = 'src',
				swap = 'rwd-swap';
				
			$that.each(function() {
				var $this = $(this),
					newSrc,
					bg = $this.css(backgroundImage);
					
				if (bg.match(src))
					newSrc = bg.replace(src, '$2');
				else
					newSrc = '#';

				$this
					.wrap('<span class="rwd-wrap" style="' + css + '" />')
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
					.attr(attrSrc, newSrc);
			});
			$(window).resize(function() {
				$('img.' + swap).each(function() {
					var $this = $(this),
					newSrc,
					bg = $this.css(backgroundImage);
					
					if (bg.match(src))
						newSrc = bg.replace(src, '$2');
					else
						newSrc = '#';

					$this.attr(attrSrc, newSrc);
				});
			});
		}
		return this;
	}
})(jQuery);