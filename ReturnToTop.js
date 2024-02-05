// ---------- Scroll to Top ---------- 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {      
        $('#return-to-top').fadeIn(300);  
    } else {
        $('#return-to-top').fadeOut(300);
    }
})

$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0                 
    }, 500);
});