import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import FormControl from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Component } from "react";
import { Link } from 'react-router-dom';

class NavBar extends Component {
    
    examClick = (e) =>{
        let examValue = e.target.value;
        if(examValue == 1){
            window.location.href = ("/ssc")
        }
        if(examValue == 2){
            window.location.href = ("/sslc")
        }
        if(examValue == 3){
            window.location.href = ("/be")
        }
    }

    render() {
        return (
            
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">RYD</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <Form inline>
        <div style={{marginRight:'10px'}}>
        <Form.Label className="text-white" >
        exam
      </Form.Label>
        </div>
    
      <Form.Control
        as="select"
        size = "sm"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">--SELECT--</option>
        <option value="1" onClick={this.examClick}>ssc</option>
        <option value="2" onClick={this.examClick}>sslc</option>
        <option value="3" onClick={this.examClick}>BE</option>
      </Form.Control>
      
    </Form>
  </Navbar>
        );
    }
}

export default NavBar;
