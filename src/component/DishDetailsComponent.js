import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const DishDetails = ({dish}) =>{
    
    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <li><h3>{dish.comments.length > 0 ? 'Comments' : ''}</h3></li>
                    {dish.comments.map(comment =>
                        <div key={comment.id}>
                            <li>{comment.comment}</li>
                            <br/>
                            <li>{ `-- ${comment.author} , ${comment.date}`}</li>
                            <br/>
                        </div>
                    )}
                </ul>
            </div>
        </div>
        

    );
    
};

export default DishDetails;