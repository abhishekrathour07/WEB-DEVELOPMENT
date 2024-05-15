// add css 
$("h1").css('color','green');

$(".btn1").addClass("red");

// add class
let blue = $(".btn2").addClass("blue");
// removeclass
blue.removeClass("blue");

// add text
$(".btn3").text("hello");

// setting attribute

$('a').attr('href', 'http://www.youtube.com');

// adding event listener
$('h1').click(()=>{
    $('h1').css('color','purple')
})

// adding event listener in btns

$('.btn').click(()=>{
    $('h1').css('color' , "orange");
})

$(document).keypress((event)=>{
    $('h1').text(event.key);
})

// on method in jquery

$('h1').on('mouseover',()=>{
    $('h1').css('color','red')
    $('h1').css('cursor','pointer')

})

// before after append prepend

$('.btn').after('<button class = "af-btn">After btn</buton>');
$('.af-btn').before('<br>');

// animation //effect method in jquery

$('.btn').click(()=>{
    $('h1').slideUp().slideDown().animate({opacity:0.4}).css('backgroundColor' ,'cyan');
})

