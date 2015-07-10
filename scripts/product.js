(function() {

	var tabs = $('.product-introduction-tab');
	var contents = $('.product-introduction-tabcontent');
	
	tabs.on('click', onTabClick);

	function onTabClick(e) {
		var ele = $(e.target);
		if (ele.hasClass('product-introduction-tab-current')) {
			return;
		}
		ele.addClass('product-introduction-tab-current').siblings().removeClass('product-introduction-tab-current');
		var index = tabs.index(ele);
		contents.eq(index).show().siblings().hide();
	}

    //对话框范例
    $('.dialog-close').click(function () {
        $(this).parent().hide();
    });

    $('.product-deal-purchase-button').click(function (e) {
        $('.cart-dialog').show();
        e.stopPropagation();
    }).click();
})();