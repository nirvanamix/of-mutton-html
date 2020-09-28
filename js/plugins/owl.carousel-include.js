const owl_stock = () =>{
	const last_index = $('.owl-stock .list').last().index();
	$('.owl-stock .list').each(function(index, el) {
		$(this).attr('data-index', $(this).index());
	});
	const owl = $('.owl-stock').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
	});
	owl.on('translated.owl.carousel', function(event) {
		$('.items-img img').removeClass('active');
		$('.items-img img').eq($(this).find('.owl-item.active .list').attr('data-index')).addClass('active');
	});
	$('.owl-stock .owl-nav button').click(function(event) {
		let count = parseInt($('.owl-stock .owl-item.active .list').attr('data-index'));
		if(count == last_index + 1) count = 0;
		$('.items-img img').removeClass('active');
		$('.items-img img').eq(count).addClass('active');
	});

	$('.owl-stock .owl-dots button').click(function(event) {
		$('.items-img img').removeClass('active');
		$('.items-img img').eq($(this).index()).addClass('active');
	});
	// for nav position in mobile version
	const poisiton_nav = () => {
		($(window).outerWidth() <= 599) ? $('.owl-stock .owl-nav').css('bottom', $('.owl-stock .content .item:nth-child(2)').outerHeight() - 50 + 'px') : $('.owl-stock .owl-nav').removeAttr( 'style' );
	}
	poisiton_nav();
	$(window).resize(function(event) {
		poisiton_nav();
	});
}
owl_stock();
/*-------------------------------------*/
$('.owl-main').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	items:1,
	autoplay:true,
	autoplayTimeout:6000,
	smartSpeed: 1200,
});