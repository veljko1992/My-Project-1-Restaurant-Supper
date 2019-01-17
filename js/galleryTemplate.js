$(document).ready(function () {
            //Template, append Gallery items
            var $popupGallery = $('.popup-gallery');

            $.getJSON("json/galleryImgs.json", function (result) {
                var galleryImgs = result;
                for (i = 0; i < galleryImgs.length; i++) {
                    $popupGallery.append(`<div class="galleryItem col-12 col-sm-6 col-lg-4">
                        <a href = "img/${galleryImgs[i].name}"
                        title = "Events" > <img src = "img/${galleryImgs[i].name}"
                        alt = "RestaurantImg"
                        class = "img-res"> </a>
                        </div>`);
                }
            });
            //Template, append Gallery items END
});