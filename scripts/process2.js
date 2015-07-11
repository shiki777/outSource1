(function() {

	$('#process2-form').cxSelect({
		selects : ['province', 'city'],
		required :true,
		url : window.provinceData //在provincedata.js配置
	});
})()