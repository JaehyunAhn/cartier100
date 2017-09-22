/* Created by sogo on 17/09/2017.*/

$(window).on("load", function(){
    $('#c6-coverflow').flipster({
        fadeIn: 300,
        style: 'carousel',
        spacing: -0.5,
        buttons: true,
        click: true,
        scrollwheel: false,
        keyboard: false,
        touch: true,
        start:0,
        enableNavButtons: true,
        onItemSwitch: function(currentItem, previousItem) {
            //console.log(currentItem);
        }
    });
});