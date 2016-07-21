var numslides=0,currentslide=0;
var slides = new Array();
function MakeSlideShow() {
   // find all images with the class "slide"
   imgs=document.getElementsByTagName("img");
   for (i=0; i<imgs.length; i++) {
      if (imgs[i].className != "slide") continue;
      slides[numslides]=imgs[i];
      // hide all but first image
      if (numslides==0) {
         imgs[i].style.display="block";
      } else {
         imgs[i].style.display="none";
      }
      imgs[i].onclick=NextSlide;
      numslides++;
   } // end for loop
} // end MakeSlideShow()

function NextSlide() {
   slides[currentslide].style.display="none";
   currentslide++;
   if (currentslide >= numslides) currentslide = 0;
   slides[currentslide].style.display="block";
}

// create the slideshow when the page loads
window.onload=MakeSlideShow;