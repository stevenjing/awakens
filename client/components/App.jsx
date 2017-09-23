import React from 'react';
import { render } from 'react-dom';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import "../styles/commonStyles.scss";
import Header from './Header.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Grid>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <Header/>
                </Col>
            </Row>
        </Grid>
    </div>);
  }
}
