$(document).ready(function () {
    AOS.init();




    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('#icone-dropdown').toggleClass('fa-caret-up fa-caret-down');

    });

    // CHANGE COLOR ON SCRIPT
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 75);
    });

    $('#botao-toggler').on('click', function () {
        $('#icone-dropdown').toggleClass('fa-caret-up fa-caret-down');

    });

    $('.card').hover(
        function () {
            $(this).animate({
                marginTop: "-=1%"
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }

    )

    $('#ano').text(new Date().getFullYear() +"working");

})
