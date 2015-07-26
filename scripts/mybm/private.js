(function() {

	var form = $('#pravite-form');

	$('#pravite-form-submit').on('click', onButtonClick);

	    form.validate({
        onkeyup: false,
        submitHandler : function (form) {
        	// warning 只能用原生的dom提交,不要用jqeury element提交
        	form.submit();
        },
        /*rules*/
        rules: {
        	nickname : {
        		required : true,
        	},
        	sex : {
        		required : true,
        	}
        },
        /*messages*/
        messages : {
        	nickname : {
        		required : '昵称不能为空'
        	},
        	sex : {
        		required :'请选择性别'
        	}
        }
    });

	form.cxSelect({
		selects : ['currentadd1', 'currentadd2', 'currentadd3'],
		url : window.provinceData //在provincedata.js配置
	});

	form.cxSelect({
		selects : ['defaultadd1', 'defaultadd2', 'defaultadd3'],
		url : window.provinceData //在provincedata.js配置
	})	

	function onButtonClick (e) {
		form.submit();
	}

})()