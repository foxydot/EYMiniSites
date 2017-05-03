$(function () { // wait for document ready
    if(window.location.hash){
        $('.panel').css('z-index',0);
        $(window.location.hash).css('z-index',300);
    }
    $('.subscreen-option').click(function(){
        var target = $(this).attr('href');
        $('.panel').css('z-index',0);
        $(target).css('z-index',300);
        $(target).find('.animate').each(function(){
            var animate = $(this);
            var newone = animate.clone(true);
            animate.addClass('oldone');
            animate.before(newone);
            $('.oldone').remove();
        });
    });
    $('.interstitial a').click(function(){
        var target = $(this).attr('href');
        if($(target).hasClass('animate')){
            var animate = $(target);
            var newone = animate.clone(true);
            newone.css('opacity',1);
            animate.addClass('oldone');
            animate.before(newone);
            $('.oldone').remove();
        } else if(target === '#next'){
            var slideshow = $(this).parents('.carousel');
            slideshow.carousel('next');
            slideshow.on('slid.bs.carousel',function(){
                var animate = $(this).find('.active').find('.animate:first');
                var newone = animate.clone(true);
                newone.css('opacity',1);
                animate.addClass('oldone');
                animate.before(newone);
                $('.oldone').remove();
            });
        }
    });
    $('.panel .carousel').carousel({
        interval: false
    });
});