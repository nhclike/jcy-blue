
$(function () {

  //加载头部
  $('#main_header').load("../comm/nav_navbar.html",function(){
    //解决ie中min-height的100%占屏问题
    //获取窗口高度
    var window_height=$(document).height();
    //获取头部高度
    var header_height=$('#header nav.navbar').innerHeight();
    //得到应该显示的高度
    var min_height=window_height-header_height;
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
    var src=img.attr('src');
    var pre=src.split('_')[0];
    var i=src.split('_')[1].split('.')[0];
    i==1?i++:i;
    var url=pre+'_'+i+'.png';
    img.attr('src',url);
    //切换未激活的图片为_1.png
    var silbimg=$(this).parent().siblings().not('.li_active').find('img');
    $.each(silbimg,function (i,n) {
      var prev=$(n).attr('src').split('_')[0];
       var url1=prev+'_'+1+'.png';
      $(n).attr('src',url1);
    });
  });

  //获取模态框
  var $modal_dateList = $('#dateList');
  var $modal_caseDate=$('#caseDate');
  //iframe加载完成后解决模态框事件绑定问题
      //iframe为case_index加载完成后绑定模态框按钮触发事件
        var case_index=document.getElementById('case_index');
        case_index.onload=function () {
          //获取case_index的iframe中的按钮触发模态框
          $("#case_index").contents().find(".btn_date_list").click(function () {
            $modal_dateList.modal({backdrop:'static'});
          });
          $("#case_index").contents().find(".btn_court_attend").click(function () {
            location.href='/nhc/custom/comm/court_attend.html'
          });
        };
      //iframe为case_date加载完成后绑定事件
      var case_date=document.getElementById('case_date');
      case_date.onload=function () {
        //给新建案件按钮绑定事件并且跳转
        $("#case_date").contents().find("#btn_new_case").click(function () {
          $('#case_date').attr('src','../case/case_new_build.html');

          case_date.onload=function(){
            $('#case_date').contents().find('#btn_newBuildCase_cancel').click(function () {
              //$('#case_date').attr('src','../case/case_date.html');
              top.location.reload();
            });
          };
        });

        console.log($("#case_date").contents().find("#btn_new_date"),2);
        $("#case_date").contents().find("#btn_new_date").click(function () {
          $modal_caseDate.modal({backdrop:'static'});
        })
      }
});

