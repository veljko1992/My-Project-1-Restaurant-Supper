$(document).ready(function () {
    //Template, append Events items
    var $eventsHolder = $('.eventsHolder');

    $.getJSON("json/events.json", function (result) {
        var events = result;
        for (i = 0; i < events.length; i++) {
            $eventsHolder.append(`<div class="eventItem col-12 col-md-4">
    <a href="#"><img src="img/${events[i].name}" alt="" class="img-res"></a>
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
    //Template, append Events items
});