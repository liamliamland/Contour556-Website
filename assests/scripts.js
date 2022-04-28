$(document).ready(function(){
    $('.burger-menu').on('click', function(){
        $('.mob-nav').slideToggle();
    })
});

$('#nbutton').click(function() {
    $.scrollTo($('#news'), 1000);
 });