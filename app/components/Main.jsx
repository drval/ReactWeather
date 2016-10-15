var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation/>
                <h2>Main Component</h2>
            </div>
        );
    }
});

module.exports = Main;