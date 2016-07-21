// global variables for timeout and for current menu
var t=false,current;

function SetupMenu() {
   if (!document.getElementsByTagName) return;
   items=document.getElementsByTagName("li");
   for (i=0; i<items.length; i++) {
      if (items[i].className != "menu") continue;
      //set up event handlers
      thelink=findChild(items[i],"A");
      thelink.onmouseover=ShowMenu;
      thelink.onmouseout=StartTimer;
      //is there a submenu?
      if (ul=findChild(items[i],"UL")) {
         ul.style.display="none";
         for (j=0; j<ul.childNodes.length; j++) {
            ul.childNodes[j].onmouseover=ResetTimer;
            ul.childNodes[j].onmouseout=StartTimer;
         }
      }
   } 
}

// find the first child object of a particular type
function findChild(obj,tag) {
   cn = obj.childNodes;
   for (k=0; k<cn.length; k++) {
     if (cn[k].nodeName==tag) return cn[k];
   }
   return false;
}

function ShowMenu(e) {
   if (!e) var e = window.event;
   // which link was the mouse over?
   thislink = (e.target) ? e.target: e.srcElement;
   ResetTimer();
   // hide the previous menu, if any
   if (current) HideMenu(current);
   // we want the LI, not the link
   thislink = thislink.parentNode;
   current=thislink;
   // find the submenu, if any
   ul = findChild(thislink,"UL");
   if (!ul) return;
   ul.style.display="block";
}

function HideMenu(thelink) {
   // find the submenu, if any
   ul = findChild(thelink,"UL");
   if (!ul) return;
   ul.style.display="none";
}

function ResetTimer() {
   if (t) window.clearTimeout(t);
}

function StartTimer() {
   t = window.setTimeout("HideMenu(current)",200);
}

// Set up the menu when the page loads
window.onload=SetupMenu;