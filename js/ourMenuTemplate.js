$(document).ready(function () {
    $carouselInner = $('.carousel-inner');
    $.getJSON("json/ourMenu.json", function (result) {
        var menuImgs = result;
        for (var key in menuImgs) {
            // console.log(menuImgs);//objekat sa 4 areja
            // console.log(menuImgs[key]);// 4 areja sa objektima
            // console.log(key == 'soup');
            // console.log(key); // nazive areja
            // for (i = 0; i < menuImgs[key].length; i++) { console.log(menuImgs[key][i].name); } 
            for (i = 0; i < menuImgs[key].length; i++) {
                var text = `<div class="carousel-item `;
                if (key == 'soup') {
                    text += 'active"';
                }
                text += `>`;
                text += `<div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="img/${menuImgs[key][i].name}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of
                        the card's
                        content.</p>
                    <span>$20</span>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card d-none d-sm-block">
                <img src="img/${menuImgs[key][i].name}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of
                        the card's
                        content.</p>
                    <span>$20</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card d-none d-md-block">
                <img src="img/${menuImgs[key][i].name}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of
                        the card's
                        content.</p>
                    <span>$20</span>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card d-none d-lg-block">
                <img src="img/${menuImgs[key][i].name}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and
                        make up the bulk of
                        the card's
                        content.</p>
                    <span>$20</span>
                </div>
            </div>
        </div>
    </div>`;
            }
            text += `</div>`;
            $carouselInner.append(text);
        }
    });
});