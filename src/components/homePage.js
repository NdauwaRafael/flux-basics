/**
 * Created by Raphael Karanja on 03/12/2018.
 */
const React = require('react');
const createReactClass = require('create-react-class');
const Home = createReactClass({
    render:  function() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>Hello World!!</h1>
                </div>
            </div>
        );
    }
});

module.export = Home;