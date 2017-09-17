/**
 * Created by sogo on 17/09/2017.
 */
// 100 주념 시계 설명 바뀜
var watch_object = {};
watch_object['Brancard'] = 'AAAA';
watch_object['Roman Numerals'] = 'BBB';
watch_object['Sapphire Cabochon'] = 'CCC';
watch_object['Chemin De Fer'] = 'DDDD';

$(document).ready(function() {
    $(".c1-button").hover(function(){
        // animate dequeue
        if (!$(this).hasClass('animated')) {
            // text replace xxx to +
            $(this).text($(this)[0].attributes['name'].value);
            $('#c1-bottom').text(watch_object[$(this)[0].attributes['name'].value]);
            $(this).dequeue().stop().animate({ width: "20%" }, 250, function() {
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