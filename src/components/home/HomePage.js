import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralside Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>

        <paper-input id="default"></paper-input>
        <Link to="about" className="btn btn-primary btn-log"><i className="fa fa-info fa-2x"></i></Link>
      </div>
    );
  }
}

export default HomePage;
