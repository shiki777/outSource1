(function() {

	var form = $('#address-form');
	var listButton = $('.address-list-button');

	listButton.on('click', onListButtonClick);
	$('.delete').on('click', deleteRecord);
	$('.update').on('click', updateRecord);

	form.cxSelect({
		selects : ['country', 'province'],
		url : window.countryData //在provincedata.js配置
	});

		$('#address-form-submit').on('click', onButtonClick);

	    form.validate({
        onkeyup: false,
        submitHandler : function (form) {
        	// warning 只能用原生的dom提交,不要用jqeury element提交
        	form.submit();
        },
        /*rules*/
        rules: {
        	name : {
        		required : true,
        	},
        	country : {
        		required : true,
        	},
        	address : {
        		required : true
        	}
        },
        /*messages*/
        messages : {
        	name : {
        		required : '收货人姓名不能为空'
        	},
        	country : {
        		required :'请选择所在地区'
        	},
        	address : {
        		required: '请输入详细地址'
        	}
        }
    });

	function onButtonClick (e) {
		form.submit();
	}

	function onListButtonClick (e) {
		var ele = $(e.target);
		if(ele.hasClass('defalut-button')) return;
		listButton.removeClass('defalut-button');
		ele.addClass('defalut-button');
	}

	function deleteRecord (e) {
		$(e.target).parent().parent().remove();
	}

	function updateRecord (e) {
		var ele = $(e.target);
		var tr = ele.parent().parent();
		if(ele.html() == '修改'){
			ele.html('保存');
			updateTdHTML(tr);
		} else {
			ele.html('修改');
			saveUpdateHTML(tr);
		}
	}

	function updateTdHTML (tr) {
		var tds = tr.find('td').filter(function (index) {return index < 5});
		tds.each(function (index, ele) {
			var ele = $(ele);
			var content = ele.html();
			ele.html('<textarea>' + content + '</textarea>');
		});
	}

	function saveUpdateHTML (tr) {
		var tds = tr.find('td').filter(function (index) {return index < 5});
		tds.each(function (index, ele) {
			var ele = $(ele);
			var content = ele.find('textarea').val();
			ele.html(content);
		});		
	}

})();