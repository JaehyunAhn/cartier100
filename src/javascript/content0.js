/**
 * Created by sogo on 17/09/2017.
 */

$(window).on("load", function(){
    var video_source = document.querySelector('video');
    var video_storage = [
        './movie/tank100_1.mp4',
        './movie/tank100_2.mp4',
    ];
    /*
    // check browser is chrome & safari;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {
        //i.e. apply safari class via jquery
        video_storage = [
        './movie/tank100_1.mp4',
        './movie/tank100_2.mp4'
        ];
    }
    else {
        video_storage = [
          './movie/tank100_1.mp4'
      ];
    }
    */

    var active_video_url = video_storage[Math.round(Math.random()*(video_storage.length -1))];

    if(video_source.canPlayType('video/mp4;')) {
        video_source.setAttribute('src', active_video_url);
    }

    if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        // 에이전트가 아이폰이면 리소스를 넣지 않습니다
    }
    else {
        // 에이전트가 아이폰이 아닐 경우
    }

});