$(document).ready(function () {
//Navigation
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
        $(this).fadeOut(400, function () {
            $(this).removeClass("open");
        });
    }
});
//Navigation END

// Smooth scrool
$("nav .navigation-link,.introButtons .button").on("click", function (e) {
    e.preventDefault();
    sectionID = $(this).attr("href");
    // console.log(sectionID);
    sectionPosition = $(sectionID).offset().top;
    // console.log(sectionPosition);
    $("html, body").animate({
        scrollTop: sectionPosition
    }, 1000);
});
// Smooth scrool END

//Shrink hedera on scrool
var fromTop;

$(window).on("scroll", function () {
    fromTop = $(this).scrollTop();
    if (fromTop > 200) {
        $("header").addClass("small");
    } else {
        $("header").removeClass("small");
    }
});
//Shrink hedera on scrool END

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

//Pushing a curent date in to input date for reservation
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
//Pushing a curent date in to input date for reservation END

//Gallery zoom
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
            return item.el.attr('title') + '<small>by Veljko Ivanovic</small>';
        }
    }
});
//Gallery zoom END

//Template, append Gallery items
var $popupGallery = $('.popup-gallery');

    $.getJSON("My-Project-1-Restaurant-Supper/json/galleryImgs.json", function (result) {
    var galleryImgs = result;
    for (i = 0; i < galleryImgs.length; i++) {
        $popupGallery.append(`<div class="galleryItem col-12 col-sm-6 col-lg-4">
                        <a href="img/gallery1.jpg" title="Events"><img src="img/${galleryImgs[i].name}" alt="RestaurantImg" class="img-res"></a>
                        </div>`);
    }
});
//Template, append Gallery items END

//Template, append Events items
var $eventsHolder = $('.eventsHolder');

    $.getJSON("My-Project-1-Restaurant-Supper/json/events.json", function (result) {
    var events = result;
    for (i = 0; i < events.length; i++) {
        $eventsHolder.append(`<div class="eventItem col-12 col-md-4">
                                <a href ="#"><img src ="img/${events[i].name}"
                                alt = ""
                                class="img-res" ></a>
                                <h3>Some dummy event</h3>
                                <ul>
                            <li>${events[i].date}</li>
                            <li>${events[i].time}</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque a quas illo earum
                            culpa cum
                            dicta unde dolor autem.
                            <a href="#">Read more...</a>
                        </p>
                    </div>`);
    }
});
//Template, append Events items END
});