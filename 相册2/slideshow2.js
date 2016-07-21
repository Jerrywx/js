// Global variables
var numslides=0;
var currentslide=0,oldslide=4;
var x = 0; 
var slides = new Array();
function MakeSlideShow() {
   // find all images with the class "slide"
   imgs=document.getElementsByTagName("img");
   for (i=0; i<imgs.length; i++) {
      if (imgs[i].className != "slide") continue;
      slides[numslides]=imgs[i];
      // stack images with first slide on top
      if (numslides==0) {
         imgs[i].style.zIndex=10;
      } else {
         imgs[i].style.zIndex=0;
      }
      imgs[i].onclick=NextSlide;
      numslides++;
   } // end for loop
} // end MakeSlideShow()

function NextSlide() {
   // Set current slide to be under the new top slide
   slides[currentslide].style.zIndex=9;
   // Move older slide to the bottom of the stack
   slides[oldslide].style.zIndex=0;
   oldslide = currentslide;
   currentslide++;
   if (currentslide >= numslides) currentslide = 0;
   // start at the right edge
   slides[currentslide].style.left=400;
   x=400;
   // Move the new slide to the top
   slides[currentslide].style.zIndex=10;
   AnimateSlide();
}

function AnimateSlide() {
   // Lower moves slower, higher moves faster
   x = x - 25;
   slides[currentslide].style.left=x;
   // previous image moves off the left edge
   // (comment the next line for a different effect)
   slides[oldslide].style.left=x-400;
   // repeat until slide is at zero position
   if (x > 0) window.setTimeout("AnimateSlide();",10);
}

// create the slideshow when the page loads
window.onload=MakeSlideShow;