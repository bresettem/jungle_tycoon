// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import jquery from "jquery"

window.jQuery = jquery;
window.$ = jquery;

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/brands"
// import 'infinite-scroll/js/core'
// Custom
import './custom/mdb.min'
import './custom/lightbox.min'

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
$(document).on("turbo:load", function () {
    console.log("turbo!");
    $("#royals").click(function (event) {
        let royals = '2 60 249 350 366 556 577 584 618 731 793 969 1443 1699 1720 1858 1887 2100 2527 2881 3016 3323 ' +
            '3398 3412 3446 3492 3533 3552 3662 3687 3735 3864 3907 3925 3932 4017 4085 4130 4201 4404'
        $('#query').val(royals)
    });
});