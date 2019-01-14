function goShorty(){
 var canvas = document.getElementsByClassName("runner-canvas")[0];
 var canvasContext = canvas.getContext('2d');
// var img = canvasContext.getImageData();
 var haveToJump = false;
// var pic = img.data;
 
 simulateJump();
 return setTimeout(function(){goShorty();},1000);
 
};

function simulateJump() {
 var keyboardEvent = document.createEvent('KeyboardEvent');
 Object.defineProperty(keyboardEvent, 'keyCode', {
  get : function() {
   return this.keyCodeVal;
  }
 });
 keyboardEvent.initKeyboardEvent('keydown', true, false, null, 0, false, 0, false, 38, 0);
 keyboardEvent.keyCodeVal = 38;
 document.dispatchEvent(keyboardEvent);
}
goShorty();
