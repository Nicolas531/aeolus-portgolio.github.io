// $(document).ready(function() {
// 	$(".various").fancybox({
// 		maxWidth	: 800,
// 		maxHeight	: 600,
// 		fitToView	: false,
// 		width		: '70%',
// 		height		: '70%',
// 		autoSize	: false,
// 		closeClick	: false,
// 		openEffect	: 'none',
// 		closeEffect	: 'none'
// 	});
// });

/* 
externe pack : //cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack.js
externe mouse wheel :
//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js
*/
/* 
documentation : http://fancyapps.com/fancybox/#docs 
*/
$(document).ready(function() {
  $('.flash').fancybox();
  $(".fancybox").fancybox({
    openEffect	: 'fade', /* none, fade, elastic */
    closeEffect	: 'fade',
    openSpeed :  1000, /* ms, "slow", "normal", "fast"*/
    closeSpeed : 1000,
    /* mouseWheel : false,*/
    helpers : {
      /*title : null */
      title : {
        type : 'inside' /* 'float', 'inside', 'outside', 'over', 'null' */
      }
    }
  });
  $(".fancybox-iframe").fancybox({
    scrolling : 'auto', /*  'auto', 'yes', 'no' or 'visible'	*/
    /* preload   : true*/
  });
})