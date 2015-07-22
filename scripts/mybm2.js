(function() {
	var length = $('.mybm2-order-list-item').length;
	var current = 0;
	var con = $('.mybm2-order-list-wrap');
	$('.mybm2-order-list-left-arrow').on('click', onLeftClick);
	$('.mybm2-order-list-right-arrow').on('click', onRightClick);

	function onLeftClick () {
		if(current > 0){
			current--;
			con.css('left', -current*122);
		}
	}

	function onRightClick () {
		if(length - current <=2) return;
		current++;
		con.css('left', -current*122);
	}
})()