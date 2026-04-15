/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (!target.length) return;

        event.preventDefault();

        $('.navbar-default').addClass('navbar-shrink');

        setTimeout(function() {
            var navHeight = $('.navbar-default').outerHeight();

            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight - 40
            }, {
                duration: 700,
                easing: 'easeInOutCubic'   // 🔥 smoother than default
            });
        }, 50);
    });
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
