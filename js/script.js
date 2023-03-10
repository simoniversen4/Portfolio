//bubblegallery - først funktionen der retunere objekt referencen til elementbyid (funktionen hedder _)
function _(x){
    return document.getElementById(x);
}
//bubblegallery - variabler for array, bubble index og setinterval variabler
let ba, bi=0, intrvl;
//bubblegallery - BCA = bubble content array - her findes det andet content
let bca = [
    '<img src="image/mellow-gallery.png" alt="" class="gallery-img">',
        '<img src="image/barebells-gallery.png" alt="" class="gallery-img">',
        '<img src="image/schouliving-gallery.png" alt="" class="gallery-img">',
        '<img src="image/feiber-gallery.png" alt="" class="gallery-img">',
        '<img src="image/aboutvintage-gallery.png" alt="" class="gallery-img">'
];
//denne her funktion bliver triggeret af funktionen under 
function bubbles(bi){
//det her fader vores content mellem siderne
_("gallery-content").style.opacity = 0;
//så laver vi et loop med alle boblerne og ændres deres bg farve imens
for(let i=0; i < ba.length; i++){
    ba[i].style.background = "rgba(0,0,0,.1)";
}
//her sørger vi for at den valgte bobbles farve er blå
ba[bi].style.background ="rgb(77, 126, 69)";
//sætter en delay på 300ms
setTimeout(function(){
    _("gallery-content").innerHTML = bca[bi];
    _("gallery-content").style.opacity = 1; 
    }, 300);
}
//sætter en timer på, så den skifter hvert 5. sekund(hvis bi er samme værdi som ba så skal den reset og den stiger med én hver gang)
function bubbleSlide(){
    bi++;
    if(bi == ba.length){
      bi = 0; //så her resetter den altså, så bubble index er 0 og loopet starter igen
    }
    bubbles(bi);
}
window.addEventListener("load", function(){
    ba = _("bubbles").children;
    intrvl = setInterval(bubbleSlide, 5000);
});