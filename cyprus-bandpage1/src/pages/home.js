import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const style = {
    background: 'rgba(0,0,0,0,5)'
}

export default class Home extends React.Component {
    render() {
        return (

            <Container id="about">
                <h1>Cyprus</h1>

                <Row className="show-grid" style={style}>
                    <Col xs={12} sm={6}>
                        <h3>
                            
                        </h3>




                    </Col>




                </Row>



            </Container>


        )
    }
}