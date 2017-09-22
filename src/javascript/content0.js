/**
 * Created by sogo on 17/09/2017.
 */

$(window).on("load", function(){
    if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        // 에이전트가 아이폰이면 리소스를 넣지 않습니다
    }
    else {
        // 에이전트가 아이폰이 아닐 경우
        $('#video-wrapper').find('video').append('<source src="./movie/tank100-01.mp4" type="video/mp4">');
        $('#video-wrapper').find('video')[0].load();
    }
});