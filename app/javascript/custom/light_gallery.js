import 'lightgallery/css/lightgallery-bundle.min.css';
import lightGallery from 'lightgallery/lightgallery.umd';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min';
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min';
import lgShare from 'lightgallery/plugins/share/lg-share.min';
import lgRotate from 'lightgallery/plugins/rotate/lg-rotate.min';
import lgAutoplay from 'lightgallery/plugins/autoplay/lg-autoplay.min';
import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min';

document.addEventListener("turbo:load", function () {
    $("#animated-thumbnails-gallery")
    lightGallery(document.getElementById("animated-thumbnails-gallery"), {
        autoplayFirstVideo: false,
        pager: false,
        galleryId: "nature",
        flipHorizontal: false,
        flipVertical: false,
        rotateLeft: false,
        plugins: [
            lgZoom,
            lgThumbnail,
            lgShare,
            lgRotate,
            lgFullscreen,
            lgAutoplay
        ],
        mobileSettings: {
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false
        }
    });
});