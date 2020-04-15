const request = require("request")

const forecast = (latitude, longitude, callback) => {
    url = 'https://api.darksky.net/forecast/a46a7fd91b74bc6195917c2d90d1f2c6/' + latitude + ',' + longitude + '?units=si'

    request({url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to Connect',undefined)

        } else if( response.body.error){
            callback('Unable to Find location',undefined)

        }else{
            callback(undefined, "Currently Temp: " + response.body.currently.temperature + ' Chances of Rain: ' + response.body.currently.precipProbability)

        }
    })



}
module.exports = forecast