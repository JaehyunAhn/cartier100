/**
 * Created by sogo on 17/09/2017.
 */

$(document).ready(function(){
    $('#c3-background').fadeOut();
});

var is_working = false;

function flewAttributes(value) {
    if (value == 3 && is_working == false) {
        is_working = true;
        $('#c3-background').fadeIn();
        $('#c3-slide1').animate({left: "0%", bottom: "3%"}, 800, function () {});
        $('#c3-slide2').animate({left: "0%", bottom: "5%"}, 1000, function () {});
        $('#c3-slide3').animate({left: "0%", bottom: "5%"}, 700, function () {});
        $('#c3-slide4').animate({left: "0%", bottom: "0"}, 500, function() {});
    }
    if (value != 3 && is_working == true) {
        is_working = false;
        $('#c3-background').fadeOut();
        $('#c3-slide1').animate({left: "0", bottom: "160%"}, 400, function () {});
        $('#c3-slide2').animate({left: "-400%", bottom: "8%"}, 500, function () {});
        $('#c3-slide3').animate({left: "-600%", bottom: "7%"}, 350, function () {});
        $('#c3-slide4').animate({left: "0", bottom: "-100%"}, 250, function() {});
    }
}