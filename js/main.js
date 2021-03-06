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
$(function () { // wait for document ready
    $('.equal').equalHeightColumns({checkHeight:'innerHeight',});

    if(window.location.hash){
        $('.panel').css('z-index',0);
        $(window.location.hash).css('z-index',300);
    }
    var offsetmap = {};
    $('.qa .animate').each(function(){
        var name = $(this).attr('id');
        var offset = $(this).offset().top - 100;
        offsetmap['#' + name] = offset;
    });
    $('.menu-bug a').click(function(e){
        //e.preventDefault();
        var target = $(this).attr('href');
        $('.panel').css('z-index',0);
        $(target).css('z-index',300);
        $(target).find('.animate').each(function(){
            var animate_el = $(this);
            var newone = animate_el.clone(true);
            animate_el.addClass('oldone');
            animate_el.before(newone);
            $('.oldone').remove();
        });
    });
    $('.subscreen-option').click(function(e){
        //e.preventDefault();
        var target = $(this).attr('href');
        $('.panel').css('z-index',0);
        $(target).css('z-index',300);
        $(target).find('.animate').each(function(){
            var animate_el = $(this);
            var newone = animate_el.clone(true);
            animate_el.addClass('oldone');
            animate_el.before(newone);
            $('.oldone').remove();
        });
    });
    $('.interstitial a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(target).hasClass('animate')) {
            $('section.panel div.screen').animate({scrollTop: offsetmap[target]}, 1000);
            var animate_el = $(target);
            var newone = animate_el.clone(true);
            newone.css('opacity', 1);
            animate_el.addClass('oldone');
            animate_el.before(newone);
            $('.oldone').remove();
        } else if (target === '#next') {
            $('section.panel div.screen').animate({scrollTop: 0}, 500);
            var slideshow = $(this).parents('.carousel');
            slideshow.carousel('next');
            slideshow.on('slid.bs.carousel', function () {
                var control = slideshow.parents('.panel').find('.carousel-control.left');
                control.css('opacity', '1');
                var animate_el = $(this).find('.active').find('.animate:first');
                var newone = animate_el.clone(true);
                newone.css('opacity', 1);
                animate_el.addClass('oldone');
                animate_el.before(newone);
                $('.oldone').remove();

                $('.animate').each(function () {
                    var name = $(this).attr('id');
                    var offset = $(this).offset().top - 100;
                    offsetmap['#' + name] = offset;
                });
            });
        }

        if ($(this).next('div').hasClass('button-replacement')) {
            $(this).parents('.interstitial').find('.medots').addClass('slideInDown');
            $(this).addClass('flipOutX');
            $(this).next('div').removeClass('button-replacement').addClass('flipInX').addClass('not-button');
            $(this).remove();
        }
    });

    $('section.panel .item.tools .animate .block .a').one('mouseover',function(){
        var animate_el = $(this).next('.c').find('ul');
        var newone = animate_el.clone(true);
        newone.css('opacity',1);
        animate_el.addClass('oldone');
        animate_el.before(newone);
        $('.oldone').remove();
    });


    var animationEvent = whichAnimationEvent();
    $('#risk-based-customer-tools .animate .trigger').one(animationEvent,function(){
        var animate_el = $(this).parents('.animate').next();
        var newone = animate_el.clone(true);
        newone.css('opacity',1);
        newone.find('li:last').addClass('trigger'); //<--why doesn't this trigger work?
        animate_el.addClass('oldone');
        animate_el.before(newone);
        $('.oldone').remove();
    });
    $('.panel .carousel').carousel({
        interval: false
    });
});