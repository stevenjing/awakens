import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Nav from './Nav.jsx';
import { render } from 'react-dom';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';



class Header extends React.Component {

    render() {
      return (

        <div>
          <Grid>
              <Row>
                  <Col sm={12} md={12} lg={12}>
                     <Nav/>
                  </Col>
              </Row>
          </Grid>
      </div>
      );
    }
  }



export default Header;