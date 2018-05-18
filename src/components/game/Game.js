import React, { Component } from 'react';
import { Col, Button, ControlLabel } from "react-bootstrap";
import './GameCanvas.css';


class GameCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            began: new Date(),
            time: new Date(),
        };
        this.draw = this.draw.bind(this);
    }
    draw() {
        var canvas = document.getElementById("jumpingCanvas");
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(240, 160, 20, 0, Math.PI, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
        this.setState({
            time: new Date()
        });

    }
    componentDidMount() {
        setInterval(this.draw, 10)
    }
    render() {
        return (
            <div>
                <div className="gameCanvas">
                    <Col componentClass={ControlLabel} sm={2}>
                        Began
                    </Col>
                    <Col sm={2}>
                        <input id="began" type="text" value={this.state.began} readOnly block />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                        Time
                    </Col>
                    <Col sm={2}>
                        <input id="time" type="text" value={this.state.time} placeholder="HH:mm" readOnly />
                    </Col>
                    {/* <label htmlFor="began">Began</label>
                    <input id="began" type="text" value={this.state.began} readOnly />
                    <label htmlFor="time">Time</label>
                    <input id="time" type="text" value={this.state.time} placeholder="HH:mm" readOnly /> */}
                    <Col sm={6}>
                        <canvas id="jumpingCanvas" width="480" height="320"></canvas>
                    </Col>
                    
                </div>
            </div>
        );
    }
}
export default GameCanvas;
