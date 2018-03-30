import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, NavItem, Header, Brand, Nav, Toggle, NavDropdown, MenuItem} from 'react-bootstrap';
import AddIcon from 'react-icons/lib/md/add-circle';
import {Panel} from './Panel';

export class Frame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            action: 'none',
            type: 'line'
        }
        this.addBarChartOnClick = this.addBarChartOnClick.bind(this);
        this.addLineChartOnClick = this.addLineChartOnClick.bind(this);
        this.addStepLineChartOnClick = this.addStepLineChartOnClick.bind(this);
        this.addAreaChartOnClick = this.addAreaChartOnClick.bind(this);
        this.addSplineChartOnClick = this.addSplineChartOnClick.bind(this);
        this.addStepAreaChartOnClick = this.addStepAreaChartOnClick.bind(this);
        this.addSplineAreaChartOnClick = this.addSplineAreaChartOnClick.bind(this);
        this.addPieChartOnClick = this.addPieChartOnClick.bind(this);
        this.setAction = this.setAction.bind(this);
    }
    addPieChartOnClick(){
        var action = 'add';
        var type = 'pie';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addSplineAreaChartOnClick(){
        var action = 'add';
        var type = 'splineArea';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addStepAreaChartOnClick(){
        var action = 'add';
        var type = 'stepArea';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addSplineChartOnClick(){
        var action = 'add';
        var type = 'spline';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addAreaChartOnClick(){
        var action = 'add';
        var type = 'area';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addBarChartOnClick(){
        var action = 'add';
        var type = 'bar';
        this.setState(
            {
                action: action, 
                type: type
            }
        );
    }
    addLineChartOnClick(){
        var action = 'add';
        var type = 'line';
        this.setState(            {
            action: action, 
            type: type
        });
    }
    addStepLineChartOnClick(){
        var action = 'add';
        var type = 'stepLine';
        this.setState(            {
            action: action, 
            type: type
        });
    }
    setAction(action){
        this.setState({action});
    }
    render(){
        return(
            <div className="container-fluid widescreen">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#brand">Heimdall</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavDropdown title="Datasources" id="basic-nav-dropdown">
                            <MenuItem >Mongodb</MenuItem>
                            <MenuItem divider />
                            <MenuItem >Manage</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Add" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} onClick={this.addBarChartOnClick}>Bar</MenuItem>
                            <MenuItem eventKey={3.2} onClick={this.addLineChartOnClick}>Line</MenuItem>
                            <MenuItem eventKey={3.3} onClick={this.addStepLineChartOnClick}>StepLine</MenuItem>
                            <MenuItem eventKey={3.4} onClick={this.addAreaChartOnClick}>Area</MenuItem>
                            <MenuItem eventKey={3.5} onClick={this.addSplineChartOnClick}>Spline</MenuItem>
                            <MenuItem eventKey={3.6} onClick={this.addStepAreaChartOnClick}>StepArea</MenuItem>
                            <MenuItem eventKey={3.7} onClick={this.addSplineAreaChartOnClick}>SplineArea</MenuItem>
                            <MenuItem eventKey={3.8} onClick={this.addPieChartOnClick}>Pie</MenuItem>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Panel action={this.state.action} type={this.state.type} setAction={this.setAction} />
            </div>
        )
    }
}