define(['config'], function() {
    require(['jquery'],function(){
        (function($){
            class louti {
                constructor() {
                    //楼梯box
                    this.$louti_nav = $('.float_nav');
                    //楼梯
                    this.$list = $('.layour .float_nav li');
                    this.$lista = $('.layour .float_nav li a')
                    //分类的商品的盒子louceng
                    this.$listlouceng = $('.layour  .content_info');

                    //侧边栏的回到顶部
                    this.backtop = $('.goTop .backtop');


                    this.$nav_top = 0;
                    this.$num=null;
                }
                init() {
                    let $el = this;
                    //添加滚轮事件，让楼梯导航到达一定范围后显示
                    $(window).on('scroll', function () {
                        $el.$nav_top = $(window).scrollTop()//获取到页面滚动条距离上边的距离
                        $el.windowevent();

                    })
                    //鼠标移入移除楼梯添加效果
                    this.$list.hover(function(){
                        $el.$num = $(this).index();
                        $el.listover();
                    },function(){
                        $el.listout();
                    })  
                    //楼梯点击跳楼层
                    this.$list.on('click',function(){
                        $el.$num = $(this).index();
                        $el.listclick();
                        console.log()
                    })

                    //回到顶部
                    this.backtop.on('click',function(){
                        $('html,body').stop(true).animate({
                            scrollTop: 0
                        });
                    })
                }
                windowevent() {
                    let $el= this;
                    if (this.$nav_top >= 800) {
                        this.$louti_nav.show();
                    } else {
                        this.$louti_nav.hide();
                    };
                    //页面滚动，划到哪一块内容，对应的那一块的楼梯就要加上样式
                    this.$listlouceng.each(function (index, element) {
                        let $list_top = $(element).offset().top+300;
                        if ($list_top >= $el.$nav_top) {
                            $el.$lista.removeClass('nav-color');//每次触发滚轮事件都清除类
                            $el.$lista.eq(index).addClass('nav-color');//对应的li加上类
                            return false;
                        }
                    });
                }


                //给楼梯导航里面的a添加点击事件，选中的a要加一个类，让字体变为红色
                
                listover() {
                    this.$lista.removeClass('nav-color');
                    this.$lista.eq(this.$num).addClass('nav-color');
                }
                //点击到那个楼梯就跳到哪个楼层
                listclick(){
                    this.$lista.removeClass('nav-color')
                    this.$lista.eq(this.$num).addClass('nav-color');
                    var $top = this.$listlouceng.eq(this.$num).offset().top;
                    console.log($top)
                    $('html,body').animate({
                        scrollTop: $top
                });
                }
                //移出清除类
                listout() {
                    this.$list.removeClass('nav-color');;
                }
                
            }

            new louti().init();
        }(jQuery))
    })
    
});