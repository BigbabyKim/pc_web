/* 마이 */

// $('.gnb_menu1').mouseover(function(){
//     $('.gnbmuhan1').stop().slideDown();
//     $('.h_menu_bg').stop().slideDown();
// }).mouseout(function(){
//     $('.gnbmuhan1').stop().hide();
//     $('.h_menu_bg').stop().hide();
//     return false;
// });
$('.gnb_menu1').mouseover(function(){
    $(this).find('.gnbmuhan1').stop().slideDown();
    $('.gnbmuhan').stop().slideDown();
    $('.h_menu_bg').stop().slideDown();
}).mouseout(function(){
    $(this).find('.gnbmuhan1').stop().hide();
    $('.gnbmuhan').stop().hide();
    $('.h_menu_bg').stop().hide();
    return false
});

$('.s_btn_login').mouseover(function(){
    $('.h_list_in').show();
}).mouseout(function(){
    $('.h_list_in').hide();
    return false;
})
$('.s_btn_allmenu').click(function(){
    $('#side').stop().slideDown({   
    });
    $('html').css({
        overflow : 'hidden'
    });
    return false; 
});