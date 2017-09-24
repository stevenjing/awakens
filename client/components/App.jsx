import React from 'react';
import { render } from 'react-dom';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import Table from './Table.jsx';
import "../styles/commonStyles.scss"

export default class App extends React.Component {
  render() {
    return (
      <div>
         <div style={{textAlign: 'center'}}>
            <Grid>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Jumbotron>
                            <h1>Bootstrap test</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>
        <Table></Table>
      </div>
    );
  }
}
