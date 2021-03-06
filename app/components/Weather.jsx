var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    componentDidMount: function () {
        var loc = this.props.location.query.location;
        if (loc && loc.length > 0) {
            this.handleSearch(loc);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function (newProps) {
        var loc = newProps.location.query.location;
        if (loc && loc.length > 0) {
            this.handleSearch(loc);
            window.location.hash = '#/';
        }
    },
    handleSearch: function (loc) {
        var self = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(loc).then(function (data) {

            self.setState({
                isLoading: false,
                location: data.name,
                temp: data.temp
            });
        }, function (e) {
            self.setState({isLoading: false, errorMessage: e.message});
        });

    },
    render: function () {
        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching data...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if (errorMessage) {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;