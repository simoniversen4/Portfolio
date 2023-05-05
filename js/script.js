function _(x){
    return document.getElementById(x);
}

let ba, bi=0, intrvl;

let bca = [
    '<img src="image/mellow-gallery.png" alt="" class="gallery-img">',
        '<img src="image/barebells-gallery.png" alt="" class="gallery-img">',
        '<img src="image/schouliving-gallery.png" alt="" class="gallery-img">',
        '<img src="image/feiber-gallery.png" alt="" class="gallery-img">',
        '<img src="image/aboutvintage-gallery.png" alt="" class="gallery-img">'
];

function bubbles(bi){
_("gallery-content").style.opacity = 0;
for(let i=0; i < ba.length; i++){
    ba[i].style.background = "rgba(0,0,0,.1)";
}

ba[bi].style.background ="rgb(77, 126, 69)";

setTimeout(function(){
    _("gallery-content").innerHTML = bca[bi];
    _("gallery-content").style.opacity = 1; 
    }, 300);
}

function bubbleSlide(){
    bi++;
    if(bi == ba.length){
      bi = 0;
    }
    bubbles(bi);
}
window.addEventListener("load", function(){
    ba = _("bubbles").children;
    intrvl = setInterval(bubbleSlide, 5000);
});