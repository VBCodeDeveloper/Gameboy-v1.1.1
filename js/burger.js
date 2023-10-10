$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.header__links').toggleClass('active');
        $('body').toggleClass('lock')
    });
});