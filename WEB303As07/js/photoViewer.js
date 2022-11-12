(function($) {
    $.fn.photoViewer = function() 
    {
        var cache = {};
        var request;
        var $current;

        var $frame = $('.photo-box');
        var $thumbs = $('.thumb');

        function cross_fade($img) {
            if($current) {
                $current.stop().fadeOut('slow');
            }
        
            $img.css({
                marginLeft: -$img.width() / 2,
                marginTop: -$img.height() / 2
            });
        
            $img.stop().fadeTo('slow', 1);
            $current = $img;
        };
        $(document).on('click', '.thumb', function(e) {
            var $img;
            var src = this.href;
            var request = src;
                e.preventDefault();
                $thumbs.removeClass('active');
                $(this).addClass('active');
            


            if(cache.hasOwnProperty(src)) {
                if(cache[src].isLoading === false) {
                    cross_fade(cache[src].$img);
                }
            } 
            else {
                $img = $('<img/scenary.jpg>');
                cache[src] = {
                    $img: $img,
                    isLoading: true
                }

                $img.on('load', function() {
                    $(this).hide();
                    $frame.removeClass('is-loading').append($img);
                    cache[src].isLoading = false;
            
                    if(request == src) {
                        cross_fade($(this));
                    }
                });
            
                $frame.addClass('is-loading');
                $img.attr({
                    'src': src,
                    'alt': this.title || ''
                });
            }
        });

        return this;
    }
}(jQuery));