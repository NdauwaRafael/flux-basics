/**
 * Created by Raphael Karanja on 03/12/2018.
 */
"use strict";
import React, {Component} from 'react';
class Home extends Component {
    render(){
        return (
           <div className="jumbotron">
               <div className="container">
                   <h1>React Application</h1>
                   <p>This is a demo page to demonstrate the various usage pf React. We'll create a simple application to manage users.</p>
                   <p>We'll use:</p>
                   <ul>
                       <li>React</li>
                       <li>React Router</li>
                       <li>Flux</li>
                   </ul>
               </div>
            </div>
        );
    }
};

export default Home;