var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        </div>
    );
};

module.exports = Navigation;