(function() {

	var tabs = $('.care-tab');
	var contents = $('.care-goods-list');
	// 折叠dom
	var foldHandles = $('.care-classify-block-handle');

	foldHandles.on('click', onHandleClick);
	tabs.on('click', onTabClick);

	function onTabClick (e) {
		var ele  = $(e.target);
		if(ele.hasClass('care-tab-current')){
			return;
		}
		ele.addClass('care-tab-current').siblings().removeClass('care-tab-current');
		var index = tabs.index(ele);
		contents.eq(index).show().siblings().hide();
	}

	function onHandleClick (e) {
		var ele = $(e.target);
		if(ele.hasClass('care-classify-block-handle-add')){
			ele.removeClass('care-classify-block-handle-add');
			ele.parent().next().show();
		} else {
			ele.addClass('care-classify-block-handle-add');
			ele.parent().next().hide();
		}
	}


})()