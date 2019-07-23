var five = require("johnny-five");
var board = new five.Board();

//  board.on("ready", function() {
//     var led = new five.Led(12);
//     led.strobe();
// })

export const blinkLight = (pin) => {
    console.log('blink here')
   board.on("ready", function() {
        var led = new five.Led(pin);
        led.blink(1000);
    })
}


