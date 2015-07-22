(function() {

	$('#process2-form').cxSelect({
		selects : ['province', 'city'],
		required :true,
		url : window.provinceData //在provincedata.js配置
	});


	$('#process2-form').validate({
		onkeyup: false,
		submitHandler: function (form) {
			form.submit();
		},
		rules: {
			address : 'required',
			username : 'required',
			detail : 'required',
			phone : 'required',
			post : 'required'
		},
		messages: {
			address : '必填',
			username : '必填',
			detail : '必填',
			phone : '必填',
			post : '必填'			
		}
	});

	var moreButton = $('#process2-more');
	var lessButton = $('#process2-less');
	$('#process-form2-button').on('click', onFormSubmit);
	moreButton.on('click', onMoreShow);
	lessButton.on('click', onMoreHide);

	function onFormSubmit () {
		$('#process-form2-button').submit();
	}

	function onMoreShow () {
		$('#process2-more-bank-con').show();
		moreButton.hide();
		lessButton.show();
	}

	function onMoreHide () {
		$('#process2-more-bank-con').hide();
		moreButton.show();
		lessButton.hide();		
	}

})()