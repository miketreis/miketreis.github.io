var head = document.querySelector('#header');
var over = false;
var wind = document.querySelector('body');

function fitBetween(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

//head.style.pointerEvents = 'none'
document.addEventListener('mousemove', function(e) { 

 if(over == false && $(window).width() > 1200)
 { 
  var xpos = e.layerX || e.offsetX;
  var ypos = e.layerY || e.offsetY;
  var ax = -(window.innerWidth / 2 - xpos) / 10;
  var ay = (window.innerHeight / 2 - ypos) / 10;
  
  ax = fitBetween(ax, -12, 12);
  ay = fitBetween(ay, -12, 12);
  
  head.style.transform = 'rotateY('+ax+'deg) rotateX('+ay+'deg) translateZ(4vh)';
}
 
})

$("#header").hover(function(){
    //mouse enter
    over = true;
    head.style.transform = 'rotateY('+0+'deg) rotateX('+0+'deg) translateZ(4vh)';
},function(){
    //mouse leave
    over = false;
  
});

wind.addEventListener(
  "mouseout",
  (event) => {
   
    head.style.transform = 'rotateY('+0+'deg) rotateX('+0+'deg) translateZ(4vh)';
    
  },
  false
);
