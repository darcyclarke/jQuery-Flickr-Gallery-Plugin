/**
 * Flickr Gallery Plugin
 * @author Darcy Clarke
 *
 * Copyright (c) 2012 Darcy Clarke
 * Dual licensed under the MIT and GPL licenses.
 * http://darcyclarke.me/
 */

(function($){
        $.fn.flickrGallery = function(options){
        return this.each(function(){
            var settings = $.extend({
                    url : 'http://www.flickr.com/photos/natecroft/sets/72157629865265552/show/',
                    height : 350,
                    width : 350
                }, options),
                id,
                encoded;
            id = settings.url.match(/\/sets\/(.*)/)[1].split('/')[0],
            encoded = encodeURIComponent(settings.url.match(/\/photos\/(.*)/)[0]);                    
            $(this).append('<embed src="http://widgets.vodpod.com/w/video_embed/Groupvideo.1493771" type="application/x-shockwave-flash" allowscriptaccess="sameDomain" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" flashvars="&amp;offsite=true&amp;intl_lang=en-us&amp;page_show_url='+encoded+'&amp;set_id='+id+'&amp;jump_to=" width="'+settings.width+'" height="'+settings.height+'">');
        });
    };
})(jQuery);
