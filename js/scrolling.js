 $(".scroll1").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });