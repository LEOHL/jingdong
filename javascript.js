$(function(){
    $(".item").hover(function(){
    $(this).find(".it").show(100);
},function(){
    $(this).find(".it").hide();
});
    $(".oo").hover(function(){
        $(this).find(".jd").show(100);
    },function(){
        $(this).find(".jd").hide();
    });
    $(".c").mouseover(function(){
        $(this).next().show(100);
    });
    $(".car").mouseout(function(){
        $(".car").hide();
    });
    $(".tep").mouseover(function(){
        $(this).find(".itms").show(100);
        $(".slider").hide();
    });
    // $(".steps").mouseover(function(){
    //     $(this).find(".itms").show(100);
    // });
    $(".itms").mouseout(function(){
        $(".itms").hide();
        $(".slider").show();
    });
    $(".itms").mouseover(function(){
        $(".itms").show();
    });
    $(".mp").hover(function(){
        $(this).css("background","#c81623");
        $(this).find("h5").css("background","#B1191A");
    },function(){
        $(this).css("background","#7C7171");
        $(this).find("h5").css("background","#5c5251")
    });
    $(".text1").mouseover(function(){
        $(".fugai").animate({
        top: 145, opacity: 'show'
    }, 1000);
    });
    $(".h span").mouseover(function(){
        $(".fugai").animate({
            opacity: 'show'
        });
    });
    $(".cha").on("click",function(){
        $(".fugai").hide();
    })
    // $(".fugai").mouseout(function(){
    //     $(".fugai").animate({
    //      opacity: 'hide'
    // }, 200);
    // })
})