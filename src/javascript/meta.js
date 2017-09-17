/**
 * Created by sogo on 17/09/2017.
 */
$(document).ready(function() {
    // trigger 가 move top 하는 걸 방지
    $('.trigger').click(function(e) {
        e.preventDefault();
        // show 대응하는 toggle class
        $('#' + $(this)[0].attributes['name'].value).css('display', 'block');
    });
});