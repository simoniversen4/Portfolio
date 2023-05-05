function _(x){
    return document.getElementById(x);
}

let ba, bi=0, intrvl;

let bca = [
    '<img src="../image/slide1-me.png" alt="" class="gallery-img2">',
        '<img src="../image/image1.png" alt="" class="gallery-img2">',
        '<img src="../image/image4.png" alt="" class="gallery-img2">',
        '<img src="../image/image17.png" alt="" class="gallery-img2">',
        '<img src="../image/image28.png" alt="" class="gallery-img2">'
];

function bubbles(bi){

_("gallery-content2").style.opacity = 0;

for(let i=0; i < ba.length; i++){
    ba[i].style.background = "rgba(0,0,0,.1)";
}

ba[bi].style.background ="rgb(77, 126, 69)";

setTimeout(function(){
    _("gallery-content2").innerHTML = bca[bi];
    _("gallery-content2").style.opacity = 1; 
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
    ba = _("bubbles2").children;
    intrvl = setInterval(bubbleSlide, 5000);
});
