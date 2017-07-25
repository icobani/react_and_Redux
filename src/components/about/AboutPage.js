/**
 *
 * Created by ibrahimcobani on 22/07/2017.
 */

import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>This Application uses React, Redux, React Router and variety of other helpfull libraries.</p>
        <Link to="home" className="btn btn-primary btn-log"><i className="fa fa-home fa-2x"></i></Link>
      </div>
    );
  }
}

export default AboutPage;
