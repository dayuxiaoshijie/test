//这个是页面渲染的结构
(function($) {
    let $url ="http://10.31.164.30/tcl/php/";
    //电视
    let $tv_rightimg = $('#tv .info_rightimg ul');
    $.ajax({
        url:$url+'selectdata.php',
        dataType:"json"
    }).done(function(data){
        let $str = '';
            $.each(data,function(index,value){
                if(value.piclei=="电视"){
                    $str+=
                        `
                        <li>
                            <a href="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                                <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                                <P class="titile">${value.pictitle}</P>
                                <p class="youhui">${value.dice}</p>
                                <p class="price">${value.prise}</p>
                            </a>
                        </li>
                       `                              
                }
            })
            $tv_rightimg.html($str);
    });
    //空调
    let $kt_rightimg = $('#kt .info_rightimg ul');
    $.ajax({
        url:$url+'selectdata.php',
        dataType:"json"
    }).done(function(data){
        let $str = '';
            $.each(data,function(index,value){
                if(value.piclei=="空调"){
                    $str+=
                        `
                        <li>
                            <a herf="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                                <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                                <P class="titile">${value.pictitle}</P>
                                <p class="youhui">${value.dice}</p>
                                <p class="price">${value.prise}</p>
                            </a>
                        </li>
                       `                              
                }
            })
            $kt_rightimg.html($str);
    });
    //冰箱
    let $bx_rightimg = $('#bx .info_rightimg ul');
    $.ajax({
        url:$url+'selectdata.php',
        dataType:"json"
    }).done(function(data){
        let $str = '';
            $.each(data,function(index,value){
                if(value.piclei=="冰箱"){
                    $str+=
                        `
                        <li>
                            <a herf="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                                <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                                <P class="titile">${value.pictitle}</P>
                                <p class="youhui">${value.dice}</p>
                                <p class="price">${value.prise}</p>
                            </a>
                        </li>
                       `                              
                }
            })
            $bx_rightimg.html($str);
    });
    //洗衣机
    let $xyj_rightimg = $('#xyj .info_rightimg ul');
    $.ajax({
        url:$url+'selectdata.php',
        dataType:"json"
    }).done(function(data){
        let $str = '';
            $.each(data,function(index,value){
                if(value.piclei=="洗衣机"){
                    $str+=
                        `
                        <li>
                            <a herf="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                                <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                                <P class="titile">${value.pictitle}</P>
                                <p class="youhui">${value.dice}</p>
                                <p class="price">${value.prise}</p>
                            </a>
                        </li>
                       `                              
                }
            })
            $xyj_rightimg.html($str);
    });
   //厨房电器
   let $cfdq_rightimg = $('#cfdq .info_rightimg ul');
   $.ajax({
       url:$url+'selectdata.php',
       dataType:"json"
   }).done(function(data){
       let $str = '';
           $.each(data,function(index,value){
               if(value.piclei=="厨房电器"){
                   $str+=
                       `
                       <li>
                           <a herf="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                               <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                               <P class="titile">${value.pictitle}</P>
                               <p class="youhui">${value.dice}</p>
                               <p class="price">${value.prise}</p>
                           </a>
                       </li>
                      `                              
               }
           })
           $cfdq_rightimg.html($str);
   });
   //智能配件
   let $znpj_rightimg = $('#znpj .info_rightimg ul');
   $.ajax({
       url:$url+'selectdata.php',
       dataType:"json"
   }).done(function(data){
       let $str = '';
           $.each(data,function(index,value){
               if(value.piclei=="智能配件"){
                   $str+=
                       `
                       <li>
                           <a herf="http://10.31.164.30/tcl/src/details.html?sid=${value.sid}" class="r_info_ul_list">
                               <img class="lazy" data-original="${value.picsrc}" width="180px" height="180px"></img>
                               <P class="titile">${value.pictitle}</P>
                               <p class="youhui">${value.dice}</p>
                               <p class="price">${value.prise}</p>
                           </a>
                       </li>
                      `                              
               }
           })
           $znpj_rightimg.html($str);
   });
   
   //懒加载
    $(function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    });
})(jQuery);

//渲染的li标签添加hover事件
(function($){
    class lihover{
        constructor(){
            this.$xrul = $('.info_rightimg ul')
            //console.log(this.$xrul);
        }
        init(){
            let $el = this
            this.$xrul.on('mouseover','li',function(){
                $el.lishow(this);
            })
            this.$xrul.on('mouseout','li',function(){
                $el.lihide(this);
            })
        }
        //移入的时候变化top值和阴影
        lishow(obj){
            $(obj).stop().animate({
                top:-8
            },400).css({
                  "box-shadow":"0 0 2px 2px #D9D9D9"
              }).siblings().stop(true).animate({
                top:0
            },0).css({
                "box-shadow":"0 0 0 0"
             
            })
            
        }
        //移出的时候所有的要消失
        lihide(obj){
            $(obj).stop().animate({
                top:0
            },0).css({
                "box-shadow":"0 0 0 0"
             
            })
        }
    }
    new lihover().init();
}(jQuery))