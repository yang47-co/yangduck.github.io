x=1;
function change(){
   if(x<2){
    x++;
   document.getElementById("photo").src="images/egg"+x+".png";
    
   }else{
    document.getElementById("photo").src="images/egg3.png";
    document.getElementById("button01").style.display="Block";
   
   }
}

 curr_opacity = 0;
function duck_open(){
  
  document.getElementById("duck").style.marginLeft="-20%"
  
  if (curr_opacity < 1) {
    setTimeout(function() {
      curr_opacity = curr_opacity + 1;
      document.getElementById('duck').style.opacity = curr_opacity;
      fadeOut()
    }, 1000)
      
    }
  };
  

function duck_close(){
  
  
  document.getElementById("duck").style.marginLeft="-100%"
  
  if (curr_opacity > 0) {
    setTimeout(function() {
      curr_opacity = curr_opacity - 1;
      document.getElementById('duck').style.opacity = curr_opacity;
      fadeIn()
    }, 23)
      
  }

}
function crown_open(){
  document.getElementById("crown").style.marginLeft="12.5%"
}
function crown_close(){
  document.getElementById("crown").style.marginLeft="-100%"

}
function shy_open(){
  document.getElementById("shy").style.marginLeft="13.5%"
}
function shy_close(){
  document.getElementById("shy").style.marginLeft="-100%"

}
function qm_open(){
  document.getElementById("qm").style.marginLeft="14%"
}
function qm_close(){
  document.getElementById("qm").style.marginLeft="-100%"

}
function no3_open(){
  document.getElementById("no3").style.marginLeft="14%"
}
function no3_close(){
  document.getElementById("no3").style.marginLeft="-100%"

}
function thd_open(){
  document.getElementById("thd").style.marginLeft="14%"
}
function thd_close(){
  document.getElementById("thd").style.marginLeft="-100%"
}
function chp_open(){
  document.getElementById("chp").style.marginLeft="14%"
}
function chp_close(){
  document.getElementById("chp").style.marginLeft="-100%"
}
 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunctio()};

 function myFunctio() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("myBar").style.width = scrolled + "%";
 }