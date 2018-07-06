import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DishDetails = ({dish}) =>{
    return(
        <div className="row">
            <Card className="col-12 col-md-6">
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            <Card className="col-12 col-md-6">
                <CardBody>
                    {dish.comments.map(comment =>
                        <div key={comment.id}>
                            <CardText>{comment.comment}</CardText>
                            <CardText>{ `-- ${comment.author} , ${comment.date}`}</CardText>
                        </div>
                    )}
                    
                </CardBody>
            </Card>
        </div>
        

    );
    
};

export default DishDetails;