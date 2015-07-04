(function() {
	//电话号码验证规则
	var PHONE_REG = new RegExp(/^1[3|4|5|7|8][0-9]\d{8}$/);

	//邮箱地址验证
	var EMAIL_REG = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

	// 短信验证码地址
	var MESSAGE_URL = '';

	//验证码地址
	var CHECK_NUM_URL = '';

	var phoneForm = $('#register-phone');
	var emailForm = $('#register-email');
	var tabs = $('.register-tab');
	var contents = $('.register-content');

	$.validator.addMethod("validphone", function (value, element){
		if(value.match(PHONE_REG)){
			return true;
		} else {
			return false;
		}
     })

	$.validator.addMethod("validemail", function (value, element){
		if(value.match(EMAIL_REG)){
			return true;
		} else {
			return false;
		}
     })

    $.validator.addMethod("validpassword", function (value, element) {
    	if(value == $(element).val()){
    		return true;
    	} else {
    		return false;
    	}
    }) 

	/*验证码验证，需要服务端接口*/
	$.validator.addMethod("valichecknum", function (value, element) {
		load().done(function (data) {
			if(data == value){
				return true;
			} else {
				return false;
			}
		})
	});

	$.validator.addMethod("valipasswordlength", function (value, element) {
		if(value.length < 7){
			return false;
		} else {
			return true;
		}
	});

	/*验证码验证，需要服务端接口*/
	$.validator.addMethod("valichecknum", function (value, element) {
		load().done(function (data) {
			if(data == value){
				return true;
			} else {
				return false;
			}
		})
	});	

    /*event listener*/
    $('#phone-submit').on('click', function() {
        phoneForm.submit();
    });

    $('#email-submit').on('click', function() {
        emailForm.submit();
    });

    $('.register-tab').on('click', function (e) {
    	var ele = $(e.target);
    	if(ele.hasClass('register-current-tab')){
    		return;
    	}
    	var index = tabs.index(ele);
    	ele.addClass('register-current-tab');
    	contents.eq(index).show().siblings().hide();

    	ele.siblings().removeClass('register-current-tab');
    });

    $('#register-phone').validate({
        onkeyup: false,
        submitHandler : function (form) {
        	// warning 只能用原生的dom提交,不要用jqeury element提交
        	form.submit();
        },
        /*rules*/
        rules: {
        	phonenumber : {
        		required : true,
        		validphone : true
        	},
        	phonepassword1 : {
        		required : true,
        		valipasswordlength : true
        	},
        	phonepassword2 : {
        		required : true,
        		valipasswordlength : true,
        		validpassword : true
        	},
        	phoneconfirm : {
        		required : true
        	}
        },
        /*messages*/
        messages : {
        	phonenumber : {
        		required : '手机号码不能为空',
        		validphone : '请输入正确的手机号码'
        	},
        	phonepassword1 : {
        		required :'密码不能为空',
        		valipasswordlength : '密码不得小于7位'
        	},
        	phonepassword2 : {
        		required :'密码不能为空',
        		validpassword : '两次输入的密码不一致',
        		valipasswordlength : '密码不得小于7位'
        	},
        	phoneconfirm : {
        		required: '请勾选协议'
        	}
        }
    });

    $('#register-email').validate({
        onkeyup: false,
        submitHandler : function (form) {
        	// warning 只能用原生的dom提交,不要用jqeury element提交
        	form.submit();
        },
        /*rules*/
        rules: {
        	emailnumber : {
        		required : true,
        		validemail : true
        	},
        	emailpassword1 : {
        		required : true,
        		valipasswordlength : true
        	},
        	emailpassword2 : {
        		required : true,
        		valipasswordlength : true,
        		validpassword : true
        	},
        	emailconfirm : {
        		required : true
        	}
        },
        /*messages*/
        messages : {
        	emailnumber : {
        		required : '邮箱不能为空',
        		validemail : '请输入正确的邮箱地址'
        	},
        	emailpassword1 : {
        		required :'密码不能为空',
        		valipasswordlength : '密码不得小于7位'
        	},
        	emailpassword2 : {
        		required :'密码不能为空',
        		validpassword : '两次输入的密码不一致',
        		valipasswordlength : '密码不得小于7位'
        	},
        	emailconfirm : {
        		required: '请勾选协议'
        	}
        }
    });

    /*接受url返回promise*/
    function load (url) {
    	var defer = $.Deferred();
    	$.ajax(url, {
    		data : {},
    		dataType : 'jsonp',

    	});
    	return defer.promise();
    }


})()
