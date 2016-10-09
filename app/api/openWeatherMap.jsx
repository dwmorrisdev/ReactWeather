var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'api.openweathermap.org/data/2.5/weather?&appid=472f8a2d3ab2d5375c181f11f990709c&units=imperial';

// 472f8a2d3ab2d5375c181f11f990709c

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });

  }
}
