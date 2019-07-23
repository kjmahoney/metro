import fetch from 'node-fetch';
// import { blinkLight } from './lights';
var five = require("johnny-five");
var board = new five.Board();

// This is a publicly available key: https://developer.wmata.com/demokey
// Docs here https://developer.wmata.com/docs/services/547636a6f9182302184cda78/operations/547636a6f918230da855363f
const API_KEY = `e13626d03d8e4c03ac07f95541b3091b`;
const url = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/E04";

const headers = {
    api_key: API_KEY,
}

const handleDisplay = async () => {
    const getMetroData = async (url) => {
        try {
            const response = await fetch(url, {method: "GET", headers: headers});
            const json = await response.json();  
            return json;
        } catch(error) {
            console.log(error)
        }
    }

    const shouldLeave = (min) => {
        return min >= 9 && min <=12;
    }
    
    const shouldHurry = (min) => {
        return min >=6 && min <=8
    }

    const data = await getMetroData(url);
    const trains = data.Trains.filter(train => train.DestinationCode != "E10")
    const minutesArray = [];
    
    trains.forEach((train) => {
        minutesArray.push(train.Min)
    })
  
    if (minutesArray.some(shouldHurry)) {
        blinkLight(13);
    } else if (minutesArray.some(shouldLeave)) {
        blinkLight(12);
    }else {
        return 
    }
}



const blinkItTest = (led) => {
    led.blink(1000);
}

let red = false
const blinkIt = () => {
    var ledRed = new five.Led(13)
    var ledGreen = new five.Led(12)

    if (red == true ) {
        ledGreen.stop()
        ledGreen.off()
        ledRed.blink(1000)
    } else {
        ledRed.stop()
        ledGreen.blink(1000)
        red = true
    } 
}

board.on("ready", function() {

    setInterval(() => {
            blinkIt()
    }, 6000)
})



