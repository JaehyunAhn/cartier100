/* Created by sogo on 17/09/2017.*/

$(document).ready(function(){
    $('#c6-coverflow').flipster({
        fadeIn: 300,
        style: 'carousel',
        spacing: -0.5,
        buttons: true,
        start:0,
        enableNavButtons: true,
        onItemSwitch: function(currentItem, previousItem) {
            //console.log(currentItem);
        }
    });
});