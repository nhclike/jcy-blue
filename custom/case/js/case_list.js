
$(function () {
  $('#page_list').on('click','li',function(){
    $(this).addClass('active').siblings('.active').removeClass('active');
  })
});