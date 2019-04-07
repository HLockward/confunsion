import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import DishDetails from './DishDetailsComponent';
import { connect } from 'react-redux';
import {postFeedback} from '../redux/actions/feedbackActions';
import {fetchDishes} from '../redux/actions/dishActions';
import {postComment, fetchComments} from '../redux/actions/commentAction';
import {fetchPromos} from '../redux/actions/promotionActions';
import {fetchLeaders} from '../redux/actions/leaderActions';
import {login} from '../redux/actions/userActions';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state =>{
    return{
        dishes : state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) =>  dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
    resetFeedbackForm: () =>{dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    login: (user) => {dispatch(login(user))}
});

class Main extends Component {  

    componentDidMount(){
        this.props.fetchDishes();
        //this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const DishWithId = ({match}) =>{
            return(
                <DishDetails 
                    dish={this.props.dishes.dishes.filter(dish => dish._id === match.params.dishId)[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errorMessage}
                    comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errorMessage}
                    postComment={this.props.postComment}
                />
            );
        }

        const AboutPage = () =>{
            return(
                <About 
                    leaders={this.props.leaders.leaders}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errorMessage}
                />
            );
        }

        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errorMessage}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errorMessage}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errorMessage}
                />
            );
        }
        return (
            <div className="App">
                <Header login = {this.props.login} user = {this.props.user.user}/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />}  />} />
                            <Route path='/aboutus' component={AboutPage} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
