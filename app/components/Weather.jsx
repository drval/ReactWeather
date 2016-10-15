var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Samara',
            temp: 3.1
        }
    },
    handleSearch: function (location) {
        var self = this;
        openWeatherMap.getTemp(location).then(function (data) {
            self.setState({
                location: data.name,
                temp: data.temp
            });
        }, function (error) {
            alert(error);
        });

    },
    render: function () {
        var {location, temp} = this.state;

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
});

module.exports = Weather;