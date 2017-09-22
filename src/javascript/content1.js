/**
 * Created by sogo on 17/09/2017.
 */
// 100 주념 시계 설명 바뀜
var watch_object = {};
watch_object['c1b1'] = 'AAAA';
watch_object['c1b2'] = 'BBB';
watch_object['c1b3'] = 'CCC';
watch_object['c1b4'] = 'DDDD';
watch_object['default'] = '100년의 시간을 거친 탱크는 과거와 현재가 변함없으며 한편으로는 늘 새롭습니다. ' +
    '정사각형과 직사각형의 오묘한 중간을 선택한 다이얼. 그 좌우로 탱 크의 캐터필라를 이미지 한 브롱카(Brancards)가 큰 그림을 그리는 디자인은 ' +
    '어떤 시대에서도 우아하며 아름답지만, 그 속의 디테일 하나하나는 왕성한 생명력을 지닌 세포처럼 늘 새롭습니다.'

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