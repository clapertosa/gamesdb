/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-twitch': '&#xe90a;',
		'icon-wikipedia': '&#xe900;',
		'icon-reddit': '&#xe901;',
		'icon-discord': '&#xe902;',
		'icon-instagram': '&#xe903;',
		'icon-twitter': '&#xe904;',
		'icon-facebook': '&#xe905;',
		'icon-youtube': '&#xe906;',
		'icon-gog-dot-com': '&#xe907;',
		'icon-epicgames': '&#xe908;',
		'icon-steam': '&#xe909;',
		'icon-clock-o': '&#xf017;',
		'icon-chevron-left': '&#xf053;',
		'icon-chevron-right': '&#xf054;',
		'icon-check-circle': '&#xf058;',
		'icon-globe': '&#xf0ac;',
		'icon-gamepad': '&#xf11b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
