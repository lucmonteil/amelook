//= require jquery
//= require bootstrap-sprockets
//= require_tree .
//
//
//
function checkScroll(){
    var startY = $('.navbar-wagon').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-wagon').addClass("scrolled");
    }else{
        $('.navbar-wagon').removeClass("scrolled");
    }
}

if($('.navbar-wagon').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
