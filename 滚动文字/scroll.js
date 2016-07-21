// global variable for position of the scrolling window
var pos=100;
function Scroll() {
  if (!document.getElementById) return;
  obj=document.getElementById("thetext");
  pos -=1;
  if (pos < 0-obj.offsetHeight+130) return;
  obj.style.top=pos;
  window.setTimeout("Scroll();",30);
}
// Start scrolling when the page loads
window.onload = Scroll;
