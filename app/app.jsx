var React = require('react');
var ReactDOM = require('react-dom');

var o1 = {
    name: 'drval',
    location: 'togliatti'
};

var o2 = {
    age: 37,
    ...o1
};

console.log(o2);

ReactDOM.render(
    <h1>Boilerplate App!</h1>
    ,document.getElementById('app')
);
