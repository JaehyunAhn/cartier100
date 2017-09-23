/**
 * Created by sogo on 17/09/2017.
 */
// 100 주념 시계 설명 바뀜
var watch_object = {};
watch_object['c1b1'] = '브롱카 : 탱크 워치의 케이스 좌우에 있는 브롱카는 스트랩을 자연스럽게 연결하는 부품이자 탱크 워치의 실루엣을 그리는데 결정적인 역할을 합니다. ';
watch_object['c1b2'] = '로만 인덱스 : 오버사이즈의 로마 숫자를 이용한 인덱스 또한 탱크 워치의 디테일이며 레일웨이 인덱스와 더불어 다이얼의 강력한 매력을 완성합니다.';
watch_object['c1b3'] = '카보숑 크라운 : 끝은 둥글면서 전체적으로는 뾰족한 형태로 잘라낸 블루 사파이어는 까르띠에 워치 디테일의 상징이며 탱크 워치에도 적용되어 있습니다. ';
watch_object['c1b4'] = '레일웨이 인덱스 : 철길의 형태로 디자인 되었다고 하여 레일웨이 인덱스라고 부르며, 탱크 워치의 특징적인 디테일이자 까르띠에 워치의 디테일이기도 합니다.';
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