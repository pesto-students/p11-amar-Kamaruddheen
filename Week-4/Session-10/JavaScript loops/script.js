function drawTriangle(triangleSize) {

   // Your solution goes here
   for (var i = 0; i < triangleSize; i++) {
      for (var j = 0; j <= i; j++) {
         process.stdout.write("* ")
      }
      console.log("\n")
   }
   
}

drawTriangle(4)
drawTriangle(10)