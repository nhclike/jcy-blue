
$(function () {

  //加载头部
  $('#main_header').load("../comm/nav_navbar.html",function(){
    //解决ie中min-height的100%占屏问题
    //获取窗口高度
    var window_height=$(document).height();
    var header_height;
    //获取头部高度
     header_height=$('#header nav.navbar').innerHeight();
     console.log(header_height);
    //得到应该显示的高度
    var min_height=window_height-header_height;
    console.log(min_height);
    //设置左右两个模块的高度
    $('#tab_list').height(min_height);
    $('#context_show').height(min_height);
  });

  //标签页
  $("#tab_list li a").click(function(e){
    e.preventDefault();
    //实现切换效果
    var id=$(this).attr('href');
    $(id).addClass('show').siblings().removeClass('show');
    $(this).parent().addClass('li_active').siblings('.li_active').removeClass('li_active');
    //点击换背景图标
    var img=$(this).children().first();
    console.log(img);
    var src=img.attr('src');
    var pre=src.split('_')[0];
    var i=src.split('_')[1].split('.')[0];
    i==1?i++:i;
    var url=pre+'_'+i+'.png';
    img.attr('src',url);
    //切换未激活的图片为_1.png
    var silbimg=$(this).parent().siblings().not('.li_active').find('img');
    console.log(silbimg);
    $.each(silbimg,function (i,n) {
      var prev=$(n).attr('src').split('_')[0];
       var url1=prev+'_'+1+'.png';
      $(n).attr('src',url1);
    });
  });


  //立案排期底部标签页的点击激活
  $('#page_list').on('click','li',function(){
    $(this).addClass('active').siblings('.active').removeClass('active');
  })
});