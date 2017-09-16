/**
 * Created by sogo on 17/09/2017.
 */

$(document).ready(function() {
    $(".c1-button").hover(function(){
        // animate dequeue
        if (!$(this).hasClass('animated')) {
            // text replace xxx to +
            $(this).text($(this)[0].attributes['name'].value);
            $(this).dequeue().stop().animate({ width: "20%" }, 200, function() {
            });
        }
    }, function() {
        // text replace + to xxx
        $(this).text('+');
        $(this).addClass('animated').animate({ width: "20px" },
            200, "linear", function() {
                $(this).removeClass('animated').dequeue();
            });
    });
});