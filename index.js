/*搜索框选项卡*/
$(function(){
    var oBtns = $(".search").find("li");
    var oDivs = $(".search").find(".showed");

    //给按钮添加点击事件
    oBtns.click(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");

        $(this).attr("class","active");
        oDivs.eq($(this).index()).css("display","block");
    })
})


/*网站导航*/
$(function(){
    var mydaoh = $(".mydaoh");
    var daohang = $(".daohang");
    mydaoh.mouseover(function(){
        mydaoh.css("background-color","#fff");
        daohang.css("display","block");
        daohang.css("z-index","2");
        daohang.css("position","absolute");
        daohang.css("margin-left","37px");
        $("#headAd").css("z-index","1");
        $("#headAd").css("position","relative");
    })

    daohang.mouseenter(function(){
        mydaoh.css("background-color","#fff");
        daohang.css("display","block");
        daohang.css("z-index","2");
        daohang.css("position","absolute");
        daohang.css("margin-left","37px");
        $("#headAd").css("z-index","1");
        $("#headAd").css("position","relative");
    })

    mydaoh.mouseout(function(){
        mydaoh.css("background-color","#f4f4f4");
        daohang.css("display","none");
    })

    daohang.mouseleave(function(){
        mydaoh.css("background-color","#f4f4f4");
        daohang.css("display","none");
    })
}) 


/*公告栏选项卡*/
$(function(){
    var oBtns = $(".notice").find(".title li");
    var oDivs = $(".notice").find(".content");

    //给按钮添加移动事件
    oBtns.mouseover(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");

        $(this).attr("class","active");
        oDivs.eq($(this).index()).css("display","block");
    })
})


/*话费充值*/
$(function(){
    var oBtns = $(".neirong").find("a");
    var oDivs = $(".neirong").find(".chongzhi");

    //给按钮添加点击事件
    oBtns.mouseover(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");
        oBtns.css("color","#666");

        $(this).attr("class","active");
        $(this).css("color","#f40");
        oDivs.eq($(this).index()).css("display","block");
    })
    
})



/*旅行*/
$(function(){
    var oBtns = $(".neirong2").find("a");
    var oDivs = $(".neirong2").find(".shop");

    //给按钮添加点击事件
    oBtns.mouseover(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");
        oBtns.css("color","#666");

        $(this).attr("class","active");
        $(this).css("color","#f40");
        oDivs.eq($(this).index()).css("display","block");
    })   
})

/*话费+旅行*/
$(function(){
    var oBtns = $(".tool-item");
    var oDivs = $(".neir");
    var quxiao = $(".firstRight .quxiao");

    //给按钮添加移入事件
    oBtns.mouseover(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");

        $(this).attr("class","active");
        /* $(this).css("background-position","0 -87px"); */
      
        oDivs.eq($(this).index()).css("display","block");
        oDivs.eq($(this).index()).css("position","absolute");
        oDivs.eq($(this).index()).css("top","708px");
        oDivs.eq($(this).index()).css("z-index","2");
        $(".tool").css("position","relative");
        $(".tool").css("z-index","1");
    })
 /*    oBtns.mouseout(function(){
        oBtns.css("background-color","#fff");
    }) */ 

    oDivs.mousemove(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");

        $(this).css("display","block");
        $(this).css("position","absolute");
        $(this).css("top","708px");
        $(this).css("z-index","2");
        
        oBtns.eq($(this).index()).attr("class","active");
        /* oBtns.eq($(this).index()).css("background-color","#ffe4dc");
         */
        
        $(".tool").css("position","relative");
        $(".tool").css("z-index","1");
    })

    quxiao.click(function(){
        oDivs.css("display","none");
        oDivs.eq($(this).index()).css("display","none");

    })
})

/*扫一扫*/
$(function(){
    var oBtns = $(".apptool").find("li");
    var oDivs = $(".santu").find("li");

    //给按钮添加移入事件
    oBtns.mouseover(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");

        $(this).attr("class","active");
        oDivs.eq($(this).index()).css("display","block");
        oDivs.eq($(this).index()).css("position","absolute");
        oDivs.eq($(this).index()).css("z-index","2");
        oDivs.eq($(this).index()).css("top","710px"); 

        $(".tool").css("position","relative");
        $(".tool").css("z-index","1");
    })   
    oBtns.mouseout(function(){
        oBtns.attr("class","");
        oDivs.css("display","none");
    })
})


/*商品栏*/
$(function(){
    var Btns = $(".sideNav").find("li");
    var Divs = $(".rongqi");
    var Box = $(".imgBox1");
    
    Btns.mouseover(function(){
        Box.css("z-index","1");
        Box.css("position","relative");
        Btns.eq($(this).index()).css("background-color","#ffe4dc");
        Divs.css("display","none");
        Divs.eq($(this).index()).css("display","block");
        Divs.eq($(this).index()).css("z-index","2");
        Divs.eq($(this).index()).css("position","absolute");
        Divs.eq($(this).index()).css("margin-left","190px");
    })

    Divs.mouseenter(function(){
        Divs.css("display","none"); 
        $(this).css("display","block");
        $(this).css("z-index","2");
        $(this).css("position","absolute");
        $(this).css("margin-left","190px");
        Btns.eq($(this).index()-1).css("background-color","#ffe4dc");
        Box.css("z-index","1");
        Box.css("position","relative");
    })

    Btns.mouseout(function(){
        Btns.css("background-color","#fff");
        Divs.css("display","none");
    })

    Divs.mouseleave(function(){
        Btns.css("background-color","#fff");
        Divs.css("display","none");
    })
})


/*轮播1*/
$(function(){
    var index = 0;//标记当前图片索引
    var timer;
    dingshi();
    function dingshi(){
        timer = setInterval(function(){
        if(index == $(".lunbo").length){
            index = 0;
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
        }else{
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
        }
        index++; 
    },3000)
    }

    $(".imgBox1 .leftBtn").click(function(){
        clearInterval(timer);
        //alert(1)
        if(index == 0){
            index=$(".lunbo").length-1;
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
            dingshi();
        }else{
            index--;
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
            dingshi();
        }            
    })

    $(".imgBox1 .rightBtn").click(function(){
        //alert(1)
        clearInterval(timer);
        if(index == $(".lunbo").length-1){
            index = 0;
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
            dingshi();
        }else{
            index++;
            $(".lunbo").css("opacity","0");
            $(".lunbo").eq(index).css("opacity","1");
            $(".botton").css("background-color","#fff");
            $(".botton").eq(index).css("background-color","#ff5000");
            dingshi();
        }            
    })

    $(".botton").click(function(){
        clearInterval(timer);
        //alert(1);
        var indexs = $(this).index();
        //alert(indexs);
        index = indexs;
        $(".lunbo").css("opacity","0");
        $(".lunbo").eq(index).css("opacity","1");
        $(".botton").css("background-color","#fff");
        $(".botton").eq(index).css("background-color","#ff5000");
        dingshi();
    })
})

/*轮播图2*/
/* $(function() {
    var $picUl = $('.picul'),
    $prev = $('.pic .leftBtn'),
    $next = $('.pic .rightBtn'),
    widLi = $picUl.children().eq(0).width(),
    len = $('.picul .img').length,
    idx = 0,
    timer = null;
    $(".label").text("1");

   // 点击下一张
$next.click(function() {
    idx++;
    idx %= len; // 序号为图片的长度时到达第一张
    $picUl.animate({
        left: -idx * widLi
    }, 500)
    $(".label").text(idx+1);
})

$prev.click(function() {
    idx--;
    if (idx < 0) {
        idx = len - 1
    };

    $picUl.animate({
        left: -idx * widLi
    }, 500)
    $(".label").text(idx+1);
})
// 自动轮播
auto();

function auto() {
    timer = setInterval(function() {
        $next.trigger("click") // 触发click
    }, 3000)
}
}) */

/*轮播图2*/
$(function(){
    var index = 0;//标记当前图片索引
    var timer;
    dingshi();
    function dingshi(){
        timer = setInterval(function(){
        if(index == $(".picul .img").length){
            index = 0;
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
        }else{
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
        }
        index++; 
    },3000)
    }

    $(".imgBox2 .leftBtn").click(function(){
        clearInterval(timer);
        //alert(1)
        if(index == 0){
            index=$(".picul .img").length-1;
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
            dingshi();
        }else{
            index--;
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
            dingshi();
        }            
    })

    $(".imgBox2 .rightBtn").click(function(){
        //alert(1)
        clearInterval(timer);
        if(index == $(".picul .img").length-1){
            index = 0;
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
            dingshi();
        }else{
            index++;
            $(".picul .img").css("opacity","0");
            $(".picul .img").eq(index).css("opacity","1");
            $(".label").text(index+1);
            dingshi();
        }            
    })

})