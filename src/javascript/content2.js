/**
 * Created by sogo on 24/09/2017.
 */
$(window).scroll(function() {
    // 현재 스크롤 값과 C2 review wrapper 값을 가지고 포지션을 구한다
    var c2_review_wrapper = $('#c2-review-wrapper');
    var c2_bg_img_pos = $(window).scrollTop() - c2_review_wrapper.offset().top;
    c2_review_wrapper.css('background-position', 'left ' + ((c2_bg_img_pos)) + 'px');
});