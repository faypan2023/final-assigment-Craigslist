$(document).ready(function(){
//    alert('working!');
    $('.important').addClass('color');
    $('a').addClass('important');
    
    $('a').click(function(event){
        $('.important').removeClass('important');
        $('article').hide(3000);
    })
});

