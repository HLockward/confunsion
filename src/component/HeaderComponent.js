import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {HOME_URL} from '../shared/baseUrl';
import LoginForm from './loginComponent';
import SignInForm from './SignInComponent';
import LogoutButton from './LogoutComponent';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(event){
        this.toggleModal();
        const user = {username: this.username.value, password: this.password.value}    
        this.props.login(user);    
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href={HOME_URL}><img src='assets/images/icon.png' height="40" width="45" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            
                            {this.props.user == null ?
                                <Nav className="ml-auto" navbar>
                                    <NavItem className="mr-1">
                                        <LoginForm login = {this.props.login}/>
                                    </NavItem>
                                    <NavItem> 
                                        <SignInForm signIn = {this.props.signIn}/>
                                    </NavItem>
                                </Nav>
                                :
                                <Nav className="ml-auto" navbar>
                                    <NavItem className="mr-1">
                                        <NavLink className="nav-link" to='#'><span className="fa fa-user fa-lg"></span> {this.props.user.username}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <LogoutButton logout = {this.props.logout}/>
                                    </NavItem>
                                </Nav>
                            }
                            
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-3">
                                <img src='assets/images/logo.png' height="150" width="200" alt='RD food' />
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>Dominican Republic Food</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
            </div>
        );
    };
};

export default Header;