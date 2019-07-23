var five = require("johnny-five");
var board = new five.Board();

//  board.on("ready", function() {
//     var led = new five.Led(12);
//     led.strobe();
// })

export const blinkLight = (pin) => {
    board.on("ready", function() {
        console.log(pin)
        var led = new five.Led(pin);
        led.blink(1000);
    })
}


