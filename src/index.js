import fetch from 'node-fetch';

// This is a publicly available key: https://developer.wmata.com/demokey
// Docs here https://developer.wmata.com/docs/services/547636a6f9182302184cda78/operations/547636a6f918230da855363f
const API_KEY = `e13626d03d8e4c03ac07f95541b3091b`;
const url = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/E04";
const headers = {
    api_key: API_KEY,
}

const getMetroData = async (url) => {
    try {
        const response = await fetch(url, {method: "GET", headers: headers});
        const json = await response.json();  
        return json;
    } catch(error) {
        console.log(error)
    }
}

 const data = getMetroData(url);

 console.log(data)