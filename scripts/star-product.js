/**
 * 明星产品
 */
(function () {
    $('.dialog-close').click(function () {
        $(this).parent().hide();
    });

    $('.products .buy').click(function (e) {
        $('.product-dialog').show();
        e.stopPropagation();
    });

    $('.products .buy')[0].click();
})();