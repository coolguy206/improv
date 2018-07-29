

$('.fa-navicon, #off-canvas-lt a').click(function(){
    if($('.wrapper').hasClass('left')){
        $('.wrapper').removeClass('left');
    } else {
        $('.wrapper').addClass('left');
    }
    
});

$('.fa-gear, #off-canvas-rt a').click(function(){
    if($('.wrapper').hasClass('right')){
        $('.wrapper').removeClass('right');
        setTimeout(function(){
            $('#off-canvas-rt').removeClass('display');
        },1000);
        
    } else {
        $('#off-canvas-rt').addClass('display');
        $('.wrapper').addClass('right');

    }
    
});

$('#off-canvas-lt #close-icon, #off-canvas-rt #close-icon').click(function(){
    $('.wrapper').removeClass('left');
    $('.wrapper').removeClass('right');
    setTimeout(function(){
        $('#off-canvas-rt').removeClass('display');
    },1000);
});