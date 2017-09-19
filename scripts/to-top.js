/**
 * Created by lixinjie on 2017/8/2.
 */
// 回到顶部
$(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
        $("#toTop").fadeIn().css("display", "block"); // 当滑动到不小于 100px 时，回到顶部图标显示
        $(".others > div:nth-last-of-type(2)").css({
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
        });
    }else {
        $("#toTop").fadeOut(); // 当滑动到小于(页面被卷去的高度) 100px 时，回到顶部图标隐藏
        $(".others > div:nth-last-of-type(2)").css({
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px"
        });
    }
});
$("#toTop").on("click", function () {
    $("html, body").animate({scrollTop: 0}, 300); // 持续时间为 300ms
    return false;
});

// 对文章中的图片进行特殊处理
if ($(".sidebar-right img[width]")) {
    $(".sidebar-right img").removeAttr("width");
}
if ($(".sidebar-right img[height]")) {
    $(".sidebar-right img").removeAttr("height");
}
$(".sidebar-right").find("img").css({
    display: "block",
    maxWidth: "100%",
    height: "auto",
    margin: "15px auto"
});