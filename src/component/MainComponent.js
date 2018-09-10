import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Menu dishes={this.state.dishes} onDishSelect={onDishSelect}/>
                <DishDetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer />
            </div>
        );
    }
}

export default Main;
