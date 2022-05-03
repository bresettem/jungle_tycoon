// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import jquery from "jquery"

window.jQuery = jquery;
window.$ = jquery;

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
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
});