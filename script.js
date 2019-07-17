$(document).ready(function () {


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


})