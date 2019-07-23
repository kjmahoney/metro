var five = require("johnny-five");
var board = new five.Board();

export const blinkLight = (pin) => {
    console.log('waiting for board')
   board.on("ready", function() {
        var led = new five.Led(pin);
        led.blink(1000);
    })
}


