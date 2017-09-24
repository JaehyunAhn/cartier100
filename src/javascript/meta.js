/**
 * Created by sogo on 17/09/2017.
 */
$(window).on("load", function(){
    // trigger 가 move top 하는 걸 방지
    //$('.trigger').click(function(e) {
    //    e.preventDefault();
    //});
    //    // show 대응하는 toggle class
    //    var item = $('#' + $(this)[0].attributes['meta'].value)
    //    if (item.is(':visible')){
    //        item.css('display', 'none');
    //        $("#page-container, #footer, #top, #menu").toggleClass('blur-effect');
    //    }
    //    else{
    //        item.css('display', 'block');
    //        $("#page-container, #footer, #top, #menu").toggleClass('blur-effect');
    //    }
    //
    //});
});

function toggleClicked(element) {
    // show 대응하는 toggle class
    console.log($(element));
    var item = $('#' + $(element)[0].attributes['meta'].value)
    if (item.is(':visible')){
        item.css('display', 'none');
        $("#page-container, #footer, #top, #menu").toggleClass('blur-effect');
    }
    else{
        item.css('display', 'block');
        $("#page-container, #footer, #top, #menu").toggleClass('blur-effect');
    }
};