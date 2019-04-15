import React, {Component} from 'react';
import {Control, LocalForm} from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Label, FormGroup} from 'reactstrap';

class CommentForm extends Component{
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

    handleSubmit(values){
        const comment = {
            rating : values.rating,
            comment : values.comment
        };
        this.props.postComment(this.props.dishId, comment);
    }

    render(){
        return(
            <div>
                <Button outline color="secondary" onClick={this.toggleModal}><i className="fa fa-pencil"></i> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" id="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea rows="6" model=".comment" id="comment" name="comment" className="form-control"/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            
        );
    };

}
export default CommentForm;