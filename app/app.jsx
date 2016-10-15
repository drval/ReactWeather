var React = require('react');
var ReactDOM = require('react-dom');
var {createHashHistory} = require('history');
var {Route, Router, IndexRoute, useRouterHistory} = require('react-router');

const hashHistory = useRouterHistory(createHashHistory)({queryKey: false});

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>
    ,document.getElementById('app')
);
