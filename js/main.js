$(function () { // wait for document ready
    function whichAnimationEvent(){
        var t,
            el = document.createElement("fakeelement");

        var animations = {
            "animation"      : "animationend",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        };

        for (t in animations){
            if (el.style[t] !== undefined){
                return animations[t];
            }
        }
    }
    if(window.location.hash){
        $('.panel').css('z-index',0);
        $(window.location.hash).css('z-index',300);
    }
    $('.subscreen-option').click(function(e){
        e.preventDefault();
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
    $('.interstitial a').click(function(e){
        e.preventDefault();
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
        if($(this).next('div').hasClass('button-replacement')){
            $(this).addClass('flipOutX');
            $(this).next('div').removeClass('button-replacement').addClass('flipInX').addClass('button');
            $(this).remove();
        }
    });
    var animationEvent = whichAnimationEvent();
    $('#risk-based-customer-tools .animate .trigger').one(animationEvent,function(){
        var animate = $(this).parents('.animate').next();
        var newone = animate.clone(true);
        newone.css('opacity',1);
        newone.find('li:last').addClass('trigger');
        animate.addClass('oldone');
        animate.before(newone);
        $('.oldone').remove();
    });
    $('.panel .carousel').carousel({
        interval: false
    });
});