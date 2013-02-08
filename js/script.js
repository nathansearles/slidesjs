$(function() {
    $('#navbar').scrollspy()

    $('.nav a.scrollto').on('click', function(e) {
        e.preventDefault();
        $this = $(this);
        offset = 60;
        target = $this.attr('href');
        targetPos = $(target).position().top;
        window.scrollTo(0,targetPos - offset)
    });

    $(".brand").click(function(e) {
        e.preventDefault();
        window.scrollTo( 0, 0) ;
    });

    $(".expand .show").click(function(e){
        e.preventDefault();
        var obj = $(this).parents(".expand");
        if ($(obj).hasClass("expanded")) {
            $(obj).removeClass("expanded");
            $(".content",obj).slideUp(100);
            $(this).html("<i class='icon-plus-sign'></i> Show example");
        } else {
            $(obj).addClass("expanded");
            $(".content",obj).slideDown(150);
            $(this).html("<i class='icon-minus-sign'></i> Hide example");
        }
    });

    $(".collapse").collapse({
        toggle: false
    });

    Socialite.load();

     $(".track_download").click(function(){
        _gaq.push(["_trackEvent", "Slides", "Download", "Slides GitHub Download"]);
    });

    $(".track_donate").click(function(){
        _gaq.push(["_trackEvent", "Slides", "Donate", "Slides Donation"]);
    });
});
