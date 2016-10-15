var axios = require('axios');

var WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?appid=fb5c18bcae5c86fadcfd03f02887fbe9&units=metric&lang=ru";
//q=Tolyatti,ru&

module.exports = {
    getTemp: function (location) {
        var encLoc = encodeURIComponent(location+',ru');
        var reqUrl = `${WEATHER_API}&q=${encLoc}`;
        return axios.get(reqUrl).then(
            function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return {name: res.data.name, temp: res.data.main.temp};
                }
            },
            function (res) {
                throw new Error(res.response.data.message);
            });
    }
}