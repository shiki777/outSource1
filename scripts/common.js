/**
 * 公共部分脚本
 */

(function () {
    /*登录框*/
    $('#login-form').validate({
        onkeyup: false,
        submitHandler: function (form) {
            // warning 只能用原生的dom提交,不要用jqeury element提交
            form.submit();
        },
        /*rules*/
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        /*messages*/
        messages: {
            username: {
                required: ''
            },
            password: {
                required: ''
            }
        }
    });

    /*对话框*/
    $(document).click(function (e) {
        if ($(e.target).is('.dialog,.dialog *')) {
            return;
        }

        $('.dialog').hide();
    });
})();