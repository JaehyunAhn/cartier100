/* Created by sogo on 17/09/2017.*/

$(window).on("load", function(){

});

var is_working_for6 = false;

function blinkHand(value) {
    var hand = $('#swipe_hand');
    if (value == 6 && is_working_for6 == false) {
        is_working_for6 = true;
        hand.fadeIn(100).animate({left:'+=60%'}, 1500).fadeOut(300).animate({left: '-=60%'});
        hand.fadeIn(100).animate({left:'+=60%'}, 1500).fadeOut(300).animate({left: '-=60%'});
    }
    if (value != 6 && is_working_for6 == true) {
        is_working_for6 = false;
    }
}