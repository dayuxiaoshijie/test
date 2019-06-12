define(['config'],function(){
    require(['jquery'],function(){
        
        (function($){
            //二级导航自己执行
            class erjitab{
                constructor(){
                    this.$navlist = $('#heaer_nav .h_nav_l ul li');
                    this.$menuBarLi = $('.mainerjinav .menuBarLi');
                    this.$erjinav = $('.mainerjinav');
                }
                init(){
                  
                }
                //鼠标移入显示
                navshow(obj){
                    this.$erjinav.show().animate({
                        height:220+'px',
                    },200)
                }
               
            }
            new erjitab().init();

            //头部搜索框 链接
            class inputsearch{
                constructor(){
                    this.$serchinput = $('.serchli input');
                    this.$serchul = $('.serchbox');
                    //拼接渲染用
                    this.$str="";
                }
                init(){
                    //https://suggest.taobao.com/sug?code=utf-8&q=aa&_ksTS=1559012104552_3254&callback=callback
                    //input的值改变拿到jsonp接口数据
                    let $el = this;
                    this.$serchinput.on('input',function(){
                        $el.$serchul.show();
                        $el.serchshow();
                    })
                    //点击其他地方的时候ul列表消失
                    $('html,body').on('click',function(){
                        $el.$serchul.html("");
                        $el.$serchinput.val("")
                    })
                }
                serchshow(){
                    let $el = this;
                    $.ajax({
                        url: 'https://suggest.taobao.com/sug?code=utf-8&q='+$el.$serchinput.val()+'&_ksTS=1559012104552_3254&callback=callback',
                        dataType: 'jsonp'
                    }).done(function(data){
                            $.each(data.result, function (index, value) {
                                $el.$str += `
                                <li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=${value[0]}">${value[0]}<a></li>
                        `;
                            })
                            $el.$serchul.html($el.$str);
                    })
                }
            }
            new inputsearch().init();
        }(jQuery))

    })
})