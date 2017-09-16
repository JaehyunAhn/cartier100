/**
 * Created by sogo on 17/09/2017.
 */

var is_working = false;

function flewAttributes(value) {
    if (value == true && !is_working) {
        $('#c3-slide1').animate({left: "0%", top: "9%"}, 800, function () {
            $('#c3-slide2').animate({left: "0%", top: "8%"}, 1000, function () {
                $('#c3-slide4').animate({left: "0%", top: "10%"}, 500, function() {
                    $('#c3-slide3').animate({left: "0%", top: "1%"}, 700, function () {
                             is_working = true;
                    });
                });
            });
        });
    }
    else if (value !== true && is_working) {
        $('#c3-slide1').animate({left: "0%", top: "160%"}, 400, function () {
            $('#c3-slide2').animate({left: "400%", top: "8%"}, 500, function () {
                $('#c3-slide3').animate({left: "400%", top: "1%"}, 350, function () {
                    $('#c3-slide4').animate({left: "0%", top: "100%"}, 250, function() {
                        is_working = false;
                    });
                });
            });
        });
    }
}