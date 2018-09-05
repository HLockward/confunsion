import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent'
import {DISHES} from '../shared/dishes';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes : DISHES,
            selectedDish: null
        };
    }    

    render() {
        const onDishSelect = (dish) => this.setState({selectedDish : dish});

        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onDishSelect={onDishSelect}/>
                <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div>
        );
    }
}

export default Main;
