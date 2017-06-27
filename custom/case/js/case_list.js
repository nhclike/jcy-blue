
$(function () {
  // $('#main_header').load("../comm/nav_navbar.html");
  $('#page_list').on('click','li',function(){
    $(this).addClass('active').siblings('.active').removeClass('active');
  })
});