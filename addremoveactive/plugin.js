(function ($) {
    $.fn.addRemoveActive = function () {
        console.log(this.selector);
        $(this.selector).on('click',function(e){
            console.log(e.target);
            $(this.selector).removeClass('active');
            $(this).addClass('active');
        });
    }
})(jQuery);
