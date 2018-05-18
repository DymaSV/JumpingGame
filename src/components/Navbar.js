import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import './Main.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">JumpingGame</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/">
                        Main
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default NavBar



