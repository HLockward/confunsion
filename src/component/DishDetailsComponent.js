import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';



const DishDetails = ({dish}) =>{
    
    const renderDish = (dish) => {
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
    const renderComments = (comments) => {
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
            </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
    return(
        <div className="container">
            <div className="row">
                {renderDish(dish)}
                {(dish != null) ? renderComments(dish.comments) : ''}
            </div>
        </div>
    );
    
};

export default DishDetails;