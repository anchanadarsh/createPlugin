(function ($) {
    $.fn.targetBlank = function () {
        var target = $(this).attr('target');
        var targetArray = ['_blank', '_parent', '_top', '_self'];

        if (target == undefined || target == '' || jQuery.inArray(target, targetArray) == false) {
            $('a').attr('target', '_blank');
        }
    }
})(jQuery);
