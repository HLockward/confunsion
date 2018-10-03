import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';


const RenderComments = ({comments,addComment,dishId}) => {
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <li><h3>Comments</h3></li>
                    {comments.map(comment =>
                        <div key={comment.id}>
                            <li>{comment.comment}</li>
                            <br/>
                            <li>{ `-- ${comment.author} ,`} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            <br/>
                        </div>
                    )}
                </ul>
                <CommentForm addComment={addComment} dishId={dishId}/>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

const RenderDish = ({dish}) => {
    if(dish != null){
       return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>    
        ); 
    }else{
        return(
            <div></div>
        );
    }
}

const DishDetails = ({dish,comments,addComment,isLoading,errMess}) =>{
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={comments} addComment={addComment} dishId={dish.id}/>
                </div>
            </div>
        );
    
};

export default DishDetails;