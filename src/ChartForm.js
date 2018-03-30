import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Modal,Button} from 'react-bootstrap';
import CloseIcon from 'react-icons/lib/md/close';

export class ChartForm extends Component{
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: props.show
        };
    }
    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        this.setState({ show: true });
    }
    componentWillReceiveProps(nextProps){
        this.setState({show: nextProps.show});
    }
    render(){       
        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
                <div className="modal-dialog">
                    <div className="modal-header">
                    <Modal.Title>Modal title</Modal.Title>
                    </div>

                    <div className="modal-body">One fine body...</div>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        )
    }
    
}