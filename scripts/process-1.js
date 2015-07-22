(function() {
	$('.process-mylist-item-close').on('click', removeIem);

	function removeIem (e) {
		$(e.target).parent().hide();
	}
})()