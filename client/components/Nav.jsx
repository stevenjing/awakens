import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { render } from 'react-dom';
import {Navbar} from 'react-bootstrap';
import "../styles/nav.css";



class Nav extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
      return (
        <Navbar>
          <ul className="nav-ul">
            <li className="name-header">linXY</li>
            <li className="first-link"><a>Home</a></li>
            <li className="second-link"><a>News</a></li>
            <li className="third-link"><a >Contact</a></li>
            <li className="fourth-link"><a >About</a></li>
          </ul>
        </Navbar>
      );
    }
  }



export default Nav;