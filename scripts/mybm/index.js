(function() {
	var length = $('.mybm-order-list-item').length;
	var current = 0;
	var con = $('.mybm-order-list-wrap');
	$('.mybm-order-list-left-arrow').on('click', onLeftClick);
	$('.mybm-order-list-right-arrow').on('click', onRightClick);

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
})();