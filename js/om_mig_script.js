// gallery 2

//bubblegallery - først funktionen der retunere objekt referencen til elementbyid (funktionen hedder _)
function _(x){
    return document.getElementById(x);
}
//bubblegallery - variabler for array, bubble index og setinterval variabler
let ba, bi=0, intrvl;
//bubblegallery - BCA = bubble content array - her findes det andet content
let bca = [
    '<img src="../image/slide1-me.png" alt="" class="gallery-img2">',
        '<img src="../image/image1.png" alt="" class="gallery-img2">',
        '<img src="../image/image4.png" alt="" class="gallery-img2">',
        '<img src="../image/image17.png" alt="" class="gallery-img2">',
        '<img src="../image/image28.png" alt="" class="gallery-img2">'
];
//denne her funktion bliver triggeret af funktionen under 
function bubbles(bi){
//det her fader vores content mellem siderne
_("gallery-content2").style.opacity = 0;
//så laver vi et loop med alle boblerne og ændres deres bg farve imens
for(let i=0; i < ba.length; i++){
    ba[i].style.background = "rgba(0,0,0,.1)";
}
//her sørger vi for at den valgte bobbles farve er blå
ba[bi].style.background ="rgb(77, 126, 69)";
//sætter en delay på 300ms
setTimeout(function(){
    _("gallery-content2").innerHTML = bca[bi];
    _("gallery-content2").style.opacity = 1; 
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
    ba = _("bubbles2").children;
    intrvl = setInterval(bubbleSlide, 5000);
});
