!function($){$.fn.equalHeightColumns=function(i){defaults={minWidth:-1,maxWidth:99999,setHeightOn:"min-height",defaultVal:0,equalizeRows:!1,checkHeight:"height"};var t=$(this);i=$.extend({},defaults,i);var e=function(){var e=$(window).width(),n=Array();if(i.minWidth<e&&i.maxWidth>e){var a=0,s=0,o=0;t.css(i.setHeightOn,i.defaultVal),t.each(function(){if(i.equalizeRows){$(this).position().top!=o&&(n.length>0&&($(n).css(i.setHeightOn,s),s=0,n=[]),o=$(this).position().top),n.push(this)}(a=$(this)[i.checkHeight]())>s&&(s=a)}),i.equalizeRows?$(n).css(i.setHeightOn,s):t.css(i.setHeightOn,s)}else t.css(i.setHeightOn,i.defaultVal)};e(),$(window).resize(e),t.find("img").load(e),void 0!==i.afterLoading&&t.find(i.afterLoading).load(e),void 0!==i.afterTimeout&&setTimeout(function(){e(),void 0!==i.afterLoading&&t.find(i.afterLoading).load(e)},i.afterTimeout)}}(jQuery);