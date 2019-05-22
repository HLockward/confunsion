import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class LogoutButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
          };

          this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    logoutUser(){
        this.toggleModal();
        this.props.logout();
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-out fa-lg"></span> Logout</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Logout</ModalHeader>
                    <ModalBody>
                      <p>are you sure you want to logout?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" value="submit" color="primary" onClick={() => this.logoutUser()} >logout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter> 
                </Modal>
            </div>
        );
    };
}

export default LogoutButton;