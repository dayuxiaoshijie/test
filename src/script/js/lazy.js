(function($){
    //懒加载
    $(function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    });
}(jQuery))