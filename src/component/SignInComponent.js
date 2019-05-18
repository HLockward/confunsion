import React, {Component} from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Label, FormGroup,ModalFooter} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const passwordsMatch = ({ password, confirmPassword }) => {
    return password === confirmPassword;
  };

class SignInForm extends Component{
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
        const user = {
            firstname: value.firstname,
            lastname: value.lastname,
            username: value.username, 
            password: value.password,
            }    
        this.props.signIn(user);    
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Sign-In</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign In</ModalHeader>
                    <ModalBody>
                        <LocalForm model="signInForm" onSubmit={(values) => this.handleSubmit(values)}
                        validators={{
                            '': { passwordsMatch }
                          }}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                    className="form-control"
                                    validators = {
                                        {
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }/>
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }} />       
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control" validators = {
                                        {
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }/>
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }} />
                                                      
                            </FormGroup>
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
                            <FormGroup>
                                <Label htmlFor="password" >Confirm Password:</Label>
                                <Control.text type="password" model=".confirmPassword" id="confirmPassword" name="confirmPassword" 
                                    className="form-control" placeholder="Confirm Password"
                                    validators = {
                                        {
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model="signInForm"
                                    show="touched"
                                    messages={{
                                        passwordsMatch: "Passwords do not match." 
                                    }} 
                                />
                            </FormGroup>
                            <ModalFooter>
                                <Button  type="submit" value="submit" color="primary">SignIn</Button>
                                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                            </ModalFooter>  
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    };
}

export default SignInForm;