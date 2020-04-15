const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FieTExIiwiYSI6ImNrOGFtNnV6NjAzaWQzamx2c3hjYnBqNnUifQ.wYksD-XsdZ6zInQUd53Aww&limit=1'

    request({ url, json: true}, (error, response) => {
        if(error){
            callback("Unable to Connect",undefined)
        }
        else if(response.body.features.length === 0){
            callback("Unable to find the Location", undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocode