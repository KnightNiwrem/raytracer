
   function Enum(constantsList) {
      for (var i in constantsList) {
         this[constantsList[i]] = i;
      }
   }

    var ObjTyp = new Enum(['EMPTY', 'SPHERE', 'CUBOID', 'CYLINDER', 'CONE', 'TRIANGLE']);
	
    var fps = { startTime : 0, frameNumber : 0,
               getFPS : function() {
                  this.frameNumber++;
                  var d = new Date().getTime(), currentTime = ( d - this.startTime ) / 1000, result = Math.floor( ( this.frameNumber / currentTime ) );
                  if( currentTime > 1 ) {
                     this.startTime = new Date().getTime();
                     this.frameNumber = 0;
                  }
                  return result;
               }
             };
	
	var UP_VECTOR = [0, 1, 0];
	var ZERO_VECTOR = [0, 0, 0];
	var MATH_PI = Math.PI;
	var INFINITY = Infinity;