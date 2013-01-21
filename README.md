jQuery RWD Images
==============================

### Allows responsive content images using the redux spacer technique (http://mattstow.com/experiment/responsive-images-redux/responsive-images-redux-jquery-plugin.html) to be shared and saved

The plugin has 2 default options which can be overwritten as required:

```
'display': 'inline-block' // Sets the display property of the images' wrapping .rwd_wrap span
'zindex': false // Sets the z-index property of the images' wrapping .rwd_wrap span
```

* * *

Usage:

Basic

`$('img').rwdImages();`

Overriding default options

```
$('img').rwdImages({
	'display': 'block',
	'zindex:' 1
});
```