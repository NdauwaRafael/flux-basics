/**
 * Created by Raphael Karanja on 03/12/2018.
 */
const React = require('react');

const ReactDOM = require('react-dom');

require('./imports');

const Home = require('./components/homePage');

ReactDOM.render(<Home/>, document.getElementById('root'));
