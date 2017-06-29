/**
 * Created by lij on 2017/6/28.
 */
$(function(){
  //立案排期底部标签页的点击激活
  $('#page_list').on('click','li',function(){
    //e.preventBubble();
    $(this).addClass('active').siblings('.active').removeClass('active');
  });
  //阻止标签页中a的默认跳转行为
  $('#page_list li').on('click','a',function (e) {
    e.preventDefault();
  });
});