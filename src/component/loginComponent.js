import React, {Component} from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Label, FormGroup} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class LoginForm extends Component{
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

    handleSubmit(value){
        this.toggleModal();
        const user = {username: value.username, password: value.password}    
        this.props.login(user);    
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="username" >User Name:</Label>
                                <Control.text model=".username" id="username" name="username" 
                                    className="form-control" placeholder="Username"
                                    validators = {
                                        {
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" >Password:</Label>
                                <Control.text type="password" model=".password" id="password" name="password" 
                                    className="form-control" placeholder="Password"
                                    validators = {
                                        {
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".password"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }} 
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label>
                                    <Control.checkbox model=".agree" name="agree" className="form-check-input" /> {' '}
                                    <strong>Remember me</strong>
                                </Label>                                
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    };
}

export default LoginForm;