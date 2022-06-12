document.addEventListener('DOMContentLoaded', (event) => {
    myMove();
});


function myMove() {
  // console.log("myWidth: " + window.screen.width)
    let elem = document.getElementById("myAnimation");
    let pos = 0;
    let image = document.getElementById("footerIce");
  let clientWidth = window.screen.width //document.getElementById('container_fc').clientWidth;
  // console.log(clientWidth)
  let imageSize = 26; //imageSize = Math.round(clientWidth * 2 / 100);
   if (window.screen.width <= 480) {
    imageSize = Math.round(imageSize * 8 / 10)
   }
    let id = null;
    image.style.width = imageSize + 'px';
 
    clientWidth = clientWidth - imageSize;
    
   
        let toogleStick = 1;
        id = setInterval(frame, 10);
        function frame() {
          
          if (pos % clientWidth == 0) {
            toogleStick++;
          }
          if (toogleStick % 2 == 0) {
            pos++;
            elem.style.left = pos + 'px'
          }
          else {
            pos--;
            elem.style.left = pos + 'px';
          }

        };
};
  
