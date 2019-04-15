import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const RenderComments = ({comments,postComment,dishId, user}) => {
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <li><h3>Comments</h3></li>
                    <Stagger in>
                        {comments.map(comment =>
                        <Fade in key={comment._id}>
                            <div >
                                <li>{comment.comment}</li>
                                <li>Rating:{comment.rating}/5</li>
                                <li>{ `-- ${comment.author.firstname} ${comment.author.lastname}, `} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.createdAt)))}</li>
                                <br/>
                            </div>
                        </Fade>
                        )}
                    </Stagger>
                </ul>
                {user != null ? <CommentForm postComment={postComment} dishId={dishId}/> : ''}
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
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>    
        ); 
    }else{
        return(
            <div></div>
        );
    }
}

const DishDetails = ({dish,postComment,isLoading,errMess,user}) =>{
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
                    <RenderComments comments={dish.comments} postComment={postComment} dishId={dish._id} user={user}/>
                </div>
            </div>
        );
    
};

export default DishDetails;