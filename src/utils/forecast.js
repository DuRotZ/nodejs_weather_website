const request = require('request')

const forecast = (latitude, longitude, callback) =>  {
    const url = 'http://api.weatherstack.com/current?access_key=b79c3296d167110f8c10b91a390c6f92&query=' + latitude + ' , ' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.feelslike + '% chance of rain.')
        }
    })
}



module.exports = forecast