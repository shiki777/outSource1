/**
 * 首页脚本
 */

(function () {
    /*图片切换*/
    var
        $slider = $('.slider'),
        $sliderContent = $('.slider-content', $slider),
        $sliderItem = $('a', $sliderContent),
        $slideTrigger = $('<div class="slider-trigger"></div>'),
        sliderTimer,
        autoSlide = function () {
            if (sliderTimer) clearTimeout(sliderTimer);
            //自动播放
            sliderTimer = setTimeout(function () {
                var $next = $('.active', $slideTrigger).next();
                if ($next.length) {
                    $next.click();
                }
                else {
                    $('a', $slideTrigger).first().click();
                }
            }, 5000);
        };

    $sliderItem.each(function (i) {
        (function ($this, i) {
            var $trigger = $('<a href="javascript:;"></a>').click(function () {
                if ($(this).is('.active')) {
                    return;
                }

                $(this).addClass('active').siblings().removeClass('active');
                var $first = $('a', $sliderContent).first();
                $first.after($this);
                $sliderContent.animate({ 'margin-left': '-1099px' }, 1000, function () {
                    $sliderContent.css('margin-left', '0');
                    $first.appendTo($(this));
                });

                //自动播放
                autoSlide();
            });

            if (i == 0) $trigger.addClass('active');

            $slideTrigger.append($trigger);
        })($(this), i);

        $slider.append($slideTrigger);
        autoSlide();
    });
})();