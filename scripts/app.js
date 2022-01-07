$(document).ready(function () {
    $(".result-input").css({
        backgroundColor: "#D5CCCD"
    });
});
$(".slider").click(function () {
    var hasClass = $(this).hasClass("slider-checked");
    if (hasClass) {
        $(this).removeClass("slider-checked");
        $(".switch").css({
            backgroundColor: "#D4CCCD"
        })
        $(".btn").css({
            "background-color": "#E5E4E0",
            "color": "#343A40"
        });
        $(".result-input").css({
            color: "#343A40",
            backgroundColor: "#D5CCCD"
        });
        $(".btn-del").css({
            "background-color": "#388187",
            "color": "#fff"
        });
        $("body").css("background-color", "#E6E6E6");
        $(".app-name").css("color", "#343A40");
        $(".slider").css("background-color", "#C74E00");
        $(".row-bg").css("background-color", "#D3CDCD");
    } else { ///////////////////////////
        $(this).addClass("slider-checked");
        $("body").css("background-color", "#17062A");
        $(".app-name").css("color", "#FEEB4D");
        $(".slider").css("background-color", "#00E2D6");
        $(".row-bg").css("background-color", "#1E0836");
        $(".switch").css({
            backgroundColor: "#343A40"
        });
        $(".btn").css({
            "background-color": "#331B4D",
            "color": "#FBE540",
        });
        $(".result-input").css({
            backgroundColor: "#1E0836",
            color: "#FDE33C"
        });
    }
});