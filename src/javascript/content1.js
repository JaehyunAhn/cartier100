/**
 * Created by sogo on 17/09/2017.
 */
// 100 주념 시계 설명 바뀜
var watch_object = {};
watch_object['Brancard'] = 'AAAA';
watch_object['Roman Numerals'] = 'BBB';
watch_object['Sapphire Cabochon'] = 'CCC';
watch_object['Chemin De Fer'] = 'DDDD';
watch_object['default'] = '100년의 시간을 거친 탱크는 과거와 현재가 변함없으며 한편으로는 늘 새롭습니다. ' +
    '정사각형과 직사각형의 오묘한 중간을 선택한 다이얼. 그 좌우로 탱 크의 캐터필라를 이미지 한 브롱카(Brancards)가 큰 그림을 그리는 디자인은 ' +
    '어떤 시대에서도 우아하며 아름답지만, 그 속의 디테일 하나하나는 왕성한 생명력을 지닌 세포처럼 늘 새롭습니다.'

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
                // 별일 없으면 디폴트로 돌아감 
                $('#c1-bottom').text(watch_object['default']);
            });
    });
});