define(['config'],function() {
    require(['jquery'],function(){
        (function($){
            //轮播图
            class bannertab{
                constructor(){
                    this.$imglist = $('.bannerimg');
                    this.$imgbtn = $('#bannerimg_tabbtn span');
                    //左右按钮
                    this.$leftbtn = $('#banerimg_rlbtn .leftbtn');
                    this.$rightbtn = $('#banerimg_rlbtn .rightbtn')
                    this.$num=0;
                }
                init(){
                    const $el = this;
                    this.$imgbtn.on('mouseover',function(){
                        $el.$num = $(this).index();
                        console.log($el.$num)
                        $el.imgboxshow($el.$num );
                    });
                    //左边按钮
                    this.$leftbtn.on('click',function(){
                        $el.lbntclick();
                    })
                    //右边按钮
                    this.$rightbtn.on('click',function(){
                        $el.rbtnclick();
                    })
                }
                //图片的盒子显示
                imgboxshow(num){
                    this.$imgbtn.eq(num).addClass('spancolor').siblings().removeClass('spancolor');
                    this.$imglist.eq(num).fadeIn().siblings().hide();
                }
                //左按钮
                lbntclick(){ 
                    if (this.$num == -1) {
                        this.$num = this.$imgbtn.length - 1;
                    }
                    this.$num--;
                    this.imgboxshow(this.$num);
                }
                rbtnclick(){
                    this.$num++;
                    if(this.$num == 3){
                        this.$num = 0;
                    }
                    this.imgboxshow(this.$num);
                    
                }
                
            }
            new bannertab().init();

        }(jQuery))
    })
    
});