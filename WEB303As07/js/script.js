$(function () {
  $("#photo-viewer")
    .photoViewer()
    .show()
    .on("click", ".photo-box", function (e) {
      var $content = $(this).clone().find("img").css({
        marginLeft: 0,
        marginTop: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      });
      
      var model = (function() {
        var $window = $(window);
        var $model = $('<div class="model"/>');
        var $close = $('<button role="button" class="model-close">Close Button</button>');
        var $content = $('<div class=“modal-content"/>');
        
        $model.append($content, $close);


        $close.on('click', function(e) {
            e.preventDefault();
            model.close();
        });



        return ({
            center: function() {
                
                var top = Math.max($window.height() - $model.outerHeight(), 0) / 2;
                var left = Math.max($window.width() - $model.outerWidth(), 0) / 2;
                
                $model.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
                });
            },
            
            close: function() {
              
                $content.empty();
                $model.detach();
                
                $(window).off('resize', model.center);
            },
            open: function(set) {
              $content.empty().append(set.content);
              $model.css({ 
              width: set.width || 'auto',  
              height: set.height || 'auto'
              })
              
              .appendTo('body'); 
              model.center(); 
             
            $(window).on('resize', model.center); 
          }
        });
      })
    ();

      model.open({content: $content, width: "80vw", height: "80vh"});
    });
});