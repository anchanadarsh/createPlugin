(function ($) {
    $.fn.createCircle = function (option) {

        //default setting
        var setting = {
            'backgroundColor': 'teal',
            'color': 'white',
            'width': '100px'
        }

        //override setting
        if(option){
            $.extend(setting, option);
        }

        $(this).css({
            'background-color': setting.backgroundColor,
            'color': setting.color,
            'width': setting.width,
            'height': setting.width
        });
    }
})(jQuery);
