/**
 * Created by sogo on 17/09/2017.
 */
// 100 주념 시계 설명 바뀜
var watch_object = {};
watch_object['c1b1'] = 'AAAA';
watch_object['c1b2'] = 'BBB';
watch_object['c1b3'] = 'CCC';
watch_object['c1b4'] = 'DDDD';
watch_object['default'] = '탱크 워치는 끊임없이 변화했지만 고유의 디자인을 완성하는 네 가지 요소를 이어옵니다. ' +
    '탱크의 실루엣 그리는 케이스 좌우의 브롱카. 심플하지만 기능적인 다이얼을 완성하는 로만 인덱스와 레일웨이 인덱스. ' +
    '까르띠에의 또 다른 면모인 주얼러를 각인시킴과 동시에 섬세함을 드러내는 사파이어 카보숑 컷 크라운이 그것입니다.'

$(window).on("load", function(){
    var c1_button = $(".c1-button");
    c1_button.fadeTo(100, 0.7);

    c1_button.hover(function(){
        // animate dequeue
        $(this).html($(this)[0].attributes['name'].value);
        if (!$(this).hasClass('animated')) {
            // text replace xxx to jpg
            $('#c1-bottom').text(watch_object[$(this)[0].attributes['id'].value]);
            $(this).dequeue().stop().animate({ width: "auto", opacity: 1 }, 300, function() {
                //$(this).css('background-color', 'rgba(255,255,255,0.8)');
            });
        }
    }, function() {
        $(this).text('');
        // text replace jpg to xxx
        $(this).addClass('animated').animate({ width: "auto", height: "auto", opacity: 0.7 },
            300, "linear", function() {
                $(this).removeClass('animated').dequeue();
            });
    });
});