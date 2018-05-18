import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel } from "react-bootstrap";
import './Main.css';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="name" placeholder="name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalButtons">
                        <Col smOffset={2} sm={10} className="buttonStyle">
                            <Button type="submit" bsStyle="primary" bsSize="large"  href="/game" block>Let's play!</Button>
                            <Button bsSize="large" bsStyle="info" href="/about" block>About</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default Main;
