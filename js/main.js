//Navigacija
var nav = $("nav");
var menuBtn = $("#menu-btn");
var winWidth = $(window).width();

if (winWidth >= 992) {
    nav.css("display", "block");
    menuBtn.css("display", "none");
} else {
    nav.css("display", "none");
    menuBtn.css("display", "block");
}

$(window).resize(function () {
    winWidth = $(window).width();
    if (winWidth >= 992) {
        nav.css("display", "block");
        menuBtn.css("display", "none");
    } else {
        nav.css("display", "none");
        menuBtn.css("display", "block");
    }
});

menuBtn.on("click", function () {
    nav.fadeToggle(400);
    nav.toggleClass("open");
});
nav.on("click", function () {
    if (winWidth < 992 || $(this).attr("class") == "open") {
        $(this).fadeOut(400, function(){
            $(this).removeClass("open");
        });
    }
});
//Navigacija END

// Smooth scrool
$("nav .navigation-link,.introButtons .button").on("click", function (e) {
    e.preventDefault();
    sectionID = $(this).attr("href");
    // console.log(sectionID);
    sectionPosition = $(sectionID).offset().top;
    // console.log(sectionPosition);
    $("html, body").animate({
      scrollTop : sectionPosition
    }, 1000);
} );
// Smooth scrool END

//Skupljanje hedera na scrool
var fromTop;

$(window).on("scroll", function () {
  fromTop = $(this).scrollTop();
    if (fromTop > 200) {
      $("header").addClass("small");
    } else{
      $("header").removeClass("small");
  }
});
//Skupljanje hedera na scrool END

// Load more Gallery items
var winWidth;
var num;

function itemsNum() {
    winWidth = $(window).width();
    if (winWidth < 576) {
        num = 4;
    } else if (winWidth < 768) {
        num = 6;
    } else {
        num = 6;
    }
    $('.galleryItem').css('display', 'none');
    $(".galleryItem").slice(0, num).show();
    if (num >= $(".gallery-img:hidden").length) {
        $("#loadMore").hide();
    }
    $("#loadMore").off("click");
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".galleryItem:hidden").slice(0, num).slideDown();
        if ($(".galleryItem:hidden").length == 0) {
            $("#loadMore").fadeOut("slow");
        }
        $("html,body").animate({
            scrollTop: $(this).offset().top
        }, 800);
    });
    if ($(".galleryItem:hidden").length !== 0) {
        $("#loadMore").show();
    }
}
itemsNum();
$(window).on("resize", itemsNum);
// Load more Gallery items END

//Pushing a curent date in input date for reservation
$(document).ready(function () {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#theDate").attr("value", today);
});
//Pushing a curent date in input date for reservation END