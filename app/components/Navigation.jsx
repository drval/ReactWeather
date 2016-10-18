var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var loc = this.refs.loc.value;

        if (loc && loc.length > 0) {
            var encodedLoc = encodeURIComponent(loc);
            this.refs.loc.value = '';
            window.location.hash = '#/?location=' + encodedLoc;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city" ref="loc"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
