(function () {
    //删除订单
    $('.historical-order-list .close').click(function () {
        var $tr=$(this).parents('tr');
        $tr.next().remove();
        $tr.remove();
    });
})();